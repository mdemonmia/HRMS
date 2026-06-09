import { test,expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { UserMgtPage } from "../pages/User";
import { UserLoginHistoryPage } from "../pages/UserLoginHistory";
import { testData } from "../fixtures/testData";

const data = new testData();

test.describe('test user login history',()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.Login(
            data.user_login.valid_login.username,
            data.user_login.valid_login.password
        )
        await login.clickMenuLink();

        const user =new UserMgtPage(page);
        await user.getUserMgtlink();

        const userlogin = new UserLoginHistoryPage(page);
        await userlogin.getUserLoginHistory();
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('check user type filter with valid data @functional @regression',async({page})=>{
        const userlogin = new UserLoginHistoryPage(page);
        await userlogin.getUserType(
            data.UserLoginHis.UserTypeName.userType
        );

        const tcount = await userlogin.getTotalcount();
        await expect(await userlogin.totalCount()).toHaveText(tcount);
    })

    test('check user group filter with valid data @functional @regression',async({page})=>{
        const userlogin = new UserLoginHistoryPage(page);
        await userlogin.getUserGroup(
            data.UserLoginHis.UserGroupName.userGroup
        );

        const tcount = await userlogin.getTotalcount();
        await expect(await userlogin.totalCount()).toHaveText(tcount);
    })

    test('check user org div position filter with valid data @functional @regression',async({page})=>{
        const userlogin = new UserLoginHistoryPage(page);
        await userlogin.getOrgDivPos(
            data.UserLoginHis.OrgDivPosName.orgDivPos
        );
        await page.waitForTimeout(3000);
        const tcount = await userlogin.getTotalcount();
        await expect(await userlogin.totalCount()).toHaveText(tcount);
    })

    test('check user name filter with valid data @functional @regression',async({page})=>{
        const userlogin = new UserLoginHistoryPage(page);
        await userlogin.getUserNamePhone(
            data.UserLoginHis.UserNamePhoneName.userNamePhone
        );
        await page.waitForTimeout(3000);
        const tcount = await userlogin.getTotalcount();
        await expect(await userlogin.totalCount()).toHaveText(tcount);
    })

    test('check user start date and end date filter with valid data @functional @regression',async({page})=>{
        const userlogin = new UserLoginHistoryPage(page);
        await userlogin.getDatefilter(
            data.UserLoginHis.dateFilter
        );
        await userlogin.getSearchBtn();
        await page.waitForTimeout(3000);
        const tcount = await userlogin.getTotalcount();
        await expect(await userlogin.totalCount()).toHaveText(tcount);
        console.log('count: ',tcount);
        await userlogin.getResetBtn();
        await page.waitForTimeout(3000);
    })

})