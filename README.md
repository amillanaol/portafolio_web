# nuxt-vue-static-showcase

Landing page de servicios freelance desarrollada con Nuxt 3, Vue 3, TypeScript y Tailwind CSS.

## Stack

- **Framework**: Nuxt 3
- **UI**: Vue 3 (Composition API)
- **Estilos**: Tailwind CSS 3
- **Tipado**: TypeScript (strict mode)
- **Deployment**: GitHub Pages / Docker / Coolify

## Arquitectura del proyecto

Este proyecto aplica los principios de **Clean Architecture** adaptados a un sitio frontend estático:

```
Presentation  →  Application  →  Domain
(components)     (composables)    (types + data)
```

### Capas y dependencias

| Capa | Carpeta | Responsabilidad |
|------|---------|-----------------|
| **Domain** | `/types/` | Interfaces TypeScript puras |
| **Domain Data** | `/data/` | Constantes tipadas con datos reales |
| **Application** | `/composables/` | Un composable por concepto de dominio |
| **Presentation** | `/components/` | Componentes Vue (UI pura) |
| **Infrastructure** | `/pages/`, `/layouts/` | Ensamblaje Nuxt, SEO, rutas |

### Regla crítica

> **Los componentes NUNCA importan desde `/data/`. Siempre usan composables.**

Esto permite cambiar la fuente de datos (archivo estático → API → CMS) sin tocar ningún componente.

## Instalación

```bash
npm install
```

## Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Accede a http://localhost:3000

## Build estático

Genera el sitio estático para producción:

```bash
npm run generate
```

Los archivos se generan en `.output/public/`

## Docker

Los archivos relacionados a Docker están en la carpeta `docker/`:

```
docker/
├── .env            # Variables de entorno (puerto, etc.)
├── Dockerfile
├── docker-compose.yaml
├── nginx.conf
└── volumes/        # Datos persistentes
```

### Configuración de puerto

Por defecto el sitio se sirve en el puerto `8080`. Si ya está ocupado, créate `docker/.env` basándote en `.env.example`:

```ini
HOST_PORT=9090
```

### Con Docker Compose

```bash
docker compose -f docker/docker-compose.yaml up -d
```

Accede a http://localhost:8080 (o el puerto configurado en `HOST_PORT`)

### Build y ejecución local (sin Compose)

```bash
docker build -f docker/Dockerfile -t nuxt-landing .
docker run -p 8080:80 nuxt-landing
```

## Deploy

### GitHub Pages

El proyecto incluye un workflow de GitHub Actions que hace deploy automático a GitHub Pages en cada push a `main`.

### Coolify

Puedes desplegar el contenedor Docker en Coolify usando el `Dockerfile` en `docker/Dockerfile`.

## Licencia

MIT
