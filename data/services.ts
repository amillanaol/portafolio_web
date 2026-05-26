import type { Service } from '~/types/service'

export const services: Service[] = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    description: 'Construyo soluciones web orientadas a resolver necesidades reales del negocio, con una base clara para crecer y mantenerse en el tiempo.',
    technologies: ['Vue.js', 'Nuxt', 'FastAPI', 'Django', 'Laravel', 'PostgreSQL'],
    icon: 'code',
    category: 'software'
  },
  {
    id: 'automatizacion',
    title: 'Automatización de Procesos',
    description: 'Automatizo tareas y flujos de trabajo para reducir tiempo operativo, errores manuales y fricción entre herramientas.',
    technologies: ['n8n', 'Python', 'Agentes IA', 'Flujos Automatizados'],
    icon: 'cpu',
    category: 'software'
  },
  {
    id: 'integraciones',
    title: 'Integraciones entre Sistemas',
    description: 'Conecto plataformas, servicios y procesos para mejorar continuidad operativa y trazabilidad de la información.',
    technologies: ['APIs REST', 'Webhooks', 'Python', 'Docker'],
    icon: 'link',
    category: 'software'
  },
  {
    id: 'api-backend',
    title: 'APIs y Backend',
    description: 'Desarrollo servicios y lógica de negocio robusta para aplicaciones que necesitan orden técnico y capacidad de evolución.',
    technologies: ['Python', 'FastAPI', 'Django', 'NestJS', 'Node.js', 'PostgreSQL'],
    icon: 'server',
    category: 'software'
  },
  {
    id: 'asistencia-virtual',
    title: 'Asistencia Virtual y Gestión Operativa',
    description: 'Apoyo en organización de correos, agendas, documentos y tareas administrativas digitales que requieren orden y seguimiento.',
    technologies: ['Google Calendar', 'Google Docs', 'Excel', 'Upwork'],
    icon: 'headset',
    category: 'soporte'
  },
  {
    id: 'verificacion-contenido',
    title: 'Verificación y Revisión de Contenido',
    description: 'Reviso textos y contenidos generados por IA o por equipos humanos, cuidando claridad, redacción y consistencia.',
    technologies: ['Proofreading', 'Edición', 'IA', 'SEO'],
    icon: 'search',
    category: 'soporte'
  },
  {
    id: 'soporte-cliente',
    title: 'Soporte al Cliente',
    description: 'Brindo apoyo en atención por chat y correo, seguimiento de consultas y continuidad después de procesos automatizados o bots.',
    technologies: ['Chat', 'Email', 'CRM', 'Zendesk'],
    icon: 'chat',
    category: 'soporte'
  },
  {
    id: 'redes-sociales',
    title: 'Gestión de Redes y Publicación',
    description: 'Apoyo en moderación, carga de publicaciones e interacción operativa en canales digitales y comunidades.',
    technologies: ['Facebook', 'Instagram', 'LinkedIn', 'Meta Business'],
    icon: 'hashtag',
    category: 'soporte'
  },
  {
    id: 'data-entry',
    title: 'Data Entry y Organización de Información',
    description: 'Realizo captura, ordenamiento y migración de datos con foco en precisión, consistencia y estructura.',
    technologies: ['Excel', 'Google Sheets', 'CSV', 'Bases de Datos'],
    icon: 'grid',
    category: 'soporte'
  },
  {
    id: 'ia-herramientas',
    title: 'Apoyo con Herramientas de IA',
    description: 'Utilizo herramientas de IA para acelerar tareas de generación, edición y organización de contenido de apoyo.',
    technologies: ['ChatGPT', 'Canva', 'DALL-E', 'Prompt Engineering'],
    icon: 'sparkles',
    category: 'soporte'
  },
]
