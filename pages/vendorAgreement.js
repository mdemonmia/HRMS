import { error } from "node:console";
import { expect } from "@playwright/test";

export class VendorAgreementPage {
    constructor(page) {
        this.page = page;
        this.vndragreementLink = page.locator("//a[normalize-space()='Vendor Agreement']");
        this.addvndrAgreement = page.locator("//button[normalize-space()='Add New Agreement']");
        this.selectvndr = page.locator('#vendorId');
        this.documentname = page.locator('#documentName');
        this.fileupload = page.locator('#documentUrl');
        this.singingdate = page.locator("//input[@formcontrolname='signingDate']");
        this.duration = page.locator('#durtion');
        this.cancelbtn = page.locator("//button[normalize-space()='Cancel']");
        this.savebtn = page.locator("//button[normalize-space()='Add']");
        this.editBtn = page.locator('.fa.fa-edit');
        this.viewBtn = page.locator('.fa.fa-eye');
        this.deleteBtn = page.locator('.fa.fa-trash');
        this.updateBtn = page.locator("//button[normalize-space()='Update']");
    }

    async getvndrAgreementLink(){
        await this.vndragreementLink.click();
    }

    async getAddvndrAgreementBtn(){
        await this.addvndrAgreement.click();
    }

    async getvendrAgreementForm(vndrform){
        await this.selectvndr.waitFor({state:'visible',timeout:10000});
        if(vndrform.svndr !=='')await this.selectvndr.selectOption(vndrform.svndr.trim());
        await this.documentname.fill(vndrform.docname);
        if(vndrform.filename !=='')await this.fileupload.setInputFiles(vndrform.filename.trim());
        await this.singingdate.clear();
        await this.singingdate.fill(vndrform.sdate);
        await this.duration.fill(vndrform.duration);
    }

    async getCancelBtn(){
        await this.cancelbtn.click();
    }

    async getupdateBtn(){
        await this.updateBtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to save this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout: 10000});
        const updateMsg = await this.page.locator('text=Data is updated successfully.');
        await updateMsg.waitFor({ state: 'visible', timeout: 10000 });
        await updateMsg.waitFor({state:'hidden',timeout:10000});
    }  

    async getUpdateBtnwithnomsg(){
        await this.updateBtn.click();
    }

     async getViewBtn(vname){
        const erow = await this.page.locator('tr',{hasText:vname});
        await erow.locator(this.viewBtn).click();
    }

    async getEditBtn(ename){
        const erow = await this.page.locator('tr',{hasText:ename});
        await erow.locator(this.editBtn).click();
    }

    async getDeleteBtn(dname){
        const erow = await this.page.locator('tr',{hasText:dname});
        await erow.locator(this.deleteBtn).click();
        const cmodal = this.page.locator('text=Do you want to delete this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});
        const successMsg = await this.page.locator('text=Data is deleted successfully.');
        await successMsg.waitFor({state:'hidden',timeout:10000});
    }

    async getsaveBtnwithnomsg(){
        await this.savebtn.click();
    }

    async getSaveBtn(){
        await this.savebtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to save this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout: 10000});

        const successMsg = await this.page.locator('text=Data is saved successfully.');
        const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
        const updateMsg = await this.page.locator('text=Data is updated successfully.');

        const result = await Promise.race([
            successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
            duplicateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'duplicate'),
            updateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'update')
        ]);

        if(result === 'success'){
            await expect(successMsg).toBeVisible();
            await successMsg.waitFor({state:'hidden',timeout:10000});
            return 'success';
        }
        else if(result === 'duplicate'){
            await expect(duplicateMsg).toBeVisible();
            await duplicateMsg.waitFor({state:'hidden',timeout:10000});
            return 'duplicate';
        }
        else if(result === 'update'){
            await expect(updateMsg).toBeVisible();
            await updateMsg.waitFor({state:'hidden',timeout:10000});
            return 'update';
        }

        
    }
}