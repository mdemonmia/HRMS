# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check view vendor agreement @functional @regression
- Location: tests\vendorAgreement.spec.js:111:8

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('tr').filter({ hasText: '[object Object]' }).locator(locator('.fa.fa-eye'))

```

# Test source

```ts
  1   | import { error } from "node:console";
  2   | import { expect } from "@playwright/test";
  3   | 
  4   | export class VendorAgreementPage {
  5   |     constructor(page) {
  6   |         this.page = page;
  7   |         this.vndragreementLink = page.locator("//a[normalize-space()='Vendor Agreement']");
  8   |         this.addvndrAgreement = page.locator("//button[normalize-space()='Add New Agreement']");
  9   |         this.selectvndr = page.locator('#vendorId');
  10  |         this.documentname = page.locator('#documentName');
  11  |         this.fileupload = page.locator('#documentUrl');
  12  |         this.singingdate = page.locator("//input[@formcontrolname='signingDate']");
  13  |         this.duration = page.locator('#durtion');
  14  |         this.cancelbtn = page.locator("//button[normalize-space()='Cancel']");
  15  |         this.savebtn = page.locator("//button[normalize-space()='Add']");
  16  |         this.editBtn = page.locator('.fa.fa-edit');
  17  |         this.viewBtn = page.locator('.fa.fa-eye');
  18  |         this.deleteBtn = page.locator('.fa.fa-trash');
  19  |     }
  20  | 
  21  |     async getvndrAgreementLink(){
  22  |         await this.vndragreementLink.click();
  23  |     }
  24  | 
  25  |     async getAddvndrAgreementBtn(){
  26  |         await this.addvndrAgreement.click();
  27  |     }
  28  | 
  29  |     async getvendrAgreementForm(vndrform){
  30  |         await this.selectvndr.waitFor({state:'visible',timeout:10000});
  31  |         if(vndrform.svndr !=='')await this.selectvndr.selectOption(vndrform.svndr.trim());
  32  |         await this.documentname.fill(vndrform.docname);
  33  |         if(vndrform.filename !=='')await this.fileupload.setInputFiles(vndrform.filename.trim());
  34  |         await this.singingdate.clear();
  35  |         await this.singingdate.fill(vndrform.sdate);
  36  |         await this.duration.fill(vndrform.duration);
  37  |     }
  38  | 
  39  |     async getCancelBtn(){
  40  |         await this.cancelbtn.click();
  41  |     }
  42  | 
  43  |      async getViewBtn(vname){
  44  |         const erow = await this.page.locator('tr',{hasText:vname});
> 45  |         await erow.locator(this.viewBtn).click();
      |                                          ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  46  |     }
  47  | 
  48  |     async getEditBtn(ename){
  49  |         const erow = await this.page.locator('tr',{hasText:ename});
  50  |         await erow.locator(this.editBtn).click();
  51  |     }
  52  | 
  53  |     async getDeleteBtn(dname){
  54  |         const erow = await this.page.locator('tr',{hasText:dname});
  55  |         await erow.locator(this.editBtn).click();
  56  |         const cmodal = page.locator('text=Do you want to delete this?');
  57  |         await cmodal.waitFor({state:'visible',timeout:10000});
  58  |         await this.page.locator('button:has-text("Yes)').click();
  59  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  60  |         const successMsg = await this.page.locator('text=Data is deleted successfully.');
  61  |         await successMsg.waitFor({state:'hidden',timeout:10000});
  62  |     }
  63  | 
  64  |     async getsaveBtnwithnomsg(){
  65  |         await this.savebtn.click();
  66  |     }
  67  | 
  68  |     async getSaveBtn(){
  69  |         await this.savebtn.click();
  70  |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  71  |         await cmodal.waitFor({state:'visible',timeout:10000});
  72  |         await this.page.locator('button:has-text("Yes")').click();
  73  |         await cmodal.waitFor({state:'hidden',timeout: 10000});
  74  | 
  75  |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  76  |         const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
  77  |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  78  | 
  79  |         const result = await Promise.race([
  80  |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
  81  |             duplicateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'duplicate'),
  82  |             updateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'update')
  83  |         ]);
  84  | 
  85  |         if(result === 'success'){
  86  |             await expect(successMsg).toBeVisible();
  87  |             await successMsg.waitFor({state:'hidden',timeout:10000});
  88  |             return 'success';
  89  |         }
  90  |         else if(result === 'duplicate'){
  91  |             await expect(duplicateMsg).toBeVisible();
  92  |             await duplicateMsg.waitFor({state:'hidden',timeout:10000});
  93  |             return 'duplicate';
  94  |         }
  95  |         else if(result === 'update'){
  96  |             await expect(updateMsg).toBeVisible();
  97  |             await updateMsg.waitFor({state:'hidden',timeout:10000});
  98  |             return 'update';
  99  |         }
  100 | 
  101 |         
  102 |     }
  103 | }
```