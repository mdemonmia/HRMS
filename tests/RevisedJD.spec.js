import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RevisedJobDescriptionPage } from "../pages/RevisedJD";
import { testData } from "../fixtures/testData";

import { ApiHelper }from "../utils/helpers";

const data = new testData();

test.describe('Test Revised Job Description',()=>{

    test.beforeEach(async({page})=>{
        const login =new LoginPage(page);
        await login.goto(data.url);
        await login.Login(
            data.user_login.valid_login.username,
            data.user_login.valid_login.password
        );
        await login.clickMenuLink();
        await login.getJDMenu();
    });

    test.afterEach(async({page})=>{
        await page.close();
    })

    test.only('Update revised job description successfully with blank data @regression',async({page})=>{

        const revised =new RevisedJobDescriptionPage(page);
        await revised.getRevisedJDLink();
        await revised.getEditRowBtn(
            data.EditRJDdata.editrowdata.rowName
        );
        await revised.updateForm(
            data.revisedJDData.blankUpdate
        );
        const responseHelper = new ApiHelper(page);
        const responsePromise = responseHelper.interceptPutRequest(`/HrmJobDescription/Edit`);
        await revised.clickUpdate();
        const response =await responsePromise;
        await responseHelper.verifySuccessResponse(response);
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
    });

    // test('Blank Job Description Name validation @functional',async({page})=>{
    //     const revised =new RevisedJobDescriptionPage(page);
    //     await revised.getRevisedJDLink();
    //     await revised.getEditRowBtn(
    //         data.revisedJDRow.editRow.rowName
    //     );
    //     await revised.updateForm(
    //         data.revisedJDData.blankJobDescName
    //     );
    //     await expect(revised.updateBtn).toBeDisabled();
    // });

    // test(
    // 'Blank Responsibility validation @functional',
    // async({page})=>{

    //     const revised =
    //         new RevisedJobDescriptionPage(page);

    //     await revised.getRevisedJDLink();

    //     await revised.getEditRowBtn(
    //         data.revisedJDRow.editRow.rowName
    //     );

    //     await revised.updateForm(
    //         data.revisedJDData.blankResponsibility
    //     );

    //     await expect(
    //         revised.updateBtn
    //     ).toBeDisabled();
    // });

});