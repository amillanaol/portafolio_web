import type { Service } from '~/types/service'

export const services: Service[] = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    description: 'Construyo soluciones web orientadas a resolver necesidades reales del negocio, con una base clara para crecer y mantenerse en el tiempo.',
    technologies: ['SPA', 'Landing Page', 'CMS', 'Vue.js', 'Nuxt', 'ReactJS', 'NestJS', 'Laravel', 'ASP.NET', 'FastAPI', 'SaaS'],
    techDetails: [
      { name: 'SPA', description: 'Desarrollo de Single Page Applications fluidas y reactivas para una navegación sin recargas.' },
      { name: 'Landing Page', description: 'Creación de sitios enfocados en conversión, optimizados para campañas y alta velocidad de carga.' },
      { name: 'CMS', description: 'Implementación de gestores de contenido personalizados y headless para facilitar la edición autónoma.' },
      { name: 'Vue.js/Nuxt', description: 'Desarrollo de interfaces modernas y rápidas con SSR para una mejor experiencia de usuario y SEO.' },
      { name: 'ReactJS', description: 'Creación de aplicaciones web dinámicas y modulares con alto rendimiento y escalabilidad.' },
      { name: 'NestJS', description: 'Arquitectura backend sólida y tipada para servicios empresariales en Node.js.' },
      { name: 'Laravel', description: 'Desarrollo ágil de aplicaciones robustas con el framework PHP más popular del ecosistema.' },
      { name: 'ASP.NET', description: 'Construcción de aplicaciones corporativas de alto rendimiento con el ecosistema .NET.' },
      { name: 'SaaS', description: 'Diseño de arquitecturas multitenant para plataformas de software como servicio.' },
      { name: 'PostgreSQL', description: 'Diseño de bases de datos relacionales eficientes y seguras para el manejo de información crítica.' }
    ],
    icon: 'code',
    category: 'software'
  },
  {
    id: 'automatizacion',
    title: 'Automatización de Procesos',
    description: 'Automatizo tareas y flujos de trabajo para reducir tiempo operativo, errores manuales y fricción entre herramientas.',
    technologies: ['n8n', 'Playwright', 'Python', 'Agentes IA', 'Flujos Automatizados'],
    techDetails: [
      { name: 'n8n', description: 'orquestación de integraciones y workflows de negocio.' },
      { name: 'Playwright', description: 'pruebas automatizadas de aplicaciones web, CI/CD y validación de calidad.' },
      { name: 'Python', description: 'lenguaje versátil para scripting y automatización de procesos.' },
      { name: 'Agentes IA', description: 'implementación de asistentes autónomos para tareas complejas.' }
    ],
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
    techDetails: [
      { name: 'Arquitectura Limpia', description: 'Implementación de patrones DDD, SOLID y diseño por capas para software mantenible.' },
      { name: 'FastAPI/Django', description: 'Desarrollo ágil de APIs REST con validación de datos y documentación automática.' },
      { name: 'NestJS/Node', description: 'Construcción de microservicios escalables y eficientes en entornos TypeScript.' },
      { name: 'Spring Boot', description: 'Desarrollo de servicios empresariales robustos con el ecosistema Java.' },
      { name: '.NET Core', description: 'Mantenimiento y evolución de sistemas backend de alto rendimiento.' }
    ],
    icon: 'server',
    category: 'software'
  },
  {
    id: 'devops-cloud',
    title: 'Infraestructura Cloud & DevOps',
    description: 'Automatización de despliegues, gestión de contenedores y provisión de infraestructura como código para entornos escalables.',
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'GCP', 'GitHub Actions'],
    techDetails: [
      { name: 'Docker/K8s', description: 'Orquestación de contenedores para asegurar consistencia entre desarrollo y producción.' },
      { name: 'Terraform', description: 'Gestión de infraestructura como código (IaC) para nubes públicas y privadas.' },
      { name: 'CI/CD', description: 'Automatización de pipelines con GitHub Actions y Jenkins para despliegue continuo.' },
      { name: 'GCP/AWS', description: 'Configuración y optimización de servicios en la nube (Compute, Storage, Networking).' }
    ],
    icon: 'cloud',
    category: 'software'
  },
  {
    id: 'asistencia-virtual',
    title: 'Asistencia Virtual y Gestión Operativa',
    description: 'Apoyo en organización de correos, agendas, documentos y tareas administrativas digitales que requieren orden y seguimiento.',
    technologies: ['Google Calendar', 'Google Docs', 'Excel', 'Upwork'],
    techDetails: [
      { name: 'Google Suite', description: 'Gestión eficiente de documentos, hojas de cálculo y calendarios colaborativos.' },
      { name: 'Upwork', description: 'Asistencia especializada para freelancers y gestión de perfiles profesionales.' },
      { name: 'Organización', description: 'Sistematización de tareas diarias y seguimiento de compromisos.' }
    ],
    icon: 'headset',
    category: 'soporte'
  },
  {
    id: 'knowledge-management',
    title: 'Documentación y Gestión de Conocimiento',
    description: 'Estandarización de procesos técnicos y creación de bases de conocimiento (Knowledge Base) para equipos de TI bajo ITIL.',
    technologies: ['Technical Writing', 'Knowledge Base', 'ITIL', 'Jira'],
    techDetails: [
      { name: 'Technical Writing', description: 'Redacción de manuales y guías técnicas claras para usuarios y desarrolladores.' },
      { name: 'ITIL/ServiceNow', description: 'Gestión de servicios TI basada en mejores prácticas de la industria.' },
      { name: 'Knowledge Base', description: 'Creación de repositorios de consulta para reducir tiempos de resolución.' }
    ],
    icon: 'book',
    category: 'soporte'
  },
  {
    id: 'soporte-n2',
    title: 'Soporte TI N2 y Continuidad',
    description: 'Resolución de incidencias complejas, gestión de identidades y soporte técnico en terreno para entornos críticos.',
    technologies: ['Active Directory', 'ServiceNow', 'Microsoft 365', 'Networking'],
    techDetails: [
      { name: 'Active Directory', description: 'Gestión de usuarios, permisos y políticas de grupo en redes corporativas.' },
      { name: 'Resolución N2', description: 'Diagnóstico y solución de problemas técnicos que requieren escalamiento avanzado.' },
      { name: 'Microsoft 365', description: 'Administración y soporte de herramientas de colaboración empresarial.' },
      { name: 'Networking', description: 'Configuración básica y soporte de conectividad y protocolos de red.' }
    ],
    icon: 'tool',
    category: 'soporte'
  },
  {
    id: 'verificacion-contenido',
    title: 'Verificación y Revisión de Contenido',
    description: 'Reviso textos y contenidos generados por IA o por equipos humanos, cuidando claridad, redacción y consistencia.',
    technologies: ['Proofreading', 'Edición', 'IA', 'SEO'],
    techDetails: [
      { name: 'Proofreading', description: 'Revisión exhaustiva de ortografía, gramática y estilo.' },
      { name: 'SEO', description: 'Optimización de contenidos para mejorar la visibilidad en motores de búsqueda.' },
      { name: 'IA Check', description: 'Validación de hechos y coherencia en textos generados por modelos de lenguaje.' }
    ],
    icon: 'search',
    category: 'soporte'
  },
  {
    id: 'soporte-cliente',
    title: 'Soporte al Cliente',
    description: 'Brindo apoyo en atención por chat y correo, seguimiento de consultas y continuidad después de procesos automatizados o bots.',
    technologies: ['Chat', 'Email', 'CRM', 'Zendesk'],
    techDetails: [
      { name: 'Zendesk/CRM', description: 'Gestión organizada de tickets y relación con el cliente para un soporte eficiente.' },
      { name: 'Omnicanalidad', description: 'Atención integrada a través de chat, correo electrónico y redes sociales.' },
      { name: 'Resolución', description: 'Enfoque en solucionar dudas y problemas del usuario de forma empática y rápida.' }
    ],
    icon: 'chat',
    category: 'soporte'
  },
  {
    id: 'redes-sociales',
    title: 'Gestión de Redes y Publicación',
    description: 'Apoyo en moderación, carga de publicaciones e interacción operativa en canales digitales y comunidades.',
    technologies: ['Facebook', 'Instagram', 'LinkedIn', 'Meta Business'],
    techDetails: [
      { name: 'Moderación', description: 'Gestión de comentarios y comunidad para mantener un entorno saludable.' },
      { name: 'Meta Business', description: 'Programación y monitoreo de contenidos en plataformas de Meta.' },
      { name: 'Engagement', description: 'Fomento de la interacción orgánica con la audiencia.' }
    ],
    icon: 'hashtag',
    category: 'soporte'
  },
  {
    id: 'data-entry',
    title: 'Data Entry y Organización de Información',
    description: 'Realizo captura, ordenamiento y migración de datos con foco en precisión, consistencia y estructura.',
    technologies: ['Excel', 'Google Sheets', 'CSV', 'Bases de Datos'],
    techDetails: [
      { name: 'Precisión', description: 'Captura de datos con altos estándares de calidad y fidelidad.' },
      { name: 'Limpieza de Datos', description: 'Normalización y estructuración de información para su análisis.' },
      { name: 'Migración', description: 'Traspaso seguro de datos entre diferentes plataformas y formatos.' }
    ],
    icon: 'grid',
    category: 'soporte'
  },
  {
    id: 'ia-herramientas',
    title: 'Apoyo con Herramientas de IA',
    description: 'Utilizo inteligencia artificial y frameworks de automatización para optimizar procesos de desarrollo, pruebas y gestión de contenido.',
    technologies: [
      'Claude',
      'Antigravity',
      'Ollama',
      'ChatGPT',
      'Rivet',
      'Prompt Engineering'
    ],
    techDetails: [
      { name: 'Claude', description: 'análisis de texto, documentación y soporte conversacional avanzado.' },
      { name: 'Antigravity', description: 'experimentación con entornos de IA y automatización creativa.' },
      { name: 'Ollama', description: 'despliegue de modelos personalizados en local con prompts adaptados.' },
      { name: 'ChatGPT', description: 'soporte en desarrollo, depuración y generación de código.' },
      { name: 'Rivet', description: 'automatización de flujos y procesos técnicos.' },
      { name: 'Prompt Engineering', description: 'diseño de instrucciones efectivas para obtener resultados útiles.' }
    ],
    icon: 'sparkles',
    category: 'soporte'
  },
]
