import { Page,expect } from '@playwright/test';


export class LoginPage {

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {

    await this.page
      .getByRole('textbox', { name: 'Enter your username' })
      .fill(username);

    await this.page
      .getByRole('textbox', { name: 'Enter your password' })
      .fill(password);

    await this.page
      .getByRole('button', { name: 'Sign In' })
      .click();
  }
}