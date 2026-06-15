# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: JobDescription.spec.js >> test job description page >> check Delete row data @functional @regression
- Location: tests\JobDescription.spec.js:170:10

# Error details

```
TypeError: jobdesc.DeleteRowBtn is not a function
```

# Test source

```ts
  73  |     test('check blank job description name @functional',async({page})=>{
  74  |         const jobdesc = new JobDescriptionPage(page);
  75  |         await jobdesc.getJDLink();
  76  |         await jobdesc.getAddJD();
  77  |         await jobdesc.getjdForm(
  78  |             data.jobdescdata.blankjdescript
  79  |         )
  80  |         console.log('save button is disabled.');
  81  |         await jobdesc.getCancelBtn();
  82  |         await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
  83  |         console.log('cancel button clicked and redirected to job description list page.');
  84  |     })
  85  | 
  86  |     test('check blank job responsibility name @functional',async({page})=>{
  87  |         const jobdesc = new JobDescriptionPage(page);
  88  |         await jobdesc.getJDLink();
  89  |         await jobdesc.getAddJD();
  90  |         await jobdesc.getjdForm(
  91  |             data.jobdescdata.blankresponse
  92  |         )
  93  |         console.log('save button is disabled.');
  94  |         await jobdesc.getCancelBtn();
  95  |         await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
  96  |         console.log('cancel button clicked and redirected to job description list page.');
  97  |     })
  98  | 
  99  |     test('check blank job experience name @functional',async({page})=>{
  100 |         const jobdesc = new JobDescriptionPage(page);
  101 |         await jobdesc.getJDLink();
  102 |         await jobdesc.getAddJD();
  103 |         await jobdesc.getjdForm(
  104 |             data.jobdescdata.blankexp
  105 |         )
  106 |         console.log('save button is disabled.');
  107 |         await jobdesc.getCancelBtn();
  108 |         await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
  109 |         console.log('cancel button clicked and redirected to job description list page.');
  110 |     })
  111 | 
  112 |     test('check blank job qualification name @functional',async({page})=>{
  113 |         const jobdesc = new JobDescriptionPage(page);
  114 |         await jobdesc.getJDLink();
  115 |         await jobdesc.getAddJD();
  116 |         await jobdesc.getjdForm(
  117 |             data.jobdescdata.blankqualif
  118 |         )
  119 |         console.log('save button is disabled.');
  120 |         await jobdesc.getCancelBtn();
  121 |         await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
  122 |         console.log('cancel button clicked and redirected to job description list page.');
  123 |     })
  124 | 
  125 |     test('check blank job skill name @functional',async({page})=>{
  126 |         const jobdesc = new JobDescriptionPage(page);
  127 |         await jobdesc.getJDLink();
  128 |         await jobdesc.getAddJD();
  129 |         await jobdesc.getjdForm(
  130 |             data.jobdescdata.blankskill
  131 |         )
  132 |         console.log('save button is disabled.');
  133 |         await jobdesc.getCancelBtn();
  134 |         await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
  135 |         console.log('cancel button clicked and redirected to job description list page.');
  136 |     })
  137 | 
  138 |     test('check valid all field with click delete button @functional @regression',async({page})=>{
  139 |         const jobdesc = new JobDescriptionPage(page);
  140 |         await jobdesc.getJDLink();
  141 |         await jobdesc.getAddJD();
  142 |         await jobdesc.getjdForm(
  143 |             data.jobdescdata.validjobdesc
  144 |         )
  145 |         await jobdesc.getSaveBtn();
  146 |         await page.waitForTimeout(5000);
  147 |         await jobdesc.getDeleteBtn();
  148 |         await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
  149 |         console.log('click delete button and redirected to job description list page.');
  150 |     })
  151 | 
  152 |     test('check valid all field with click edit button and blank orgdiv @functional @regression',async({page})=>{
  153 |         const jobdesc = new JobDescriptionPage(page);
  154 |         await jobdesc.getJDLink();
  155 |         await jobdesc.getAddJD();
  156 |         await jobdesc.getjdForm(
  157 |             data.jobdescdata.validjobdesc1
  158 |         )
  159 |         await jobdesc.getSaveBtn();
  160 |         await page.waitForTimeout(5000);
  161 |         await jobdesc.getEditBtn();
  162 |         await jobdesc.getjdForm(
  163 |             data.updatejobdescdata.updatejdescript
  164 |         )
  165 |         await jobdesc.getUpdateBtn();
  166 |         await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
  167 |         console.log('click edit button and blank orgdic and redirected to job description list page.');
  168 |     })
  169 | 
  170 |     test.only('check Delete row data @functional @regression',async({page})=>{
  171 |         const jobdesc = new JobDescriptionPage(page);
  172 |         await jobdesc.getJDLink();
> 173 |         await jobdesc.DeleteRowBtn(
      |                       ^ TypeError: jobdesc.DeleteRowBtn is not a function
  174 |             data.Deleterowdata.DeleteRow.dltname
  175 |         );
  176 |         await expect(page).toHaveURL('http://202.126.124.194:8264/requisition/hrm-job-description-list');
  177 |         console.log('click delete button and redirected to job description list page.');
  178 |     })
  179 | 
  180 |     
  181 | 
  182 | })
  183 | 
```