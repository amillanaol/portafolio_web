# Plan de Migración Maestro

Proyecto: `nuxt-vue-static-showcase`  
Stack: Nuxt 3, Vue 3, TypeScript, Tailwind CSS, ESLint  
Objetivo: Actualizar todas las dependencias a latest major

---

## Resumen de pasos

| Paso | Dependencia | De → A | Esfuerzo | Prioridad |
|------|-------------|--------|----------|-----------|
| 1 | Vue Router | 4.6.4 → 5.0.7 | Bajo | Inmediato |
| 2 | TypeScript | 5.9.3 → 6.0.3 | Medio-Alto | Segundo |
| 3 | Nuxt | 3.21.6 → 4.4.6 | Medio-Alto | Tercero |
| 4 | ESLint | 8.57.1 → 10.4.0 | Alto | Último |

---

## Antes de empezar

### 1. Crear rama de migración

```bash
git checkout -b chore/migracion-deps-2026
```

### 2. Backup del estado actual

```bash
npm list --depth=0 > docs/deps-before.txt
```

### 3. Leer package.json actual

```json:package.json
{
  "dependencies": {
    "vue": "^3.5.0",
    "vue-router": "^4.5.0"
  },
  "devDependencies": {
    "@nuxt/devtools": "latest",
    "@nuxtjs/eslint-config-typescript": "^12.1.0",
    "@nuxtjs/tailwindcss": "^6.12.0",
    "eslint": "^8.57.0",
    "eslint-plugin-nuxt": "^4.0.0",
    "nuxt": "^3.15.0",
    "typescript": "^5.3.0"
  }
}
```

---

## Paso 1: Vue Router 4 → 5

**Duración:** 5 minutos  
**Riesgo:** Mínimo

### 1.1 Actualizar dependencia

```bash
npm install vue-router@^5.0.0
```

Esto actualiza `package.json` a `"vue-router": "^5.0.0"`.

### 1.2 Verificar imports

Nuxt maneja vue-router internamente. Solo verificar que no haya imports directos en `composables/` o `components/`:

```bash
rg "from 'vue-router'" --type-add 'vue:*.{ts,vue}' -t vue
```

Si hay imports directos de `vue-router`, deben cambiarse solo si usan APIs eliminadas. En Nuxt 4 no debería haber imports directos — se usa `useRouter()`/`useRoute()` auto-importados.

### 1.3 Verificar que build funciona

```bash
npm run dev       # servidor desarrollo — navegar manualmente
npm run generate  # build estático
```

### 1.4 Commit

```bash
git add -A && git commit -m "deps: bump vue-router 4.6.4 → 5.0.7"
```

---

## Paso 2: TypeScript 5 → 6

**Duración:** 30-60 minutos  
**Riesgo:** Medio — 9 defaults cambian

### 2.1 Actualizar dependencia

```bash
npm install typescript@^6.0.0
```

### 2.2 Ejecutar migrador oficial

TS 6 incluye `ts5to6` migration tool:

```bash
npx ts5to6 --print .
```

Revisar el output. Luego aplicar:

```bash
npx ts5to6 --write .
```

### 2.3 Ajustar tsconfig.json

Crear o modificar `tsconfig.json` con configuración explícita:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "es2025",
    "module": "esnext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "noUncheckedSideEffectImports": false,
    "libReplacement": false,
    "types": ["@types/node"],
    "paths": {
      "~/*": ["./*"],
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.vue"]
}
```

### 2.4 (Si hay errores) Añadir escape hatch temporal

En `tsconfig.json`:

```json
"ignoreDeprecations": "6.0"
```

⚠️ Solo funciona en TS 6. No servirá en TS 7.

### 2.5 Typecheck

```bash
npm run typecheck
```

Corregir errores de tipado uno por uno.

### 2.6 Commit

```bash
git add -A && git commit -m "deps: bump typescript 5.9.3 → 6.0.3"
```

---

## Paso 3: Nuxt 3 → 4

**Duración:** 1-2 horas  
**Riesgo:** Alto — cambios estructurales

### 3.1 Actualizar dependencia

```bash
npm install nuxt@^4.0.0
```

### 3.2 Leer guía oficial de migración

```bash
# Abrir en navegador
start https://nuxt.com/docs/getting-started/upgrade
```

### 3.3 Ejecutar codemods

```bash
npx @nuxt/scripts@latest migrate
```

Esto ejecuta codemods automáticos.

### 3.4 Ejecutar codemod de estructura de archivos (si aplica)

```bash
npx nuxi upgrade --force
```

### 3.5 Configurar nuxt.config.ts con compatibility flags

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Bridge flags para migración incremental desde Nuxt 3
  experimental: {
    granularCachedData: false,
    purgeCachedData: false,
    alwaysRunFetchOnKeyChange: true
  },

  defaults: {
    useAsyncData: {
      deep: true,
      value: 'undefined',
      errorValue: 'undefined'
    }
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        noUncheckedIndexedAccess: false
      }
    }
  },

  srcDir: '.',

  dir: {
    app: 'app'
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    // config existing
  }
})
```

### 3.6 Verificar estructura de carpetas

