import { Page,expect,Locator } from '@playwright/test';

export class HomePage {

    private readonly page: Page;


//Locators

    readonly signInLink: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly cart: Locator;
    readonly womenMenu: Locator;  
    readonly dressesMenu: Locator;
    readonly tshirtsMenu: Locator;
    readonly footer: Locator;
    readonly SignInButton: Locator;
    readonly emailInput: Locator;
    readonly PasswordInput: Locator;
    readonly SignInButtonLock: Locator;


//Constructor

constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.searchBox = page.getByPlaceholder('Search');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.cart = page.getByRole('link', { name: 'Cart' });
    this.womenMenu = page.getByRole('link', { name: 'Women' });
    this.dressesMenu = page.getByRole('link', { name: 'Dresses' });
    this.tshirtsMenu = page.getByRole('link', { name: 'T-shirts' });
    this.footer = page.getByRole('contentinfo');
    this.SignInButton = page.getByText('Sign in');
    this.emailInput = page.locator('#email');
    this.PasswordInput = page.locator('#passwd');
    this.SignInButtonLock = page.locator('#SubmitLogin');
}




    async openHomePage() {

        await this.page.goto('');

    }

    async verifyHomePage() {

        await expect(this.page).toHaveTitle('Automation Practice');

        await expect(this.page).toHaveURL(
            'https://automationpractice.techwithjatin.com/'
        );

        await expect(this.signInLink).toBeVisible();

        await expect(this.searchBox).toBeVisible();

    

        await expect(this.cart).toBeVisible();

    }

    async clickSignInButton(){
        await this.SignInButton.click();
        await this.emailInput.fill('Frect1977@fleckens.hu');
        await this.PasswordInput.fill('password');
            await this.SignInButtonLock.click();
    
        

     

    }
       
        }

