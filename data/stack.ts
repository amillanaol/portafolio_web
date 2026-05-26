import type { StackCategory } from '~/types/stack'

export const stack: StackCategory[] = [
  { id: 'backend', name: 'Lenguajes y Frameworks', items: ['Python', 'Django', 'FastAPI', 'PHP', 'Laravel', 'Node.js', 'NestJS', 'C#', '.NET'] },
  { id: 'databases', name: 'Bases de Datos', items: ['PostgreSQL', 'MySQL', 'SQL Server'] },
  { id: 'devops', name: 'DevOps y Despliegue', items: ['Docker', 'Terraform', 'Ansible', 'CI/CD', 'GitHub Actions', 'Coolify'] },
  { id: 'automation', name: 'Automatización', items: ['n8n', 'Agentes IA', 'Flujos Automatizados', 'Python'] },
]
