import { test as setup, expect } from '@playwright/test';

const authFile = "playwright/.auth/user.json";

setup('authenticate', async ({ page }) => {
  // Your code here:
  await page.goto('/');// 1. Navigate to login page
  await page.locator('[data-test="username"]').fill("standard_user")// 2. Fill username
  await page.locator('[data-test="password"]').fill("secret_sauce")// 3. Fill password
  await page.locator('[data-test="login-button"]').click();// 4. Click login
  await expect(page).toHaveURL('/inventory.html');
  
  console.log('About to save auth state...');
  await page.context().storageState({ path: 'playwright/.auth/user.json' });
  console.log('Auth state saved!');
});