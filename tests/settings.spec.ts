import { test, expect } from '@playwright/test';
import { validUser } from '../fixtures/testData';

import { LoginPage } from '../pages/LoginPage';
import { SettingsPage } from '../pages/SettingsPage';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      validUser.username,
      validUser.password
  
    );
  }); 

test('Navigate to Settings', async ({ page }) => {

    const settings = new SettingsPage(page);

    await settings.openSettings();

    await expect(page).toHaveURL(/settings/i);
});