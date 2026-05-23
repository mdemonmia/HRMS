import { test,expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { UserMgtPage } from "../pages/User";
import { VendorMgtPage } from "../pages/vendor";
import { testData } from "../fixtures/testData";    

const data = new testData();
test.describe('test vendor user login management page.', ()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.Login(
            data.user_login.valid_login.username,
            data.user_login.valid_login.password
        )
        await login.clickMenuLink();

        const user = new UserMgtPage(page);
        await user.getUserMgtlink();
        await user.getVendorlink();
        
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('check first name with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_fname_form
        )
        await vendor.getSaveandError();
        await expect(vendor.firstName).toHaveClass(/ng-invalid/);
    })

    test('check last name with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_lname_form
        )
        await vendor.getSaveBtnandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
    })

    test('check dulicate vendor with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_vendor_form
        )
        await vendor.getSaveBtnandConfirm();
        await expect(vendor.vendorName).toHaveClass(/ng-pristine/);
        console.log('vendor is duplicate.');
    })

     test('check vendor with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_vendor_form
        )
        await vendor.getSaveandError();
        await expect(vendor.vendorName).toHaveClass(/ng-pristine/);
        console.log('vendor user is saved.');
    })

    test('check role with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_role_form
        )
        await vendor.getSaveandError();
        console.log('role is blank.please check the role.');
    })

    test('check email with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_email_form
        )
        await vendor.getSaveandError();
        await expect(vendor.Email).toHaveClass(/ng-invalid/);
        console.log('email is blank.please check the email.');
    })

    test('check phone with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_phone_form
        )
        await vendor.getSaveandError();
        await expect(vendor.Phone).toHaveClass(/ng-invalid/);
        console.log('Phone is blank.please check the Phone.');
    })

    test('check userid with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_userid_form
        )
        await vendor.getSaveandError();
        await expect(vendor.Userid).toHaveClass(/ng-invalid/);
        console.log('Userid is blank.please check the userid.');
    })

    test('check password with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_password_form
        )
        await vendor.getSaveandError();
        await expect(vendor.Password).toHaveClass(/ng-invalid/);
        console.log('Password is blank.please check the Password.');
    })

    test('check status with invalid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.invalid_status_form
        )
        await vendor.getSaveBtnandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
        console.log('status saved successfully.');
    })

    test('check vendor user with valid data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getAddvendor();
        await vendor.getVendorForm(
            data.vendor_user.valid_form
        )
        await vendor.getSaveBtnandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
        console.log('vendor user saved successfully.');
    })

    test('check first name with update data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getEditVendor(
            data.view_vendor_row.view_row_name.name
        );
        await vendor.getEditvendorForm(
            data.update_vendor_user.invalid_fname_vUser
        )
        await vendor.getUpdateandError();
        await expect(vendor.firstName).toHaveClass(/ng-invalid/);
        console.log('first name is blank.please check the first name.');
    })

    //ei test er firstname thik kore chalate hobe
    test('check vendor name with update data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getEditVendor(
            data.view_vendor_row.view_row_name.name
        );
        await vendor.getEditvendorForm(
            data.update_vendor_user.invalid_vendor_vUser
        )
        await vendor.getUpdateandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
        console.log('vendor name saved successfully.');
    })

    test('check role name with update data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getEditVendor(
            data.view_vendor_row1.view_row_name1.name
        );
        await vendor.getEditvendorForm(
            data.update_vendor_user.invalid_role_vUser
        )
        await vendor.getUpdateandError();
        console.log('role name is blank.');
    })

    test('check email name with update data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getEditVendor(
            data.view_vendor_row1.view_row_name1.name
        );
        await vendor.getEditvendorForm(
            data.update_vendor_user.invalid_email_vUser
        )
        await vendor.getUpdateandError();
        await expect(vendor.Email).toHaveClass(/ng-invalid/);
        console.log('Email name is blank.');
    })

    test('check Phone name with update data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getEditVendor(
            data.view_vendor_row1.view_row_name1.name
        );
        await vendor.getEditvendorForm(
            data.update_vendor_user.invalid_phone_vUser
        )
        await vendor.getUpdateandError();
        await expect(vendor.Phone).toHaveClass(/ng-invalid/);
        console.log('Phone name is blank.');
    })

    test('check Password name with update data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getEditVendor(
            data.view_vendor_row1.view_row_name1.name
        );
        await vendor.getEditvendorForm(
            data.update_vendor_user.invalid_password_vUser
        )
        await vendor.getUpdateandError();
        await expect(vendor.Password).toHaveClass(/ng-invalid/);
        console.log('Password name is blank.');
    })

    test('check status name with update data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getEditVendor(
            data.view_vendor_row1.view_row_name1.name
        );
        await vendor.getEditvendorForm(
            data.update_vendor_user.invalid_status_vUser
        )
        await vendor.getUpdateandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
        console.log('Status is saved successfully.');
    })

    test('check all valid field with update data',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getEditVendor(
            data.view_vendor_row1.view_row_name1.name
        );
        await vendor.getEditvendorForm(
            data.update_vendor_user.valid_vUser
        )
        await vendor.getUpdateandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
        console.log('Data is saved successfully.');
    })

    test('check username filter',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getFilter(
            data.name_filter.uname_filter_search.name
        );
        console.log('Username data is successfully shown.');
    })

    test('check system name filter',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getFilter(
            data.name_filter.sysname_filter_search.sysname
        );
        console.log('System name data is successfully shown.');
    })

    test('check phone number filter',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getFilter(
            data.name_filter.phone_filter_search.phone
        );
        console.log('Phone number data is successfully shown.');
    })

    test('check delete vendor user',async({page})=>{
        const vendor = new VendorMgtPage(page);
        await vendor.getDeleteConfirm(
            data.view_vendor_row1.view_row_name1.name
        );
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
        console.log('vendor user deleted successfully.');
    })

})
