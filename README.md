# Landing Page - Alexis Millanao Lepileo

![Vista previa](https://raw.githubusercontent.com/amillanaol/landing_page/refs/heads/main/docs/assets/preview.png)

## Sobre el Proyecto

Este proyecto sirve como demostración de cómo aplicar patrones de **Clean Architecture** en una aplicación frontend con Nuxt. La separación de responsabilidades garantiza que la capa de presentación (UI) sea independiente de la lógica de negocio y la fuente de datos.

## Stack Tecnológico

| Tecnología     | Rol                                 |
| -------------- | ----------------------------------- |
| Nuxt 4         | Framework web (SSG)                 |
| Vue 3          | UI y reactividad                    |
| Tailwind CSS 3 | Estilos utilitarios                 |
| TypeScript 6   | Tipado estático estricto            |
| ESLint 10      | Calidad y estandarización de código |
| GitHub Actions | CI/CD automatizado                  |

## Highlights de Arquitectura

El proyecto organiza el código en tres capas principales:

```
Presentation → Application → Domain
(components)  (composables)  (types + data)
```

- **Domain (`/types/`, `/data/`)**: Interfaces de datos puras y mock data estratificado.
- **Application (`/composables/`)**: Lógica de negocio encapsulada por concepto de dominio.
- **Presentation (`/components/`)**: Componentes de UI agnósticos a la fuente de datos.
- **Infrastructure**: Ensamblaje, SEO y enrutamiento.

**Regla de Oro**: Los componentes nunca acceden directamente a `/data/`. Siempre interactúan a través de `composables`, permitiendo cambiar la fuente de datos (archivos estáticos → API → CMS) sin modificar la UI.

## Scripts

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor desarrollo (http://localhost:3000)
npm run generate   # Build estático optimizado
npm run lint       # Validación de estilo de código
npm run typecheck  # Validación de tipos
```

## Licencia

MIT
