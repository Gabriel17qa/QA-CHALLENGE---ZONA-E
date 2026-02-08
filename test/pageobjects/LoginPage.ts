import { Page, Locator } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  
  get nombreDeUsuario(): Locator {
    return this.page.locator('[data-test="username"]');
  }

  get entradaDeContraseña(): Locator {
    return this.page.locator('[data-test="password"]');
  }

  get botónDeInicioDeSesión(): Locator {
    return this.page.locator('[data-test="login-button"]');
  }

  get mensajeDeError(): Locator {
    return this.page.locator('[data-test="error"]');
  }
}
