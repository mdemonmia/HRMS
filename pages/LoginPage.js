export class LoginPage{
    constructor(page){
        this.page = page;
        this.Userid = page.locator('#userSystemName');
        this.Password = page.locator('#userPassword');
        this.Signin = page.locator('.capitalize');
        this.errorMsg = page.locator('.error.text-danger.bold');
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
}