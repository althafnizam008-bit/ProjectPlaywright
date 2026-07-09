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

Locator: getByRole('link', { name: 'Women' })
Expected: visible
Error: strict mode violation: getByRole('link', { name: 'Women' }) resolved to 2 elements:
    1) <a title="Women" class="sf-with-ul" href="https://automationpractice.techwithjatin.com/3-women">Women</a> aka getByRole('link', { name: 'Women', description: 'Women', exact: true })
    2) <a href="https://automationpractice.techwithjatin.com/3-women" title="You will find here all woman fashion collections.  ↵ This category includes all the basics of your wardrobe and much more: ↵ shoes, accessories, printed t-shirts, feminine dresses, women's jeans!">↵⇆⇆Women↵⇆</a> aka getByRole('link', { name: 'Women', description: 'You will find here all woman fashion collections. This category includes all the basics of your wardrobe and much more: shoes, accessories, printed t-shirts, feminine dresses, women\'s jeans!' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Women' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e4]:
    - link [ref=e8]:
      - /url: https://automationpractice.techwithjatin.com/
    - generic [ref=e11]:
      - navigation:
        - link "Sign in" [ref=e13] [cursor=pointer]:
          - /url: https://automationpractice.techwithjatin.com/my-account
        - link "Contact us" [ref=e15] [cursor=pointer]:
          - /url: https://automationpractice.techwithjatin.com/contact-us
        - generic [ref=e16]:
          - generic [ref=e17]: 
          - text: "Call us now:"
          - strong [ref=e18]: 0123-456-789
    - generic [ref=e21]:
      - link "Automation Practice" [ref=e23]:
        - /url: https://automationpractice.techwithjatin.com/
        - img "Automation Practice" [ref=e24]
      - generic [ref=e26]:
        - textbox "Search" [ref=e27]
        - button "" [ref=e28] [cursor=pointer]
      - generic [ref=e30]:
        - link " Cart (empty) " [ref=e31]:
          - /url: https://automationpractice.techwithjatin.com/order
        - text: 
      - text:    
      - list [ref=e33]:
        - listitem [ref=e34]:
          - link "Women" [ref=e35]:
            - /url: https://automationpractice.techwithjatin.com/3-women
          - text:     
        - listitem [ref=e36]:
          - link "Dresses" [ref=e37]:
            - /url: https://automationpractice.techwithjatin.com/8-dresses
        - listitem [ref=e38]:
          - link "T-shirts" [ref=e39]:
            - /url: https://automationpractice.techwithjatin.com/5-tshirts
  - generic [ref=e41]:
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - list:
            - listitem [ref=e47]:
              - link "sample-3" [ref=e48]:
                - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
                - img "sample-3" [ref=e49]
              - generic [ref=e50] [cursor=pointer]:
                - heading "EXCEPTEUR OCCAECAT" [level=2] [ref=e51]:
                  - text: EXCEPTEUR
                  - text: OCCAECAT
                - paragraph [ref=e52]: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
                - paragraph [ref=e53]:
                  - button "Shop now !" [ref=e54]
            - listitem [ref=e55]:
              - link "sample-1" [ref=e56]:
                - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
                - img "sample-1" [ref=e57]
              - generic [ref=e58] [cursor=pointer]:
                - heading "EXCEPTEUR OCCAECAT" [level=2] [ref=e59]:
                  - text: EXCEPTEUR
                  - text: OCCAECAT
                - paragraph [ref=e60]: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
                - paragraph [ref=e61]:
                  - button "Shop now !" [ref=e62]
            - listitem [ref=e63]:
              - link "sample-2" [ref=e64]:
                - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
                - img "sample-2" [ref=e65]
              - generic [ref=e66] [cursor=pointer]:
                - heading "EXCEPTEUR OCCAECAT" [level=2] [ref=e67]:
                  - text: EXCEPTEUR
                  - text: OCCAECAT
                - paragraph [ref=e68]: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
                - paragraph [ref=e69]:
                  - button "Shop now !" [ref=e70]
            - listitem [ref=e71]:
              - link "sample-3" [ref=e72]:
                - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
                - img "sample-3" [ref=e73]
              - generic [ref=e74] [cursor=pointer]:
                - heading "EXCEPTEUR OCCAECAT" [level=2] [ref=e75]:
                  - text: EXCEPTEUR
                  - text: OCCAECAT
                - paragraph [ref=e76]: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
                - paragraph [ref=e77]:
                  - button "Shop now !" [ref=e78]
            - listitem [ref=e79]:
              - link "sample-1" [ref=e80]:
                - /url: http://www.prestashop.com/?utm_source=back-office&utm_medium=v16_homeslider&utm_campaign=back-office-EN&utm_content=download
                - img "sample-1" [ref=e81]
              - generic [ref=e82] [cursor=pointer]:
                - heading "EXCEPTEUR OCCAECAT" [level=2] [ref=e83]:
                  - text: EXCEPTEUR
                  - text: OCCAECAT
                - paragraph [ref=e84]: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit
                - paragraph [ref=e85]:
                  - button "Shop now !" [ref=e86]
        - generic:
          - generic:
            - link ". Prev " [ref=e87]:
              - /url: ""
            - link ". Next " [ref=e88]:
              - /url: ""
      - list [ref=e90]:
        - listitem [ref=e91]:
          - link [ref=e92]:
            - /url: http://www.prestashop.com/
        - listitem [ref=e93]:
          - link [ref=e94]:
            - /url: http://www.prestashop.com/
    - generic [ref=e96]:
      - list [ref=e97]:
        - listitem [ref=e98]:
          - link "Popular" [ref=e99]:
            - /url: "#homefeatured"
        - listitem [ref=e100]:
          - link "Best Sellers" [ref=e101]:
            - /url: "#blockbestsellers"
        - listitem [ref=e102]:
          - link "Specials" [ref=e103]:
            - /url: "#blockspecials"
      - generic [ref=e104]:
        - list [ref=e105]:
          - listitem [ref=e106]:
            - generic [ref=e107]:
              - generic [ref=e109]:
                - link "Faded Short Sleeves T-shirt" [ref=e110]:
                  - /url: https://automationpractice.techwithjatin.com/tshirts/1-faded-short-sleeves-tshirt.html
                  - img "Faded Short Sleeves T-shirt" [ref=e111]
                - text: 
              - generic [ref=e112]:
                - heading "Faded Short Sleeves T-shirt" [level=5] [ref=e113]:
                  - link "Faded Short Sleeves T-shirt" [ref=e114]:
                    - /url: https://automationpractice.techwithjatin.com/tshirts/1-faded-short-sleeves-tshirt.html
                - generic [ref=e116]: $16.51
          - listitem [ref=e117]:
            - generic [ref=e118]:
              - generic [ref=e120]:
                - link "Blouse" [ref=e121]:
                  - /url: https://automationpractice.techwithjatin.com/blouses/2-blouse.html
                  - img "Blouse" [ref=e122]
                - text: 
              - generic [ref=e123]:
                - heading "Blouse" [level=5] [ref=e124]:
                  - link "Blouse" [ref=e125]:
                    - /url: https://automationpractice.techwithjatin.com/blouses/2-blouse.html
                - generic [ref=e127]: $27.00
          - listitem [ref=e128]:
            - generic [ref=e129]:
              - generic [ref=e131]:
                - link "Printed Dress" [ref=e132]:
                  - /url: https://automationpractice.techwithjatin.com/casual-dresses/3-printed-dress.html
                  - img "Printed Dress" [ref=e133]
                - text: 
              - generic [ref=e134]:
                - heading "Printed Dress" [level=5] [ref=e135]:
                  - link "Printed Dress" [ref=e136]:
                    - /url: https://automationpractice.techwithjatin.com/casual-dresses/3-printed-dress.html
                - generic [ref=e138]: $26.00
          - listitem [ref=e139]:
            - generic [ref=e140]:
              - generic [ref=e142]:
                - link "Printed Dress" [ref=e143]:
                  - /url: https://automationpractice.techwithjatin.com/evening-dresses/4-printed-dress.html
                  - img "Printed Dress" [ref=e144]
                - text: 
              - generic [ref=e145]:
                - heading "Printed Dress" [level=5] [ref=e146]:
                  - link "Printed Dress" [ref=e147]:
                    - /url: https://automationpractice.techwithjatin.com/evening-dresses/4-printed-dress.html
                - generic [ref=e149]: $50.99
          - listitem [ref=e150]:
            - generic [ref=e151]:
              - generic [ref=e153]:
                - link "Printed Summer Dress" [ref=e154]:
                  - /url: https://automationpractice.techwithjatin.com/summer-dresses/5-printed-summer-dress.html
                  - img "Printed Summer Dress" [ref=e155]
                - text: 
              - generic [ref=e156]:
                - heading "Printed Summer Dress" [level=5] [ref=e157]:
                  - link "Printed Summer Dress" [ref=e158]:
                    - /url: https://automationpractice.techwithjatin.com/summer-dresses/5-printed-summer-dress.html
                - generic [ref=e159]:
                  - generic [ref=e160]: $28.98
                  - generic [ref=e161]: $30.51
                  - generic [ref=e162]: "-5%"
          - listitem [ref=e163]:
            - generic [ref=e164]:
              - generic [ref=e166]:
                - link "Printed Summer Dress" [ref=e167]:
                  - /url: https://automationpractice.techwithjatin.com/summer-dresses/6-printed-summer-dress.html
                  - img "Printed Summer Dress" [ref=e168]
                - text: 
              - generic [ref=e169]:
                - heading "Printed Summer Dress" [level=5] [ref=e170]:
                  - link "Printed Summer Dress" [ref=e171]:
                    - /url: https://automationpractice.techwithjatin.com/summer-dresses/6-printed-summer-dress.html
                - generic [ref=e173]: $30.50
          - listitem [ref=e174]:
            - generic [ref=e175]:
              - generic [ref=e177]:
                - link "Printed Chiffon Dress" [ref=e178]:
                  - /url: https://automationpractice.techwithjatin.com/summer-dresses/7-printed-chiffon-dress.html
                  - img "Printed Chiffon Dress" [ref=e179]
                - text: 
              - generic [ref=e180]:
                - heading "Printed Chiffon Dress" [level=5] [ref=e181]:
                  - link "Printed Chiffon Dress" [ref=e182]:
                    - /url: https://automationpractice.techwithjatin.com/summer-dresses/7-printed-chiffon-dress.html
                - generic [ref=e183]:
                  - generic [ref=e184]: $16.40
                  - generic [ref=e185]: $20.50
                  - generic [ref=e186]: "-20%"
        - text:        
      - generic [ref=e187]:
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link [ref=e191]:
              - /url: http://www.prestashop.com/
          - listitem [ref=e192]:
            - link [ref=e193]:
              - /url: http://www.prestashop.com/
          - listitem [ref=e194]:
            - link [ref=e195]:
              - /url: http://www.prestashop.com/
          - listitem [ref=e196]:
            - link [ref=e197]:
              - /url: http://www.prestashop.com/
          - listitem [ref=e198]:
            - link [ref=e199]:
              - /url: http://www.prestashop.com/
        - heading "Follow us on Facebook" [level=4] [ref=e201]
        - generic [ref=e203]:
          - list [ref=e205]:
            - listitem [ref=e206]:
              - emphasis [ref=e207]: 
              - generic [ref=e208]:
                - heading "Lorem Ipsum" [level=3] [ref=e209]
                - paragraph [ref=e210]: Lorem ipsum dolor sit amet conse ctetur voluptate velit esse cillum dolore eu
            - listitem [ref=e211]:
              - emphasis [ref=e212]: 
              - generic [ref=e213]:
                - heading "Dolor Sit Amet" [level=3] [ref=e214]
                - paragraph [ref=e215]: Lorem ipsum dolor sit amet conse ctetur voluptate velit esse cillum dolore eu
            - listitem [ref=e216]:
              - emphasis [ref=e217]: 
              - generic [ref=e218]:
                - heading "Ctetur Voluptate" [level=3] [ref=e219]
                - paragraph [ref=e220]: Lorem ipsum dolor sit amet conse ctetur voluptate velit esse cillum dolore eu
          - generic [ref=e221]:
            - heading "Custom Block" [level=3] [ref=e222]
            - paragraph [ref=e223]:
              - strong [ref=e224]: Lorem ipsum dolor sit amet conse ctetu
            - paragraph [ref=e225]: Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
  - contentinfo [ref=e227]:
    - generic [ref=e228]:
      - generic [ref=e229]:
        - heading "Newsletter" [level=4] [ref=e230] [cursor=pointer]
        - generic [ref=e233]:
          - textbox [ref=e234]: Enter your e-mail
          - button "" [ref=e235] [cursor=pointer]
      - generic [ref=e236]:
        - list [ref=e237]:
          - listitem [ref=e238]:
            - link "" [ref=e239]:
              - /url: http://www.facebook.com/prestashop
          - listitem [ref=e240]:
            - link "" [ref=e241]:
              - /url: http://www.twitter.com/prestashop
          - listitem [ref=e242]:
            - link "" [ref=e243]:
              - /url: http://www.prestashop.com/blog/en/
          - listitem [ref=e244]:
            - link "" [ref=e245]:
              - /url: https://www.google.com/+prestashop
        - heading "Follow us" [level=4] [ref=e246] [cursor=pointer]
      - generic [ref=e248]:
        - heading "Categories" [level=4] [ref=e249] [cursor=pointer]
        - list [ref=e252]:
          - listitem [ref=e253]:
            - link "Women" [ref=e254]:
              - /url: https://automationpractice.techwithjatin.com/3-women
      - generic [ref=e255]:
        - heading "Information" [level=4] [ref=e256] [cursor=pointer]
        - list [ref=e257]:
          - listitem [ref=e258]:
            - link "Specials" [ref=e259]:
              - /url: https://automationpractice.techwithjatin.com/prices-drop
          - listitem [ref=e260]:
            - link "New products" [ref=e261]:
              - /url: https://automationpractice.techwithjatin.com/new-products
          - listitem [ref=e262]:
            - link "Best sellers" [ref=e263]:
              - /url: https://automationpractice.techwithjatin.com/best-sales
          - listitem [ref=e264]:
            - link "Our stores" [ref=e265]:
              - /url: https://automationpractice.techwithjatin.com/stores
          - listitem [ref=e266]:
            - link "Contact us" [ref=e267]:
              - /url: https://automationpractice.techwithjatin.com/contact-us
          - listitem [ref=e268]:
            - link "Terms and conditions of use" [ref=e269]:
              - /url: https://automationpractice.techwithjatin.com/content/3-terms-and-conditions-of-use
          - listitem [ref=e270]:
            - link "About us" [ref=e271]:
              - /url: https://automationpractice.techwithjatin.com/content/4-about-us
          - listitem [ref=e272]:
            - link "Sitemap" [ref=e273]:
              - /url: https://automationpractice.techwithjatin.com/sitemap
      - link "© 2026 - Ecommerce software by PrestaShop™" [ref=e276]:
        - /url: http://www.prestashop.com
      - generic [ref=e277]:
        - heading "My account" [level=4] [ref=e278] [cursor=pointer]:
          - link "My account" [ref=e279]:
            - /url: https://automationpractice.techwithjatin.com/my-account
        - list [ref=e281]:
          - listitem [ref=e282]:
            - link "My orders" [ref=e283]:
              - /url: https://automationpractice.techwithjatin.com/order-history
          - listitem [ref=e284]:
            - link "My credit slips" [ref=e285]:
              - /url: https://automationpractice.techwithjatin.com/credit-slip
          - listitem [ref=e286]:
            - link "My addresses" [ref=e287]:
              - /url: https://automationpractice.techwithjatin.com/addresses
          - listitem [ref=e288]:
            - link "My personal info" [ref=e289]:
              - /url: https://automationpractice.techwithjatin.com/identity
      - generic [ref=e291]:
        - heading "Store Information" [level=4] [ref=e292] [cursor=pointer]
        - list [ref=e293]:
          - listitem [ref=e294]:
            - generic [ref=e295]: 
            - text: My Company, 42 Puffin street 12345 Puffinville France
          - listitem [ref=e296]:
            - generic [ref=e297]: 
            - text: "Call us now: 0123-456-789"
          - listitem [ref=e298]:
            - generic [ref=e299]: 
            - text: "Email:"
            - link "sales@yourcompany.com" [ref=e301]:
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
  59 |        // await expect(this.searchButton).toBeVisible();
  60 | 
  61 |         await expect(this.cart).toBeVisible();
  62 | 
> 63 |         await expect(this.womenMenu).toBeVisible();
     |                                      ^ Error: expect(locator).toBeVisible() failed
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