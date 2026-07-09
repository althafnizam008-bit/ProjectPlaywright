# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> Home Page Tests >> Verify Home Page
- Location: tests\HomePage.spec.ts:16:13

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Search' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Search' })

```

```yaml
- banner:
  - link:
    - /url: https://automationpractice.techwithjatin.com/
  - navigation:
    - link "Sign in":
      - /url: https://automationpractice.techwithjatin.com/my-account
    - link "Contact us":
      - /url: https://automationpractice.techwithjatin.com/contact-us
    - text: " Call us now:"
    - strong: 0123-456-789
  - link "Automation Practice":
    - /url: https://automationpractice.techwithjatin.com/
    - img "Automation Practice"
  - textbox "Search"
  - button ""
  - link " Cart (empty) ":
    - /url: https://automationpractice.techwithjatin.com/order
  - list:
    - listitem:
      - link "Women":
        - /url: https://automationpractice.techwithjatin.com/3-women
    - listitem:
      - link "Dresses":
        - /url: https://automationpractice.techwithjatin.com/8-dresses
    - listitem:
      - link "T-shirts":
        - /url: https://automationpractice.techwithjatin.com/5-tshirts
- list:
  - listitem:
    - link "sample-3":
      - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
      - img "sample-3"
    - heading "EXCEPTEUR OCCAECAT" [level=2]
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
    - paragraph:
      - button "Shop now !"
  - listitem:
    - link "sample-1":
      - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
      - img "sample-1"
    - heading "EXCEPTEUR OCCAECAT" [level=2]
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
    - paragraph:
      - button "Shop now !"
  - listitem:
    - link "sample-2":
      - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
      - img "sample-2"
    - heading "EXCEPTEUR OCCAECAT" [level=2]
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
    - paragraph:
      - button "Shop now !"
  - listitem:
    - link "sample-3":
      - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
      - img "sample-3"
    - heading "EXCEPTEUR OCCAECAT" [level=2]
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
    - paragraph:
      - button "Shop now !"
  - listitem:
    - link "sample-1":
      - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
      - img "sample-1"
    - heading "EXCEPTEUR OCCAECAT" [level=2]
    - paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
    - paragraph:
      - button "Shop now !"
- link ". Prev ":
  - /url: ""
- link ". Next ":
  - /url: ""
- list:
  - listitem:
    - link:
      - /url: http://www.prestashop.com/
  - listitem:
    - link:
      - /url: http://www.prestashop.com/
- list:
  - listitem:
    - link "Popular":
      - /url: "#homefeatured"
  - listitem:
    - link "Best Sellers":
      - /url: "#blockbestsellers"
  - listitem:
    - link "Specials":
      - /url: "#blockspecials"
