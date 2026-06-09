# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendor.spec.js >> test vendor user login management page. >> check first name with invalid data
- Location: tests\vendor.spec.js:27:9

# Error details

```
ReferenceError: VendorMgtPage is not defined
```

# Test source

```ts
  1  | import { test,expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { UserMgtPage } from "../pages/User";
  4  | import { testData } from "../fixtures/testData";    
  5  | 
  6  | const data = new testData();
  7  | test.describe('test vendor user login management page.', ()=>{
  8  |     test.beforeEach(async({page})=>{
  9  |         const login = new LoginPage(page);
  10 |         await login.goto(data.url);
  11 |         await login.Login(
  12 |             data.user_login.valid_login.username,
  13 |             data.user_login.valid_login.password
  14 |         )
  15 |         await login.clickMenuLink();
  16 | 
  17 |         const user = new UserMgtPage(page);
  18 |         await user.getUserMgtlink();
  19 |         await user.getVendorlink();
  20 |         
  21 |     })
  22 | 
  23 |     test.afterEach(async({page})=>{
  24 |         await page.close();
  25 |     })
  26 | 
  27 |     test('check first name with invalid data',async({page})=>{
> 28 |         const vendor = new VendorMgtPage(page);
     |                        ^ ReferenceError: VendorMgtPage is not defined
  29 |         await vendor.getAddvendor();
  30 |         await vendor.getVendorForm(
  31 |             data.vendor_user.invalid_fname_form
  32 |         )
  33 |         await vendor.getSaveandError();
  34 |         await expect(vendor.firstName).toHaveClass('ng-invalid');
  35 |     })
  36 | })
  37 | 
```