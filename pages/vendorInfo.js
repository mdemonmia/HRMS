export class VendorInfoPage{
    constructor(page){
        this.page = page;
        this.vendorinfoLink = page.locator("//a[normalize-space()='Vendor Information']");
        this.AddVendor = page.locator("//button[normalize-space()='Add New Vendor']");
        this.official = page.locator('#vndrOfficialName');
        this.vendorShortName = page.locator('#vndrShortName');
        this.vendorCode = page.locator('#vendorCode');
        this.Division = page.locator('#vndrAddDiv');
        this.District = page.locator('#vndrAddDist');
        this.Address = page.locator('#vndrAddress');
        this.Contact = page.locator('#vndrAddKeyContact');
        this.ContactPosition = page.locator('#vndrAddKeyContactPos');
        this.OganizationType = page.locator("//select[@formcontrolname='vndrOrgType']");
        this.fileUpload = page.locator('#vendorLogoUrl');
        this.saveBtn = page.locator("//div[@class='ng-star-inserted']");
        this.EditBtn = page.locator("//button[@title='Edit']");
        this.UpdateBtn = page.locator("//div[contains(text(),'Update')]");
        this.deleteBtn = page.locator("//button[@title='Delete']");
    }

    async getVendorInfoLink(){
        await this.vendorinfoLink.click();
    }

    async getAddVendorBtn(){
        await this.AddVendor.click();
    }

    async getVendorForm(vform){
        await this.official.fill(vform.ofcl);
        await this.vendorShortName.fill(vform.vendorShName);
        await this.vendorCode.clear();
        await this.vendorCode.fill(vform.vndrcode);
        if(vform.div !=='')await this.Division.selectOption(vform.div.trim());
        await this.District.waitFor({state:'visible'});
        if(vform.dist !=='')await this.District.selectOption(vform.dist.trim().toUpperCase());
        await this.Address.fill(vform.addr);
        await this.Contact.fill(vform.contact);
        await this.ContactPosition.fill(vform.contactPos);
        if(vform.orgType !=='')await this.OganizationType.selectOption(vform.orgType.trim());
        if (vform.fileupload) {
            await this.fileUpload.setInputFiles(vform.fileupload);
        }
    }

    async getSaveBtn(){
        await this.saveBtn.scrollIntoViewIfNeeded();
        await this.saveBtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to submit this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});

        const errorMsg = await this.page.locator('.toast-message');
        const errorMsg2 = await this.page.locator('text= Could not save changes. Please configure your entity type accordingly.');
        const successMsg = await this.page.locator('text=Data is saved successfully.');
        const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');

        const result = await Promise.race([
            errorMsg.waitFor({state:'visible',timeout:10000}).then(() => 'error'),
            errorMsg2.waitFor({state:'visible',timeout:10000}).then(() => 'error2'),
            successMsg.waitFor({state:'visible',timeout:10000}).then(() => 'success'),
            duplicateMsg.waitFor({state:'visible',timeout:10000}).then(() => 'duplicate'),
        ]);

        if(result === 'error'){
            await errorMsg.waitFor({state:'hidden',timeout:10000});
            return 'error';
        }
        else if(result === 'error2'){
            await errorMsg2.waitFor({state:'hidden',timeout:10000});
            return 'error2';
        }
        else if(result === 'success'){
            await successMsg.waitFor({state:'hidden',timeout:10000});
            return 'success';
        }
        else if(result === 'duplicate'){
            await duplicateMsg.waitFor({state:'visible',timeout:10000});
            await this.page.locator('button:has-text("Ok")').click();
            await duplicateMsg.waitFor({state:'hidden',timeout:10000});
            return 'duplicate';
        }
    }

    async getEditBtn(name){
        const row = await this.page.locator('tr',{hasText:name});
        await row.locator(this.EditBtn).click();
    }

    async getUpdateBtn(){
        await this.UpdateBtn.scrollIntoViewIfNeeded();
        await this.UpdateBtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to submit this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});
        const successMsg = await this.page.locator('text=Data is updated successfully.');
        await successMsg.waitFor({state:'hidden',timeout:10000});
    }

    async getDeleteBtn(dltname){
        const dltrow = await this.page.locator('tr',{hasText :dltname});
        await dltrow.locator(this.deleteBtn).click();
        const cmodal = await this.page.locator('text=Do you want to delete this?');
        await cmodal.waitFor({state: 'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state: 'hidden',timeout:10000});

        const successMsg = await this.page.locator('text=Data is deleted successfully.');
        await successMsg.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Ok")').click();
        await successMsg.waitFor({state:'hidden',timeout:10000});
    }

    

}