// trigger CI on push to main branch and on pull request to main branch
// run tests in parallel on all browsers
// run tests in headless mode
// set viewport to 1280x720

import { test, expect } from '@playwright/test';

test('open google homepage', async ({ page }) => {
await page.goto('https://google.com');
await expect(page).toHaveTitle(/Google/);
});

test('search field visible', async ({ page }) => {
await page.goto('https://google.com');
const search = page.locator('textarea[name="q"]');
await expect(search).toBeVisible();
});