Nuxt 4 por defecto espera `app/` como srcDir. Con `srcDir: '.'` se mantiene estructura actual. Verificar que `pages/`, `layouts/`, `components/` están en raíz.

### 3.7 Revisar useAsyncData / useFetch

Buscar llamadas a `useAsyncData` y `useFetch`. En Nuxt 4:
- `data.value` es shallow por defecto → añadir `deep: true` si se necesita deep reactivity
- `data` y `error` defaults cambian a `null` → añadir checks

```bash
rg "useAsyncData|useFetch" --type-add 'vue:*.{ts,vue}' -t vue
```

### 3.8 Revisar useHead / SEO

Nuxt 4 usa Unhead v2. Verificar llamadas a `useHead()`:

```bash
rg "useHead" --type-add 'vue:*.{ts,vue}' -t vue
```

### 3.3 (repeated index - correct to 3.9) Verificar build

```bash
npm run generate
```

### 3.10 Verificar lint + typecheck

```bash
npm run typecheck
npm run lint
```

### 3.11 Commit

```bash
git add -A && git commit -m "deps: bump nuxt 3.21.6 → 4.4.6"
```

---

## Paso 4: ESLint 8 → 9 → 10

**Duración:** 1-2 horas  
**Riesgo:** Alto — flat config obligatorio

### 4.1 Estrategia: migración en dos fases

1. **Fase A:** ESLint 8 → 9 (flat config adoptado, eslintrc eliminado)
2. **Fase B:** ESLint 9 → 10 (flat config ya está, cambios mínimos)

### 4.2 Fase A: ESLint 8 → 9

```bash
npm install eslint@^9.0.0
```

### 4.3 Crear eslint.config.js (flat config)

Eliminar `.eslintrc.*` si existe. Crear `eslint.config.js`:

```js
// eslint.config.js
import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import nuxtPlugin from 'eslint-plugin-nuxt'
import vuePlugin from 'eslint-plugin-vue'

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      nuxt: nuxtPlugin,
      vue: vuePlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...nuxtPlugin.configs.recommended.rules,
      ...vuePlugin.configs.recommended.rules,
      'vue/multi-word-component-names': 'off'
    }
  },

  {
    ignores: [
      '.output/',
      'dist/',
      'node_modules/',
      '.nuxt/'
    ]
  }
]
```

### 4.4 Verificar plugins compatibles

```bash
npm ls @nuxtjs/eslint-config-typescript
npm ls eslint-plugin-nuxt
```

Reemplazar si es necesario:

```bash
npm uninstall @nuxtjs/eslint-config-typescript
npm install -D eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

`@nuxtjs/eslint-config-typescript` v12 usa eslintrc — no compatible con flat config.

### 4.5 Actualizar script lint en package.json

```json
"lint": "eslint ."
```

(El comando no cambia, ya usa eslint .)

### 4.6 Verificar lint

```bash
npm run lint
```

Corregir errores de reglas nuevas.

### 4.7 Fase B: ESLint 9 → 10

```bash
npm install eslint@^10.0.0
```

### 4.8 Verificar eslint.config.js

ESLint 10 solo acepta flat config (ya debería estar). Posibles cambios:

- `context.getFilename()` → `context.filename` (si hay rule personalizada)
- Verificar que no se usa `defineParser`/`defineRule`/`getRules`

### 4.9 Verificar lint final

```bash
npm run lint
```

### 4.10 Commit

```bash
git add -A && git commit -m "deps: bump eslint 8.57.1 → 10.4.0"
```

---

## Verificación final integrada

```bash
# Build completo
npm run generate

# TypeScript check
npm run typecheck

# Lint
npm run lint

# Vista previa del build
npm run preview
```

Luego navegar manualmente el sitio en `http://localhost:3000` y verificar:
- Navegación entre páginas
- Renderizado de componentes
- SEO / meta tags
- Estilos Tailwind

---

## Rollback plan

Si algo falla:

```bash
# Deshacer último commit de migración
git revert HEAD

# O restaurar rama main
git checkout main && git branch -D chore/migracion-deps-2026
```

---

## Resumen de comandos (ejecución secuencial)

```bash
# === PASO 1: Vue Router ===
npm install vue-router@^5.0.0
npm run dev
npm run generate
git add -A && git commit -m "deps: bump vue-router 4.6.4 → 5.0.7"

# === PASO 2: TypeScript ===
npm install typescript@^6.0.0
npx ts5to6 --print .
npx ts5to6 --write .
npm run typecheck
git add -A && git commit -m "deps: bump typescript 5.9.3 → 6.0.3"

# === PASO 3: Nuxt ===
npm install nuxt@^4.0.0
npx @nuxt/scripts@latest migrate
npm run generate
npm run typecheck
npm run lint
git add -A && git commit -m "deps: bump nuxt 3.21.6 → 4.4.6"

# === PASO 4: ESLint ===
npm install eslint@^9.0.0
# (crear eslint.config.js manualmente)
npm run lint
npm install eslint@^10.0.0
npm run lint
git add -A && git commit -m "deps: bump eslint 8.57.1 → 10.4.0"
```
