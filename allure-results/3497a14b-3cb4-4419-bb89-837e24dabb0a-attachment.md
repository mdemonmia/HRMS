# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check blank document name vendor agreement @functional
- Location: tests\vendorAgreement.spec.js:39:8

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('#vendorId')
Expected pattern: /ng-invalid/
Received string:  "form-control form-select ng-untouched ng-valid ng-dirty"
Timeout: 120000ms

Call log:
  - Expect "toHaveClass" with timeout 120000ms
  - waiting for locator('#vendorId')
    236 × locator resolved to <select id="vendorId" name="vendorId" formcontrolname="vendorId" _ngcontent-ng-cli-universal-c3122452805="" class="form-control form-select ng-untouched ng-valid ng-dirty">…</select>
        - unexpected value "form-control form-select ng-untouched ng-valid ng-dirty"

```

```yaml
- combobox "Vendor*":
  - option "Select Vendor" [disabled]
  - option "NA"
  - option "exctest"
  - option "ArenaBD" [selected]
  - option "ArenaBD"
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
  33 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-add');
  34 |     console.log('duplicate name entry.')
  35 |     //await expect(vndragrmt.selectvndr).toHaveClass(/ng-invalid/);
  36 | 
  37 |   })
  38 | 
  39 |   test.only('check blank document name vendor agreement @functional',async({page})=>{
  40 |     const vndragrmt = new VendorAgreementPage(page);
  41 |     await vndragrmt.getvndrAgreementLink();
  42 |     await vndragrmt.getAddvndrAgreementBtn();
  43 |     await vndragrmt.getvendrAgreementForm(
  44 |         data.vndragrmntForm.blank_doc_name
  45 |     )
  46 |     await vndragrmt.getSaveBtn();
> 47 |     await expect(vndragrmt.selectvndr).toHaveClass(/ng-invalid/);
     |                                        ^ Error: expect(locator).toHaveClass(expected) failed
  48 |     console.log('document name is blank.')
  49 | 
  50 |   })
  51 | 
  52 |   // test('API দেখি', async ({ page }) => {
  53 |   // await inspectAPI(page, '/api/users');  // আপনার API path দিন
  54 |   // await page.goto('http://localhost:3000/users');  // আপনার page এর URL দিন
  55 |   // });
  56 | 
  57 | })
  58 | 
```