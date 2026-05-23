import { error } from "node:console";
import { expect } from "@playwright/test";

export class UserMgtPage{
    constructor(page){
        this.page = page;
        this.userMgtlink = page.locator("//span[normalize-space()='User Management']");
        this.userlink = page.locator("//a[normalize-space()='User']");
        this.addUserBtn = page.locator("//button[normalize-space()='Add New User']");
        this.unamefilter = page.locator('#searchAppUserInformation');
        this.deptnamefilter = page.locator('#searchByDeptPosition');
        this.rolenamefilter = page.locator('#searchByRoleName');
        this.firstName  = page.locator('#userFName');
        this.lastName = page.locator('#userLName');
        this.urole = page.locator('div span.col-md-2.ng-star-inserted');
        this.uType = page.locator("//select[@formcontrolname='userTypeId']");
        this.orgDiv = page.locator("//select[@formcontrolname='userOrgDivisionId']");
        this.Dept = page.locator("//select[@formcontrolname='userDepartmentId']");
        this.Position = page.locator("//select[@formcontrolname='userPositionId']");
        this.Email = page.locator('#userEmail');
        this.Phone = page.locator('#userPhoneNo');
        this.Userid = page.locator('#userSystemName');
        this.Password = page.locator('#userPassword');
        this.Status = page.locator("//select[@formcontrolname='userStatus']");
        this.lmdata = page.locator('#mat-mdc-checkbox-1-input');
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.backlist = page.locator("//button[normalize-space()='Back To List']");
        this.Edit = page.locator("button[title='Edit']");
        this.Delete = page.locator("button[title='Delete']");
        this.View = page.locator("button[title='View']");
        this.Update = page.locator("//button[@type='submit']");
        this.username = page.locator('#searchAppUserInformation');
        this.deptname = page.locator('#searchByDeptPosition');
        this.rolename = page.locator('#searchByRoleName');
        this.Vendor = page.locator("//a[normalize-space()='Vendor User']");
    }

    async getUserMgtlink(){
        await this.userMgtlink.click();
    }

    async getUserlink(){
        await this.userlink.click();
    }

    async getVendorlink(){
        await this.Vendor.click();
    }

    async getAddUserBtn(){
        await this.addUserBtn.click();
    }

    async getUserMgt(umgt){
        console.log('Step 1: firstName fill');
        await this.firstName.fill(umgt.fname);
        console.log('Step 2: lastName fill');
        await this.lastName.fill(umgt.lname);

        console.log('Step 3: role select');
        if(umgt.role !== ''){
            let roleFound = false;
            const rolecount = await this.urole.count();
            for(let i=0; i<rolecount; i++){
                const rolenumber = this.urole.nth(i);
                const roleText = await rolenumber.textContent();
                if(roleText.trim() === umgt.role){
                    await rolenumber.locator('input').click();
                    roleFound = true;
                    break;
                }
            }
            if(!roleFound) throw new Error(`Role "${umgt.role}" not found`);
       }
       console.log('Step 4: utype select');
       if(umgt.utype !== '') await this.uType.selectOption(umgt.utype.trim());
       console.log('Step 5: orgdiv select');
       if(umgt.orgdiv !== '') await this.orgDiv.selectOption(umgt.orgdiv.trim());
       console.log('Step 6: dept select');
       if(umgt.dept !== '') await this.Dept.selectOption(umgt.dept.trim());
       console.log('Step 7: position select');
       if(umgt.position !== '') await this.Position.selectOption(umgt.position.trim());

       console.log('Step 8: email fill');
       await this.Email.scrollIntoViewIfNeeded();
       await this.Email.fill(umgt.email);
       console.log('Step 9: phone fill');
       await this.Phone.fill(umgt.phone);
       console.log('Step 10: userid fill');
       await this.Userid.fill(umgt.userid);
       console.log('Step 11: password fill');
       await this.Password.fill(umgt.password);
       console.log('Step 12: status select');
       if(umgt.status !== '') await this.Status.selectOption(umgt.status.trim());
       console.log('Step 13: lmdata click');
       await this.lmdata.click();
       console.log('Step 14: scroll to save');
       await this.lmdata.scrollIntoViewIfNeeded();
       console.log('=== getUserMgt completed ===');
    }

