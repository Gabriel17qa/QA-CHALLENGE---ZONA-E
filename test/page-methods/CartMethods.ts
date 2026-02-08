import { Page } from '@playwright/test';
import { CartPage } from '../pageobjects/CartPage';

export class CartMethods {
  private cartPage: CartPage;

  constructor(private page: Page) {
    this.cartPage = new CartPage(page);
  }

  async getConteoDeArtículosCarrito() {
    return this.cartPage.artículosDelCarrito.count();
  }

  async eliminarProductoDelCarrito() {
    await this.cartPage.eliminarBotones.first().click();
  }

  async procederAlPago() {
    await this.cartPage.botónDePago.click();
  }
}
