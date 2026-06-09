# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorInfo.spec.js >> test vendor info page >> check update vendor name with blank short name @functional @regresstion
- Location: tests\vendorInfo.spec.js:159:10

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('tr').filter({ hasText: 'ArenaBD' }).locator(locator('//button[@title=\'Edit\']'))

```

# Test source

```ts
  1   | export class VendorInfoPage{
  2   |     constructor(page){
  3   |         this.page = page;
  4   |         this.vendorinfoLink = page.locator("//a[normalize-space()='Vendor Information']");
  5   |         this.AddVendor = page.locator("//button[normalize-space()='Add New Vendor']");
  6   |         this.official = page.locator('#vndrOfficialName');
  7   |         this.vendorShortName = page.locator('#vndrShortName');
  8   |         this.vendorCode = page.locator('#vendorCode');
  9   |         this.Division = page.locator('#vndrAddDiv');
  10  |         this.District = page.locator('#vndrAddDist');
  11  |         this.Address = page.locator('#vndrAddress');
  12  |         this.Contact = page.locator('#vndrAddKeyContact');
  13  |         this.ContactPosition = page.locator('#vndrAddKeyContactPos');
  14  |         this.OganizationType = page.locator("//select[@formcontrolname='vndrOrgType']");
  15  |         this.fileUpload = page.locator('#vendorLogoUrl');
  16  |         this.saveBtn = page.locator("//div[@class='ng-star-inserted']");
  17  |         this.EditBtn = page.locator("//button[@title='Edit']");
  18  |         this.UpdateBtn = page.locator("//div[contains(text(),'Update')]");
  19  |     }
  20  | 
  21  |     async getVendorInfoLink(){
  22  |         await this.vendorinfoLink.click();
  23  |     }
  24  | 
  25  |     async getAddVendorBtn(){
  26  |         await this.AddVendor.click();
  27  |     }
  28  | 
  29  |     async getVendorForm(vform){
  30  |         await this.official.fill(vform.ofcl);
  31  |         await this.vendorShortName.fill(vform.vendorShName);
  32  |         await this.vendorCode.clear();
  33  |         await this.vendorCode.fill(vform.vndrcode);
  34  |         if(vform.div !=='')await this.Division.selectOption(vform.div.trim());
  35  |         await this.District.waitFor({state:'visible'});
  36  |         if(vform.dist !=='')await this.District.selectOption(vform.dist.trim().toUpperCase());
  37  |         await this.Address.fill(vform.addr);
  38  |         await this.Contact.fill(vform.contact);
  39  |         await this.ContactPosition.fill(vform.contactPos);
  40  |         if(vform.orgType !=='')await this.OganizationType.selectOption(vform.orgType.trim());
  41  |         if (vform.fileupload) {
  42  |             await this.fileUpload.setInputFiles(vform.fileupload);
  43  |         }
  44  |     }
  45  | 
  46  |     async getSaveBtn(){
  47  |         await this.saveBtn.scrollIntoViewIfNeeded();
  48  |         await this.saveBtn.click();
  49  |         const cmodal = await this.page.locator('text=Are you sure you want to submit this?');
  50  |         await cmodal.waitFor({state:'visible',timeout:10000});
  51  |         await this.page.locator('button:has-text("Yes")').click();
  52  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  53  | 
  54  |         const errorMsg = await this.page.locator('.toast-message');
  55  |         const errorMsg2 = await this.page.locator('text= Could not save changes. Please configure your entity type accordingly.');
  56  |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  57  |         const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
  58  | 
  59  |         const result = await Promise.race([
  60  |             errorMsg.waitFor({state:'visible',timeout:10000}).then(() => 'error'),
  61  |             errorMsg2.waitFor({state:'visible',timeout:10000}).then(() => 'error2'),
  62  |             successMsg.waitFor({state:'visible',timeout:10000}).then(() => 'success'),
  63  |             duplicateMsg.waitFor({state:'visible',timeout:10000}).then(() => 'duplicate'),
  64  |         ]);
  65  | 
  66  |         if(result === 'error'){
  67  |             await errorMsg.waitFor({state:'hidden',timeout:10000});
  68  |             return 'error';
  69  |         }
  70  |         else if(result === 'error2'){
  71  |             await errorMsg2.waitFor({state:'hidden',timeout:10000});
  72  |             return 'error2';
  73  |         }
  74  |         else if(result === 'success'){
  75  |             await successMsg.waitFor({state:'hidden',timeout:10000});
  76  |             return 'success';
  77  |         }
  78  |         else if(result === 'duplicate'){
  79  |             await duplicateMsg.waitFor({state:'visible',timeout:10000});
  80  |             await this.page.locator('button:has-text("Ok")').click();
  81  |             await duplicateMsg.waitFor({state:'hidden',timeout:10000});
  82  |             return 'duplicate';
  83  |         }
  84  |     }
  85  | 
  86  |     async getEditBtn(name){
  87  |         const row = await this.page.locator('tr',{hasText:name});
> 88  |         await row.locator(this.EditBtn).click();
      |                                         ^ Error: locator.click: Target page, context or browser has been closed
  89  |     }
  90  | 
  91  |     async getUpdateBtn(){
  92  |         await this.UpdateBtn.scrollIntoViewIfNeeded();
  93  |         await this.UpdateBtn.click();
  94  |         const cmodal = await this.page.locator('text=Are you sure you want to submit this?');
  95  |         await cmodal.waitFor({state:'visible',timeout:10000});
  96  |         await this.page.locator('button:has-text("Yes")').click();
  97  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  98  |         const successMsg = await this.page.locator('text=Data is updated successfully.');
  99  |         await successMsg.waitFor({state:'hidden',timeout:10000});
  100 |     }
  101 | 
  102 | 
  103 | }
```