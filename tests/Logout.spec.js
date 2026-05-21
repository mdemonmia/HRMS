import{ test,expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../fixtures/testData';

const data = new testData();
test.describe('test logout page',()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.Login(
            data.user_login.valid_login.username,
            data.user_login.valid_login.password
        )
        await page.waitForSelector("//button[@id='page-header-user-dropdown']");
        
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('check logout',async({page})=>{
        const login = new LoginPage(page);
        await login.logout();
        await page.waitForURL('http://202.126.124.194:8264/logout',{timeout: 140000});
        await expect(page).toHaveURL('http://202.126.124.194:8264/logout');
    })
})