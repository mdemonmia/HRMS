# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check Edit all valid vendor agreement @functional @regression
- Location: tests\vendorAgreement.spec.js:197:8

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://202.126.124.194:8264/vendor-management/vendor-agreement-list"
Received: "http://202.126.124.194:8264/vendor-management/vendor-agreement-add"

Call log:
  - Expect "toHaveURL" with timeout 120000ms
    153 × unexpected value "http://202.126.124.194:8264/vendor-management/vendor-agreement-add"

```

```yaml
- banner:
  - img "Logo"
  - button "󰀓 Self"
  - button "home Home":
    - link "home Home":
      - /url: "javascript: void(0);"
      - img "home"
      - text: Home
  - button "email 4":
    - link "email 4":
      - /url: /dashboard-bl-content/notification-list
      - img "email"
      - text: "4"
  - button "HRM system user (SuperAdmin,Admin,Default) 󰅀":
    - paragraph: HRM system user
    - paragraph: (SuperAdmin,Admin,Default)
    - paragraph
    - text: 󰅀
  - button "":
    - link "":
      - /url: javascript:void(0)
- list:
  - listitem:
    - link " Dashboard":
      - /url: "javascript: void(0);"
  - navigation:
    - list:
      - listitem:  User Management
      - listitem:  Master Setup
      - listitem:  Commercial Info
      - listitem:  Vendor Management
      - listitem:  Job Description Management
      - listitem:  Requisition Management
      - listitem:  PO Management
      - listitem:  Employee Onboarding
      - listitem:  Employee Management
      - listitem:  Overtime Management
      - listitem:  Leave Management
      - listitem:  Attendance
      - listitem:  Calendar
      - listitem:  Asset Management
      - listitem:  Resignation Management
      - listitem:  Delegation Management
      - listitem:  Expense Management
      - listitem:  Salary Configuration
      - listitem:  Salary Disbursement
      - listitem:  KPI Management
      - listitem:  Report Management
      - listitem:  Configuration
      - listitem:  Loan Management
- main:
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Vendor Management - Vendor Agreement":
          - /url: javascript:void(0)
      - listitem: / Update
  - text: Vendor*
  - combobox "Vendor*":
    - option "Select Vendor" [disabled]
    - option "NA"
    - option "exctest" [selected]
    - option "ArenaBD"
    - option "ArenaBD"
  - text: Document Name*
  - textbox "Enter document name": test
  - text: Upload Document
  - button "Choose File"
  - text: Signing Date*
  - textbox "DD-MMM-YYYY": 05-Jun-2026
  - text: Duration(Years)*
  - textbox "Enter duration": "6"
  - button "Cancel"
  - button "Update"
