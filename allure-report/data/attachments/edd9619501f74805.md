# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorInfo.spec.js >> test vendor info page >> check blank official name @functional @regresstion
- Location: tests\vendorInfo.spec.js:26:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://202.126.124.194:8264/vendor-management/vendor-information-add"
Received: "http://202.126.124.194:8264/vendor-management/vendor-information-list"
Timeout:  120000ms

Call log:
  - Expect "toHaveURL" with timeout 120000ms
    223 × unexpected value "http://202.126.124.194:8264/vendor-management/vendor-information-list"

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
  - button "email 2":
    - link "email 2":
      - /url: /dashboard-bl-content/notification-list
      - img "email"
      - text: "2"
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
        - link "Vendor Management - Vendor Information":
          - /url: javascript:void(0)
      - listitem: / List
  - button "Add New Vendor"
  - button " Download Vendor List"
  - table:
    - rowgroup:
      - row "SL No. Vendor Code(ESS) Vendor Name Address Key Contact Enlisted Date Created By Created Date Action":
        - columnheader "SL No.":
          - button "SL No."
        - columnheader "Vendor Code(ESS)":
          - button "Vendor Code(ESS)"
        - columnheader "Vendor Name":
          - button "Vendor Name"
        - columnheader "Address":
          - button "Address"
        - columnheader "Key Contact":
          - button "Key Contact"
        - columnheader "Enlisted Date":
          - button "Enlisted Date"
        - columnheader "Created By":
          - button "Created By"
        - columnheader "Created Date":
          - button "Created Date"
        - columnheader "Action"
    - rowgroup:
      - row "1 1234 null test , Dhaka, DHAKA samiul 09 Jun 2026 HRM system user 09-Jun-2026  ":
        - cell "1"
        - cell "1234"
        - cell "null"
        - cell "test , Dhaka, DHAKA"
        - cell "samiul"
        - cell "09 Jun 2026"
        - cell "HRM system user"
        - cell "09-Jun-2026"
        - cell " ":
          - button ""
          - button ""
      - row "2 1234 null test , Dhaka, DHAKA samiul 09 Jun 2026 HRM system user 09-Jun-2026  ":
        - cell "2"
        - cell "1234"
        - cell "null"
        - cell "test , Dhaka, DHAKA"
        - cell "samiul"
        - cell "09 Jun 2026"
        - cell "HRM system user"
        - cell "09-Jun-2026"
        - cell " ":
          - button ""
          - button ""
      - row "3 1234 null test , Dhaka, GAZIPUR samiul 09 Jun 2026 HRM system user 09-Jun-2026  ":
        - cell "3"
        - cell "1234"
        - cell "null"
        - cell "test , Dhaka, GAZIPUR"
        - cell "samiul"
        - cell "09 Jun 2026"
        - cell "HRM system user"
        - cell "09-Jun-2026"
        - cell " ":
          - button ""
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
  19 |         await login.getvendorMgtlink();
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
> 34 |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-add');
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  35 |         console.log('Blank official name data is passed successfully.');
  36 |     })
  37 | })
```