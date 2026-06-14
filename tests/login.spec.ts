import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser } from '../fixtures/testData';

test('Valid Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.goto();

  await login.login(
    validUser.username,
    validUser.password
  );

  await expect(page).toHaveURL(/dashboard/);
});