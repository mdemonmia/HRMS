# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check blank select vendor @functional
- Location: tests\vendorAgreement.spec.js:25:7

# Error details

```
ReferenceError: has is not defined
```

# Test source

```ts
  1  | export class VendorAgreementPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.vndragreementLink = page.locator("//a[normalize-space()='Vendor Agreement']");
  5  |         this.addvndrAgreement = page.locator("//button[normalize-space()='Add New Agreement']");
  6  |         this.selectvndr = page.locator('#vendorId');
  7  |         this.documentname = page.locator('#documentName');
  8  |         this.fileupload = page.locator('#documentUrl');
  9  |         this.singingdate = page.locator("//input[@formcontrolname='signingDate']");
  10 |         this.duration = page.locator('#durtion');
  11 |         this.cancelbtn = page.locator("//button[normalize-space()='Cancel']");
  12 |         this.savebtn = page.locator("//button[normalize-space()='Add']");
  13 |     }
  14 | 
  15 |     async getvndrAgreementLink(){
  16 |         await this.vndragreementLink.click();
  17 |     }
  18 | 
  19 |     async getAddvndrAgreementBtn(){
  20 |         await this.addvndrAgreement.click();
  21 |     }
  22 | 
  23 |     async getvendrAgreementForm(vndrform){
  24 |         await this.selectvndr.waitFor({state:'visible',timeout:10000});
  25 |         if(vndrform.svndr !=='')await this.selectvndr.selectOption(vndrform.svndr.trim());
  26 |         await this.documentname.fill(vndrform.docname);
  27 |         await this.fileupload.setInputFiles(vndrform.filename);
  28 |         await this.singingdate.clear();
  29 |         await this.singingdate.fill(vndrform.sdate);
  30 |         await this.duration.fill(vndrform.duration);
  31 |     }
  32 | 
  33 |     async getCancelBtn(){
  34 |         await this.cancelbtn.click();
  35 |     }
  36 | 
  37 |     async getSaveBtn(){
  38 |         await this.savebtn.click();
  39 |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  40 |         await cmodal.waitFor({state:'visible',timeout:10000});
> 41 |         await this.page.locator({button:has-text("Yes")}).click();
     |                                         ^ ReferenceError: has is not defined
  42 |         await cmodal.waitFor({state:'hidden',timeout: 10000});
  43 | 
  44 |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  45 |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  46 | 
  47 |         const result = await promise.race([
  48 |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
  49 |             updateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'update')
  50 |         ])
  51 | 
  52 |         if(result === 'success'){
  53 |             await successMsg.waitFor({state:'hidden',timeout:10000});
  54 |             return 'success';
  55 |         }
  56 |         else if(result === 'update'){
  57 |             await updateMsg.waitFor({state:'hidden',timeout:10000});
  58 |             return 'update';
  59 |         }
  60 | 
  61 |         
  62 |     }
  63 | }
```