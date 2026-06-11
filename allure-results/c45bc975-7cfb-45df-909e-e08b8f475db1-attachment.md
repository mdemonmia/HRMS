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
Timeout: 120000ms
Error: element(s) not found

Call log:
  - Expect "toHaveClass" with timeout 120000ms
  - waiting for locator('#vendorId')

```

```yaml
- banner:
  - img "Logo"
  - button "󰀓 Self"
  - button "home Home":
    - link "home Home":
      - /url: "javascript: void(0);"
      - img "home"
      - text: Home
  - button "email 4":
    - link "email 4":
      - /url: /dashboard-bl-content/notification-list
      - img "email"
      - text: "4"
  - button "HRM system user (SuperAdmin,Admin,Default) 󰅀":
    - paragraph: HRM system user
    - paragraph: (SuperAdmin,Admin,Default)
    - paragraph
    - text: 󰅀
  - button "":
    - link "":
      - /url: javascript:void(0)
- list:
  - listitem:
    - link " Dashboard":
      - /url: "javascript: void(0);"
  - navigation:
    - list:
      - listitem:  User Management
      - listitem:  Master Setup
      - listitem:  Commercial Info
      - listitem:
        - text:  Vendor Management
        - list:
          - listitem:
            - link "Vendor Information":
              - /url: /vendor-management/vendor-information-list
          - listitem:
            - link "Vendor Agreement":
              - /url: /vendor-management/vendor-agreement-list
      - listitem:  Job Description Management
      - listitem:  Requisition Management
      - listitem:  PO Management
      - listitem:  Employee Onboarding
      - listitem:  Employee Management
      - listitem:  Overtime Management
      - listitem:  Leave Management
      - listitem:  Attendance
      - listitem:  Calendar
      - listitem:  Asset Management
      - listitem:  Resignation Management
      - listitem:  Delegation Management
      - listitem:  Expense Management
      - listitem:  Salary Configuration
      - listitem:  Salary Disbursement
      - listitem:  KPI Management
      - listitem:  Report Management
      - listitem:  Configuration
      - listitem:  Loan Management
- main:
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Vendor Management - Vendor Agreement":
          - /url: javascript:void(0)
      - listitem: / List
  - button "Add New Agreement"
  - text: Search
  - textbox "Search":
    - /placeholder: "Search By: Vendor Name | Document Name"
  - text: Page Size
  - combobox "Page Size":
    - option "5"
    - option "10"
    - option "25"
    - option "50" [selected]
    - option "All"
  - paragraph: "Total : 1"
  - table:
    - rowgroup:
      - row "SL No Vendor Name Document Name Signing Date Duration(Years) Action":
        - columnheader "SL No":
          - button "SL No"
        - columnheader "Vendor Name":
          - button "Vendor Name"
        - columnheader "Document Name":
          - button "Document Name"
        - columnheader "Signing Date":
          - button "Signing Date"
        - columnheader "Duration(Years)":
          - button "Duration(Years)"
        - columnheader "Action"
    - rowgroup:
      - row "1 ArenaBD null 05 Jun 2026 5    ":
        - cell "1"
        - cell "ArenaBD"
        - cell "null"
        - cell "05 Jun 2026"
        - cell "5"
        - cell "   ":
          - button ""
          - button ""
          - button ""
          - button ""
  - list:
    - listitem:
      - link "«":
        - /url: ""
    - listitem:
      - link "‹":
        - /url: ""
    - listitem:
      - link "1":
        - /url: ""
    - listitem:
      - link "›":
        - /url: ""
    - listitem:
      - link "»":
        - /url: ""
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