import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { SignoutPage } from '../pages/SignoutPage';

import { validUser } from '../fixtures/testData';

test('Logout Successfully', async ({ page }) => {

    const login = new LoginPage(page);
    const signout = new SignoutPage(page);

    await login.goto();

    await login.login(
        validUser.username,
        validUser.password
    );

    await signout.logout();

    await expect(page).toHaveURL(/login/i);
});