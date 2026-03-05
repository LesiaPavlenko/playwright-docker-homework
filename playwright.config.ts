import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
testDir: './tests',

use: {
headless: true,
viewport: { width: 1280, height: 720 },
},

projects: [
{
name: 'chromium',
use: { ...devices['Desktop Chrome'] },
}
],
});
