import { test, expect } from '@playwright/test';
import { validUser } from '../fixtures/testData';

import { LoginPage } from '../pages/LoginPage';
import { NotificationsPage } from '../pages/NotificationsPage';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      validUser.username,
      validUser.password
  
    );
  }); 

test('Navigate to Notifications', async ({ page }) => {

    const notifications = new NotificationsPage(page);

    await notifications.openNotifications();

    await expect(page).toHaveURL(/notifications/i);
});