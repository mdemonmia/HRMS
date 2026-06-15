# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JobDescription.spec.js >> test job description page >> check blank organization division name @functional
- Location: tests\JobDescription.spec.js:37:10

# Error details

```
TimeoutError: locator.selectOption: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//select[@formcontrolname=\'departmentId\']')
    - locator resolved to <select formcontrolname="departmentId" aria-label="Default select example" _ngcontent-ng-cli-universal-c2531119888="" class="form-control form-select ng-untouched ng-pristine ng-valid">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    111 × waiting for element to be visible and enabled
        - did not find some options
      - retrying select option action
        - waiting 500ms

```

# Test source

```ts
  1   | export class JobDescriptionPage{
  2   |     constructor(page){
  3   |         this.page = page;
  4   |         this.JDlink = page.locator("//a[normalize-space()='Job Description']");
  5   |         this.addJD = page.locator("//button[normalize-space()='Add Job Description']");
  6   |         this.orgDiv = page.locator("//select[@formcontrolname='orddivId']");
  7   |         this.Department = page.locator("//select[@formcontrolname='departmentId']");
  8   |         this.Position = page.locator("//select[@formcontrolname='positionId']");
  9   |         this.Jdescript = page.locator("//input[@type='text']");
  10  |         this.Responsibility = page.locator("//angular-editor[@formcontrolname='responsibility']//div[@class='angular-editor-textarea']");
  11  |         this.Experience = page.locator("//angular-editor[@formcontrolname='experience']//div[@class='angular-editor-textarea']");
  12  |         this.Qualificattion = page.locator("//angular-editor[@formcontrolname='qualification']//div[@class='angular-editor-textarea']");
  13  |         this.Skills = page.locator("//angular-editor[@formcontrolname='skills']//div[@class='angular-editor-textarea']");
  14  |         this.saveBtn = page.locator("//div[@class='ng-star-inserted']");
  15  |         this.jobDescfilter = page.locator('#jobDescriptionName');
  16  |         this.statusfilter = page.locator("//select[@formcontrolname='jobDescriptionStatus']");
  17  |         this.viewBtn = page.locator('i.fa.fa-eye');
  18  |         this.EditBtn = page.locator("//button[normalize-space()='Edit']");
  19  |         this.DeleteBtn = page.locator("//button[normalize-space()='Delete']");
  20  |         this.SubmitBtn = page.locator("//button[normalize-space()='Submit']");
  21  |         this.UpdateBtn = page.locator("//div[@class='ng-star-inserted']");
  22  |         this.DeleteRowBtn = page.locator("//button[@title='Delete']");
  23  |         this.EditRowBtn = page.locator("//button[@title='Edit']");
  24  |         this.cancelBtn = page.locator("//button[normalize-space()='Cancel']");
  25  | 
  26  |     }
  27  | 
  28  |     async getJDLink(){
  29  |         await this.JDlink.click();
  30  |     }
  31  | 
  32  |     async getAddJD(){
  33  |         await this.addJD.click();
  34  |     }
  35  | 
  36  |     async getjdForm(jform){
  37  |         //handle null,undefined and ' ' to use ?.
  38  |         if(jform?.orgdiv){
  39  |             await this.orgDiv.selectOption(jform.orgdiv.trim());
  40  |         }else{
  41  |             await this.orgDiv.selectOption('Select Division');
  42  |         }
  43  | 
  44  |         if(jform?.dept){
> 45  |             await this.Department.selectOption(jform.dept.trim());
      |                                   ^ TimeoutError: locator.selectOption: Timeout 60000ms exceeded.
  46  |         }else{
  47  |             await this.Department.selectOption('Select Department')
  48  |         }
  49  | 
  50  |         if(jform?.position){
  51  |             await this.Position.selectOption(jform.position.trim());
  52  |         }else{
  53  |             await this.Position.selectOption('Select Position');
  54  |         }
  55  | 
  56  |         await this.Jdescript.fill(jform.jdescript);
  57  |         await this.Responsibility.fill(jform.response);
  58  |         await this.Experience.fill(jform.exp);
  59  |         await this.Qualificattion.fill(jform.qualif);
  60  |         await this.Skills.fill(jform.skill);
  61  |     }
  62  | 
  63  |     async getSaveBtn(){
  64  |         await this.saveBtn.scrollIntoViewIfNeeded();
  65  |         await this.saveBtn.click();
  66  |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  67  |         await cmodal.waitFor({state:'visible',timeout:10000});
  68  |         await this.page.locator('button:has-text("Yes")').click();
  69  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  70  | 
  71  |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  72  |         const errorMsg = await this.page.locator('text=Could not save changes. Please configure your entity type accordingly.');
  73  | 
  74  |         const result = await Promise.race([
  75  |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
  76  |             errorMsg.waitFor({state:'visible',timeout:10000}).then(()=>'error')
  77  |         ])
  78  | 
  79  |         if(result ==='success'){
  80  |             await expect(successMsg).toBeVisible();
  81  |             await successMsg.waitFor({state:'hidden',timeout:10000});
  82  |         }
  83  |         else if(result === 'error'){
  84  |             await expect(errorMsg).toBeVisible();
  85  |             await this.page.locator('button:has-text("Ok")').click();
  86  |             await errorMsg.waitFor({state:'hidden',timeout:10000});
  87  |         }
  88  |         
  89  |     }
  90  | 
  91  |     async getEditBtn(){
  92  |         await this.EditBtn.click();
  93  |     }
  94  | 
  95  |     async getDeleteBtn(){
  96  |         await this.DeleteBtn.click();
  97  |         const cmodal = await this.page.locator('text=Are you sure you want to reject this operation?');
  98  |         await cmodal.waitFor({state:'visible',timeout:10000});
  99  |         await this.page.locator('button:has-text("Yes")').click();
  100 |         await cmodal.waitFor({state:'hidden',timeout:10000});
  101 |         const dltMsg = await this.page.locator('text=Data is deleted successfully.');
  102 |         await dltMsg.waitFor({state:'visible',timeout:10000});
  103 |         await this.page.locator('button:has-text("OK")').click();
  104 |         await dltMsg.waitFor({state:'hidden',timeout:10000});
  105 |     }
  106 | 
  107 |     async getSubmitBtn(){
  108 |         await this.SubmitBtn.click();
  109 |     }
  110 | 
  111 |     async getUpdateBtn(){
  112 |         await this.UpdateBtn.click();
  113 |         const cmodal = await this.page.locator('text=Are you sure you want to update this?');
  114 |         await cmodal.waitFor({state:'visible',timeout:10000});
  115 |         await this.page.locator('button:has-text("Yes")').click();
  116 |         await cmodal.waitFor({state:'hidden',timeout:10000});
  117 |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  118 |         await updateMsg.waitFor({state:'visible',timeout:10000});
  119 |         await updateMsg.waitFor({state:'hidden',timeout:10000});    
  120 |     }
  121 | 
  122 |     async getDeleteRowBtn(dltname){
  123 |         const drow = await this.page.locator('tr',{hasText:dltname});
  124 |         await drow.locator(this.DeleteRowBtn).click();
  125 |         await this.DeleteRowBtn.click();
  126 |         const cmodal = this.page.locator('text=Do you want to delete this?');
  127 |         await cmodal.waitFor({state:'visible',timeout:10000});
  128 |         await this.page.locator('button:has-text("Yes")').click();
  129 |         await cmodal.waitFor({state:'hidden',timeout:10000});
  130 |         const dltMsg = this.page.locator('text=It is not draft stage, It is not possible to delete.');
  131 |         await dltMsg.waitFor({state:'visible',timeout:10000});
  132 |         await this.page.locator('button:has-text("Cancel")').click();
  133 |         await dltMsg.waitFor({state:'hidden',timeout:10000});
  134 |     }
  135 | 
  136 |     async getEditRowBtn(ername){
  137 |         const erow = await this.page.locator('tr',{hasText:ername});
  138 |         await erow.locator(this.EditRowBtn).click();
  139 | 
  140 |     }
  141 | 
  142 |     async getViewBtn(vrname){
  143 |         const vrow = await this.page.locator('tr',{hasText:vrname});
  144 |         await vrow.locator(this.viewBtn).click();
  145 |     }
```