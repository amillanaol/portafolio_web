import { services } from '~/data/services'
import type { Service } from '~/types/service'

export function useServices() {
  return {
    services,
    getServiceById: (id: string): Service | undefined => services.find(s => s.id === id),
  }
}
