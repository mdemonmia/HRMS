export class LoginPage{
    constructor(page){
        this.page = page;
        this.Userid = page.locator('#userSystemName');
        this.Password = page.locator('#userPassword');
        this.Signin = page.locator('.capitalize');
        this.errorMsg = page.locator('.error.text-danger.bold');
        this.userlink = page.locator("//button[@id='page-header-user-dropdown']");
        this.logoutlink = page.locator("//div[@class='dropdown-menu dropdown-menu-end header-dropdown-menu show']//button[@class='dropdown-item text-danger'][normalize-space()='Logout']");
        this.menuLink = page.locator("//i[@class='fa fa-bars']");
        this.VendormgtLink = page.locator("//span[normalize-space()='Vendor Management']");
        this.JDmenu = page.locator("//span[normalize-space()='Job Description Management']");
    }

    async goto(url){
        await this.page.goto(url);
    }
    async Login(username,password){
        await this.Userid.fill(username);
        await this.Password.fill(password);
        await this.Signin.click();
    }

    async getErrorMsg(){
        await this.errorMsg.waitFor({state:'visible'});
        return (await this.errorMsg.textContent()).trim();
    }

    async logout(){
        await this.userlink.waitFor({state:'visible'});
        await this.userlink.click();
        await this.logoutlink.click();
    }

    async clickMenuLink(){
        await this.menuLink.waitFor({state:'visible'});
        await this.menuLink.click();
    }

    async getvendorMgtlink(){
        await this.VendormgtLink.click();
    }
    
    async getJDMenu(){
        await this.JDmenu.click();
    }

}