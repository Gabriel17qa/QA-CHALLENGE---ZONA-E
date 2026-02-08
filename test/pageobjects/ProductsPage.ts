import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  constructor(public page: Page) {}


  get artIculosDeProducto(): Locator {
    return this.page.locator('.inventory_item');
  }

  get botonesAgregarAlCarrito(): Locator {
    return this.page.locator('button[data-test^="add-to-cart"]');
  }

  get eliminarBotones(): Locator {
    return this.page.locator('button[data-test^="remove"]');
  }

  get iconoDeCarrito(): Locator {
    return this.page.locator('.shopping_cart_link');
  }

  get insigniaDelCarrito(): Locator {
    return this.page.locator('.shopping_cart_badge');
  }
}
