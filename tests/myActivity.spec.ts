import { test, expect } from '@playwright/test';
import { validUser } from '../fixtures/testData';

import { LoginPage } from '../pages/LoginPage';
import { MyActivityPage } from '../pages/MyActivityPage';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      validUser.username,
      validUser.password
  
    );
  }); 

test('Navigate to My Activity', async ({ page }) => {

    const activity = new MyActivityPage(page);

    await activity.openMyActivity();

    await expect(page).toHaveURL(/activity/i);
});