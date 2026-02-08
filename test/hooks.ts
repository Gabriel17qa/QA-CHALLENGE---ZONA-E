import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.qa') });

import { Before, After, setDefaultTimeout, World } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { LoginMethods } from './page-methods/LoginMethods';
import { CartMethods } from './page-methods/CartMethods';
import { ProductsMethods } from './page-methods/ProductsMethods';
import { CheckoutMethods } from './page-methods/CheckoutMethods';

setDefaultTimeout(90 * 1000);

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  loginMethods?: LoginMethods;
  cartMethods?: CartMethods;
  productsMethods?: ProductsMethods;
  checkoutMethods?: CheckoutMethods;
}

Before<CustomWorld>(async function () {
  this.browser = await chromium.launch({
    headless: false // headless: true para CI
  });

  this.page = await this.browser.newPage();
});

After<CustomWorld>(async function () {
  await this.page.close();
  await this.browser.close();
});