- list:
  - listitem:
    - link "Faded Short Sleeves T-shirt":
      - /url: https://automationpractice.techwithjatin.com/tshirts/1-faded-short-sleeves-tshirt.html
      - img "Faded Short Sleeves T-shirt"
    - heading "Faded Short Sleeves T-shirt" [level=5]:
      - link "Faded Short Sleeves T-shirt":
        - /url: https://automationpractice.techwithjatin.com/tshirts/1-faded-short-sleeves-tshirt.html
    - text: $16.51
  - listitem:
    - link "Blouse":
      - /url: https://automationpractice.techwithjatin.com/blouses/2-blouse.html
      - img "Blouse"
    - heading "Blouse" [level=5]:
      - link "Blouse":
        - /url: https://automationpractice.techwithjatin.com/blouses/2-blouse.html
    - text: $27.00
  - listitem:
    - link "Printed Dress":
      - /url: https://automationpractice.techwithjatin.com/casual-dresses/3-printed-dress.html
      - img "Printed Dress"
    - heading "Printed Dress" [level=5]:
      - link "Printed Dress":
        - /url: https://automationpractice.techwithjatin.com/casual-dresses/3-printed-dress.html
    - text: $26.00
  - listitem:
    - link "Printed Dress":
      - /url: https://automationpractice.techwithjatin.com/evening-dresses/4-printed-dress.html
      - img "Printed Dress"
    - heading "Printed Dress" [level=5]:
      - link "Printed Dress":
        - /url: https://automationpractice.techwithjatin.com/evening-dresses/4-printed-dress.html
    - text: $50.99
  - listitem:
    - link "Printed Summer Dress":
      - /url: https://automationpractice.techwithjatin.com/summer-dresses/5-printed-summer-dress.html
      - img "Printed Summer Dress"
    - heading "Printed Summer Dress" [level=5]:
      - link "Printed Summer Dress":
        - /url: https://automationpractice.techwithjatin.com/summer-dresses/5-printed-summer-dress.html
    - text: $28.98 $30.51 -5%
  - listitem:
    - link "Printed Summer Dress":
      - /url: https://automationpractice.techwithjatin.com/summer-dresses/6-printed-summer-dress.html
      - img "Printed Summer Dress"
    - heading "Printed Summer Dress" [level=5]:
      - link "Printed Summer Dress":
        - /url: https://automationpractice.techwithjatin.com/summer-dresses/6-printed-summer-dress.html
    - text: $30.50
  - listitem:
    - link "Printed Chiffon Dress":
      - /url: https://automationpractice.techwithjatin.com/summer-dresses/7-printed-chiffon-dress.html
      - img "Printed Chiffon Dress"
    - heading "Printed Chiffon Dress" [level=5]:
      - link "Printed Chiffon Dress":
        - /url: https://automationpractice.techwithjatin.com/summer-dresses/7-printed-chiffon-dress.html
    - text: $16.40 $20.50 -20%
- list:
  - listitem:
    - link:
      - /url: http://www.prestashop.com/
  - listitem:
    - link:
      - /url: http://www.prestashop.com/
  - listitem:
    - link:
      - /url: http://www.prestashop.com/
  - listitem:
    - link:
      - /url: http://www.prestashop.com/
  - listitem:
    - link:
      - /url: http://www.prestashop.com/
- heading "Follow us on Facebook" [level=4]
- iframe
- list:
  - listitem:
    - emphasis: 
    - heading "Lorem Ipsum" [level=3]
    - paragraph: Lorem ipsum dolor sit amet conse ctetur voluptate velit esse cillum dolore eu
  - listitem:
    - emphasis: 
    - heading "Dolor Sit Amet" [level=3]
    - paragraph: Lorem ipsum dolor sit amet conse ctetur voluptate velit esse cillum dolore eu
  - listitem:
    - emphasis: 
    - heading "Ctetur Voluptate" [level=3]
    - paragraph: Lorem ipsum dolor sit amet conse ctetur voluptate velit esse cillum dolore eu
- heading "Custom Block" [level=3]
- paragraph:
  - strong: Lorem ipsum dolor sit amet conse ctetu
