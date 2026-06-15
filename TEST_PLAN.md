TEST PLAN - GENZARATE WEB APPLICATION

Version: 2.0
Prepared by: QA Team
Date: June 2026



INTRODUCTION



This test plan covers end-to-end automated testing of the
Genzarate web application. The goal is to verify all major
user flows including both positive and negative scenarios.



SCOPE



In Scope:


User registration (happy path and validation)
User login (valid and invalid scenarios)
User logout
Dashboard navigation
Survey completion
Feedback submission
Individual page navigation


Out of Scope:


API / backend testing
Performance testing
Mobile testing
Admin panel
Cross-browser testing (Chromium only)




TEST ENVIRONMENT



Application URL  : https://testgenzarate.aigeeks.dev
Browser          : Chromium
Operating System : Windows
Credentials      : Stored in .env file (not committed to GitHub)



TOOLS USED



Playwright   - Browser automation and test runner
TypeScript   - Test authoring language
dotenv       - Environment variable management
HTML Reporter- Viewing test results
VS Code      - Code editor
GitHub       - Version control



TEST APPROACH




Page Object Model (POM) — each page has its own class in
the pages/ folder with locators and actions
Role-based locators — getByRole() and getByLabel() used
for reliable element selection
Random test data — registration uses TestData.randomEmail(),
randomUsername(), randomPassword() to generate unique data
per run
Environment variables — credentials and base URL loaded
from .env, nothing sensitive hardcoded
beforeEach hooks — login handled in beforeEach for suites
that require authentication
Negative testing — invalid input and validation error
scenarios covered alongside happy path




TEST CASES



--- MODULE 1: AUTHENTICATION ---

TC-01  Valid Login
File   : tests/login.spec.ts
Type   : Positive
Steps  : 1. Go to /login
2. Enter valid username and password
3. Click Sign In
Expected: Redirected to /dashboard

TC-02  Invalid Login - Wrong Password
File   : tests/login.spec.ts
Type   : Negative
Steps  : 1. Go to /login
2. Enter valid username with wrong password
3. Click Sign In
Expected: Remains on /login, error message shown

TC-03  Invalid Login - Wrong Username
File   : tests/login.spec.ts
Type   : Negative
Steps  : 1. Go to /login
2. Enter wrong username with valid password
3. Click Sign In
Expected: Remains on /login, error message shown

TC-04  Invalid Login - Empty Username
File   : tests/login.spec.ts
Type   : Negative
Steps  : 1. Go to /login
2. Leave username blank, enter valid password
3. Click Sign In
Expected: Remains on /login

TC-05  Invalid Login - Empty Password
File   : tests/login.spec.ts
Type   : Negative
Steps  : 1. Go to /login
2. Enter valid username, leave password blank
3. Click Sign In
Expected: Remains on /login

TC-06  Invalid Login - Both Fields Empty
File   : tests/login.spec.ts
Type   : Negative
Steps  : 1. Go to /login
2. Click Sign In without entering anything
Expected: Remains on /login

TC-07  Logout
File   : tests/SignoutPage.spec.ts
Type   : Positive
Steps  : 1. Login with valid credentials
2. Click profile avatar
3. Click Sign out
Expected: Redirected to /login

--- MODULE 2: REGISTRATION ---

TC-08  Student Registration - Full Flow
File   : tests/signup.spec.ts
Type   : Positive
Steps  : 1. Go to /account-type and click Join us
2. Enter random email, username, password
3. Accept terms and click Continue
4. Select Student
5. Select institute - ABC Private School
6. Select birth date - January 2009
7. Select location - Dubai, gender - Male
8. Search and select country - Nepal
9. Click Complete Registration
10. Provide parental consent email
11. Download and confirm recovery codes
12. Continue with avatar
13. Wait for guardian approval
14. Sign out
Expected: Registration completes, user signed out

TC-09  Registration - Empty Email
File   : tests/signup.spec.ts
Type   : Negative
Steps  : 1. Go to registration page
2. Leave email blank, fill username and password
3. Accept terms
Expected: Continue button is disabled

