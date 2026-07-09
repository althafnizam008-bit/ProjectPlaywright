import {test, expect} from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

test.describe('Sign In Test', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {

        await page.goto('');

    });
    test ('Verify Sign In', async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.clickSignInButton();
    })

})
