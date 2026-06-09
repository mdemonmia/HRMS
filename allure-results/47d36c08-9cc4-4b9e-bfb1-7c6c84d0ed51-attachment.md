# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorInfo.spec.js >> test vendor info page >> check blank official name @functional @regresstion
- Location: tests\vendorInfo.spec.js:26:9

# Error details

```
TypeError: this.page.scrollIntoViewIfNeeded is not a function
```

# Test source

```ts
  1  | export class VendorInfoPage{
  2  |     constructor(page){
  3  |         this.page = page;
  4  |         this.vendorinfoLink = page.locator("//a[normalize-space()='Vendor Information']");
  5  |         this.AddVendor = page.locator("//button[normalize-space()='Add New Vendor']");
  6  |         this.official = page.locator('#vndrOfficialName');
  7  |         this.vendorShortName = page.locator('#vndrShortName');
  8  |         this.vendorCode = page.locator('#vendorCode');
  9  |         this.Division = page.locator('#vndrAddDiv');
  10 |         this.District = page.locator('#vndrAddDist');
  11 |         this.Address = page.locator('#vndrAddress');
  12 |         this.Contact = page.locator('#vndrAddKeyContact');
  13 |         this.ContactPosition = page.locator('#vndrAddKeyContactPos');
  14 |         this.OganizationType = page.locator("//select[@formcontrolname='vndrOrgType']");
  15 |         this.fileUpload = page.locator('#vendorLogoUrl');
  16 |         this.saveBtn = page.locator("//div[@class='ng-star-inserted']");
  17 | 
  18 |     }
  19 | 
  20 |     async getVendorInfoLink(){
  21 |         await this.vendorinfoLink.click();
  22 |     }
  23 | 
  24 |     async getAddVendorBtn(){
  25 |         await this.AddVendor.click();
  26 |     }
  27 | 
  28 |     async getVendorForm(vform){
  29 |         await this.official.fill(vform.ofcl);
  30 |         await this.vendorShortName.fill(vform.vendorShName);
  31 |         await this.vendorCode.clear();
  32 |         await this.vendorCode.fill(vform.vndrcode);
  33 |         if(vform.div !=='')await this.Division.selectOption(vform.div.trim());
  34 |         await this.District.waitFor({state:'visible'});
  35 |         if(vform.dist !=='')await this.District.selectOption(vform.dist.trim().toUpperCase());
  36 |         await this.Address.fill(vform.addr);
  37 |         await this.Contact.fill(vform.contact);
  38 |         await this.ContactPosition.fill(vform.contactPos);
  39 |         if(vform.orgType !=='')await this.OganizationType.selectOption(vform.orgType.trim());
  40 |         if (vform.fileupload) {
  41 |             await this.fileUpload.setInputFiles(vform.fileupload);
  42 |         }
  43 |     }
  44 | 
  45 |     async getSaveBtn(){
> 46 |         await this.page.scrollIntoViewIfNeeded();
     |                         ^ TypeError: this.page.scrollIntoViewIfNeeded is not a function
  47 |         await this.saveBtn.click();
  48 |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  49 |         await cmodal.waitFor({state:'visible',timeout:10000});
  50 |         await this.page.locator('button:has-text("Yes")').click();
  51 |         await cmodal.waitFor({state:'hidden',timeout:10000});
  52 | 
  53 |         const errorMsg = await this.page.locator('text= Could not save changes. Please configure your entity type accordingly.');
  54 |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  55 |         const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
  56 | 
  57 |         const result = await Promise.race([
  58 |             errorMsg.waitFor({state:'visible',timeout:10000}).then(() => 'error'),
  59 |             successMsg.waitFor({state:'visible',timeout:10000}).then(() => 'success'),
  60 |             duplicateMsg.waitFor({state:'visible',timeout:10000}).then(() => 'duplicate'),
  61 |         ]);
  62 | 
  63 |         if(result === 'error'){
  64 |             await errorMsg.waitFor({state:'hidden',timeout:10000});
  65 |             return 'error';
  66 |         }
  67 |         else if(result === 'success'){
  68 |             await successMsg.waitFor({state:'hidden',timeout:10000});
  69 |             return 'success';
  70 |         }
  71 |         else if(result === 'duplicate'){
  72 |             await duplicateMsg.waitFor({state:'visible',timeout:10000});
  73 |             await this.page.locator('button:has-text("Ok")').click();
  74 |             await duplicateMsg.waitFor({state:'hidden',timeout:10000});
  75 |             return 'duplicate';
  76 |         }
  77 |     }
  78 | 
  79 | 
  80 | }
```