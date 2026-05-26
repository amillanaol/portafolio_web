export interface Service {
  id: string
  title: string
  description: string
  technologies: string[]
  icon: string
  price?: string
  category: 'software' | 'soporte'
}
