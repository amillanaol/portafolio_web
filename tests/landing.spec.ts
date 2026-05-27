import { test, expect, devices } from '@playwright/test';

const URL = process.env.TEST_URL || 'http://localhost:4566/landing-page/index.html';

test.describe('Landing Page Essential Tests', () => {

  test('1. Floci deploy: page loads successfully (smoke)', async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/Alexis Millanao/);
    await expect(page.locator('#__nuxt')).not.toBeEmpty();
  });

  test('2. Sections structure: key sections are present', async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' });
    const sections = ['#sobre-mi', '#servicios', '#proyectos', '#stack', '#contacto'];
    for (const section of sections) {
      await expect(page.locator(section)).toBeVisible();
    }
  });

  test('3. Mobile (Android): loads correctly and toggles menu', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['Pixel 5'],
    });
    const page = await context.newPage();
    await page.goto(URL, { waitUntil: 'networkidle' });
    
    // Check that mobile menu button is visible
    const menuBtn = page.getByRole('button', { name: 'Toggle menu' });
    await expect(menuBtn).toBeVisible();

    // Click menu button to open mobile menu
    await menuBtn.click();

    // Verify that navigation links in mobile menu are visible
    const mobileLink = page.locator('.md\\:hidden').getByRole('link', { name: 'Servicios' }).first();
    await expect(mobileLink).toBeVisible();

    await context.close();
  });

});
