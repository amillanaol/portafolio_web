export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement

          if (entry.isIntersecting) {
            const delay = el.getAttribute('data-reveal-delay') || '0'
            el.style.setProperty('--reveal-delay', `${delay}ms`)
            el.classList.add('revealed')
          } else {
            el.style.setProperty('--reveal-delay', '0ms')
            el.classList.remove('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    nextTick(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        observer?.observe(el)
      })
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
