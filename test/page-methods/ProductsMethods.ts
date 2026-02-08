import { Page } from '@playwright/test';
import { ProductsPage } from '../pageobjects/ProductsPage';

export class ProductsMethods {
  private productsPage: ProductsPage;

  constructor(private page: Page) {
    this.productsPage = new ProductsPage(page);
  }

  async agregarPrimerProductoAlCarrito() {
    await this.productsPage.botonesAgregarAlCarrito.first().click();
  }

  async eliminarPrimerProducto() {
    await this.productsPage.eliminarBotones.first().click();
  }

  async obtenerCantidadDeInsigniaDelCarrito() {
    const count = await this.productsPage.insigniaDelCarrito.count();
    if (count === 0) {
      return null;
    }
    return this.productsPage.insigniaDelCarrito.textContent();
  }

  async irAlCarrito() {
    await this.productsPage.iconoDeCarrito.click();
  }

  async obtenerCantidadDeProductos() {
    return this.productsPage.artIculosDeProducto.count();
  }
}
