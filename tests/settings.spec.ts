import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { SettingsPage } from '../pages/SettingsPage';

import { validUser } from '../fixtures/testData';

test('Settings - Recovery Codes Download', async ({ page }) => {

    const login = new LoginPage(page);
    const settings = new SettingsPage(page);

    await login.goto();

    await login.login(
        validUser.username,
        validUser.password
    );

    await settings.openSettings();

    await expect(page).toHaveURL(/settings/i);

    await settings.viewProfile();

    await settings.openRecoveryCodesMenu();

    await settings.resetRecoveryCodes();

    const download =
        await settings.downloadRecoveryCodes();

    expect(
        download.suggestedFilename()
    ).toBeTruthy();

    await settings.closeRecoveryCodesModal();
});