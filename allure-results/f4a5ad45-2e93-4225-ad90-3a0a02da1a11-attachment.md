# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.spec.js >> test user management page >> checked dept with invalid data
- Location: tests\user.spec.js:83:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[normalize-space()=\'Add New User\']')
    - locator resolved to <button class="btn btn-primary float-end" _ngcontent-ng-cli-universal-c2295253235=""> Add New User </button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-ng-cli-universal-c587276320="" class="ngx-spinner-overlay ng-tns-c587276320-1 ng-trigger ng-trigger-fadeIn ng-star-inserted">…</div> from <ngx-spinner type="ball-atom" _nghost-ng-cli-universal-c587276320="" _ngcontent-ng-cli-universal-c2401963271="" class="ng-tns-c587276320-1 ng-star-inserted">…</ngx-spinner> subtree intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

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
  13  |         this.firstName  = page.locator('#userFName');
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
  26  |         this.saveBtn = page.getByRole('button', { name: 'Save' })
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
> 39  |         await this.addUserBtn.click();
      |                               ^ Error: locator.click: Target page, context or browser has been closed
  40  |     }
  41  | 
  42  |     async getUserMgt(umgt){
  43  |         console.log('Step 1: firstName fill');
  44  |         await this.firstName.fill(umgt.fname);
  45  |         console.log('Step 2: lastName fill');
  46  |         await this.lastName.fill(umgt.lname);
  47  | 
  48  |         console.log('Step 3: role select');
  49  |         if(umgt.role !== ''){
  50  |             let roleFound = false;
  51  |             const rolecount = await this.urole.count();
  52  |             for(let i=0; i<rolecount; i++){
  53  |                 const rolenumber = this.urole.nth(i);
  54  |                 const roleText = await rolenumber.textContent();
  55  |                 if(roleText.trim() === umgt.role){
  56  |                     await rolenumber.locator('input').click();
  57  |                     roleFound = true;
  58  |                     break;
  59  |                 }
  60  |             }
  61  |             if(!roleFound) throw new Error(`Role "${umgt.role}" not found`);
  62  |        }
  63  |        console.log('Step 4: utype select');
  64  |        if(umgt.utype !== '') await this.uType.selectOption(umgt.utype.trim());
  65  |        console.log('Step 5: orgdiv select');
  66  |        if(umgt.orgdiv !== '') await this.orgDiv.selectOption(umgt.orgdiv.trim());
  67  |        console.log('Step 6: dept select');
  68  |        if(umgt.dept !== '') await this.Dept.selectOption(umgt.dept.trim());
  69  |        console.log('Step 7: position select');
  70  |        if(umgt.position !== '') await this.Position.selectOption(umgt.position.trim());
  71  | 
  72  |        console.log('Step 8: email fill');
  73  |        await this.Email.scrollIntoViewIfNeeded();
  74  |        await this.Email.fill(umgt.email);
  75  |        console.log('Step 9: phone fill');
  76  |        await this.Phone.fill(umgt.phone);
  77  |        console.log('Step 10: userid fill');
  78  |        await this.Userid.fill(umgt.userid);
  79  |        console.log('Step 11: password fill');
  80  |        await this.Password.fill(umgt.password);
  81  |        console.log('Step 12: status select');
  82  |        if(umgt.status !== '') await this.Status.selectOption(umgt.status.trim());
  83  |        console.log('Step 13: lmdata click');
  84  |        await this.lmdata.click();
  85  |        console.log('Step 14: scroll to save');
  86  |        await this.lmdata.scrollIntoViewIfNeeded();
  87  |        console.log('=== getUserMgt completed ===');
  88  |     }
  89  | 
  90  |     async getSaveBtnandExceptdialog(){
  91  |         await this.saveBtn.click();
  92  |         const cmodal = this.page.locator('text=Are you sure you want to save this?');
  93  |         await cmodal.waitFor({state: 'visible', timeout: 10000});
  94  |         await this.page.locator('button:has-text("Yes")').click();
  95  |         await cmodal.waitFor({state: 'hidden', timeout: 10000});
  96  |     }
  97  | 
  98  |         async getSaveBtnandConfirm() {
  99  |         // ✅ Save button click
  100 |         await this.saveBtn.click();
  101 | 
  102 |         // ✅ প্রথম confirm modal wait করো
  103 |         const confirmModal = this.page.locator('text=Are you sure you want to save this?');
  104 |         await confirmModal.waitFor({ state: 'visible', timeout: 10000 });
  105 | 
  106 |         // ✅ Yes click
  107 |         await this.page.locator('button:has-text("Yes")').click();
  108 | 
  109 |         // ✅ প্রথম modal বন্ধ হওয়ার wait
  110 |         await confirmModal.waitFor({ state: 'hidden', timeout: 10000 });
  111 | 
  112 |         // ✅ Success অথবা Duplicate — যেটা আসে সেটা detect করো
  113 |         const successModal = this.page.locator('text=Data is saved successfully.');
  114 |         const duplicateModal = this.page.locator('text=Duplicate name, please check entry name.'); // আপনার actual text দিন
  115 | 
  116 |         // ✅ দুইটার মধ্যে যেটা আগে আসে সেটা catch করো
  117 |         const result = await Promise.race([
  118 |             successModal.waitFor({ state: 'visible', timeout: 10000 }).then(() => 'success'),
  119 |             duplicateModal.waitFor({ state: 'visible', timeout: 10000 }).then(() => 'duplicate'),
  120 |         ]);
  121 | 
  122 |         if (result === 'success') {
  123 |             // ✅ Success flow
  124 |             await expect(successModal).toBeVisible();
  125 |             await this.page.locator('button:has-text("Ok")').click();
  126 |             await successModal.waitFor({ state: 'hidden', timeout: 10000 });
  127 |             return 'success';
  128 | 
  129 |         } else if (result === 'duplicate') {
  130 |             // ✅ Duplicate flow
  131 |             await expect(duplicateModal).toBeVisible();
  132 |             await this.page.locator('button:has-text("Cancel")').click(); // আপনার button text দিন
  133 |             await duplicateModal.waitFor({ state: 'hidden', timeout: 10000 });
  134 |             return 'duplicate';
  135 |         }
  136 |     }
  137 |    
  138 | } 
```