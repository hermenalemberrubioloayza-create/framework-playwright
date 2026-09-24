import { Page, expect } from '@playwright/test';
import { LoginLocator } from '../locators/login.locator';

export class LoginPage {
  private locators: LoginLocator;

  constructor(private page: Page) {
    this.locators = new LoginLocator(page);
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  }

  async login(email: string, pass: string): Promise<void> {
    await this.locators.emailInput.fill(email);
    await this.locators.passwordInput.fill(pass);
    await this.locators.loginButton.click();
  }

  async verifyUrl(expectedRoute: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(expectedRoute));
  }
}
