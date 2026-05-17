import { test,expect } from '@playwright/test';;
import { LoginPage } from '../pages/LoginPage'; 
import { testData } from '../fixtures/testData';

const data = new testData();

test.describe('login page test', ()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('check invalid user name',async({page})=>{
        const login = new LoginPage(page);
        await login.Login(
            data.user_login.invalid_username.username,
            data.user_login.invalid_username.password
        )
        const errormsg = await login.getErrorMsg();
        expect(errormsg).toBe('Invalid user name or password.');
    })

    test('check invalid password',async({page})=>{
        const login = new LoginPage(page);
        await login.Login(
            data.user_login.invalid_password.username,
            data.user_login.invalid_password.password
        )
        const error1 = await login.getErrorMsg();
        expect(error1).toBe('Invalid user name or password.');
    })

    test('check invalid username and password',async({page})=>{
        const login = new LoginPage(page);
        await login.Login(
            data.user_login.invalid_login.username,
            data.user_login.invalid_login.password
        )
        await login.getErrorMsg();
        const error2 = await login.getErrorMsg();
        expect(error2).toBe('Invalid user name or password.');
    })

    test('check valid login',async({page})=>{
        const login = new LoginPage(page);
        await login.Login(
            data.user_login.valid_login.username,
            data.user_login.valid_login.password
        )
       expect(await page).toHaveURL('http://202.126.124.194:8264/ologin');
    })

})