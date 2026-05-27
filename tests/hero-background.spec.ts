import { test, expect } from '@playwright/test'

const URL = process.env.TEST_URL || 'http://localhost:4566/landing-page/index.html'

test('hero background image loaded with utility class', async ({ page }) => {
  await page.goto(URL, { waitUntil: 'networkidle' })
  const heroBg = page.locator('section').first().locator('div.bg-hero-image')
  await expect(heroBg).toBeVisible()
})

test('footer is visible', async ({ page }) => {
  await page.goto(URL, { waitUntil: 'networkidle' })
  const footer = page.locator('footer')
  await expect(footer).toBeVisible()
})
