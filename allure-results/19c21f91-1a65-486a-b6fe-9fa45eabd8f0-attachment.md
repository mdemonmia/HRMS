# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendor.spec.js >> test vendor user login management page. >> check first name with invalid data
- Location: tests\vendor.spec.js:28:9

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator:  locator('#userFName')
Expected: "/ng-invalid/"
Received: "form-control ng-pristine ng-invalid ng-touched is-invalid"
Timeout:  120000ms

Call log:
  - Expect "toHaveClass" with timeout 120000ms
  - waiting for locator('#userFName')
    237 × locator resolved to <input type="text" id="userFName" name="userFName" formcontrolname="userFName" _ngcontent-ng-cli-universal-c1859390029="" class="form-control ng-pristine ng-invalid ng-touched is-invalid"/>
        - unexpected value "form-control ng-pristine ng-invalid ng-touched is-invalid"

```

```yaml
- textbox "First Name:*"
```

# Test source

```ts
  1  | import { test,expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { UserMgtPage } from "../pages/User";
  4  | import { VendorMgtPage } from "../pages/vendor";
  5  | import { testData } from "../fixtures/testData";    
  6  | 
  7  | const data = new testData();
  8  | test.describe('test vendor user login management page.', ()=>{
  9  |     test.beforeEach(async({page})=>{
  10 |         const login = new LoginPage(page);
  11 |         await login.goto(data.url);
  12 |         await login.Login(
  13 |             data.user_login.valid_login.username,
  14 |             data.user_login.valid_login.password
  15 |         )
  16 |         await login.clickMenuLink();
  17 | 
  18 |         const user = new UserMgtPage(page);
  19 |         await user.getUserMgtlink();
  20 |         await user.getVendorlink();
  21 |         
  22 |     })
  23 | 
  24 |     test.afterEach(async({page})=>{
  25 |         await page.close();
  26 |     })
  27 | 
  28 |     test('check first name with invalid data',async({page})=>{
  29 |         const vendor = new VendorMgtPage(page);
  30 |         await vendor.getAddvendor();
  31 |         await vendor.getVendorForm(
  32 |             data.vendor_user.invalid_fname_form
  33 |         )
  34 |         await vendor.getSaveandError();
> 35 |         await expect(vendor.firstName).toHaveClass('/ng-invalid/');
     |                                        ^ Error: expect(locator).toHaveClass(expected) failed
  36 |     })
  37 | })
  38 | 
```