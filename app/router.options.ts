import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: (_routes) => {
    const routes = [..._routes]
    const exists = routes.some(r => r.path === '/index.html')
    if (!exists) {
      routes.push({
        path: '/index.html',
        redirect: '/',
      })
    }
    return routes
  },
}
