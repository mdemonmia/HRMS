# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check blank select vendor @functional
- Location: tests\vendorAgreement.spec.js:25:7

# Error details

```
TimeoutError: locator.selectOption: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('#vendorId')
    - locator resolved to <select id="vendorId" name="vendorId" formcontrolname="vendorId" _ngcontent-ng-cli-universal-c3122452805="" class="form-control form-select ng-untouched ng-pristine ng-valid">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    112 × waiting for element to be visible and enabled
        - did not find some options
      - retrying select option action
        - waiting 500ms

```

# Test source

```ts
  1  | export class VendorAgreementPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.vndragreementLink = page.locator("//a[normalize-space()='Vendor Agreement']");
  5  |         this.addvndrAgreement = page.locator("//button[normalize-space()='Add New Agreement']");
  6  |         this.selectvndr = page.locator('#vendorId');
  7  |         this.documentname = page.locator('documentName');
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
> 24 |         await this.selectvndr.selectOption(vndrform.svndr);
     |                               ^ TimeoutError: locator.selectOption: Timeout 60000ms exceeded.
  25 |         await this.documentname.fill(vndrform.docname);
  26 |         await this.fileupload.setInputFiles(vndrform.filename);
  27 |         await this.singingdate.clear();
  28 |         await this.singingdate.fill(vndrform.sdate);
  29 |         await this.duration.fill(vndrform.duration);
  30 |     }
  31 | 
  32 |     async getCancelBtn(){
  33 |         await this.cancelbtn.click();
  34 |     }
  35 | 
  36 |     async getSaveBtn(){
  37 |         await this.savebtn.click();
  38 |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  39 |         await cmodal.waitFor({state:'visible',timeout:10000});
  40 |         await this.page.locator({button:has-text("Yes")}).click();
  41 |         await cmodal.waitFor({state:'hidden',timeout: 10000});
  42 | 
  43 |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  44 |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  45 | 
  46 |         const result = await promise.race([
  47 |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
  48 |             updateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'update')
  49 |         ])
  50 | 
  51 |         if(result === 'success'){
  52 |             await successMsg.waitFor({state:'hidden',timeout:10000});
  53 |             return 'success';
  54 |         }
  55 |         else if(result === 'update'){
  56 |             await updateMsg.waitFor({state:'hidden',timeout:10000});
  57 |             return 'update';
  58 |         }
  59 | 
  60 |         
  61 |     }
  62 | }
```