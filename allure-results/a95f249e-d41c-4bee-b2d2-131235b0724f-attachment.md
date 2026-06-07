# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UserLoginHistory.spec.js >> test user login history >> check user org div position filter with valid data @functional @regression
- Location: tests\UserLoginHistory.spec.js:50:10

# Error details

```
TypeError: Cannot read properties of undefined (reading 'totalcount')
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
  30 |     test('check user type filter with valid data @functional @regression',async({page})=>{
  31 |         const userlogin = new UserLoginHistoryPage(page);
  32 |         await userlogin.getUserType(
  33 |             data.UserLoginHis.UserTypeName.userType
  34 |         );
  35 | 
  36 |         const tcount = await userlogin.getTotalcount();
  37 |         await expect(await userlogin.totalCount()).toHaveText(tcount);
  38 |     })
  39 | 
  40 |     test('check user group filter with valid data @functional @regression',async({page})=>{
  41 |         const userlogin = new UserLoginHistoryPage(page);
  42 |         await userlogin.getUserGroup(
  43 |             data.UserLoginHis.UserGroupName.userGroup
  44 |         );
  45 | 
  46 |         const tcount = await userlogin.getTotalcount();
  47 |         await expect(await userlogin.totalCount()).toHaveText(tcount);
  48 |     })
  49 | 
  50 |     test.only('check user org div position filter with valid data @functional @regression',async({page})=>{
  51 |         const userlogin = new UserLoginHistoryPage(page);
  52 |         await userlogin.getOrgDivPos(
  53 |             data.UserLoginHis.OrgDivPosName.orgDivPos
  54 |         );
> 55 |         await this.totalcount.waitFor({state: 'visible'});
     |                    ^ TypeError: Cannot read properties of undefined (reading 'totalcount')
  56 |         const tcount = await userlogin.getTotalcount();
  57 |         await expect(await userlogin.totalCount()).toHaveText(tcount);
  58 |     })
  59 | 
  60 | })
```