import { test, expect } from '@playwright/test'

const URL = process.env.TEST_URL || 'http://localhost:4566/landing-page/index.html'
const ORCID_HREF = 'https://orcid.org/0009-0003-1768-7048'
const COTIZAR_HREF = 'http://192.168.100.221:8384/task-request'

test.describe('Cotizar servicios button', () => {

  test('hero section has Ver servicios button linking to services', async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' })

    const heroBtn = page.locator('section').first().getByRole('link', { name: 'Ver servicios' })
    await expect(heroBtn).toBeVisible()
    await expect(heroBtn).toHaveAttribute('href', '#servicios')
  })

  test('contact section has ORCID button with correct href', async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' })
    await page.locator('#contacto').scrollIntoViewIfNeeded()

    const contactoBtn = page.locator('#contacto').getByRole('link', { name: 'Ver perfil en ORCID' })
    await expect(contactoBtn).toBeVisible()
    await expect(contactoBtn).toHaveAttribute('href', ORCID_HREF)
    await expect(contactoBtn).toHaveAttribute('target', '_blank')
  })

  test('navbar has Cotizar link with correct href and target', async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' })

    const navLink = page.locator('nav a').filter({ hasText: 'Cotizar' }).first()
    await expect(navLink).toBeVisible()
    await expect(navLink).toHaveAttribute('href', COTIZAR_HREF)
    await expect(navLink).toHaveAttribute('target', '_blank')
  })

  test('navbar Cotizar link is before Contacto in desktop nav', async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' })

    const desktopLinks = page.locator('nav .hidden.md\\:flex a')
    const linkCount = await desktopLinks.count()
    const labels = []
    for (let i = 0; i < linkCount; i++) {
      labels.push(await desktopLinks.nth(i).textContent())
    }
    const cotizarIndex = labels.findIndex(l => l?.includes('Cotizar'))
    const contactoIndex = labels.findIndex(l => l?.includes('Contacto'))
    expect(cotizarIndex).toBeGreaterThan(contactoIndex)
  })

  test('mobile menu has Cotizar link', async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' })
    await page.setViewportSize({ width: 375, height: 667 })
    await page.locator('button[aria-label="Toggle menu"]').click()

    const mobilePanel = page.locator('nav .border-t.border-gray-800')
    const mobileLink = mobilePanel.locator('a').filter({ hasText: 'Cotizar' })
    await expect(mobileLink).toBeVisible()
    await expect(mobileLink).toHaveAttribute('href', COTIZAR_HREF)
    await expect(mobileLink).toHaveAttribute('target', '_blank')
  })
})
