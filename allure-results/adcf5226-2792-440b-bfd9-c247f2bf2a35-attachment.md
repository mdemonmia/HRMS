# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JobDescription.spec.js >> test job description page >> check valid all field name @functional @regression
- Location: tests\JobDescription.spec.js:138:10

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[normalize-space()=\'Delete\']')

```

# Test source

```ts
  3   |     constructor(page){
  4   |         this.page = page;
  5   |         this.JDlink = page.locator("//a[normalize-space()='Job Description']");
  6   |         this.addJD = page.locator("//button[normalize-space()='Add Job Description']");
  7   |         this.orgDiv = page.locator("//select[@formcontrolname='orddivId']");
  8   |         this.Department = page.locator("//select[@formcontrolname='departmentId']");
  9   |         this.Position = page.locator("//select[@formcontrolname='positionId']");
  10  |         this.Jdescript = page.locator("//input[@type='text']");
  11  |         this.Responsibility = page.locator("//angular-editor[@formcontrolname='responsibility']//div[@class='angular-editor-textarea']");
  12  |         this.Experience = page.locator("//angular-editor[@formcontrolname='experience']//div[@class='angular-editor-textarea']");
  13  |         this.Qualificattion = page.locator("//angular-editor[@formcontrolname='qualification']//div[@class='angular-editor-textarea']");
  14  |         this.Skills = page.locator("//angular-editor[@formcontrolname='skills']//div[@class='angular-editor-textarea']");
  15  |         this.saveBtn = page.locator("//div[@class='ng-star-inserted']");
  16  |         this.jobDescfilter = page.locator('#jobDescriptionName');
  17  |         this.statusfilter = page.locator("//select[@formcontrolname='jobDescriptionStatus']");
  18  |         this.viewBtn = page.locator('i.fa.fa-eye');
  19  |         this.EditBtn = page.locator("//button[normalize-space()='Edit']");
  20  |         this.DeleteBtn = page.locator("//button[normalize-space()='Delete']");
  21  |         this.SubmitBtn = page.locator("//button[normalize-space()='Submit']");
  22  |         this.UpdateBtn = page.locator("//div[@class='ng-star-inserted']");
  23  |         this.DeleteRowBtn = page.locator("//button[@title='Delete']");
  24  |         this.EditRowBtn = page.locator("//button[@title='Edit']");
  25  |         this.cancelBtn = page.locator("//button[normalize-space()='Cancel']");
  26  | 
  27  |     }
  28  | 
  29  |     async getJDLink(){
  30  |         await this.JDlink.click();
  31  |     }
  32  | 
  33  |     async getAddJD(){
  34  |         await this.addJD.click();
  35  |     }
  36  | 
  37  |     async getjdForm(jform){
  38  |         //handle null,undefined and ' ' to use ?.
  39  |         if(jform?.orgdiv){
  40  |             await this.orgDiv.selectOption(jform.orgdiv.trim());
  41  |         }else{
  42  |             await this.orgDiv.selectOption('Select Division');
  43  |         }
  44  | 
  45  |         if(jform?.dept){
  46  |             await this.Department.selectOption(jform.dept.trim());
  47  |         }else{
  48  |             await this.Department.selectOption('Select Department')
  49  |         }
  50  | 
  51  |         if(jform?.position){
  52  |             await this.Position.selectOption(jform.position.trim());
  53  |         }else{
  54  |             await this.Position.selectOption('Select Position');
  55  |         }
  56  | 
  57  |         await this.Jdescript.fill(jform.jdescript);
  58  |         await this.Responsibility.fill(jform.response);
  59  |         await this.Experience.fill(jform.exp);
  60  |         await this.Qualificattion.fill(jform.qualif);
  61  |         await this.Skills.fill(jform.skill);
  62  |     }
  63  | 
  64  |     async getSaveBtn(){
  65  |         await this.saveBtn.scrollIntoViewIfNeeded();
  66  |         await this.saveBtn.click();
  67  |         const cmodal = await this.page.locator('text=Are you sure you want to save this?');
  68  |         await cmodal.waitFor({state:'visible',timeout:10000});
  69  |         await this.page.locator('button:has-text("Yes")').click();
  70  |         await cmodal.waitFor({state:'hidden',timeout:10000});
  71  | 
  72  |         const successMsg = await this.page.locator('text=Data is saved successfully.');
  73  |         const duplicateMsg = await this.page.locator('text=Duplicate name, please check entry name.');
  74  |         const errorMsg = await this.page.locator('text=Could not save changes. Please configure your entity type accordingly.');
  75  | 
  76  |         const result = await Promise.race([
  77  |             successMsg.waitFor({state:'visible',timeout:10000}).then(()=>'success'),
  78  |             duplicateMsg.waitFor({state:'visible',timeout:10000}).then(()=>'duplicate'),
  79  |             errorMsg.waitFor({state:'visible',timeout:10000}).then(()=>'error')
  80  |         ])
  81  | 
  82  |         if(result ==='success'){
  83  |             await expect(successMsg).toBeVisible();
  84  |             await successMsg.waitFor({state:'hidden',timeout:10000});
  85  |         }
  86  |         else if(result === 'duplicate'){
  87  |             await expect(duplicateMsg).toBeVisible();
  88  |             await this.page.locator('button:has-text("Ok")').click();
  89  |             await duplicateMsg.waitFor({state:'hidden',timeout:10000});
  90  |         }
  91  |         else if(result === 'error'){
  92  |             await expect(errorMsg).toBeVisible();
  93  |             await this.page.locator('button:has-text("Ok")').click();
  94  |             await errorMsg.waitFor({state:'hidden',timeout:10000});
  95  |         }
  96  |         
  97  |     }
  98  | 
  99  |     async getEditBtn(){
  100 |         await this.EditBtn.click();
  101 |     }
  102 | 
