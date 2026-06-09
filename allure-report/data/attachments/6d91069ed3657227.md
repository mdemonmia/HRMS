# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.spec.js >> test user management page >> check first name with invalid data
- Location: tests\user.spec.js:28:9

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('#userFName')
Expected pattern: /ng-pristine/
Received string:  "form-control ng-invalid ng-touched is-invalid ng-dirty"
Timeout: 120000ms

Call log:
  - Expect "toHaveClass" with timeout 120000ms
  - waiting for locator('#userFName')
    138 × locator resolved to <input type="text" id="userFName" name="userFName" formcontrolname="userFName" _ngcontent-ng-cli-universal-c4118926259="" class="form-control ng-invalid ng-touched is-invalid ng-dirty"/>
        - unexpected value "form-control ng-invalid ng-touched is-invalid ng-dirty"

```

```yaml
- textbox "First Name:*"
```

# Test source

```ts
  1   | import { test,expect } from '@playwright/test';
  2   | import { LoginPage } from '../pages/LoginPage';
  3   | import { UserMgtPage } from '../pages/User';
  4   | import { testData } from '../fixtures/testData';
  5   | 
  6   | const data = new testData();
  7   | 
  8   | test.describe('test user management page',()=>{
  9   |     test.beforeEach(async({page})=>{
  10  |         const login = new LoginPage(page);
  11  |         await login.goto(data.url);
  12  |         await login.Login(
  13  |             data.user_login.valid_login.username,
  14  |             data.user_login.valid_login.password
  15  |         )
  16  |         await login.clickMenuLink();
  17  | 
  18  |         const user = new UserMgtPage(page);
  19  |         await user.getUserMgtlink();
  20  |         await user.getUserlink();
  21  |         
  22  |     })
  23  | 
  24  |     test.afterEach(async({page})=>{
  25  |         await page.close();
  26  |     })
  27  | 
  28  |     test('check first name with invalid data',async({page})=>{
  29  |         const user = new UserMgtPage(page);
  30  |         await user.getAddUserBtn();
  31  |         await user.getUserMgt(
  32  |             data.user_form.invalid_fname_form
  33  |         );
  34  |         await user.getSaveBtnandExceptdialog();
> 35  |         await expect(user.firstName).toHaveClass(/ng-pristine/);
      |                                      ^ Error: expect(locator).toHaveClass(expected) failed
  36  |     })
  37  | 
  38  |     
  39  |     test('check last name with invalid data',async({page})=>{
  40  |         const user = new UserMgtPage(page);
  41  |         await user.getAddUserBtn();
  42  |         await user.getUserMgt(
  43  |             data.user_form.invalid_lname_form
  44  |         );
  45  | 
  46  |         await user.getSaveBtnandConfirm();
  47  |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
  48  |         //if duplicate found
  49  |         //await expect(page).toHaveURL('http://202.126.124.194:8264/users/add');
  50  |     });
  51  |     test('check the role with invalid data',async({page})=>{
  52  |         const user = new UserMgtPage(page);
  53  |         await user.getAddUserBtn();
  54  |         await user.getUserMgt(
  55  |             data.user_form.invalid_role_form
  56  |         );
  57  |         await user.getSaveBtnandExceptdialog();
  58  |         const checkRole = user.urole.locator('input')
  59  |         await expect(checkRole).toHaveCount(8);
  60  |     })
  61  | 
  62  |     test('check the usertype with invalid data',async({page})=>{
  63  |         const user = new UserMgtPage(page);
  64  |         await user.getAddUserBtn();
  65  |         await user.getUserMgt(
  66  |             data.user_form.invalid_utype_form
  67  |         );
  68  |         await user.getSaveBtnandExceptdialog();
  69  |         await expect(user.uType).toHaveClass(/ng-pristine/);
  70  |     })
  71  |     
  72  | 
  73  |     test('checked org division with invalid data',async({page})=>{
  74  |         const user = new UserMgtPage(page);
  75  |         await user.getAddUserBtn();
  76  |         await user.getUserMgt(
  77  |             data.user_form.invalid_orgdiv_form
  78  |         );
  79  |         await user.getSaveBtnandExceptdialog();
  80  |         await expect(user.orgDiv).toHaveClass(/ng-pristine/);   
  81  |     })
  82  | 
  83  |     test('checked dept with invalid data',async({page})=>{
  84  |         const user = new UserMgtPage(page);
  85  |         await user.getAddUserBtn();
  86  |         await user.getUserMgt(
  87  |             data.user_form.invalid_dept_form
  88  |         );
  89  |         await user.getSaveBtnandConfirm();
  90  |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');  
  91  |         //if duplicate found
  92  |         //await expect(page).toHaveURL('http://202.126.124.194:8264/users/add');
  93  |     })
  94  | 
  95  |     test('check position with invalid data',async({page})=>{
  96  |         const user = new UserMgtPage(page);
  97  |         await user.getAddUserBtn();
  98  |         await user.getUserMgt(
  99  |             data.user_form.invalid_position_form
  100 |         );
  101 |         await user.getSaveBtnandConfirm();
  102 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
  103 |     })
  104 | 
  105 |     test('check email with invalid data',async({page})=>{
  106 |         const user = new UserMgtPage(page);
  107 |         await user.getAddUserBtn();
  108 |         await user.getUserMgt(
  109 |             data.user_form.invalid_email_form
  110 |         );
  111 |         await user.getSaveBtnandExceptdialog();
  112 |         await expect(user.Email).toHaveClass(/ng-invalid/);
  113 |     })
  114 | 
  115 |     test('check phone number with invalid data',async({page})=>{
  116 |         const user = new UserMgtPage(page);
  117 |         await user.getAddUserBtn();
  118 |         await user.getUserMgt(
  119 |             data.user_form.invalid_Phone_form
  120 |         );
  121 |         await user.getSaveBtnandExceptdialog();
  122 |         await expect(user.Phone).toHaveClass(/ng-invalid/);
  123 |     })
  124 | 
  125 |     test('check user id with invalid data',async({page})=>{
  126 |         const user = new UserMgtPage(page);
  127 |         await user.getAddUserBtn();
  128 |         await user.getUserMgt(
  129 |             data.user_form.invalid_userid_form
  130 |         );
  131 |         await user.getSaveBtnandExceptdialog();
  132 |         await expect(user.Userid).toHaveClass(/ng-invalid/);
  133 |     })
  134 | 
  135 |     test('check password with invalid data',async({page})=>{
```