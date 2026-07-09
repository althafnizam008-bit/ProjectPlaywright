import { test as setup } from '@playwright/test';
import { HomePage } from './HomePage';

setup('login', async ({ page }) => {
     
    
    await page.goto('https://automationpractice.techwithjatin.com/');

    // Login
    const loginHomePage = new HomePage(page);
    await loginHomePage.clickSignInButton();

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});