import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  reporter: 'list',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
  },
})