> 103 |     async getDeleteBtn(){
      |                              ^ Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
  104 |         await this.DeleteBtn.scrollIntoViewIfNeeded();
  105 |         await this.DeleteBtn.click();
  106 |         const cmodal = await this.page.locator('text=Are you sure you want to reject this operation?');
  107 |         await cmodal.waitFor({state:'visible',timeout:10000});
  108 |         await this.page.locator('button:has-text("Yes")').click();
  109 |         await cmodal.waitFor({state:'hidden',timeout:10000});
  110 |         const dltMsg = await this.page.locator('text=Data is deleted successfully.');
  111 |         await dltMsg.waitFor({state:'visible',timeout:10000});
  112 |         await this.page.locator('button:has-text("OK")').click();
  113 |         await dltMsg.waitFor({state:'hidden',timeout:10000});
  114 |     }
  115 | 
  116 |     async getSubmitBtn(){
  117 |         await this.SubmitBtn.click();
  118 |     }
  119 | 
  120 |     async getUpdateBtn(){
  121 |         await this.UpdateBtn.click();
  122 |         const cmodal = await this.page.locator('text=Are you sure you want to update this?');
  123 |         await cmodal.waitFor({state:'visible',timeout:10000});
  124 |         await this.page.locator('button:has-text("Yes")').click();
  125 |         await cmodal.waitFor({state:'hidden',timeout:10000});
  126 |         const updateMsg = await this.page.locator('text=Data is updated successfully.');
  127 |         await updateMsg.waitFor({state:'visible',timeout:10000});
  128 |         await updateMsg.waitFor({state:'hidden',timeout:10000});    
  129 |     }
  130 | 
  131 |     async getDeleteRowBtn(dltname){
  132 |         const drow = await this.page.locator('tr',{hasText:dltname});
  133 |         await drow.locator(this.DeleteRowBtn).click();
  134 |         await this.DeleteRowBtn.click();
  135 |         const cmodal = this.page.locator('text=Do you want to delete this?');
  136 |         await cmodal.waitFor({state:'visible',timeout:10000});
  137 |         await this.page.locator('button:has-text("Yes")').click();
  138 |         await cmodal.waitFor({state:'hidden',timeout:10000});
  139 |         const dltMsg = this.page.locator('text=It is not draft stage, It is not possible to delete.');
  140 |         await dltMsg.waitFor({state:'visible',timeout:10000});
  141 |         await this.page.locator('button:has-text("Cancel")').click();
  142 |         await dltMsg.waitFor({state:'hidden',timeout:10000});
  143 |     }
  144 | 
  145 |     async getEditRowBtn(ername){
  146 |         const erow = await this.page.locator('tr',{hasText:ername});
  147 |         await erow.locator(this.EditRowBtn).click();
  148 | 
  149 |     }
  150 | 
  151 |     async getViewBtn(vrname){
  152 |         const vrow = await this.page.locator('tr',{hasText:vrname});
  153 |         await vrow.locator(this.viewBtn).click();
  154 |     }
  155 | 
  156 |     async getorgdivFilter(jdname){
  157 |         await this.jobDescfilter.fill(jdname.jdorgdiv.trim());
  158 |     }
  159 | 
  160 |     async getStatusFilter(sname){
  161 |         await this.statusfilter.fill(sname.status.trim());
  162 |     }
  163 | 
  164 |     async getCancelBtn(){
  165 |         await this.cancelBtn.click();
  166 |     }
  167 | 
  168 | }
```