```

# Test source

```ts
  107 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  108 |     console.log('Data is saved successfully.');
  109 |   })
  110 | 
  111 |   test('check view vendor agreement @functional @regression',async({page})=>{
  112 |     const vndragrmt = new VendorAgreementPage(page);
  113 |     await vndragrmt.getvndrAgreementLink();
  114 |     await vndragrmt.getViewBtn(
  115 |         data.viewvndragrmentForm.viewvndragrmntBtn.vname
  116 |     );
  117 |    
  118 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list/MTE');
  119 |     await page.waitForTimeout(5000);
  120 |     console.log('Data is showed successfully.');
  121 |   })
  122 | 
  123 |   test('check Edit select vendor agreement @functional @regression',async({page})=>{
  124 |     const vndragrmt = new VendorAgreementPage(page);
  125 |     await vndragrmt.getvndrAgreementLink();
  126 |     await vndragrmt.getEditBtn(
  127 |         data.EditvndragrmentForm.vndragrmntEditBtn.ename
  128 |     );
  129 |     await vndragrmt.getvendrAgreementForm(
  130 |         data.udatevndragrmntForm.changed_svndr_name 
  131 |     )
  132 |     await vndragrmt.getupdateBtn();
  133 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  134 |     await page.waitForTimeout(5000);
  135 |     console.log('Data is updated successfully.');
  136 |   })
  137 | 
  138 |   test('check Edit doc name vendor agreement @functional @regression',async({page})=>{
  139 |     const vndragrmt = new VendorAgreementPage(page);
  140 |     await vndragrmt.getvndrAgreementLink();
  141 |     await vndragrmt.getEditBtn(
  142 |         data.EditvndragrmentForm.vndragrmntEditBtn.ename
  143 |     );
  144 |     await vndragrmt.getvendrAgreementForm(
  145 |         data.udatevndragrmntForm.blank_doc_name 
  146 |     )
  147 |     await vndragrmt.getupdateBtn();
  148 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  149 |     await page.waitForTimeout(5000);
  150 |     console.log('Data is updated successfully.');
  151 |   })
  152 | 
  153 |   test('check Edit file name vendor agreement @functional @regression',async({page})=>{
  154 |     const vndragrmt = new VendorAgreementPage(page);
  155 |     await vndragrmt.getvndrAgreementLink();
  156 |     await vndragrmt.getEditBtn(
  157 |         data.EditvndragrmentForm.vndragrmntEditBtn.ename
  158 |     );
  159 |     await vndragrmt.getvendrAgreementForm(
  160 |         data.udatevndragrmntForm.blank_file_name 
  161 |     )
  162 |     await vndragrmt.getupdateBtn();
  163 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  164 |     await page.waitForTimeout(5000);
  165 |     console.log('Data is updated successfully.');
  166 |   })
  167 | 
  168 |   test('check Edit siging date name vendor agreement @functional @regression',async({page})=>{
  169 |     const vndragrmt = new VendorAgreementPage(page);
  170 |     await vndragrmt.getvndrAgreementLink();
  171 |     await vndragrmt.getEditBtn(
  172 |         data.EditvndragrmentForm.vndragrmntEditBtn.ename
  173 |     );
  174 |     await vndragrmt.getvendrAgreementForm(
  175 |         data.udatevndragrmntForm.blank_sdate_name 
  176 |     )
  177 |     await vndragrmt.getupdateBtn();
  178 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  179 |     await page.waitForTimeout(5000);
  180 |     console.log('Data is updated successfully.');
  181 |   })
  182 | 
  183 |   test('check Edit duration name vendor agreement @functional @regression',async({page})=>{
  184 |     const vndragrmt = new VendorAgreementPage(page);
  185 |     await vndragrmt.getvndrAgreementLink();
  186 |     await vndragrmt.getEditBtn(
  187 |         data.EditvndragrmentForm.vndragrmntEditBtn.ename
  188 |     );
  189 |     await vndragrmt.getvendrAgreementForm(
  190 |         data.udatevndragrmntForm.blank_duration_name 
  191 |     )
  192 |     await vndragrmt.getUpdateBtnwithnomsg();
  193 |     await expect(vndragrmt.duration).toHaveClass(/ng-invalid/);
  194 |     console.log('duration is blank.');
  195 |   })
  196 | 
  197 |   test.only('check Edit all valid vendor agreement @functional @regression',async({page})=>{
  198 |     const vndragrmt = new VendorAgreementPage(page);
  199 |     await vndragrmt.getvndrAgreementLink();
  200 |     await vndragrmt.getEditBtn(
  201 |         data.EditvndragrmentForm.vndragrmntEditBtn.ename
  202 |     );
  203 |     await vndragrmt.getvendrAgreementForm(
  204 |         data.udatevndragrmntForm.valid_all_field_name 
  205 |     )
  206 |     await vndragrmt.getupdateBtn();
> 207 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  208 |     await page.waitForTimeout(5000);
  209 |     console.log('Data is updated successfully.');
  210 |   })
  211 | 
  212 |   // test('API দেখি', async ({ page }) => {
  213 |   // await inspectAPI(page, '/api/users');  // আপনার API path দিন
  214 |   // await page.goto('http://localhost:3000/users');  // আপনার page এর URL দিন
  215 |   // });
  216 | 
  217 | })
  218 | 
```