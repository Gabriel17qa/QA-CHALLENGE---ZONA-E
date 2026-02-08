import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ProductsMethods } from '../page-methods/ProductsMethods';
import { CustomWorld } from '../hooks';

/* ---------- Background ---------- */

Given('tiene al menos un producto agregado al carrito', async function (this: CustomWorld) {
  const productsMethods = new ProductsMethods(this.page);
  await productsMethods.agregarPrimerProductoAlCarrito();
});

/* ---------- Scenarios ---------- */

When('el usuario accede al carrito', async function (this: CustomWorld) {
  await this.page.goto(`${process.env.BASE_URL}/cart.html`);
});

When('el usuario elimina el producto del carrito', async function (this: CustomWorld) {
  await this.cartMethods!.eliminarProductoDelCarrito();
});

/* ---------- Then ---------- */

Then('se muestran los productos agregados', async function (this: CustomWorld) {
  const cantidad = await this.cartMethods!.getConteoDeArtículosCarrito();
  expect(cantidad).toBeGreaterThan(0);
});

Then('el carrito no contiene productos', async function (this: CustomWorld) {
  const cantidad = await this.cartMethods!.getConteoDeArtículosCarrito();
  expect(cantidad).toBe(0);
});
