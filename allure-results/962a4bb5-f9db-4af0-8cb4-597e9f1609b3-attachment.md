# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> Home Page Tests >> Verify user can submit registration form
- Location: tests\HomePage.spec.ts:19:9

# Error details

```
TypeError: homePage.navigate is not a function
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { HomePage } from '../Pages/HomePage';
  3  | import user from '../UserData.json';
  4  | 
  5  | test.describe('Home Page Tests', () => {
  6  | 
  7  |     let homePage: HomePage;
  8  | 
  9  |     test.beforeEach(async ({ page }) => {
  10 | 
  11 |         homePage = new HomePage(page);
  12 | 
> 13 |         await homePage.navigate();
     |                        ^ TypeError: homePage.navigate is not a function
  14 | 
  15 |         await homePage.verifyPageLoaded();
  16 | 
  17 |     });
  18 | 
  19 |     test('Verify user can submit registration form', async () => {
  20 | 
  21 |         await homePage.fillRegistrationForm(
  22 |             user.name,
  23 |             user.email,
  24 |             user.phone
  25 |         );
  26 | 
  27 |         await homePage.selectStar();
  28 | 
  29 |         await homePage.clickSubmit();
  30 | 
  31 |     });
  32 | 
  33 | });
```