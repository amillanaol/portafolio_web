export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement

          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            const delay = el.getAttribute('data-reveal-delay') || '0'
            el.style.setProperty('--reveal-delay', `${delay}ms`)
            el.classList.add('revealed')
          } else if (entry.intersectionRatio === 0) {
            el.style.setProperty('--reveal-delay', '0ms')
            el.classList.remove('revealed')
          }
        })
      },
      { threshold: [0, 0.15], rootMargin: '0px 0px -200px 0px' },
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
