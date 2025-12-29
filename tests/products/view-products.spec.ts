import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/productPage';

test('can view products without logging in', async ({ page }) => {
  // Create the page object
  const productsPage = new ProductsPage(page);
  
  // Use its methods
  await productsPage.goto();
  const title = await productsPage.getTitle();
  expect(title).toBe('Products');
  
  // Keep this for now
  await expect(page.locator('.inventory_item').first()).toBeVisible();
});