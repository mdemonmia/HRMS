# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> login page test >> check invalid user name
- Location: tests\Login.spec.js:17:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Invalid user name or password."
Received: " Invalid user name or password. "
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';;
  2  | import { LoginPage } from '../pages/LoginPage'; 
  3  | import { testData } from '../fixtures/testData';
  4  | 
  5  | const data = new testData();
  6  | 
  7  | test.describe('login page test', ()=>{
  8  |     test.beforeEach(async({page})=>{
  9  |         const login = new LoginPage(page);
  10 |         await login.goto(data.url);
  11 |     })
  12 | 
  13 |     test.afterEach(async({page})=>{
  14 |         await page.close();
  15 |     })
  16 | 
  17 |     test('check invalid user name',async({page})=>{
  18 |         const login = new LoginPage(page);
  19 |         await login.Login(
  20 |             data.user_login.invalid_username.username,
  21 |             data.user_login.invalid_username.password
  22 |         )
  23 |         const errormsg = await login.getErrorMsg();
> 24 |         expect(errormsg).toBe('Invalid user name or password.');
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  25 |     })
  26 | 
  27 | })
```