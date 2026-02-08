import { Given, When, Then } from '@cucumber/cucumber';
import { Page, expect } from '@playwright/test';
import { LoginMethods } from '../page-methods/LoginMethods';

let page: Page;
let loginMethods: LoginMethods;

/* ---------- Background ---------- */

Given('el usuario se encuentra en la pantalla de login', async function () {
  page = this.page;
  loginMethods = new LoginMethods(page);
  await loginMethods.navegarAlInicioDeSesion();
});

/* ---------- Scenarios ---------- */

When('el usuario ingresa credenciales válidas', async function () {
  await loginMethods.iniciarSesiónConUsuarioValido();
});

When(
  'el usuario ingresa el usuario {string} y la contraseña {string}',
  async function (usuario: string, contraseña: string) {
    await loginMethods.iniciarSesiónConCredenciales(usuario, contraseña);
  }
);

When(
  'el usuario ingresa el usuario {string} y la contraseña válida',
  async function (usuario: string) {
    await loginMethods.iniciarSesiónConCredenciales(
      usuario,
      process.env.STANDARD_PASSWORD!
    );
  }
);

Then('el usuario es redirigido a la pantalla de productos', async function () {
  await expect(page).toHaveURL(/inventory\.html/);
});

Then('se muestra un mensaje de error', async function () {
  const mensaje = await loginMethods.obtenerMensajeDeErrorDeInicioDeSesión();
  expect(mensaje).toBeTruthy();
});

Then('el usuario permanece en la pantalla de login', async function () {
  await expect(page).toHaveURL(/saucedemo\.com/);
});

Then(
  'se muestra un mensaje indicando que el usuario está bloqueado',
  async function () {
    const mensaje = await loginMethods.obtenerMensajeDeErrorDeInicioDeSesión();
    expect(mensaje).toContain('locked');
  }
);
