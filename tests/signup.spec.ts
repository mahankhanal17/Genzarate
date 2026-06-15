import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { TestData } from '../fixtures/testData';

test.beforeEach(async ({ page }) => {
    const registration = new RegistrationPage(page);
    await registration.navigate();
    await registration.clickJoinUs();
});

test('TC01 Student Registration Flow', async ({ page }) => {

    const registration = new RegistrationPage(page);

    const email = TestData.randomEmail();
    const username = TestData.randomUsername();
    const password = TestData.randomPassword();

    await registration.enterCredentials(email, username, password);
    await registration.acceptTerms();
    await registration.continueRegistration();
    await registration.selectStudent();
    await registration.selectInstitute();
    await registration.selectBirthDate();
    await registration.clickContinueAfterBirthDate();
    await registration.selectLocationAndGender();
    await registration.selectCountry();
    await registration.completeRegistration();
    await registration.provideParentalConsent(email);
    await registration.downloadRecoveryCodes();
    await registration.confirmRecoveryCodes();
    await registration.continueWithAvatar();
    await registration.waitForApproval();
    await registration.signOut();
});

test('Registration - Empty Email', async ({ page }) => {

    const registration = new RegistrationPage(page);

    await registration.enterCredentials(
        '',
        TestData.randomUsername(),
        TestData.randomPassword()
    );

    await registration.acceptTerms();

    const continueBtn = page.getByRole('button', { name: 'Continue' });

    await expect(continueBtn).toBeDisabled();
});

test('Registration - Empty Username', async ({ page }) => {

    const registration = new RegistrationPage(page);

    await registration.enterCredentials(
        TestData.randomEmail(),
        '',
        TestData.randomPassword()
    );

    await registration.acceptTerms();

    const continueBtn = page.getByRole('button', { name: 'Continue' });

    await expect(continueBtn).toBeDisabled();
});

test('Registration - Empty Password', async ({ page }) => {

    const registration = new RegistrationPage(page);

    await registration.enterCredentials(
        TestData.randomEmail(),
        TestData.randomUsername(),
        ''
    );

    await registration.acceptTerms();

    const continueBtn = page.getByRole('button', { name: 'Continue' });

    await expect(continueBtn).toBeDisabled();
});

test('Registration - Password Mismatch', async ({ page }) => {

    const email = TestData.randomEmail();
    const username = TestData.randomUsername();

    await page
        .getByRole('textbox', { name: 'you@example.com' })
        .fill(email);

    await page
        .getByRole('textbox', { name: 'Enter a username' })
        .fill(username);

    await page
        .getByRole('textbox', { name: 'Enter a password' })
        .fill('Pass@12345');

    await page
        .getByRole('textbox', { name: 'Enter the password again' })
        .fill('Pass@99999');

    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(
        page.getByText(/password.*match|do not match|mismatch/i)
    ).toBeVisible();
});

test('Registration - Invalid Email Format', async ({ page }) => {

    const registration = new RegistrationPage(page);

    await registration.enterCredentials(
        'notanemail',
        TestData.randomUsername(),
        TestData.randomPassword()
    );

    await registration.acceptTerms();

    const continueBtn = page.getByRole('button', { name: 'Continue' });

    await expect(continueBtn).toBeDisabled();
});

test('Registration - Terms Not Accepted', async ({ page }) => {

    const registration = new RegistrationPage(page);

    await registration.enterCredentials(
        TestData.randomEmail(),
        TestData.randomUsername(),
        TestData.randomPassword()
    );

    // Terms not accepted — Continue should be disabled
    const continueBtn = page.getByRole('button', { name: 'Continue' });

    await expect(continueBtn).toBeDisabled();
});