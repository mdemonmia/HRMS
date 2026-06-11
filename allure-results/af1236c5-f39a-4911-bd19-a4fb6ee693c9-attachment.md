# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check Edit vendor agreement @functional @regression
- Location: tests\vendorAgreement.spec.js:123:8

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('text=Data is saved successfully.') to be visible

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
  50  | 
  51  |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  52  |         const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
  53  |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  54  | 
  55  |         const result = await Promise.race([
> 56  |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
      |                        ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  57  |             duplicateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'duplicate'),
  58  |             updateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'update')
  59  |         ]);
  60  | 
  61  |         if(result === 'success'){
  62  |             await expect(successMsg).toBeVisible();
  63  |             await successMsg.waitFor({state:'hidden',timeout:10000});
  64  |             return 'success';
  65  |         }
  66  |         else if(result === 'duplicate'){
  67  |             await expect(duplicateMsg).toBeVisible();
  68  |             await duplicateMsg.waitFor({state:'hidden',timeout:10000});
  69  |             return 'duplicate';
  70  |         }
  71  |         else if(result === 'update'){
  72  |             await expect(updateMsg).toBeVisible();
  73  |             await updateMsg.waitFor({state:'hidden',timeout:10000});
  74  |             return 'update';
  75  |         }
  76  |     }
  77  | 
  78  |     async getUpdateBtnwithnomsg(){
  79  |         await this.updateBtn.click();
  80  |     }
  81  | 
  82  |      async getViewBtn(vname){
  83  |         const erow = await this.page.locator('tr',{hasText:vname});
  84  |         await erow.locator(this.viewBtn).click();
  85  |     }
  86  | 
  87  |     async getEditBtn(ename){
  88  |         const erow = await this.page.locator('tr',{hasText:ename});
  89  |         await erow.locator(this.editBtn).click();
  90  |     }
  91  | 
  92  |     async getDeleteBtn(dname){
  93  |         const erow = await this.page.locator('tr',{hasText:dname});
  94  |         await erow.locator(this.editBtn).click();
  95  |         const cmodal = page.locator('text=Do you want to delete this?');
  96  |         await cmodal.waitFor({state:'visible',timeout:10000});
  97  |         await this.page.locator('button:has-text("Yes)').click();
  98  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  99  |         const successMsg = await this.page.locator('text=Data is deleted successfully.');
  100 |         await successMsg.waitFor({state:'hidden',timeout:10000});
  101 |     }
  102 | 
  103 |     async getsaveBtnwithnomsg(){
  104 |         await this.savebtn.click();
  105 |     }
  106 | 
  107 |     async getSaveBtn(){
  108 |         await this.savebtn.click();
  109 |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  110 |         await cmodal.waitFor({state:'visible',timeout:10000});
  111 |         await this.page.locator('button:has-text("Yes")').click();
  112 |         await cmodal.waitFor({state:'hidden',timeout: 10000});
  113 | 
  114 |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  115 |         const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
  116 |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  117 | 
  118 |         const result = await Promise.race([
  119 |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
  120 |             duplicateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'duplicate'),
  121 |             updateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'update')
  122 |         ]);
  123 | 
  124 |         if(result === 'success'){
  125 |             await expect(successMsg).toBeVisible();
  126 |             await successMsg.waitFor({state:'hidden',timeout:10000});
  127 |             return 'success';
  128 |         }
  129 |         else if(result === 'duplicate'){
  130 |             await expect(duplicateMsg).toBeVisible();
  131 |             await duplicateMsg.waitFor({state:'hidden',timeout:10000});
  132 |             return 'duplicate';
  133 |         }
  134 |         else if(result === 'update'){
  135 |             await expect(updateMsg).toBeVisible();
  136 |             await updateMsg.waitFor({state:'hidden',timeout:10000});
  137 |             return 'update';
  138 |         }
  139 | 
  140 |         
  141 |     }
  142 | }
```