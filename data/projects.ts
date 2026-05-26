import type { Project } from '~/types/project'

export const projects: Project[] = [
  { 
    id: 'fastapi', 
    name: 'API REST con FastAPI', 
    description: 'API REST con FastAPI, arquitectura limpia y DDD. Docker, Alembic y PostgreSQL para una base sólida y mantenible.', 
    technologies: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'DDD'], 
    url: 'https://github.com/amillanaol/python-fastapi-showcase' 
  },
  { 
    id: 'nestjs', 
    name: 'Microservicios con NestJS', 
    description: 'Microservicios con NestJS, DDD y arquitectura hexagonal. Comunicación TCP entre servicios y Redis.', 
    technologies: ['NestJS', 'TypeScript', 'Redis', 'DDD', 'Hexagonal'], 
    url: 'https://github.com/amillanaol/b2b-nestjs-matching_microservices_playground' 
  },
  { 
    id: 'pipeline', 
    name: 'Dashboard de Pipelines', 
    description: 'Dashboard Django para seguimiento de pipelines CI/CD y visualización de procesos técnicos y operativos.', 
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'], 
    url: 'https://github.com/amillanaol/python-django-pipeline-tracker' 
  },
  { 
    id: 'whisper', 
    name: 'Automatización con IA', 
    description: 'Traducción y procesamiento multimedia con Whisper. Automatización aplicada con inteligencia artificial.', 
    technologies: ['Python', 'Whisper', 'AI', 'Automatización'], 
    url: 'https://github.com/amillanaol/whisper-translator' 
  },
]
