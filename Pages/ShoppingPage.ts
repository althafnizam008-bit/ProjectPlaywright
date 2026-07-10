import {Page,Locator} from '@playwright/test';
export class ShoppingPage {

    private readonly page: Page;

    //Locators  for shopping page
    readonly  searchBox: Locator;
    readonly  searchButton: Locator;
    readonly  AddTocart: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.getByPlaceholder('search-box');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.AddTocart = page.getByRole('button', { name: 'Add to Cart' });
    }

}