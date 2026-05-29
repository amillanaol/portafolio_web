export interface AboutSection {
  title: string
  items: string[]
}

export interface AboutData {
  name: string
  title: string
  summary: string
  sections: AboutSection[]
  github: string
  buymeacoffee: string
  patreon: string
  email?: string
}
