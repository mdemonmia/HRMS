export class UserLoginHistoryPage{
    constructor(page){
        this.page = page;
        this.UserLogin = page.locator("//a[normalize-space()='User Login History']");
        this.UserType = page.locator('#searchByUserType');
        this.UserGroup = page.locator('#searchByUserGroup');
        this.OrgDivPos = page.locator('#searchByOrgDeptPos');
        this.UserNamePhone = page.locator('#searchByNameOrPhone');
        this.StartDate = page.locator("//input[@placeholder='Start Date']");
        this.EndDate = page.locator("//input[@placeholder='End Date']");
        this.SearchBtn = page.locator("//button[@type='submit']");
        this.ResetBtn = page.locator("//button[normalize-space()='Reset']");
        this.totalcount = page.locator('.ps-4.h6');
    }

    async getUserLoginHistory(){
        await this.UserLogin.click();
    }

    async getUserType(userType){
        await this.UserType.fill(userType);
    }

    async getUserGroup(userGroup){
        await this.UserGroup.fill(userGroup);
    }

    async getOrgDivPos(orgDivPos){
        await this.OrgDivPos.fill(orgDivPos);
    }

    async getUserNamePhone(userNamePhone){
        await this.UserNamePhone.fill(userNamePhone);
    }

    async getDatefilter(dateFilter){
        await this.StartDate.fill(dateFilter.startDate);
        await this.EndDate.fill(dateFilter.endDate);
    }


    async getSearchBtn(){
        await this.SearchBtn.click();
    }

    async getResetBtn(){
        await this.ResetBtn.click();
    }

    async totalCount() {
        return this.totalcount;
    }

    async getTotalcount() {
        return await this.totalcount.textContent();
    }

}