import { Page } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';

export class LoginMethods {
  private loginPage: LoginPage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async navegarAlInicioDeSesion() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async iniciarSesiónConUsuarioValido() {
    await this.loginPage.nombreDeUsuario.fill(process.env.STANDARD_USER!);
    await this.loginPage.entradaDeContraseña.fill(process.env.STANDARD_PASSWORD!);
    await this.loginPage.botónDeInicioDeSesión.click();
  }

  async iniciarSesiónConCredenciales(username: string, password: string) {
    await this.loginPage.nombreDeUsuario.fill(username);
    await this.loginPage.entradaDeContraseña.fill(password);
    await this.loginPage.botónDeInicioDeSesión.click();
  }

  async obtenerMensajeDeErrorDeInicioDeSesión() {
    return this.loginPage.mensajeDeError.textContent();
  }
}
