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
