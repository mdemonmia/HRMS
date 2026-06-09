import { test,expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { UserMgtPage } from "../pages/User";
import { VendorMgtPage } from "../pages/vendor";
import { VendorInfoPage } from "../pages/vendorInfo";
import { testData } from "../fixtures/testData";

const data = new testData();

test.describe('test vendor info page',()=>{
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

    test('check blank official name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankofclvendor
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('Blank official name data is passed successfully.');
    })

    test('check blank vendor short name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankvndrshname
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('Blank vendor short name data is passed successfully.');
    })

    test('check blank vendor code with zero name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankvndrcode
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('Blank vendor short name data is passed successfully.');
    })

    test('check blank division name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankvndrdiv
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('Blank vendor division name data is passed successfully.');
    })

    test('check blank district name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankvndrdist
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('Blank vendor district name data is passed successfully.');
    })

    test('check blank address name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankvndraddr
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('Blank vendor address name data is passed successfully.');
    })

    test('check blank key contact name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankvndrcontact
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('Blank vendor key contact name data is passed successfully.');
    })

    test('check blank key contact position name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankvndrcontactpos
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('Blank vendor key contact position name data is passed successfully.');
    })

    test('check blank Organization type name @functional',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.blankvndrorgtype
        )
        await infovendor.getSaveBtn();
        console.log('Blank vendor organization type name data is blank and could not be passed successfully.');
    })

    test('check vendor data name with valid data @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getAddVendorBtn();
        await infovendor.getVendorForm(
            data.vendorinfodata.validvndrinfo
        )
        await infovendor.getSaveBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with all fields are valid data and could be passed successfully.');
    })

    test('check update vendor name with blank official name @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.blankvndrofclinfo
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with blank official name is passed successfully.');
    })

    test('check update vendor name with blank short name @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.blankvndrshname
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with blank short name is passed successfully.');
    })

    test('check update vendor name with blank code name with zero @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.blankvndrcodename
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with blank short name is passed successfully.');
    })

    test('check update vendor name with blank division @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.blankvndrdivname
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with blank division name is passed successfully.');
    })

    test('check update vendor name with blank district @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.blankvndrdistname
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with blank district name is passed successfully.');
    })

    // test('check update vendor name with blank address @functional @regresstion',async({page})=>{
    //     const infovendor = new VendorInfoPage(page);
    //     await infovendor.getVendorInfoLink();
    //     await infovendor.getEditBtn(
    //         data.update_vndrinfo_row_name.valid_row_name.name
    //     );
    //     await infovendor.getVendorForm(
    //         data.updatevendordata.blankvndraddrname
    //     )
    //     await infovendor.getUpdateBtn();
    //     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
    //     console.log('vendor data with blank address name is passed successfully.');
    // })

    test('check update vendor name with blank contact name @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.blankvndrcontactname
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with blank contact name is passed successfully.');
    })

    test('check update vendor name with blank contact position name @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.blankvndrcontactposname
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with blank contact position name is passed successfully.');
    })

    test('check update vendor name with blank organization name @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.blankvndrorgtypename
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor data with blank organization name is passed successfully.');
    })

    test('check update vendor name with valid data @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getEditBtn(
            data.update_vndrinfo_row_name.valid_row_name.name
        );
        await infovendor.getVendorForm(
            data.updatevendordata.validallvndrinfo
        )
        await infovendor.getUpdateBtn();
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor name with valid data is passed successfully.');
    })

    test('check delete vendor information data @functional @regresstion',async({page})=>{
        const infovendor = new VendorInfoPage(page);
        await infovendor.getVendorInfoLink();
        await infovendor.getDeleteBtn(
            data.delete_vndrinfo_row_name.delete_row_name.dltname
        );
        await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
        console.log('vendor information data is deleted successfully.');
    })
})