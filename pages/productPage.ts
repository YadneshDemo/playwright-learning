import { Page } from '@playwright/test';

export class ProductsPage {
  // Property: store the page
  private page: Page;
  
  // Constructor: how to create this object
  constructor(page: Page) {
    this.page = page;  // Save page for later use
  }
  
  // Method 1: navigate to products
  async goto() {
    await this.page.goto('/inventory.html');
  }
  
  // Method 2: get title
  async getTitle() {
    return await this.page.locator('.title').textContent();
  }

  async addToCart(productName: string) {
    const button = this.page.locator(`[data-test="add-to-cart-sauce-labs-${productName}"]`);
    await button.click();
  }

}