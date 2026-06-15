import { expect,test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { VendorAgreementPage } from '../pages/vendorAgreement';
import { testData } from '../fixtures/testData';
import { inspectAPI } from '../utils/helpers';

const data = new testData();
test.describe('test vendor agreement page',()=>{
  test.beforeEach(async({page})=>{
    const login = new LoginPage(page);
    await login.goto(data.url);
    await login.Login(
        data.user_login.valid_login.username,
        data.user_login.valid_login.password
    )

    await login.clickMenuLink();
    await login.getvendorMgtlink();
  })

  test.afterEach(async({page})=>{
    await page.close();
  })

  test('check blank select vendor @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getAddvndrAgreementBtn();
    await vndragrmt.getvendrAgreementForm(
        data.vndragrmntForm.blank_svndr_name
    )
    await vndragrmt.getSaveBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-add');
    console.log('duplicate name entry.')
    //await expect(vndragrmt.selectvndr).toHaveClass(/ng-invalid/);

  })

  test('check blank document name vendor agreement @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getAddvndrAgreementBtn();
    await vndragrmt.getvendrAgreementForm(
        data.vndragrmntForm.blank_doc_name
    )
    await vndragrmt.getSaveBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    console.log('Data is saved successfully.');
    // await expect(vndragrmt.selectvndr).toHaveClass(/ng-invalid/);
    // console.log('document name is blank.')

  })

  test('check blank file name vendor agreement @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getAddvndrAgreementBtn();
    await vndragrmt.getvendrAgreementForm(
        data.vndragrmntForm.blank_file_name
    )
    await vndragrmt.getSaveBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    console.log('Data is saved successfully.');
    // await expect(vndragrmt.selectvndr).toHaveClass(/ng-invalid/);
    // console.log('document name is blank.')

  })

  test('check blank singing date vendor agreement @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getAddvndrAgreementBtn();
    await vndragrmt.getvendrAgreementForm(
        data.vndragrmntForm.blank_sdate_name
    )
    await vndragrmt.getsaveBtnwithnomsg();
    // await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    // console.log('Data is saved successfully.');
    await expect(vndragrmt.singingdate).toHaveClass(/ng-invalid/);
    console.log('singing date is blank.');

  })

  test('check blank duration vendor agreement @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getAddvndrAgreementBtn();
    await vndragrmt.getvendrAgreementForm(
        data.vndragrmntForm.blank_duration_name
    )
    await vndragrmt.getsaveBtnwithnomsg();
    // await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    // console.log('Data is saved successfully.');
    await expect(vndragrmt.duration).toHaveClass(/ng-invalid/);
    console.log('duration is blank.');

  })

  test('check valid all field vendor agreement @functional @regression',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getAddvndrAgreementBtn();
    await vndragrmt.getvendrAgreementForm(
        data.vndragrmntForm.valid_all_field_name
    )
    await vndragrmt.getSaveBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    console.log('Data is saved successfully.');
  })

  test('check view vendor agreement @functional @regression',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getViewBtn(
        data.viewvndragrmentForm.viewvndragrmntBtn.vname
    );
   
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list/MTE');
    await page.waitForTimeout(5000);
    console.log('Data is showed successfully.');
  })

  test('check Edit select vendor agreement @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getEditBtn(
        data.EditvndragrmentForm.vndragrmntEditBtn.ename
    );
    await vndragrmt.getvendrAgreementForm(
        data.udatevndragrmntForm.changed_svndr_name 
    )
    await vndragrmt.getupdateBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    await page.waitForTimeout(5000);
    console.log('Data is updated successfully.');
  })

  test('check Edit doc name vendor agreement @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getEditBtn(
        data.EditvndragrmentForm.vndragrmntEditBtn.ename
    );
    await vndragrmt.getvendrAgreementForm(
        data.udatevndragrmntForm.blank_doc_name 
    )
    await vndragrmt.getupdateBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    await page.waitForTimeout(5000);
    console.log('Data is updated successfully.');
  })

  test('check Edit file name vendor agreement @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getEditBtn(
        data.EditvndragrmentForm.vndragrmntEditBtn.ename
    );
    await vndragrmt.getvendrAgreementForm(
        data.udatevndragrmntForm.blank_file_name 
    )
    await vndragrmt.getupdateBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    await page.waitForTimeout(5000);
    console.log('Data is updated successfully.');
  })

  test('check Edit siging date name vendor agreement @functional',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getEditBtn(
        data.EditvndragrmentForm.vndragrmntEditBtn.ename
    );
    await vndragrmt.getvendrAgreementForm(
        data.udatevndragrmntForm.blank_sdate_name 
    )
    await vndragrmt.getupdateBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    await page.waitForTimeout(5000);
    console.log('Data is updated successfully.');
  })

  test('check Edit duration name vendor agreement @functional ',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getEditBtn(
        data.EditvndragrmentForm.vndragrmntEditBtn.ename
    );
    await vndragrmt.getvendrAgreementForm(
        data.udatevndragrmntForm.blank_duration_name 
    )
    await vndragrmt.getUpdateBtnwithnomsg();
    await expect(vndragrmt.duration).toHaveClass(/ng-invalid/);
    console.log('duration is blank.');
  })

  test('check Edit all valid vendor agreement @functional @regression',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getEditBtn(
        data.EditvndragrmentForm.vndragrmntEditBtn.ename
    );
    await vndragrmt.getvendrAgreementForm(
        data.udatevndragrmntForm.valid_all_field_name 
    )
    await vndragrmt.getupdateBtn();
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    await page.waitForTimeout(5000);
    console.log('Data is updated successfully.');
  })

  test('check delete vendor agreement @functional @regression',async({page})=>{
    const vndragrmt = new VendorAgreementPage(page);
    await vndragrmt.getvndrAgreementLink();
    await vndragrmt.getDeleteBtn(
        data.DeletevndragrmentForm.vndragrmntDltBtn.dname
    );
    
    await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
    await page.waitForTimeout(5000);
    console.log('Data is deleted successfully.');
  })

  // test('API দেখি', async ({ page }) => {
  // await inspectAPI(page, '/api/users');  // আপনার API path দিন
  // await page.goto('http://localhost:3000/users');  // আপনার page এর URL দিন
  // });

})

