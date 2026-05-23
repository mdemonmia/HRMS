# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendor.spec.js >> test vendor user login management page. >> check first name with update data
- Location: tests\vendor.spec.js:146:10

# Error details

```
TimeoutError: locator.clear: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('#userSystemName')
    - locator resolved to <input readonly type="text" autocomplete="off" id="userSystemName" name="userSystemName" formcontrolname="userSystemName" _ngcontent-ng-cli-universal-c1859390029="" class="form-control ng-untouched ng-pristine ng-valid"/>
    - fill("")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not editable
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not editable
    - retrying fill action
      - waiting 100ms
    114 × waiting for element to be visible, enabled and editable
        - element is not editable
      - retrying fill action
        - waiting 500ms

```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | 
  3   | export class VendorMgtPage{
  4   |     constructor(page){
  5   |         this.page = page;
  6   |         this.Addvendor = page.locator("//button[normalize-space()='Add New User']");
  7   |         this.searchFilter = page.locator('#searchAppUserInformation');
  8   |         this.firstName = page.locator('#userFName');
  9   |         this.lastName = page.locator('#userLName');
  10  |         this.vendorName = page.locator("//select[@formcontrolname='userOrgId']");
  11  |         this.Role = page.locator('div span.col-md-2.ng-star-inserted');
  12  |         this.Email = page.locator('#userEmail');
  13  |         this.Phone = page.locator('#userPhoneNo');
  14  |         this.Userid = page.locator('#userSystemName');
  15  |         this.Password = page.locator('#userPassword');
  16  |         this.Status = page.locator("//select[@formcontrolname='userStatus']");
  17  |         this.saveBtn = page.locator("//div[contains(text(),'Save')]");
  18  |         this.EditBtn = page.locator("button[title='Edit']");
  19  |         this.UpdateBtn = page.locator("//div[contains(text(),'Update')]");
  20  |         this.DeleteBtn = page.locator("button[title='Delete']");
  21  |     }
  22  | 
  23  |     async getAddvendor(){
  24  |         await this.Addvendor.click();
  25  |     }
  26  | 
  27  |     async getVendorForm(vform){
  28  |         await this.firstName.fill(vform.fname);
  29  |         await this.lastName.fill(vform.lname);
  30  |         if(vform.vendor !== '') await this.vendorName.selectOption(vform.vendor.trim());
  31  |         if(vform.role !== ''){
  32  |             let roleFound = false;
  33  |             const rolecount = await this.Role.count();
  34  |             for(let i=0;i<rolecount;i++){
  35  |                 const findrole = this.Role.nth(i);
  36  |                 const roleText = (await findrole.textContent()).trim();
  37  |                 if(roleText === vform.role){
  38  |                     await findrole.locator('input').click();
  39  |                     roleFound =true;
  40  |                     break;
  41  |                 }
  42  | 
  43  |             }
  44  |             if(!roleFound) throw new Error(`Role "${vform.role}" not found`);
  45  |         }
  46  | 
  47  |         await this.Email.fill(vform.email);
  48  |         await this.Phone.fill(vform.phone);
  49  |         await this.Userid.fill(vform.userid);
  50  |         await this.Password.fill(vform.password);
  51  |         if(vform.status !== '') await this.Status.selectOption(vform.status.trim());   
  52  |     }
  53  | 
  54  |     async getFilter(searchText){
  55  |         await this.searchFilter.clear();
  56  |         await this.searchFilter.fill(searchText);
  57  |         await this.page.waitForTimeout(3000);
  58  |     }
  59  | 
  60  |     async getEditVendor(name){
  61  |         const row = await this.page.locator('tr',{hasText:name});
  62  |         await row.locator(this.EditBtn).click(); 
  63  |     }
  64  | 
  65  |     async getEditvendorForm(eform){
  66  |         await this.firstName.clear();
  67  |         await this.firstName.fill(eform.fname);
  68  |         await this.lastName.clear();
  69  |         await this.lastName.fill(eform.lname);
  70  |         if(eform.vendor ==='' || !eform.vendor){
  71  |             await this.vendorName.selectOption({index:0})
  72  |         }else{
  73  |             await this.vendorName.selectOption(eform.vendor);
  74  |         }
  75  | 
  76  |         if(eform.role !== '' && eform.role) {
  77  |             let roleFound = false;
  78  |             const rolecount = await this.Role.count();
  79  |             for(let i = 0; i < rolecount; i++) {
  80  |                 const findrole = this.Role.nth(i);
  81  |                 const roleText = (await findrole.textContent()).trim();
  82  |                 if(roleText === eform.role) {
  83  |                     await findrole.locator('input').click();
  84  |                     roleFound = true;
  85  |                     break;
  86  |                 }
  87  |             }
  88  |             if(!roleFound) throw new Error(`Role "${eform.role}" not found`);
  89  |         }
  90  |         await this.Email.clear();
  91  |         await this.Email.fill(eform.email);
  92  |         await this.Phone.clear();
  93  |         await this.Phone.fill(eform.phone);
> 94  |         await this.Userid.clear();
      |                           ^ TimeoutError: locator.clear: Timeout 60000ms exceeded.
  95  |         await this.Userid.fill(eform.userid);
  96  |         await this.Password.clear();
  97  |         await this.Password.fill(eform.password);
  98  |         if(eform.status ==='' || !eform.status){
  99  |             await this.Status.selectOption({index:0});
  100 |         }else{
  101 |             await this.Status.selectOption(eform.status);
  102 |         }
  103 |     }
  104 | 
  105 |     async getSaveandError(){
  106 |         await this.saveBtn.scrollIntoViewIfNeeded();
  107 |         await this.saveBtn.click();
  108 |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  109 |         await cmodal.waitFor({state:'visible',timeout:10000});
  110 |         await this.page.locator('button:has-text("Yes")').click();
  111 |         await cmodal.waitFor({state:'hidden',timeout:10000});
  112 |     }
  113 | 
  114 |     async getSaveBtnandConfirm() {
  115 |         await this.saveBtn.scrollIntoViewIfNeeded();
  116 |         // ✅ Save button click
  117 |         await this.saveBtn.click();
  118 |     
  119 |         // ✅ প্রথম confirm modal wait করো
  120 |         const confirmModal = this.page.locator('text=Are you sure you want to save this?');
  121 |         await confirmModal.waitFor({ state: 'visible', timeout: 10000 });
  122 |     
  123 |         // ✅ Yes click
  124 |         await this.page.locator('button:has-text("Yes")').click();
  125 |     
  126 |         // ✅ প্রথম modal বন্ধ হওয়ার wait
  127 |         await confirmModal.waitFor({ state: 'hidden', timeout: 10000 });
  128 |     
  129 |         // ✅ Success অথবা Duplicate — যেটা আসে সেটা detect করো
  130 |         const successModal = this.page.locator('text=Data is saved successfully.');
  131 |         const duplicateModal = this.page.locator('text=Duplicate name, please check entry name.'); // আপনার actual text দিন
  132 |     
  133 |         // ✅ দুইটার মধ্যে যেটা আগে আসে সেটা catch করো
  134 |         const result = await Promise.race([
  135 |                 successModal.waitFor({ state: 'visible', timeout: 10000 }).then(() => 'success'),
  136 |                 duplicateModal.waitFor({ state: 'visible', timeout: 10000 }).then(() => 'duplicate'),
  137 |         ]);
  138 |     
  139 |         if (result === 'success') {
  140 |             // ✅ Success flow
  141 |             await expect(successModal).toBeVisible();
  142 |             await this.page.locator('button:has-text("Ok")').click();
  143 |             await successModal.waitFor({ state: 'hidden', timeout: 10000 });
  144 |             return 'success';
  145 |     
  146 |             } else if (result === 'duplicate') {
  147 |                 // ✅ Duplicate flow
  148 |                 await expect(duplicateModal).toBeVisible();
  149 |                 await this.page.locator('button:has-text("Cancel")').click(); // আপনার button text দিন
  150 |                 await duplicateModal.waitFor({ state: 'hidden', timeout: 10000 });
  151 |                 return 'duplicate';
  152 |             }
  153 |         }
  154 | 
  155 |     async getUpdateandError(){
  156 |         await this.UpdateBtn.click();
  157 |         const emodal = await this.page.locator('text=Are you sure you want to update this?');
  158 |         await emodal.waitFor({state:'visible',timeout:10000});
  159 |         await this.page.locator('button:has-text("Yes")').click();
  160 |         await emodal.waitFor({state:'hidden',timeout:10000});
  161 |     }
  162 | 
  163 |     async getUpdateandConfirm(){
  164 |         await this.UpdateBtn.click();
  165 |         const emodal = await this.page.locator('text=Are you sure you want to update this?');
  166 |         await emodal.waitFor({state:'visible',timeout:10000});
  167 |         await this.page.locator('button:has-text("Yes")').click();
  168 |         await emodal.waitFor({state:'hidden',timeout:10000}); 
  169 |         const successmodal = await this.page.locator('text=Data is updated successfully.');
  170 |         await successmodal.waitFor({state:'visible',timeout:10000});
  171 |         await this.page.locator('button:has-text("Ok")').click();
  172 |         await successmodal.waitFor({state:'hidden',timeout:10000});
  173 |     }
  174 | 
  175 |     async getDeleteConfirm(name){
  176 |         const row = await this.page.locator('tr',{hasText:name});
  177 |         await row.locator(this.DeleteBtn).click();
  178 |         const dmodal = await this.page.locator('text=Do you want to delete this?');
  179 |         await dmodal.waitFor({state:'visible',timeout:10000});
  180 |         await this.page.locator('button:has-text(" Yes ")').click();
  181 |         await dmodal.waitFor({state:'hidden',timeout:10000});
  182 |         const smodal = await this.page.locator('text=Data is deleted successfully.');
  183 |         await smodal.waitFor({state:'visible',timeout:10000});
  184 |         await this.page.locator('button:has-text("Ok")').click();
  185 |         await smodal.waitFor({state:'hidden',timeout:10000});
  186 |     }
  187 | 
  188 | }
```