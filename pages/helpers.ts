import { Page } from '@playwright/test';

// A simple helper function
export async function goToProducts(page: Page) {
  await page.goto('/inventory.html');
}

export async function checkProductsTitle(page: Page) {
  const title = page.locator('.title');
  return await title.textContent();
}