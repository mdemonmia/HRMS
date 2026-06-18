# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RevisedJD.spec.js >> Test Revised Job Description >> Update revised job description successfully with blank data @regression
- Location: tests\RevisedJD.spec.js:27:10

# Error details

```
TimeoutError: locator.selectOption: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//select[@formcontrolname=\'orddivId\']')
    - locator resolved to <select formcontrolname="orddivId" aria-label="Default select example" _ngcontent-ng-cli-universal-c2531119888="" class="form-control form-select ng-untouched ng-pristine ng-valid">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    109 × waiting for element to be visible and enabled
        - did not find some options
      - retrying select option action
        - waiting 500ms

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | export class RevisedJobDescriptionPage{
  4  | 
  5  |     constructor(page){
  6  | 
  7  |         this.page = page;
  8  | 
  9  |         this.revisedJDLink = page.locator("//a[normalize-space()='Revise Job Description']");
  10 |         this.editRowBtn = page.locator("//button[@title='Edit']");
  11 |         this.orgDiv = page.locator("//select[@formcontrolname='orddivId']");
  12 |         this.department = page.locator("//select[@formcontrolname='departmentId']");
  13 |         this.position = page.locator("//select[@formcontrolname='positionId']");
  14 |         this.jobDescName = page.locator("//input[@type='text']");
  15 |         this.responsibility = page.locator(
  16 |             "//angular-editor[@formcontrolname='responsibility']//div[contains(@class,'angular-editor-textarea')]");
  17 |         this.qualification = page.locator(
  18 |             "//angular-editor[@formcontrolname='qualification']//div[@class='angular-editor-textarea']");
  19 |         this.experience = page.locator(
  20 |             "//angular-editor[@formcontrolname='experience']//div[@class='angular-editor-textarea']");
  21 |         this.skill = page.locator(
  22 |             "//angular-editor[@formcontrolname='skills']//div[@class='angular-editor-textarea']"
  23 |         );
  24 |         this.updateBtn = page.locator("//div[normalize-space()='Update']");
  25 |     }
  26 | 
  27 |     async getRevisedJDLink(){
  28 |         await this.revisedJDLink.click();
  29 |     }
  30 | 
  31 |     async getEditRowBtn(rowName){
  32 |         const row = this.page.locator('tr',{ hasText: rowName });
  33 |         await row.locator(this.editRowBtn).click();
  34 |     }
  35 | 
  36 |     async updateForm(uform){
  37 |         if(uform?.orgdiv !== undefined && uform?.orgdiv !== null){
> 38 |             await this.orgDiv.selectOption(uform.orgdiv);
     |                               ^ TimeoutError: locator.selectOption: Timeout 60000ms exceeded.
  39 |         }
  40 |         if(uform?.dept !== undefined && uform?.dept !== null){
  41 |             await this.department.selectOption(uform.dept);
  42 |         }
  43 |         if(uform?.position !== undefined && uform?.position !== null){
  44 |             await this.position.selectOption(uform.position);
  45 |         }
  46 |         await this.jobDescName.fill(uform.jdescript);
  47 |         await this.responsibility.fill(uform.response);
  48 |         await this.qualification.fill(uform.qualif);
  49 |         await this.experience.fill(uform.exp);
  50 |         await this.skill.fill(uform.skill);
  51 |     }
  52 | 
  53 |     async clickUpdate(){
  54 | 
  55 |         await this.updateBtn.click();
  56 | 
  57 |         const confirmModal =this.page.locator('text=Are you sure you want to update this?');
  58 |         await confirmModal.waitFor({state:'visible',timeout:10000});
  59 |         await this.page.locator('button:has-text("Yes")').click();
  60 |         await confirmModal.waitFor({state:'hidden',timeout:10000});
  61 |         const successMsg =this.page.locator('text=Data is updated successfully.');
  62 |         await expect(successMsg).toBeVisible();
  63 |         await successMsg.waitFor({state:'hidden',timeout:10000});
  64 |     }
  65 | }
```