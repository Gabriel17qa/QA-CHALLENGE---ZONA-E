import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../hooks';

/* ---------- Background ---------- */

Given('se encuentra en la pantalla de productos', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/inventory\.html/);
});

/* ---------- Scenarios ---------- */

When('el usuario agrega un producto al carrito', async function (this: CustomWorld) {
  await this.productsMethods!.agregarPrimerProductoAlCarrito();
});

When('el usuario remueve el producto', async function (this: CustomWorld) {
  await this.productsMethods!.eliminarPrimerProducto();
});

Given('el usuario tiene un producto agregado al carrito', async function (this: CustomWorld) {
  await this.productsMethods!.agregarPrimerProductoAlCarrito();
});

/* ---------- Then ---------- */

Then('se muestra el listado de productos disponibles', async function (this: CustomWorld) {
  const cantidad = await this.productsMethods!.obtenerCantidadDeProductos();
  expect(cantidad).toBeGreaterThan(0);
});

Then('el producto se refleja en el contador del carrito', async function (this: CustomWorld) {
  const contador = await this.productsMethods!.obtenerCantidadDeInsigniaDelCarrito();
  expect(contador).toBe('1');
});

Then('el carrito queda vacío', async function (this: CustomWorld) {
  const contador = await this.productsMethods!.obtenerCantidadDeInsigniaDelCarrito();
  expect(contador).toBeNull();
});
