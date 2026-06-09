# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorInfo.spec.js >> test vendor info page >> check blank official name @functional @regresstion
- Location: tests\vendorInfo.spec.js:26:9

# Error details

```
TypeError: login.getvendorMgtlink is not a function
```

# Test source

```ts
  1  | import { test,expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { UserMgtPage } from "../pages/User";
  4  | import { VendorMgtPage } from "../pages/vendor";
  5  | import { VendorInfoPage } from "../pages/vendorInfo";
  6  | import { testData } from "../fixtures/testData";
  7  | 
  8  | const data = new testData();
  9  | 
  10 | test.describe('test vendor info page',()=>{
  11 |     test.beforeEach(async({page})=>{
  12 |         const login = new LoginPage(page);
  13 |         await login.goto(data.url);
  14 |         await login.Login(
  15 |             data.user_login.valid_login.username,
  16 |             data.user_login.valid_login.password
  17 |         )
  18 |         await login.clickMenuLink();
> 19 |         await login.getvendorMgtlink();
     |                     ^ TypeError: login.getvendorMgtlink is not a function
  20 |     })
  21 | 
  22 |     test.afterEach(async({page})=>{
  23 |         await page.close();
  24 |     })
  25 | 
  26 |     test('check blank official name @functional @regresstion',async({page})=>{
  27 |         const infovendor = new VendorInfoPage(page);
  28 |         await infovendor.getVendorInfoLink();
  29 |         await infovendor.getAddVendorBtn();
  30 |         await infovendor.getVendorForm(
  31 |             data.vendorinfodata.blankofclvendor
  32 |         )
  33 |         await infovendor.getSaveBtn();
  34 |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  35 |         console.log('Blank official name data is saved successfully.');
  36 |     })
  37 | })
```