TC-10  Registration - Empty Username
File   : tests/signup.spec.ts
Type   : Negative
Steps  : 1. Go to registration page
2. Fill email, leave username blank, fill password
3. Accept terms
Expected: Continue button is disabled

TC-11  Registration - Empty Password
File   : tests/signup.spec.ts
Type   : Negative
Steps  : 1. Go to registration page
2. Fill email and username, leave password blank
3. Accept terms
Expected: Continue button is disabled

TC-12  Registration - Password Mismatch
File   : tests/signup.spec.ts
Type   : Negative
Steps  : 1. Go to registration page
2. Fill email and username
3. Enter different values in password fields
4. Click Continue
Expected: Password mismatch error shown

TC-13  Registration - Invalid Email Format
File   : tests/signup.spec.ts
Type   : Negative
Steps  : 1. Go to registration page
2. Enter invalid email (e.g. notanemail)
3. Fill username and password, accept terms
Expected: Continue button is disabled

TC-14  Registration - Terms Not Accepted
File   : tests/signup.spec.ts
Type   : Negative
Steps  : 1. Go to registration page
2. Fill all valid credentials
3. Do not accept terms
Expected: Continue button is disabled

--- MODULE 3: DASHBOARD NAVIGATION ---

TC-15  Navigate to Earn More
File   : tests/dashboard.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Earn More nav link
Expected: URL matches /more-ways-to-earn

TC-16  Navigate to Leaderboard
File   : tests/dashboard.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Leaderboard nav link
Expected: URL matches /leaderboard

TC-17  Navigate to My Activity
File   : tests/dashboard.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click My Activity nav link
Expected: URL matches /activity

TC-18  Navigate to Settings
File   : tests/dashboard.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Settings nav link
Expected: URL matches /settings

TC-19  Navigate to Feedback
File   : tests/dashboard.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Feedback nav link
Expected: URL matches /feedback

TC-20  Navigate to Notifications
File   : tests/dashboard.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Notifications nav link
Expected: URL matches /notifications

--- MODULE 4: EARN MORE / SURVEY ---

TC-21  Complete Innovation Survey
File   : tests/earnMore.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Earn More
3. Click Desert Oasis Retail
4. Click Start Innovation & Emerging
5. Select Very Satisfied, click Next Question
6. Rate 5 stars, click Next Question
7. Type text answer, click Submit Survey
8. Click Back to Dashboard
Expected: URL matches /dashboard

--- MODULE 5: FEEDBACK ---

TC-22  Submit Feedback Successfully
File   : tests/feedback.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Feedback nav link
3. Select topic - General enquiry
4. Enter email and message
5. Click Send feedback
Expected: Feedback submitted successfully

--- MODULE 6: INDIVIDUAL PAGES ---

TC-23  Leaderboard Page
File   : tests/leaderboard.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Leaderboard nav link
Expected: URL matches /leaderboard

TC-24  My Activity Page
File   : tests/myActivity.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click My Activity nav link
Expected: URL matches /activity

TC-25  Notifications Page
File   : tests/notifications.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Notifications nav link
Expected: URL matches /notifications

TC-26  Settings Page
File   : tests/settings.spec.ts
Type   : Positive
Steps  : 1. Login
2. Click Settings nav link
Expected: URL matches /settings



TEST SUMMARY


Module                Total    Positive    Negative
Authentication          7          2           5
Registration            7          1           6
Dashboard Navigation    6          6           0
Earn More / Survey      1          1           0
Feedback                1          1           0
Individual Pages        4          4           0
TOTAL                  26         15          11



ENTRY CRITERIA

Application accessible at the test URL
Valid credentials available in .env
Dependencies installed via npm install
Playwright browsers installed via npx playwright install


EXIT CRITERIA

All 26 test cases executed
All positive tests passing with 0 failures
Negative tests asserting correct validation behaviour
HTML report reviewed after the run
No test.only or test.skip left in any spec file
