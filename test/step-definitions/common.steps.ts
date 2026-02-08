import { Given } from '@cucumber/cucumber';
import { LoginMethods } from '../page-methods/LoginMethods';
import { CartMethods } from '../page-methods/CartMethods';
import { ProductsMethods } from '../page-methods/ProductsMethods';
import { CheckoutMethods } from '../page-methods/CheckoutMethods';
import { CustomWorld } from '../hooks';

Given('el usuario inicio sesion correctamente', async function (this: CustomWorld) {
  this.loginMethods = new LoginMethods(this.page);
  this.cartMethods = new CartMethods(this.page);
  this.productsMethods = new ProductsMethods(this.page);
  this.checkoutMethods = new CheckoutMethods(this.page);

  await this.page.goto(process.env.BASE_URL!);
  await this.loginMethods.iniciarSesiónConUsuarioValido();
});
