import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/productPage';

test('can view products without logging in', async ({ page }) => {
  const productPage = new ProductsPage(page);
  
  await productPage.goto();
  const title = await productPage.getTitle();
  expect(title).toBe('Products');
  
  await expect(page.locator('.inventory_item').first()).toBeVisible();
});

test('can add to cart', async ({ page }) => {
  const productPage = new ProductsPage(page);
  
  await productPage.goto();
  await productPage.addToCart('bike-light');
  
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});