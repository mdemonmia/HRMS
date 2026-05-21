import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserMgtPage } from '../pages/User';
import { testData } from '../fixtures/testData';

const data = new testData();

test.describe('test user management page',()=>{
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
        await user.getUserlink();
        
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('check first name with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_fname_form
        );
        await user.getSaveBtnandExceptdialog();
        await expect(user.firstName).toHaveClass(/ng-invalid/);
    })

    
    test('check last name with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_lname_form
        );

        await user.getSaveBtnandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
        //if duplicate found
        //await expect(page).toHaveURL('http://202.126.124.194:8264/users/add');
    });
    test('check the role with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_role_form
        );
        await user.getSaveBtnandExceptdialog();
        const checkRole = user.urole.locator('input')
        await expect(checkRole).toHaveCount(8);
    })

    test('check the usertype with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_utype_form
        );
        await user.getSaveBtnandExceptdialog();
        await expect(user.uType).toHaveClass(/ng-pristine/);
    })
    

    test('checked org division with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_orgdiv_form
        );
        await user.getSaveBtnandExceptdialog();
        await expect(user.orgDiv).toHaveClass(/ng-pristine/);   
    })

    test('checked dept with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_dept_form
        );
        await user.getSaveBtnandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');  
        //if duplicate found
        //await expect(page).toHaveURL('http://202.126.124.194:8264/users/add');
    })

    test('check position with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_position_form
        );
        await user.getSaveBtnandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
    })

    test('check email with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_email_form
        );
        await user.getSaveBtnandExceptdialog();
        await expect(user.Email).toHaveClass(/ng-invalid/);
    })

    test('check phone number with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_Phone_form
        );
        await user.getSaveBtnandExceptdialog();
        await expect(user.Phone).toHaveClass(/ng-invalid/);
    })

    test('check user id with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_userid_form
        );
        await user.getSaveBtnandExceptdialog();
        await expect(user.Userid).toHaveClass(/ng-invalid/);
    })

    test('check password with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_password_form
        );
        await user.getSaveBtnandExceptdialog();
        await expect(user.Password).toHaveClass(/ng-invalid/);
    })

    test('check status with invalid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.invalid_status_form
        );
        await user.getSaveBtnandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
    })

    test('check all field with valid data',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getAddUserBtn();
        await user.getUserMgt(
            data.user_form.valid_form
        );
        await user.getSaveBtnandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
    })

    test('check view button working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getViewBtn(data.view_row.view_row_name.name);
    })

    test('check edit blank password working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getEditBtn(
            data.view_row.view_row_name.name
        );

        await user.getEdituser(
            data.edit_user.edit_blank_password
        );
        await user.getupdateandExit();
        const blPass = await page.locator('#userPassword');
        await expect(blPass).toHaveValue('');
        console.log('password is blank.');
    })

    test('check edit status working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getEditBtn(
            data.view_row.view_row_name.name
        );

        await user.getEdituser(
            data.edit_user.edit_blank_status
        );
        await user.getupdateandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
    })

    test('check edit valid data working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getEditBtn(
            data.view_row.view_row_name.name
        );

        await user.getEdituser(
            data.edit_user.edit_valid_data
        );
        await user.getupdateandConfirm();
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
    })

    test('test delete working or not',async({page})=>{
        const user = new UserMgtPage(page);
        
        await user.getDeleteandConfirm(
            data.view_row.view_row_name.name
        );
        await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
        console.log('user delete successfully.')
    })

    test('check username filter working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getuser_sys_phsearch(
            data.name_filter.name_search_filter.name
        );
    })

    test('check system name filter working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getuser_sys_phsearch(
            data.name_filter.sysname_search_filter.sysname
        );
    })

    test('check phone number filter working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getuser_sys_phsearch(
            data.name_filter.phone_search_filter.phone
        );
    })

    test('check department name filter working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getuser_dept_posisearch(
            data.dept_filter.dept_search_filter.dept
        );
    })
    
    test('check position name filter working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getuser_dept_posisearch(
            data.dept_filter.posi_search_filter.posi
        );
    })

    test.only('check role name filter working or not',async({page})=>{
        const user = new UserMgtPage(page);
        await user.getrolesearch(
            data.role_filter.role_search_filter.role
        );
    })

})