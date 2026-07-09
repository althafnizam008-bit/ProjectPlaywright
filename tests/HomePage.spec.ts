import { test } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

test.describe('Home Page Tests', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {

        await page.goto('');

        homePage = new HomePage(page);

    });

        test('Verify Home Page', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.openHomePage();

    await homePage.verifyHomePage();

});

    });

