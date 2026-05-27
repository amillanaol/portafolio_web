import type { Project } from '~/types/project'

export const projects: Project[] = [
  {
    id: 'git-versioneer',
    name: 'interactive-git-versioneer',
    description: 'Automatización de versiones para flujos de trabajo en Git potenciado con IA.',
    technologies: ['Python', 'AI', 'Git'],
    category: 'Python',
    url: 'https://github.com/amillanaol/interactive-git-versioneer'
  },
  {
    id: 'fastapi-showcase',
    name: 'python-fastapi-showcase',
    description: 'API REST con FastAPI, Arquitectura Limpia y DDD. Diseño en capas, Docker, migraciones de Alembic y pruebas estructuradas.',
    technologies: ['Python', 'FastAPI', 'Docker', 'DDD', 'Alembic'],
    category: 'Python',
    url: 'https://github.com/amillanaol/python-fastapi-showcase'
  },
  {
    id: 'django-pipeline',
    name: 'python-django-pipeline-tracker',
    description: 'Dashboard creado en Python/Django para rastrear ejecuciones de pipelines CI/CD y vulnerabilidades de seguridad.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    category: 'Python',
    url: 'https://github.com/amillanaol/python-django-pipeline-tracker'
  },
  {
    id: 'flask-inventory',
    name: 'flask-inventory-api',
    description: 'Sistema de gestión de inventario desarrollado con Flask, PostgreSQL y Bootstrap 5.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Bootstrap 5'],
    category: 'Python',
    url: 'https://github.com/amillanaol/flask-inventory-api'
  },
  {
    id: 'laravel-testing',
    name: 'laravel-testing-showcase',
    description: 'Laravel 12.x task management API showcasing 4 levels of test coverage with PHPUnit, Docker, GitHub Actions, and MySQL/SQLite support.',
    technologies: ['PHP', 'Laravel', 'PHPUnit', 'Docker', 'GitHub Actions'],
    category: 'PHP',
    url: 'https://github.com/amillanaol/laravel-testing-showcase'
  },
  {
    id: 'shopcore-pos',
    name: 'shopcore-pos',
    description: 'Sistema de Punto de Venta con interfaz Web, conectado a PostgreSQL.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL'],
    category: 'TypeScript',
    url: 'https://github.com/amillanaol/shopcore-pos'
  },
  {
    id: 'whisper-transcriptor',
    name: 'whisper-transcriptor',
    description: 'Herramienta para traducción automática de multimedia utilizando Whisper.',
    technologies: ['PowerShell', 'Whisper'],
    category: 'PowerShell',
    url: 'https://github.com/amillanaol/whisper-transcriptor'
  },
  {
    id: 'node-webhook',
    name: 'node-webhook-receiver',
    description: 'Receptor de eventos para integraciones ágiles.',
    technologies: ['JavaScript', 'Node.js'],
    category: 'JavaScript',
    url: 'https://github.com/amillanaol/node-webhook-receiver'
  },
  {
    id: 'next-spring-tracker',
    name: 'NextSpringTracker',
    description: 'Full-stack task management app built with Next.js 14, React, Java Spring Boot and PostgreSQL. Features JWT authentication, CRUD operations and responsive UI.',
    technologies: ['Java', 'Spring Boot', 'Next.js', 'React', 'PostgreSQL'],
    category: 'Java',
    url: 'https://github.com/amillanaol/NextSpringTracker'
  },
  {
    id: 'n8n-workflows',
    name: 'n8n-workflows',
    description: 'Repositorio técnico de workflows n8n para diseñar, documentar y reutilizar automatizaciones de negocio basadas en integraciones y flujos modulares.',
    technologies: ['n8n', 'Automatización'],
    category: 'n8n',
    url: 'https://github.com/amillanaol/n8n-workflows'
  }
]
