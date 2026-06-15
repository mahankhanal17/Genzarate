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

test('Invalid Login - Wrong Password', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        validUser.username,
        'WrongPassword@123'
    );

    await expect(page).toHaveURL(/login/);

    await expect(
        page.getByText(/invalid|incorrect|wrong|failed/i)
    ).toBeVisible();
});

test('Invalid Login - Wrong Username', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        'wrongusername123',
        validUser.password
    );

    await expect(page).toHaveURL(/login/);

    await expect(
        page.getByText(/invalid|incorrect|wrong|failed/i)
    ).toBeVisible();
});

test('Invalid Login - Empty Username', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await page
        .getByRole('textbox', { name: 'Enter your username' })
        .fill('');

    await page
        .getByRole('textbox', { name: 'Enter your password' })
        .fill(validUser.password);

    await page
        .getByRole('button', { name: 'Sign In' })
        .click();

    await expect(page).toHaveURL(/login/);
});

test('Invalid Login - Empty Password', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await page
        .getByRole('textbox', { name: 'Enter your username' })
        .fill(validUser.username);

    await page
        .getByRole('textbox', { name: 'Enter your password' })
        .fill('');

    await page
        .getByRole('button', { name: 'Sign In' })
        .click();

    await expect(page).toHaveURL(/login/);
});

test('Invalid Login - Both Fields Empty', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await page
        .getByRole('button', { name: 'Sign In' })
        .click();

    await expect(page).toHaveURL(/login/);
});