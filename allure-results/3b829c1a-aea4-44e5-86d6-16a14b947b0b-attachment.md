# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check Edit vendor agreement @functional @regression
- Location: tests\vendorAgreement.spec.js:123:8

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://202.126.124.194:8264/vendor-management/vendor-agreement-list"
Received: "http://202.126.124.194:8264/vendor-management/vendor-agreement-add"
Timeout:  120000ms

Call log:
  - Expect "toHaveURL" with timeout 120000ms
    228 × unexpected value "http://202.126.124.194:8264/vendor-management/vendor-agreement-add"

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
  - textbox "Enter duration": "5"
  - button "Cancel"
  - button "Update"
```

# Test source

```ts
  33  |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-add');
  34  |     console.log('duplicate name entry.')
  35  |     //await expect(vndragrmt.selectvndr).toHaveClass(/ng-invalid/);
  36  | 
  37  |   })
  38  | 
  39  |   test('check blank document name vendor agreement @functional',async({page})=>{
  40  |     const vndragrmt = new VendorAgreementPage(page);
  41  |     await vndragrmt.getvndrAgreementLink();
  42  |     await vndragrmt.getAddvndrAgreementBtn();
  43  |     await vndragrmt.getvendrAgreementForm(
  44  |         data.vndragrmntForm.blank_doc_name
  45  |     )
  46  |     await vndragrmt.getSaveBtn();
  47  |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  48  |     console.log('Data is saved successfully.');
  49  |     // await expect(vndragrmt.selectvndr).toHaveClass(/ng-invalid/);
  50  |     // console.log('document name is blank.')
  51  | 
  52  |   })
  53  | 
  54  |   test('check blank file name vendor agreement @functional',async({page})=>{
  55  |     const vndragrmt = new VendorAgreementPage(page);
  56  |     await vndragrmt.getvndrAgreementLink();
  57  |     await vndragrmt.getAddvndrAgreementBtn();
  58  |     await vndragrmt.getvendrAgreementForm(
  59  |         data.vndragrmntForm.blank_file_name
  60  |     )
  61  |     await vndragrmt.getSaveBtn();
  62  |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  63  |     console.log('Data is saved successfully.');
  64  |     // await expect(vndragrmt.selectvndr).toHaveClass(/ng-invalid/);
  65  |     // console.log('document name is blank.')
  66  | 
  67  |   })
  68  | 
  69  |   test('check blank singing date vendor agreement @functional',async({page})=>{
  70  |     const vndragrmt = new VendorAgreementPage(page);
  71  |     await vndragrmt.getvndrAgreementLink();
  72  |     await vndragrmt.getAddvndrAgreementBtn();
  73  |     await vndragrmt.getvendrAgreementForm(
  74  |         data.vndragrmntForm.blank_sdate_name
  75  |     )
  76  |     await vndragrmt.getsaveBtnwithnomsg();
  77  |     // await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  78  |     // console.log('Data is saved successfully.');
  79  |     await expect(vndragrmt.singingdate).toHaveClass(/ng-invalid/);
  80  |     console.log('singing date is blank.');
  81  | 
  82  |   })
  83  | 
  84  |   test('check blank duration vendor agreement @functional',async({page})=>{
  85  |     const vndragrmt = new VendorAgreementPage(page);
  86  |     await vndragrmt.getvndrAgreementLink();
  87  |     await vndragrmt.getAddvndrAgreementBtn();
  88  |     await vndragrmt.getvendrAgreementForm(
  89  |         data.vndragrmntForm.blank_duration_name
  90  |     )
  91  |     await vndragrmt.getsaveBtnwithnomsg();
  92  |     // await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
  93  |     // console.log('Data is saved successfully.');
  94  |     await expect(vndragrmt.duration).toHaveClass(/ng-invalid/);
  95  |     console.log('duration is blank.');
  96  | 
  97  |   })
  98  | 
  99  |   test('check valid all field vendor agreement @functional @regression',async({page})=>{
  100 |     const vndragrmt = new VendorAgreementPage(page);
  101 |     await vndragrmt.getvndrAgreementLink();
  102 |     await vndragrmt.getAddvndrAgreementBtn();
  103 |     await vndragrmt.getvendrAgreementForm(
  104 |         data.vndragrmntForm.valid_all_field_name
  105 |     )
  106 |     await vndragrmt.getSaveBtn();
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
  123 |   test.only('check Edit vendor agreement @functional @regression',async({page})=>{
  124 |     const vndragrmt = new VendorAgreementPage(page);
  125 |     await vndragrmt.getvndrAgreementLink();
  126 |     await vndragrmt.getEditBtn(
  127 |         data.EditvndragrmentForm.vndragrmntEditBtn.ename
  128 |     );
  129 |     await vndragrmt.getvendrAgreementForm(
  130 |         data.udatevndragrmntForm.changed_svndr_name 
  131 |     )
  132 |     await vndragrmt.getupdateBtn();
> 133 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  134 |     await page.waitForTimeout(5000);
  135 |     console.log('Data is updated successfully.');
  136 |   })
  137 | 
  138 |   // test('API দেখি', async ({ page }) => {
  139 |   // await inspectAPI(page, '/api/users');  // আপনার API path দিন
  140 |   // await page.goto('http://localhost:3000/users');  // আপনার page এর URL দিন
  141 |   // });
  142 | 
  143 | })
  144 | 
```