# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.spec.js >> test user management page >> check last name with invalid data
- Location: tests\user.spec.js:38:10

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://202.126.124.194:8264/users/list"
Received: "http://202.126.124.194:8264/users/add"
Timeout:  120000ms

Call log:
  - Expect "toHaveURL" with timeout 120000ms
    234 × unexpected value "http://202.126.124.194:8264/users/add"

```

```yaml
- dialog:
  - img
  - heading "Are you sure you want to save this?" [level=4]
  - button "No"
  - button "Yes"
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
  35 |         await expect(user.firstName).toHaveClass(/ng-invalid/);
  36 |     })
  37 | 
  38 |     test.only('check last name with invalid data',async({page})=>{
  39 |         const user = new UserMgtPage(page);
  40 |         await user.getAddUserBtn();
  41 |         await user.getUserMgt(
  42 |             data.user_form.invalid_lname_form
  43 |         );
  44 |         await user.getSaveBtnandConfirm();
> 45 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  46 |     })
  47 | })
```