# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.spec.js >> test user management page >> check last name with invalid data
- Location: tests\user.spec.js:38:10

# Error details

```
Error: Role "Admin" not found
```

# Test source

```ts
  1   | import { error } from "node:console";
  2   | import { expect } from "@playwright/test";
  3   | 
  4   | export class UserMgtPage{
  5   |     constructor(page){
  6   |         this.page = page;
  7   |         this.userMgtlink = page.locator("//span[normalize-space()='User Management']");
  8   |         this.userlink = page.locator("//a[normalize-space()='User']");
  9   |         this.addUserBtn = page.locator("//button[normalize-space()='Add New User']");
  10  |         this.unamefilter = page.locator('#searchAppUserInformation');
  11  |         this.deptnamefilter = page.locator('#searchByDeptPosition');
  12  |         this.rolenamefilter = page.locator('#searchByRoleName');
  13  |         this.firstName = page.locator('#userFName');
  14  |         this.lastName = page.locator('#userLName');
  15  |         this.urole = page.locator('div span.col-md-2.ng-star-inserted');
  16  |         this.uType = page.locator("//select[@formcontrolname='userTypeId']");
  17  |         this.orgDiv = page.locator("//select[@formcontrolname='userOrgDivisionId']");
  18  |         this.Dept = page.locator("//select[@formcontrolname='userDepartmentId']");
  19  |         this.Position = page.locator("//select[@formcontrolname='userPositionId']");
  20  |         this.Email = page.locator('#userEmail');
  21  |         this.Phone = page.locator('#userPhoneNo');
  22  |         this.Userid = page.locator('#userSystemName');
  23  |         this.Password = page.locator('#userPassword');
  24  |         this.Status = page.locator("//select[@formcontrolname='userStatus']");
  25  |         this.lmdata = page.locator('#mat-mdc-checkbox-1-input');
  26  |         this.saveBtn = page.locator("//button[normalize-space()='Save']");
  27  |         this.backlist = page.locator("//button[normalize-space()='Back To List']");
  28  |     }
  29  | 
  30  |     async getUserMgtlink(){
  31  |         await this.userMgtlink.click();
  32  |     }
  33  | 
  34  |     async getUserlink(){
  35  |         await this.userlink.click();
  36  |     }
  37  | 
  38  |     async getAddUserBtn(){
  39  |         await this.addUserBtn.click();
  40  |     }
  41  | 
  42  |     async getUserMgt(umgt){
  43  |         await this.firstName.fill(umgt.fname);
  44  |         await this.lastName.fill(umgt.lname);
  45  | 
  46  |         if(umgt.role !== ''){
  47  |             let roleFound = false;
  48  |             const rolecount = await this.urole.count();
  49  |             for(let i=0; i<rolecount; i++){
  50  |                 const rolenumber = this.urole.nth(i);
  51  |                 const roleText = await rolenumber.textContent();
  52  |                 if(roleText.trim() === umgt.role){
  53  |                     await rolenumber.locator('input').click();
  54  |                     roleFound = true;
  55  |                     break;
  56  |                 }
  57  |             }
> 58  |             if(!roleFound) throw new Error(`Role "${umgt.role}" not found`);
      |                                  ^ Error: Role "Admin" not found
  59  |        }
  60  |        if(umgt.utype !== '') await this.uType.selectOption(umgt.utype.trim());
  61  |        if(umgt.orgdiv !== '') await this.orgDiv.selectOption(umgt.orgdiv.trim());
  62  |        if(umgt.dept !== '') await this.Dept.selectOption(umgt.dept.trim());
  63  |        if(umgt.position !== '') await this.Position.selectOption(umgt.position.trim());
  64  |        await this.Email.scrollIntoViewIfNeeded();
  65  |        await this.Email.fill(umgt.email);
  66  |        await this.Phone.fill(umgt.phone);
  67  |        await this.Userid.fill(umgt.userid);
  68  |        await this.Password.fill(umgt.password);
  69  |        if(umgt.status !== '') await this.Status.selectOption(umgt.status.trim());
  70  |        await this.lmdata.click();
  71  |        await this.lmdata.scrollIntoViewIfNeeded();
  72  |     }
  73  | 
  74  |     // async getfirstName(fname){
  75  |     //     await this.firstName.fill(fname);
  76  |     // }
  77  | 
  78  |     // async getlastName(lname){
  79  |     //     await this.lastName.fill(lname);
  80  |     // }
  81  | 
  82  |     // async geturole(role){
  83  |     //     const rolecount = await this.urole.count();
  84  |     //     for( let i=0; i<rolecount;i++){
  85  |     //         const rolenumber =await this.urole.nth(i);
  86  |     //         const roleText = await rolenumber.textContent();
  87  |     //         if(roleText.trim() === role){
  88  |     //             await rolenumber.locator('input').click();
  89  |     //             return;
  90  |     //         }
  91  |     //     }
  92  | 
  93  |     //     throw new error('Role: "${role}" not found');
  94  |     // }
  95  | 
  96  |     // async getUtype(utype){
  97  |     //     await this.uType.selectOption(utype.trim());
  98  |     // }
  99  | 
  100 |     // async getOrgdiv(orgdiv){
  101 |     //     await this.orgDiv.selectOption(orgdiv.trim());
  102 |     // }
  103 | 
  104 |     // async getDept(dept){
  105 |     //     await this.Dept.selectOption(dept.trim());
  106 |     // }
  107 | 
  108 |     // async getPosition(position){
  109 |     //     await this.Position.selectOption(position.trim());
  110 |     // }
  111 | 
  112 |     // async  getEmail(email){
  113 |     //     await this.Email.fill(email);
  114 |     // }
  115 | 
  116 |     // async getPhone(phone){
  117 |     //     await this.Phone.fill(phone);
  118 |     // }
  119 | 
  120 |     // async getUserid(userid){
  121 |     //     await this.Userid.fill(userid);
  122 |     // }
  123 | 
  124 |     // async getPassword(password){
  125 |     //     await this.Password.fill(password);
  126 |     // }
  127 | 
  128 |     // async getStatus(status){
  129 |     //     await this.Status.selectOption(status.trim());
  130 |     // }
  131 | 
  132 |     // async getlmdata(){
  133 |     //     await this.lmdata.click();
  134 |     // }
  135 | 
  136 |     async getSaveBtnandExceptdialog(){
  137 |         this.page.once('dialog',async(dialog)=>{
  138 |             expect(dialog.message()).toContain('Are you sure you want to save this?');
  139 |             await dialog.accept();
  140 |         })
  141 |         await this.saveBtn.click();
  142 |     }
  143 | 
  144 |     async getSaveBtnandConfirm() {
  145 |        // দুটো dialog আগেই register করো — click এর আগে
  146 |         this.page.once('dialog', async (dialog) => {
  147 |         expect(dialog.message()).toContain('Are you sure you want to save this?');
  148 |         await dialog.accept();
  149 |             await this.page.waitForTimeout(5000);
  150 | 
  151 |             this.page.once('dialog', async (dialog2) => {
  152 |                 expect(dialog2.message()).toContain('Data saved successfully');
  153 |                 await dialog2.accept();
  154 |             });
  155 |         });
  156 |         await this.saveBtn.click();
  157 |     }
  158 | 
```