import { expect } from "@playwright/test";
export class JobDescriptionPage{
    constructor(page){
        this.page = page;
        this.JDlink = page.locator("//a[normalize-space()='Job Description']");
        this.addJD = page.locator("//button[normalize-space()='Add Job Description']");
        this.orgDiv = page.locator("//select[@formcontrolname='orddivId']");
        this.Department = page.locator("//select[@formcontrolname='departmentId']");
        this.Position = page.locator("//select[@formcontrolname='positionId']");
        this.Jdescript = page.locator("//input[@type='text']");
        this.Responsibility = page.locator("//angular-editor[@formcontrolname='responsibility']//div[@class='angular-editor-textarea']");
        this.Experience = page.locator("//angular-editor[@formcontrolname='experience']//div[@class='angular-editor-textarea']");
        this.Qualificattion = page.locator("//angular-editor[@formcontrolname='qualification']//div[@class='angular-editor-textarea']");
        this.Skills = page.locator("//angular-editor[@formcontrolname='skills']//div[@class='angular-editor-textarea']");
        this.saveBtn = page.locator("//div[@class='ng-star-inserted']");
        this.jobDescfilter = page.locator('#jobDescriptionName');
        this.statusfilter = page.locator("//select[@formcontrolname='jobDescriptionStatus']");
        this.viewBtn = page.locator('i.fa.fa-eye');
        this.EditBtn = page.locator("//button[normalize-space()='Edit']");
        this.DeleteBtn = page.locator("//button[normalize-space()='Delete']");
        this.SubmitBtn = page.locator("//button[normalize-space()='Submit']");
        this.UpdateBtn = page.locator("//div[@class='ng-star-inserted']");
        this.DeleteRowBtn = page.locator("//button[@title='Delete']");
        this.EditRowBtn = page.locator("//button[@title='Edit']");
        this.cancelBtn = page.locator("//button[normalize-space()='Cancel']");

    }

    async getJDLink(){
        await this.JDlink.click();
    }

    async getAddJD(){
        await this.addJD.click();
    }

    async getjdForm(jform){
        //handle null,undefined and ' ' to use ?.
        if(jform?.orgdiv){
            await this.orgDiv.selectOption(jform.orgdiv.trim());
        }else{
            await this.orgDiv.selectOption('Select Division');
        }

        if(jform?.dept){
            await this.Department.selectOption(jform.dept.trim());
        }else{
            await this.Department.selectOption('Select Department')
        }

        if(jform?.position){
            await this.Position.selectOption(jform.position.trim());
        }else{
            await this.Position.selectOption('Select Position');
        }

        await this.Jdescript.fill(jform.jdescript);
        await this.Responsibility.fill(jform.response);
        await this.Experience.fill(jform.exp);
        await this.Qualificattion.fill(jform.qualif);
        await this.Skills.fill(jform.skill);
    }

    async getSaveBtn(){
        await this.saveBtn.scrollIntoViewIfNeeded();
        await this.saveBtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to save this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});

        const successMsg = await this.page.locator('text=Data is saved successfully.');
        const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
        const errorMsg = await this.page.locator('text=Could not save changes. Please configure your entity type accordingly.');

        const result = await Promise.race([
            successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
            duplicateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'duplicate'),
            errorMsg.waitFor({state:'visible',timeout:10000}).then(()=>'error')
        ])

        if(result ==='success'){
            await expect(successMsg).toBeVisible();
            await successMsg.waitFor({state:'hidden',timeout:10000});
        }
        else if(result === 'duplicate'){
            await expect(duplicateMsg).toBeVisible();
            await this.page.locator('button:has-text("Ok")').click();
            await duplicateMsg.waitFor({state:'hidden',timeout:10000});
        }
        else if(result === 'error'){
            await expect(errorMsg).toBeVisible();
            await this.page.locator('button:has-text("Ok")').click();
            await errorMsg.waitFor({state:'hidden',timeout:10000});
        }
        
    }

    async getEditBtn(){
        await this.EditBtn.click();
    }

    async getDeleteBtn(){
        await this.DeleteBtn.scrollIntoViewIfNeeded();
        await this.DeleteBtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to reject this operation?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});
        const dltMsg = await this.page.locator('text=Data is deleted successfully.');
        await dltMsg.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("OK")').click();
        await dltMsg.waitFor({state:'hidden',timeout:10000});
    }

    async getSubmitBtn(){
        await this.SubmitBtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to approve this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});
        const submitMsg = await this.page.locator('text=Data is approved successfully.');
        await submitMsg.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Ok")').click();
        await submitMsg.waitFor({state:'hidden',timeout:10000});
    }

    async getUpdateBtn(){
        await this.UpdateBtn.click();
        const cmodal = await this.page.locator('text=Are you sure you want to update this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});
        const updateMsg = await this.page.locator('text=Data is updated successfully.');
        await updateMsg.waitFor({state:'visible',timeout:10000});
        await updateMsg.waitFor({state:'hidden',timeout:10000});    
    }

    async getDeleteRowBtn(dltname){
        const drow = await this.page.locator('tr',{hasText:dltname});
        await drow.locator(this.DeleteRowBtn).click();
        const cmodal = this.page.locator('text=Do you want to delete this?');
        await cmodal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await cmodal.waitFor({state:'hidden',timeout:10000});
        //const dltMsg = this.page.locator('text=It is not draft stage, It is not possible to delete.');
        const dltMsg = await this.page.locator('text=Data is deleted successfully.');
        await dltMsg.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("OK")').click();
        await dltMsg.waitFor({state:'hidden',timeout:10000});
    }

    async getEditRowBtn(ername){
        const erow = await this.page.locator('tr',{hasText:ername});
        await erow.locator(this.EditRowBtn).click();

    }

    async getViewBtn(vrname){
        const vrow = await this.page.locator('tr',{hasText:vrname});
        await vrow.locator(this.viewBtn).click();
    }

    async getorgdivFilter(jdname){
        await this.jobDescfilter.fill(jdname.jdorgdiv.trim());
    }

    async getStatusFilter(sname){
        await this.statusfilter.fill(sname.status.trim());
    }

    async getCancelBtn(){
        await this.cancelBtn.click();
    }

}