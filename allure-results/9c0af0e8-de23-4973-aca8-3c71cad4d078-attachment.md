# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> API দেখি
- Location: tests\vendorAgreement.spec.js:37:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/users
Call log:
  - navigating to "http://localhost:3000/users", waiting until "load"

```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { VendorAgreementPage } from '../pages/vendorAgreement';
  4  | import { testData } from '../fixtures/testData';
  5  | import { inspectAPI } from '../utils/helpers';
  6  | 
  7  | const data = new testData();
  8  | test.describe('test vendor agreement page',()=>{
  9  |   test.beforeEach(async({page})=>{
  10 |     const login = new LoginPage(page);
  11 |     await login.goto(data.url);
  12 |     await login.Login(
  13 |         data.user_login.valid_login.username,
  14 |         data.user_login.valid_login.password
  15 |     )
  16 | 
  17 |     await login.clickMenuLink();
  18 |     await login.getvendorMgtlink();
  19 |   })
  20 | 
  21 |   test.afterEach(async({page})=>{
  22 |     await page.close();
  23 |   })
  24 | 
  25 |   test('check blank select vendor @functional',async({page})=>{
  26 |     const vndragrmt = new VendorAgreementPage(page);
  27 |     await vndragrmt.getvndrAgreementLink();
  28 |     await vndragrmt.getAddvndrAgreementBtn();
  29 |     await vndragrmt.getvendrAgreementForm(
  30 |         data.vndragrmntForm.blank_svndr_name
  31 |     )
  32 |     await vndragrmt.getSaveBtn();
  33 |     await expect(vndragrmt.selectvndr).toHaveClass(/is-invalid/);
  34 | 
  35 |   })
  36 | 
  37 |   test('API দেখি', async ({ page }) => {
  38 |   await inspectAPI(page, '/api/users');  // আপনার API path দিন
> 39 |   await page.goto('http://localhost:3000/users');  // আপনার page এর URL দিন
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/users
  40 |   });
  41 | 
  42 | })
  43 | 
```