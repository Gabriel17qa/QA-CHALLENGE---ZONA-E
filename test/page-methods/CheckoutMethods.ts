import { Page } from '@playwright/test';
import { CheckoutPage } from '../pageobjects/CheckoutPage';

export class CheckoutMethods {
  private checkoutPage: CheckoutPage;

  constructor(private page: Page) {
    this.checkoutPage = new CheckoutPage(page);
  }

  async completarLaCompra() {
    await this.checkoutPage.entradaNombre.fill('Juan');
    await this.checkoutPage.entradaApellido.fill('Perez');
    await this.checkoutPage.entradaCódigoPostal.fill('1234');

    await this.checkoutPage.botónDeContinuar.click();
    await this.checkoutPage.botónDeFinalizar.click();
  }

  async obtenerMensajeDeÉxito() {
    return this.checkoutPage.mensajeExitoso.textContent();
  }
}
