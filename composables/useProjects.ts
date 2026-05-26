import { projects } from '~/data/projects'
import type { Project } from '~/types/project'

export function useProjects() {
  return {
    projects,
    getProjectById: (id: string): Project | undefined => projects.find(p => p.id === id),
  }
}