- paragraph: Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
- contentinfo:
  - heading "Newsletter" [level=4]
  - textbox: Enter your e-mail
  - button ""
  - list:
    - listitem:
      - link "":
        - /url: http://www.facebook.com/prestashop
    - listitem:
      - link "":
        - /url: http://www.twitter.com/prestashop
    - listitem:
      - link "":
        - /url: http://www.prestashop.com/blog/en/
    - listitem:
      - link "":
        - /url: https://www.google.com/+prestashop
  - heading "Follow us" [level=4]
  - heading "Categories" [level=4]
  - list:
    - listitem:
      - link "Women":
        - /url: https://automationpractice.techwithjatin.com/3-women
  - heading "Information" [level=4]
  - list:
    - listitem:
      - link "Specials":
        - /url: https://automationpractice.techwithjatin.com/prices-drop
    - listitem:
      - link "New products":
        - /url: https://automationpractice.techwithjatin.com/new-products
    - listitem:
      - link "Best sellers":
        - /url: https://automationpractice.techwithjatin.com/best-sales
    - listitem:
      - link "Our stores":
        - /url: https://automationpractice.techwithjatin.com/stores
    - listitem:
      - link "Contact us":
        - /url: https://automationpractice.techwithjatin.com/contact-us
    - listitem:
      - link "Terms and conditions of use":
        - /url: https://automationpractice.techwithjatin.com/content/3-terms-and-conditions-of-use
    - listitem:
      - link "About us":
        - /url: https://automationpractice.techwithjatin.com/content/4-about-us
    - listitem:
      - link "Sitemap":
        - /url: https://automationpractice.techwithjatin.com/sitemap
  - link "© 2026 - Ecommerce software by PrestaShop™":
    - /url: http://www.prestashop.com
  - heading "My account" [level=4]:
    - link "My account":
      - /url: https://automationpractice.techwithjatin.com/my-account
  - list:
    - listitem:
      - link "My orders":
        - /url: https://automationpractice.techwithjatin.com/order-history
    - listitem:
      - link "My credit slips":
        - /url: https://automationpractice.techwithjatin.com/credit-slip
    - listitem:
      - link "My addresses":
        - /url: https://automationpractice.techwithjatin.com/addresses
    - listitem:
      - link "My personal info":
        - /url: https://automationpractice.techwithjatin.com/identity
  - heading "Store Information" [level=4]
  - list:
    - listitem:  My Company, 42 Puffin street 12345 Puffinville France
    - listitem: " Call us now: 0123-456-789"
    - listitem:
      - text: " Email:"
      - link "sales@yourcompany.com":
        - /url: mailto:%73%61%6c%65%73@%79%6f%75%72%63%6f%6d%70%61%6e%79.%63%6f%6d
```

# Test source

```ts
  1  | import { Page,expect,Locator } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  | 
  5  |     private readonly page: Page;
  6  | 
  7  | 
  8  | //Locators
  9  | 
  10 |     readonly signInLink: Locator;
  11 |     readonly searchBox: Locator;
  12 |     readonly searchButton: Locator;
  13 |     readonly cart: Locator;
  14 |     readonly womenMenu: Locator;  
  15 |     readonly dressesMenu: Locator;
  16 |     readonly tshirtsMenu: Locator;
  17 |     readonly footer: Locator;
  18 | 
  19 | //Constructor
  20 | 
  21 | constructor(page: Page) {
  22 |     this.page = page;
  23 |     this.signInLink = page.getByRole('link', { name: 'Sign in' });
  24 |     this.searchBox = page.getByPlaceholder('Search');
  25 |     this.searchButton = page.getByRole('button', { name: 'Search' });
  26 |     this.cart = page.getByRole('link', { name: 'Cart' });
  27 |     this.womenMenu = page.getByRole('link', { name: 'Women' });
  28 |     this.dressesMenu = page.getByRole('link', { name: 'Dresses' });
  29 |     this.tshirtsMenu = page.getByRole('link', { name: 'T-shirts' });
  30 |     this.footer = page.getByRole('contentinfo');
  31 | }
  32 | 
  33 | //check if page exist
  34 | 
  35 | //async checkPageExist() {
  36 | 
  37 |    // await expect(this.page).toHaveTitle("Automation Practice");
  38 | //}
  39 | 
  40 | 
  41 |     async openHomePage() {
  42 | 
  43 |         await this.page.goto('');
  44 | 
  45 |     }
  46 | 
  47 |     async verifyHomePage() {
  48 | 
  49 |         await expect(this.page).toHaveTitle('Automation Practice');
  50 | 
  51 |         await expect(this.page).toHaveURL(
  52 |             'https://automationpractice.techwithjatin.com/'
  53 |         );
  54 | 
  55 |         await expect(this.signInLink).toBeVisible();
  56 | 
  57 |         await expect(this.searchBox).toBeVisible();
  58 | 
> 59 |         await expect(this.searchButton).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  60 | 
  61 |         await expect(this.cart).toBeVisible();
  62 | 
  63 |         await expect(this.womenMenu).toBeVisible();
  64 | 
  65 |         await expect(this.dressesMenu).toBeVisible();
  66 | 
  67 |         await expect(this.tshirtsMenu).toBeVisible();
  68 | 
  69 |         await expect(this.footer).toBeVisible();
  70 | 
  71 |     }
  72 | 
  73 | }
  74 | 
```