    async getSaveBtnandExceptdialog(){
        await this.saveBtn.click();
        const cmodal = this.page.locator('text=Are you sure you want to save this?');
        await cmodal.waitFor({state: 'visible', timeout: 10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state: 'hidden', timeout: 10000});
    }

        async getSaveBtnandConfirm() {
        // ✅ Save button click
        await this.saveBtn.click();

        // ✅ প্রথম confirm modal wait করো
        const confirmModal = this.page.locator('text=Are you sure you want to save this?');
        await confirmModal.waitFor({ state: 'visible', timeout: 10000 });

        // ✅ Yes click
        await this.page.locator('button:has-text("Yes")').click();

        // ✅ প্রথম modal বন্ধ হওয়ার wait
        await confirmModal.waitFor({ state: 'hidden', timeout: 10000 });

        // ✅ Success অথবা Duplicate — যেটা আসে সেটা detect করো
        const successModal = this.page.locator('text=Data is saved successfully.');
        const duplicateModal = this.page.locator('text=Duplicate name, please check entry name.'); // আপনার actual text দিন

        // ✅ দুইটার মধ্যে যেটা আগে আসে সেটা catch করো
        const result = await Promise.race([
            successModal.waitFor({ state: 'visible', timeout: 10000 }).then(() => 'success'),
            duplicateModal.waitFor({ state: 'visible', timeout: 10000 }).then(() => 'duplicate'),
        ]);

        if (result === 'success') {
            // ✅ Success flow
            await expect(successModal).toBeVisible();
            await this.page.locator('button:has-text("Ok")').click();
            await successModal.waitFor({ state: 'hidden', timeout: 10000 });
            return 'success';

        } else if (result === 'duplicate') {
            // ✅ Duplicate flow
            await expect(duplicateModal).toBeVisible();
            await this.page.locator('button:has-text("Cancel")').click(); // আপনার button text দিন
            await duplicateModal.waitFor({ state: 'hidden', timeout: 10000 });
            return 'duplicate';
        }
    }

    async getViewBtn(name){
        const row = await this.page.locator('tr',{hasText:name});
        await row.locator(this.View).click();

    }
    async getEditBtn(name){
        const row = await this.page.locator('tr',{hasText:name});
        await row.locator(this.Edit).click();
    }

    async getEdituser(contact){
        await this.Password.fill(contact.password);

        if(contact.status === '' || !contact.status){
            await this.Status.selectOption({index:0});
        }else{
            await this.Status.selectOption(contact.status);
        }
    }
    async getupdateandExit(){
        
        await this.Update.click();
        const umodal =this.page.locator('text=Are you sure you want to update this?');
        await umodal.waitFor({state:'visible', timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await umodal.waitFor({state: 'hidden', timeout: 10000});
    }

    async getupdateandConfirm(){
        
        await this.Update.click();
        const umodal =this.page.locator('text=Are you sure you want to update this?');
        await umodal.waitFor({state:'visible', timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await umodal.waitFor({state: 'hidden', timeout: 10000});
        const sumodal = this.page.locator('text=Data is updated successfully.');
        await sumodal.waitFor({state:'visible', timeout:10000});
        await this.page.locator('button:has-text("Ok")').click();
        await sumodal.waitFor({state: 'hidden', timeout: 10000});
    }

    async getDeleteandConfirm(name){
        const row = await this.page.locator('tr',{hasText:name});
        await row.locator(this.Delete).click();
        const dmodal =this.page.locator('text=Do you want to delete this?');
        await dmodal.waitFor({state:'visible', timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await dmodal.waitFor({state: 'hidden', timeout: 10000});
    }

    async getuser_sys_phsearch(searchText){
        await this.username.clear();
        await this.username.fill(searchText);
        await this.page.waitForTimeout(3000);
    }

    async getuser_dept_posisearch(searchText){
        await this.deptname.clear();
        await this.deptname.fill(searchText);
        await this.page.waitForTimeout(3000);
    }

    async getrolesearch(searchText){
        await this.rolename.clear();
        await this.rolename.fill(searchText);
        await this.page.waitForTimeout(3000);
    }
   
} 