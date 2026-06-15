import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../fixtures/testData';
import { JobDescriptionPage } from '../pages/JobDescription';

const data = new testData();

test.describe('test job description page',()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.Login(
            data.user_login.valid_login.username,
            data.user_login.valid_login.password
        )
        await login.clickMenuLink();
        await login.getJDMenu();
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('check blank all the field @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankjobdesc
        )
        console.log('save button is disabled.');
        await jobdesc.getCancelBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('cancel button clicked and redirected to job description list page.');
    })

    test('check blank organization division name @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankorgdiv
        )
        await jobdesc.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-add');
        console.log('organization division is blank and could not be passed successfully.');
    })

    test('check blank department name @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankdept
        )
        await jobdesc.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-add');
        console.log('organization division is blank and could not be passed successfully.');
    })

    test('check blank position name @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankposition
        )
        await jobdesc.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-add');
        console.log('organization division is blank and could not be passed successfully.');
    })

    test('check blank job description name @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankjdescript
        )
        console.log('save button is disabled.');
        await jobdesc.getCancelBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('cancel button clicked and redirected to job description list page.');
    })

    test('check blank job responsibility name @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankresponse
        )
        console.log('save button is disabled.');
        await jobdesc.getCancelBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('cancel button clicked and redirected to job description list page.');
    })

    test('check blank job experience name @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankexp
        )
        console.log('save button is disabled.');
        await jobdesc.getCancelBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('cancel button clicked and redirected to job description list page.');
    })

    test('check blank job qualification name @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankqualif
        )
        console.log('save button is disabled.');
        await jobdesc.getCancelBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('cancel button clicked and redirected to job description list page.');
    })

    test('check blank job skill name @functional',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.blankskill
        )
        console.log('save button is disabled.');
        await jobdesc.getCancelBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('cancel button clicked and redirected to job description list page.');
    })

    test('check valid all field with click delete button @functional @regression',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.validjobdesc
        )
        await jobdesc.getSaveBtn();
        await page.waitForTimeout(5000);
        await jobdesc.getDeleteBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('click delete button and redirected to job description list page.');
    })

    test('check valid all field with click edit button and blank orgdiv @functional @regression',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getAddJD();
        await jobdesc.getjdForm(
            data.jobdescdata.validjobdesc1
        )
        await jobdesc.getSaveBtn();
        await page.waitForTimeout(5000);
        await jobdesc.getEditBtn();
        await jobdesc.getjdForm(
            data.updatejobdescdata.updatejdescript
        )
        await jobdesc.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('click edit button and blank orgdic and redirected to job description list page.');
    })

    test('check Delete row data @functional @regression',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getDeleteRowBtn(
            data.Deleterowdata.DeleteRow.dltname
        );
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
        console.log('click delete button and redirected to job description list page.');
    })

    test.only('check view row data @functional @regression',async({page})=>{
        const jobdesc = new JobDescriptionPage(page);
        await jobdesc.getJDLink();
        await jobdesc.getViewBtn(
            data.viewrowdata.viewRow.vrname
        );
        await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/job-description-submit-view');
        console.log('click view button and redirected to job description list page.');
    })

    

})
