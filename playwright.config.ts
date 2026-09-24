import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/resources/features/*.feature',
  steps: 'src/playwright/steps/*.step.ts',
  outputDir: 'target/playwright-test',
});

export default defineConfig({
  testDir,
  reporter: [
    ['html', { outputFolder: 'target/reports/html', open: 'never' }],
    ['list']
  ],
  use: {
    headless: false,
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
