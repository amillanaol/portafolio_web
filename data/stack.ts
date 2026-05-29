import type { StackCategory } from '~/types/stack'

export const stack: StackCategory[] = [
  { id: 'backend', name: 'Lenguajes y Frameworks', items: ['Python', 'Django', 'FastAPI', 'Spring Boot', 'PHP', 'Laravel', 'Node.js', 'NestJS', '.NET Core'] },
  { id: 'databases', name: 'Bases de Datos', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQL Server'] },
  { id: 'devops', name: 'DevOps y Cloud', items: ['Docker', 'Kubernetes', 'Terraform', 'GCP', 'AWS', 'GitHub Actions', 'Jenkins', 'Coolify'] },
  { id: 'automation', name: 'Automatización', items: ['n8n', 'Playwright', 'Agentes IA', 'Python', 'Bash', 'PowerShell'] },
  { id: 'infra', name: 'Infraestructura TI', items: ['Active Directory', 'ServiceNow', 'Jira', 'Networking', 'ITIL'] }
]
