import { stack } from '~/data/stack'
import type { StackCategory } from '~/types/stack'

export function useStack() {
  return {
    stack,
    getCategoryById: (id: string): StackCategory | undefined => stack.find(c => c.id === id),
  }
}
