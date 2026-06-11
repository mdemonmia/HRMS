# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check blank select vendor @functional
- Location: tests\vendorAgreement.spec.js:25:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('text=Data is saved successfully.') to be visible

```

# Test source

```ts
  1  | import { error } from "node:console";
  2  | import { expect } from "@playwright/test";
  3  | 
  4  | export class VendorAgreementPage {
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.vndragreementLink = page.locator("//a[normalize-space()='Vendor Agreement']");
  8  |         this.addvndrAgreement = page.locator("//button[normalize-space()='Add New Agreement']");
  9  |         this.selectvndr = page.locator('#vendorId');
  10 |         this.documentname = page.locator('#documentName');
  11 |         this.fileupload = page.locator('#documentUrl');
  12 |         this.singingdate = page.locator("//input[@formcontrolname='signingDate']");
  13 |         this.duration = page.locator('#durtion');
  14 |         this.cancelbtn = page.locator("//button[normalize-space()='Cancel']");
  15 |         this.savebtn = page.locator("//button[normalize-space()='Add']");
  16 |     }
  17 | 
  18 |     async getvndrAgreementLink(){
  19 |         await this.vndragreementLink.click();
  20 |     }
  21 | 
  22 |     async getAddvndrAgreementBtn(){
  23 |         await this.addvndrAgreement.click();
  24 |     }
  25 | 
  26 |     async getvendrAgreementForm(vndrform){
  27 |         await this.selectvndr.waitFor({state:'visible',timeout:10000});
  28 |         if(vndrform.svndr !=='')await this.selectvndr.selectOption(vndrform.svndr.trim());
  29 |         await this.documentname.fill(vndrform.docname);
  30 |         await this.fileupload.setInputFiles(vndrform.filename);
  31 |         await this.singingdate.clear();
  32 |         await this.singingdate.fill(vndrform.sdate);
  33 |         await this.duration.fill(vndrform.duration);
  34 |     }
  35 | 
  36 |     async getCancelBtn(){
  37 |         await this.cancelbtn.click();
  38 |     }
  39 | 
  40 |     async getSaveBtn(){
  41 |         await this.savebtn.click();
  42 |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  43 |         await cmodal.waitFor({state:'visible',timeout:10000});
  44 |         await this.page.locator('button:has-text("Yes")').click();
  45 |         await cmodal.waitFor({state:'hidden',timeout: 10000});
  46 | 
  47 |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  48 |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  49 | 
  50 |         const result = await Promise.race([
> 51 |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
     |                        ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  52 |             updateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'update')
  53 |         ]);
  54 | 
  55 |         if(result === 'success'){
  56 |             await expect(successMsg).toBeVisible();
  57 |             await successMsg.waitFor({state:'hidden',timeout:10000});
  58 |             return 'success';
  59 |         }
  60 |         else if(result === 'update'){
  61 |             await expect(updateMsg).toBeVisible();
  62 |             await updateMsg.waitFor({state:'hidden',timeout:10000});
  63 |             return 'update';
  64 |         }
  65 | 
  66 |         
  67 |     }
  68 | }
```