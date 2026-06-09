# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorInfo.spec.js >> test vendor info page >> check delete vendor information data @functional @regresstion
- Location: tests\vendorInfo.spec.js:285:10

# Error details

```
Error: locator.click: Error: strict mode violation: locator('tr').locator(locator('//button[@title=\'Delete\']')) resolved to 2 elements:
    1) <button type="button" title="Delete" data-bs-placement="top" data-bs-toggle="tooltip" class="btn btn-outline-warning" _ngcontent-ng-cli-universal-c665162214="">…</button> aka getByTitle('Delete').first()
    2) <button type="button" title="Delete" data-bs-placement="top" data-bs-toggle="tooltip" class="btn btn-outline-warning" _ngcontent-ng-cli-universal-c665162214="">…</button> aka getByTitle('Delete').nth(1)

Call log:
  - waiting for locator('tr').locator(locator('//button[@title=\'Delete\']'))

```

# Test source

```ts
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
  19  |         this.deleteBtn = page.locator("//button[@title='Delete']");
  20  |     }
  21  | 
  22  |     async getVendorInfoLink(){
  23  |         await this.vendorinfoLink.click();
  24  |     }
  25  | 
  26  |     async getAddVendorBtn(){
  27  |         await this.AddVendor.click();
  28  |     }
  29  | 
  30  |     async getVendorForm(vform){
  31  |         await this.official.fill(vform.ofcl);
  32  |         await this.vendorShortName.fill(vform.vendorShName);
  33  |         await this.vendorCode.clear();
  34  |         await this.vendorCode.fill(vform.vndrcode);
  35  |         if(vform.div !=='')await this.Division.selectOption(vform.div.trim());
  36  |         await this.District.waitFor({state:'visible'});
  37  |         if(vform.dist !=='')await this.District.selectOption(vform.dist.trim().toUpperCase());
  38  |         await this.Address.fill(vform.addr);
  39  |         await this.Contact.fill(vform.contact);
  40  |         await this.ContactPosition.fill(vform.contactPos);
  41  |         if(vform.orgType !=='')await this.OganizationType.selectOption(vform.orgType.trim());
  42  |         if (vform.fileupload) {
  43  |             await this.fileUpload.setInputFiles(vform.fileupload);
  44  |         }
  45  |     }
  46  | 
  47  |     async getSaveBtn(){
  48  |         await this.saveBtn.scrollIntoViewIfNeeded();
  49  |         await this.saveBtn.click();
  50  |         const cmodal = await this.page.locator('text=Are you sure you want to submit this?');
  51  |         await cmodal.waitFor({state:'visible',timeout:10000});
  52  |         await this.page.locator('button:has-text("Yes")').click();
  53  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  54  | 
  55  |         const errorMsg = await this.page.locator('.toast-message');
  56  |         const errorMsg2 = await this.page.locator('text= Could not save changes. Please configure your entity type accordingly.');
  57  |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  58  |         const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
  59  | 
  60  |         const result = await Promise.race([
  61  |             errorMsg.waitFor({state:'visible',timeout:10000}).then(() => 'error'),
  62  |             errorMsg2.waitFor({state:'visible',timeout:10000}).then(() => 'error2'),
  63  |             successMsg.waitFor({state:'visible',timeout:10000}).then(() => 'success'),
  64  |             duplicateMsg.waitFor({state:'visible',timeout:10000}).then(() => 'duplicate'),
  65  |         ]);
  66  | 
  67  |         if(result === 'error'){
  68  |             await errorMsg.waitFor({state:'hidden',timeout:10000});
  69  |             return 'error';
  70  |         }
  71  |         else if(result === 'error2'){
  72  |             await errorMsg2.waitFor({state:'hidden',timeout:10000});
  73  |             return 'error2';
  74  |         }
  75  |         else if(result === 'success'){
  76  |             await successMsg.waitFor({state:'hidden',timeout:10000});
  77  |             return 'success';
  78  |         }
  79  |         else if(result === 'duplicate'){
  80  |             await duplicateMsg.waitFor({state:'visible',timeout:10000});
  81  |             await this.page.locator('button:has-text("Ok")').click();
  82  |             await duplicateMsg.waitFor({state:'hidden',timeout:10000});
  83  |             return 'duplicate';
  84  |         }
  85  |     }
  86  | 
  87  |     async getEditBtn(name){
  88  |         const row = await this.page.locator('tr',{hasText:name});
  89  |         await row.locator(this.EditBtn).click();
  90  |     }
  91  | 
  92  |     async getUpdateBtn(){
  93  |         await this.UpdateBtn.scrollIntoViewIfNeeded();
  94  |         await this.UpdateBtn.click();
  95  |         const cmodal = await this.page.locator('text=Are you sure you want to submit this?');
  96  |         await cmodal.waitFor({state:'visible',timeout:10000});
  97  |         await this.page.locator('button:has-text("Yes")').click();
  98  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  99  |         const successMsg = await this.page.locator('text=Data is updated successfully.');
  100 |         await successMsg.waitFor({state:'hidden',timeout:10000});
  101 |     }
  102 | 
  103 |     async getDeleteBtn(dltname){
  104 |         const dltrow = await this.page.locator('tr',{hastext:dltname});
> 105 |         await dltrow.locator(this.deleteBtn).click();
      |                                              ^ Error: locator.click: Error: strict mode violation: locator('tr').locator(locator('//button[@title=\'Delete\']')) resolved to 2 elements:
  106 |         const cmodal = await this.page.locator('text=Do you want to delete this?');
  107 |         await cmodal.waitFor({state: 'visible',timeout:10000});
  108 |         await this.page.locator('button:has-text("Yes")').click();
  109 |         await cmodal.waitFor({state: 'hidden',timeout:10000});
  110 | 
  111 |         const successMsg = await this.page.locator('text=Data is deleted successfully.');
  112 |         await successMsg.waitFor({state:'visible',timeout:10000});
  113 |         await this.page.locator('button:has-text("Ok")').click();
  114 |         await successMsg.waitFor({state:'hidden',timeout:10000});
  115 |     }
  116 | 
  117 |     
  118 | 
  119 | }
```