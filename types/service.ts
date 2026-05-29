export interface TechDetail {
  name: string
  description: string
}

export interface Service {
  id: string
  title: string
  description: string
  technologies: string[]
  techDetails?: TechDetail[]
  icon: string
  price?: string
  category: 'software' | 'soporte'
}

