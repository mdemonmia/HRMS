# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.spec.js >> test user management page >> check last name with invalid data
- Location: tests\user.spec.js:39:10

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://202.126.124.194:8264/users/list"
Received: "http://202.126.124.194:8264/users/add"
Timeout:  120000ms

Call log:
  - Expect "toHaveURL" with timeout 120000ms
    231 × unexpected value "http://202.126.124.194:8264/users/add"

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
  - button "HRM system user (SuperAdmin,Admin) 󰅀":
    - paragraph: HRM system user
    - paragraph: (SuperAdmin,Admin)
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
      - listitem:  Vendor Management
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
  - heading "User /Add" [level=3]
  - button "Back To List"
  - text: First Name:*
  - textbox "First Name:*": Abdullah
  - text: "Last Name:"
  - textbox "Last Name:"
  - text: User Role:*
  - checkbox
  - text: Default
  - checkbox
  - text: Default Reviewer
  - checkbox
  - text: Default Approver
  - checkbox [checked]
  - text: Admin
  - checkbox
  - text: HR Manager
  - checkbox
  - text: Accounts Manager
  - checkbox
  - text: HOD Approver
  - checkbox
  - text: Vendor Admin User Type:*
  - combobox:
    - option "Select User Type" [disabled]
    - option "Super Admin"
    - option "Management Employee Login"
    - option "General Employee Login"
    - option "Vendor Login" [selected]
  - text: Org. Division*
  - combobox "Default select example":
    - option "Select Division"
    - option "AD65 Digital marketing"
    - option "Arena Organic Food"
    - option "Arena Phone" [selected]
  - text: Department*
  - combobox "Default select example":
    - option "Select Department"
    - option "Accounts and Admin"
    - option "Business Development"
    - option "Educlerk"
    - option "Software Development" [selected]
    - option "Software Technical"
    - option "VAS Technical and Operation"
  - text: Position*
  - combobox "Default select example":
    - option "Select Position"
    - option "Project Consultant"
    - option "Software Engineer" [selected]
    - option "Sr. Analyst Programmer"
    - option "Sr. Software Engineer"
  - text: Email Address:*
  - textbox "Email Address:*": abdullah@gmail.com
  - text: Phone No:*
  - textbox "Phone No:*": "01754872541"
  - text: User ID:*
  - textbox "User ID:*": abdullah@system.user
  - text: Password:*
  - textbox "Password:*": ab_payroll_2026
  - text: Status*
  - combobox "Default select example":
    - option "Select Status"
    - option "NewCreate"
    - option "Active" [selected]
    - option "Inactive"
  - checkbox "Is Lm Hierarchical Data Access" [checked]
  - text: Is Lm Hierarchical Data Access
  - button "Save"
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { UserMgtPage } from '../pages/User';
  4  | import { testData } from '../fixtures/testData';
  5  | 
  6  | const data = new testData();
  7  | 
  8  | test.describe('test user management page',()=>{
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
  20 |         await user.getUserlink();
  21 |         
  22 |     })
  23 | 
  24 |     test.afterEach(async({page})=>{
  25 |         await page.close();
  26 |     })
  27 | 
  28 |     test('check first name with invalid data',async({page})=>{
  29 |         const user = new UserMgtPage(page);
  30 |         await user.getAddUserBtn();
  31 |         await user.getUserMgt(
  32 |             data.user_form.invalid_fname_form
  33 |         );
  34 |         await user.getSaveBtnandExceptdialog();
  35 |         await expect(user.firstName).toHaveClass(/ng-pristine/);
  36 |     })
  37 | 
  38 |     
  39 |     test.only('check last name with invalid data',async({page})=>{
  40 |         const user = new UserMgtPage(page);
  41 |         await user.getAddUserBtn();
  42 |         await user.getUserMgt(
  43 |             data.user_form.invalid_lname_form
  44 |         );
  45 | 
  46 |         await user.getSaveBtnandConfirm();
> 47 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  48 |     });
  49 |     test('check the role with invalid data',async({page})=>{
  50 |         const user = new UserMgtPage(page);
  51 |         await user.getAddUserBtn();
  52 |         await user.getUserMgt(
  53 |             data.user_form.invalid_role_form
  54 |         );
  55 |         await user.getSaveBtnandExceptdialog();
  56 |         const checkRole = user.urole.locator('input')
  57 |         await expect(checkRole).toHaveCount(8);
  58 |     })
  59 | 
  60 |     test('check the usertype with invalid data',async({page})=>{
  61 |         const user = new UserMgtPage(page);
  62 |         await user.getAddUserBtn();
  63 |         await user.getUserMgt(
  64 |             data.user_form.invalid_utype_form
  65 |         );
  66 |         await user.getSaveBtnandExceptdialog();
  67 |         await expect(user.uType).toHaveClass(/ng-pristine/);
  68 |     })
  69 |     
  70 | 
  71 |     test('checked org division with invalid data',async({page})=>{
  72 |         const user = new UserMgtPage(page);
  73 |         await user.getAddUserBtn();
  74 |         await user.getUserMgt(
  75 |             data.user_form.invalid_orgdiv_form
  76 |         );
  77 |         await user.getSaveBtnandExceptdialog();
  78 |         await expect(user.orgDiv).toHaveClass(/ng-pristine/);   
  79 |     })
  80 | 
  81 |     test('checked dept with invalid data',async({page})=>{
  82 |         const user = new UserMgtPage(page);
  83 |         await user.getAddUserBtn();
  84 |         await user.getUserMgt(
  85 |             data.user_form.invalid_dept_form
  86 |         );
  87 |         await user.getSaveBtnandConfirm();
  88 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');  
  89 |     })
  90 |     
  91 | })
```