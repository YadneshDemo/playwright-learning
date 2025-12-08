import { test, expect } from '@playwright/test';

test('can view products without logging in', async ({ page }) => {
await page.goto('/inventory.html');
await expect(page.url()).toContain("/inventory.html");
await expect(page.getByText('Products')).toBeVisible();
await expect(page.locator('.inventory_item').first()).toBeVisible();
//const value = page.getByTitle('Products');
//await expect(value.getByText('Products')).toBeVisible();
});