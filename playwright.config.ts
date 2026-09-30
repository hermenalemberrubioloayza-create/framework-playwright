import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/resources/features/*.feature',
  steps: 'src/playwright/steps/*.step.ts',
  outputDir: 'target/playwright-test',
});

export default defineConfig({
  testDir, // <-- Usa la configuración de BDD de arriba
  reporter: [
    ['html', { outputFolder: 'target/reports/html', open: 'never' }],
    ['list']
  ],
  use: {
    headless: !!process.env.CI, // Si está en GitHub Actions corre headless; en tu PC normal
    screenshot: 'on',
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});