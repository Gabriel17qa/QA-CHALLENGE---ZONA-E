import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  constructor(public page: Page) {}

 
  get entradaNombre(): Locator {
    return this.page.locator('[data-test="firstName"]');
  }

  get entradaApellido(): Locator {
    return this.page.locator('[data-test="lastName"]');
  }

  get entradaCódigoPostal(): Locator {
    return this.page.locator('[data-test="postalCode"]');
  }

  get botónDeContinuar(): Locator {
    return this.page.locator('[data-test="continue"]');
  }

  get botónDeFinalizar(): Locator {
    return this.page.locator('[data-test="finish"]');
  }

  get mensajeExitoso(): Locator {
    return this.page.locator('.complete-header');
  }
}
