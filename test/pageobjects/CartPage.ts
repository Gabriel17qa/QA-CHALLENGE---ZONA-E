import { Page, Locator } from '@playwright/test';

export class CartPage {
  constructor(public page: Page) {}

 
  get artículosDelCarrito(): Locator {
    return this.page.locator('.cart_item');
  }

  get eliminarBotones(): Locator {
    return this.page.locator('button[data-test^="remove"]');
  }

  get botónDePago(): Locator {
    return this.page.locator('[data-test="checkout"]');
  }
}
