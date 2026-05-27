import { test, expect } from '@playwright/test'

const URL = process.env.TEST_URL || 'http://localhost:4566/landing-page/index.html'

test('index loads', async ({ page }) => { 
  await page.goto(URL, { waitUntil: 'networkidle' })
  await expect(page.locator('#__nuxt')).not.toBeEmpty()
})
