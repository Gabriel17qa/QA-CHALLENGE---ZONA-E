import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../hooks';

/* ---------- Background ---------- */

Given('tiene productos en el carrito', async function (this: CustomWorld) {
  await this.productsMethods!.agregarPrimerProductoAlCarrito();
  await this.productsMethods!.irAlCarrito();
});

Given('se encuentra en la pantalla de checkout', async function (this: CustomWorld) {
  await this.cartMethods!.procederAlPago();
});

/* ---------- Scenario ---------- */

When(
  'el usuario completa el formulario de checkout con datos válidos',
  async function (this: CustomWorld) {
    await this.checkoutMethods!.completarLaCompra();
  }
);

When('confirma la compra', async function () {
  // La confirmación ya ocurre dentro de completarLaCompra (Finish)
  // Este step queda por semántica del feature
});

/* ---------- Then ---------- */

Then('se muestra el mensaje de compra exitosa', async function (this: CustomWorld) {
  const mensaje = await this.checkoutMethods!.obtenerMensajeDeÉxito();
  expect(mensaje).toContain('Thank you for your order');
});
