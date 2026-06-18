import { expect } from "@playwright/test";

export class RevisedJobDescriptionPage{

    constructor(page){

        this.page = page;

        this.revisedJDLink = page.locator("//a[normalize-space()='Revise Job Description']");
        this.editRowBtn = page.locator("//button[@title='Edit']");
        this.orgDiv = page.locator("//select[@formcontrolname='orddivId']");
        this.department = page.locator("//select[@formcontrolname='departmentId']");
        this.position = page.locator("//select[@formcontrolname='positionId']");
        this.jobDescName = page.locator("//input[@type='text']");
        this.responsibility = page.locator(
            "//angular-editor[@formcontrolname='responsibility']//div[contains(@class,'angular-editor-textarea')]");
        this.qualification = page.locator(
            "//angular-editor[@formcontrolname='qualification']//div[@class='angular-editor-textarea']");
        this.experience = page.locator(
            "//angular-editor[@formcontrolname='experience']//div[@class='angular-editor-textarea']");
        this.skill = page.locator(
            "//angular-editor[@formcontrolname='skills']//div[@class='angular-editor-textarea']"
        );
        this.updateBtn = page.locator("//div[normalize-space()='Update']");
    }

    async getRevisedJDLink(){
        await this.revisedJDLink.click();
    }

    async getEditRowBtn(rowName){
        const row = this.page.locator('tr',{ hasText: rowName });
        await row.locator(this.editRowBtn).click();
    }

    async updateForm(uform){
        if(uform?.orgdiv !== undefined && uform?.orgdiv !== null){
            await this.orgDiv.selectOption(uform.orgdiv);
        }
        if(uform?.dept !== undefined && uform?.dept !== null){
            await this.department.selectOption(uform.dept);
        }
        if(uform?.position !== undefined && uform?.position !== null){
            await this.position.selectOption(uform.position);
        }
        await this.jobDescName.fill(uform.jdescript);
        await this.responsibility.fill(uform.response);
        await this.qualification.fill(uform.qualif);
        await this.experience.fill(uform.exp);
        await this.skill.fill(uform.skill);
    }

    async clickUpdate(){

        await this.updateBtn.click();

        const confirmModal =this.page.locator('text=Are you sure you want to update this?');
        await confirmModal.waitFor({state:'visible',timeout:10000});
        await this.page.locator('button:has-text("Yes")').click();
        await confirmModal.waitFor({state:'hidden',timeout:10000});
        const successMsg =this.page.locator('text=Data is updated successfully.');
        await expect(successMsg).toBeVisible();
        await successMsg.waitFor({state:'hidden',timeout:10000});
    }
}