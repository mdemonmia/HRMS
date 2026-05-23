import { expect } from "@playwright/test";

export class VendorMgtPage{
    constructor(page){
        this.page = page;
        this.Addvendor = page.locator("//button[normalize-space()='Add New User']");
        this.searchFilter = page.locator('#searchAppUserInformation');
        this.firstName = page.locator('#userFName');
        this.lastName = page.locator('#userLName');
        this.vendorName = page.locator("//select[@formcontrolname='userOrgId']");
        this.Role = page.locator('div span.col-md-2.ng-star-inserted');
        this.Email = page.locator('#userEmail');
        this.Phone = page.locator('#userPhoneNo');
        this.Userid = page.locator('#userSystemName');
        this.Password = page.locator('#userPassword');
        this.Status = page.locator("//select[@formcontrolname='userStatus']");
        this.saveBtn = page.locator("//div[contains(text(),'Save')]");
        this.EditBtn = page.locator("button[title='Edit']");
        this.UpdateBtn = page.locator("//div[contains(text(),'Update')]");
        this.DeleteBtn = page.locator("button[title='Delete']");
    }

    async getAddvendor(){
        await this.Addvendor.click();
    }

    async getVendorForm(vform){
        await this.firstName.fill(vform.fname);
        await this.lastName.fill(vform.lname);
        if(vform.vendor !== '') await this.vendorName.selectOption(vform.vendor.trim());
        if(vform.role !== ''){
            let roleFound = false;
            const rolecount = await this.Role.count();
            for(let i=0;i<rolecount;i++){
                const findrole = this.Role.nth(i);
                const roleText = (await findrole.textContent()).trim();
                if(roleText === vform.role){
                    await findrole.locator('input').click();
                    roleFound =true;
                    break;
                }

            }
            if(!roleFound) throw new Error(`Role "${vform.role}" not found`);
        }

        await this.Email.fill(vform.email);
        await this.Phone.fill(vform.phone);
        await this.Userid.fill(vform.userid);
        await this.Password.fill(vform.password);
        if(vform.status !== '') await this.Status.selectOption(vform.status.trim());   
    }

    async getFilter(searchText){
        await this.searchFilter.clear();
        await this.searchFilter.fill(searchText);
        await this.page.waitForTimeout(3000);
    }

    async getEditVendor(name){
        const row = await this.page.locator('tr',{hasText:name});
        await row.locator(this.EditBtn).click(); 
    }

    async getEditvendorForm(eform){
        await this.firstName.clear();
        await this.firstName.fill(eform.fname);
        await this.lastName.clear();
        await this.lastName.fill(eform.lname);
        if(eform.vendor ==='' || !eform.vendor){
            await this.vendorName.selectOption({index:0})
        }else{
            await this.vendorName.selectOption(eform.vendor);
        }

        if(eform.role !== '' && eform.role) {
            let roleFound = false;
            const rolecount = await this.Role.count();
            for(let i = 0; i < rolecount; i++) {
                const findrole = this.Role.nth(i);
                const roleText = (await findrole.textContent()).trim();
                if(roleText === eform.role) {
                    roleFound = true;
                    const checkbox = findrole.locator('input');
                    const isChecked = await checkbox.isChecked();
                    if(!isChecked) {
                        await checkbox.click();
                    }
                    break;
                }
            }
            if(!roleFound) throw new Error(`Role "${eform.role}" not found`);

        } else {
            // role blank — checked থাকলে uncheck করবে
            const rolecount = await this.Role.count();
            for(let i = 0; i < rolecount; i++) {
                const findrole = this.Role.nth(i);
                const checkbox = findrole.locator('input');
                const isChecked = await checkbox.isChecked();
                if(isChecked) {
                    await checkbox.click(); // uncheck করবে
                    break;
                }
            }
        }

        await this.Email.clear();
        await this.Email.fill(eform.email);
        await this.Phone.clear();
        await this.Phone.fill(eform.phone);
        await this.Password.clear();
        await this.Password.fill(eform.password);
        if(eform.status ==='' || !eform.status){
            await this.Status.selectOption({index:0});
        }else{
            await this.Status.selectOption(eform.status);
        }
    }

    async getSaveandError(){
        await this.saveBtn.scrollIntoViewIfNeeded();
        await this.saveBtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to save this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});
    }

    async getSaveBtnandConfirm() {
        await this.saveBtn.scrollIntoViewIfNeeded();
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

    async getUpdateandError(){
        await this.UpdateBtn.click();
        const emodal = await this.page.locator('text=Are you sure you want to update this?');
        await emodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await emodal.waitFor({state:'hidden',timeout:10000});
    }

    async getUpdateandConfirm(){
        await this.UpdateBtn.click();
        const emodal = await this.page.locator('text=Are you sure you want to update this?');
        await emodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await emodal.waitFor({state:'hidden',timeout:10000}); 
        const successmodal = await this.page.locator('text=Data is updated successfully.');
        await successmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Ok")').click();
        await successmodal.waitFor({state:'hidden',timeout:10000});
    }

    async getDeleteConfirm(name){
        const row = await this.page.locator('tr',{hasText:name});
        await row.locator(this.DeleteBtn).click();
        const dmodal = await this.page.locator('text=Do you want to delete this?');
        await dmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text(" Yes ")').click();
        await dmodal.waitFor({state:'hidden',timeout:10000});
        const smodal = await this.page.locator('text=Data is deleted successfully.');
        await smodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Ok")').click();
        await smodal.waitFor({state:'hidden',timeout:10000});
    }

}