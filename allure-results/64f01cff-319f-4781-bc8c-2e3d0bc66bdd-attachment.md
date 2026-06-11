# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check Edit duration name vendor agreement @functional @regression
- Location: tests\vendorAgreement.spec.js:183:8

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('text=Data is updated successfully.') to be visible

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
  19  |         this.updateBtn = page.locator("//button[normalize-space()='Update']");
  20  |     }
  21  | 
  22  |     async getvndrAgreementLink(){
  23  |         await this.vndragreementLink.click();
  24  |     }
  25  | 
  26  |     async getAddvndrAgreementBtn(){
  27  |         await this.addvndrAgreement.click();
  28  |     }
  29  | 
  30  |     async getvendrAgreementForm(vndrform){
  31  |         await this.selectvndr.waitFor({state:'visible',timeout:10000});
  32  |         if(vndrform.svndr !=='')await this.selectvndr.selectOption(vndrform.svndr.trim());
  33  |         await this.documentname.fill(vndrform.docname);
  34  |         if(vndrform.filename !=='')await this.fileupload.setInputFiles(vndrform.filename.trim());
  35  |         await this.singingdate.clear();
  36  |         await this.singingdate.fill(vndrform.sdate);
  37  |         await this.duration.fill(vndrform.duration);
  38  |     }
  39  | 
  40  |     async getCancelBtn(){
  41  |         await this.cancelbtn.click();
  42  |     }
  43  | 
  44  |     async getupdateBtn(){
  45  |         await this.updateBtn.click();
  46  |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  47  |         await cmodal.waitFor({state:'visible',timeout:10000});
  48  |         await this.page.locator('button:has-text("Yes")').click();
  49  |         await cmodal.waitFor({state:'hidden',timeout: 10000});
  50  |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
> 51  |         await updateMsg.waitFor({ state: 'visible', timeout: 10000 });
      |                         ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  52  |         await updateMsg.waitFor({state:'hidden',timeout:10000});
  53  |     }  
  54  | 
  55  |     async getUpdateBtnwithnomsg(){
  56  |         await this.updateBtn.click();
  57  |     }
  58  | 
  59  |      async getViewBtn(vname){
  60  |         const erow = await this.page.locator('tr',{hasText:vname});
  61  |         await erow.locator(this.viewBtn).click();
  62  |     }
  63  | 
  64  |     async getEditBtn(ename){
  65  |         const erow = await this.page.locator('tr',{hasText:ename});
  66  |         await erow.locator(this.editBtn).click();
  67  |     }
  68  | 
  69  |     async getDeleteBtn(dname){
  70  |         const erow = await this.page.locator('tr',{hasText:dname});
  71  |         await erow.locator(this.editBtn).click();
  72  |         const cmodal = page.locator('text=Do you want to delete this?');
  73  |         await cmodal.waitFor({state:'visible',timeout:10000});
  74  |         await this.page.locator('button:has-text("Yes")').click();
  75  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  76  |         const successMsg = await this.page.locator('text=Data is deleted successfully.');
  77  |         await successMsg.waitFor({state:'hidden',timeout:10000});
  78  |     }
  79  | 
  80  |     async getsaveBtnwithnomsg(){
  81  |         await this.savebtn.click();
  82  |     }
  83  | 
  84  |     async getSaveBtn(){
  85  |         await this.savebtn.click();
  86  |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  87  |         await cmodal.waitFor({state:'visible',timeout:10000});
  88  |         await this.page.locator('button:has-text("Yes")').click();
  89  |         await cmodal.waitFor({state:'hidden',timeout: 10000});
  90  | 
  91  |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  92  |         const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
  93  |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  94  | 
  95  |         const result = await Promise.race([
  96  |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
  97  |             duplicateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'duplicate'),
  98  |             updateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'update')
  99  |         ]);
  100 | 
  101 |         if(result === 'success'){
  102 |             await expect(successMsg).toBeVisible();
  103 |             await successMsg.waitFor({state:'hidden',timeout:10000});
  104 |             return 'success';
  105 |         }
  106 |         else if(result === 'duplicate'){
  107 |             await expect(duplicateMsg).toBeVisible();
  108 |             await duplicateMsg.waitFor({state:'hidden',timeout:10000});
  109 |             return 'duplicate';
  110 |         }
  111 |         else if(result === 'update'){
  112 |             await expect(updateMsg).toBeVisible();
  113 |             await updateMsg.waitFor({state:'hidden',timeout:10000});
  114 |             return 'update';
  115 |         }
  116 | 
  117 |         
  118 |     }
  119 | }
```