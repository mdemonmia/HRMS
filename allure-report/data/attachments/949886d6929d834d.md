# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UserLoginHistory.spec.js >> test user login history >> check user type filter with valid data @regression
- Location: tests\UserLoginHistory.spec.js:30:9

# Error details

```
Error: toHaveText can be only used with Locator object, was called with Promise Promise { <pending> }
```

# Test source

```ts
  1  | import { test,expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { UserMgtPage } from "../pages/User";
  4  | import { UserLoginHistoryPage } from "../pages/UserLoginHistory";
  5  | import { testData } from "../fixtures/testData";
  6  | 
  7  | const data = new testData();
  8  | 
  9  | test.describe('test user login history',()=>{
  10 |     test.beforeEach(async({page})=>{
  11 |         const login = new LoginPage(page);
  12 |         await login.goto(data.url);
  13 |         await login.Login(
  14 |             data.user_login.valid_login.username,
  15 |             data.user_login.valid_login.password
  16 |         )
  17 |         await login.clickMenuLink();
  18 | 
  19 |         const user =new UserMgtPage(page);
  20 |         await user.getUserMgtlink();
  21 | 
  22 |         const userlogin = new UserLoginHistoryPage(page);
  23 |         await userlogin.getUserLoginHistory();
  24 |     })
  25 | 
  26 |     test.afterEach(async({page})=>{
  27 |         await page.close();
  28 |     })
  29 | 
  30 |     test('check user type filter with valid data @regression',async({page})=>{
  31 |         const userlogin = new UserLoginHistoryPage(page);
  32 |         await userlogin.getUserType(
  33 |             data.UserLoginHis.UserTypeName.userType
  34 |         );
> 35 |         await expect(userlogin.getTotalcount()).toHaveText('Total : 20');
     |                                                 ^ Error: toHaveText can be only used with Locator object, was called with Promise Promise { <pending> }
  36 |     })
  37 | 
  38 | })
```