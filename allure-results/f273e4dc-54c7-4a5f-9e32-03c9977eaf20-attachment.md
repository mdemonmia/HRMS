# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.spec.js >> test user management page >> check status with invalid data
- Location: tests\user.spec.js:145:10

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://202.126.124.194:8264/users/list"
Received: "http://202.126.124.194:8264/users/add"

Call log:
  - Expect "toHaveURL" with timeout 120000ms
    26 × unexpected value "http://202.126.124.194:8264/users/add"

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
  - button "email 0":
    - link "email 0":
      - /url: /dashboard-bl-content/notification-list
      - img "email"
      - text: "0"
  - button "HRM system user (SuperAdmin,Admin) 󰅀":
    - paragraph: HRM system user
    - paragraph: (SuperAdmin,Admin)
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
  - heading "User /Add" [level=3]
  - button "Back To List"
  - text: First Name:*
  - textbox "First Name:*": Abdullah
  - text: "Last Name:"
  - textbox "Last Name:": Khan
  - text: User Role:*
  - checkbox
  - text: Default
  - checkbox
  - text: Default Reviewer
  - checkbox
  - text: Default Approver
  - checkbox [checked]
  - text: Admin
  - checkbox
  - text: HR Manager
  - checkbox
  - text: Accounts Manager
  - checkbox
  - text: HOD Approver
  - checkbox
  - text: Vendor Admin User Type:*
  - combobox:
    - option "Select User Type" [disabled]
    - option "Super Admin"
    - option "Management Employee Login"
    - option "General Employee Login"
    - option "Vendor Login" [selected]
  - text: Org. Division*
  - combobox "Default select example":
    - option "Select Division"
    - option "AD65 Digital marketing"
    - option "Arena Organic Food"
    - option "Arena Phone" [selected]
  - text: Department*
  - combobox "Default select example":
    - option "Select Department"
    - option "Accounts and Admin"
    - option "Business Development"
    - option "Educlerk"
    - option "Software Development" [selected]
    - option "Software Technical"
    - option "VAS Technical and Operation"
  - text: Position*
  - combobox "Default select example":
    - option "Select Position"
    - option "Project Consultant"
    - option "Software Engineer" [selected]
    - option "Sr. Analyst Programmer"
    - option "Sr. Software Engineer"
  - text: Email Address:*
  - textbox "Email Address:*": abdullah@gmail.com
  - text: Phone No:*
  - textbox "Phone No:*": "01754872541"
  - text: User ID:*
  - textbox "User ID:*": abdullah@system.user
  - text: Password:*
  - textbox "Password:*": ab_payroll_2026
  - text: Status*
  - combobox "Default select example":
    - option "Select Status" [selected]
    - option "NewCreate"
    - option "Active"
    - option "Inactive"
  - checkbox "Is Lm Hierarchical Data Access" [checked]
  - text: Is Lm Hierarchical Data Access
  - button "Save"
```

# Test source

```ts
  52  |         const user = new UserMgtPage(page);
  53  |         await user.getAddUserBtn();
  54  |         await user.getUserMgt(
  55  |             data.user_form.invalid_role_form
  56  |         );
  57  |         await user.getSaveBtnandExceptdialog();
  58  |         const checkRole = user.urole.locator('input')
  59  |         await expect(checkRole).toHaveCount(8);
  60  |     })
  61  | 
  62  |     test('check the usertype with invalid data',async({page})=>{
  63  |         const user = new UserMgtPage(page);
  64  |         await user.getAddUserBtn();
  65  |         await user.getUserMgt(
  66  |             data.user_form.invalid_utype_form
  67  |         );
  68  |         await user.getSaveBtnandExceptdialog();
  69  |         await expect(user.uType).toHaveClass(/ng-pristine/);
  70  |     })
  71  |     
  72  | 
  73  |     test('checked org division with invalid data',async({page})=>{
  74  |         const user = new UserMgtPage(page);
  75  |         await user.getAddUserBtn();
  76  |         await user.getUserMgt(
  77  |             data.user_form.invalid_orgdiv_form
  78  |         );
  79  |         await user.getSaveBtnandExceptdialog();
  80  |         await expect(user.orgDiv).toHaveClass(/ng-pristine/);   
  81  |     })
  82  | 
  83  |     test('checked dept with invalid data',async({page})=>{
  84  |         const user = new UserMgtPage(page);
  85  |         await user.getAddUserBtn();
  86  |         await user.getUserMgt(
  87  |             data.user_form.invalid_dept_form
  88  |         );
  89  |         await user.getSaveBtnandConfirm();
  90  |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');  
  91  |         //if duplicate found
  92  |         //await expect(page).toHaveURL('http://202.126.124.194:8264/users/add');
  93  |     })
  94  | 
  95  |     test('check position with invalid data',async({page})=>{
  96  |         const user = new UserMgtPage(page);
  97  |         await user.getAddUserBtn();
  98  |         await user.getUserMgt(
  99  |             data.user_form.invalid_position_form
  100 |         );
  101 |         await user.getSaveBtnandConfirm();
  102 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
  103 |     })
  104 | 
  105 |     test('check email with invalid data',async({page})=>{
  106 |         const user = new UserMgtPage(page);
  107 |         await user.getAddUserBtn();
  108 |         await user.getUserMgt(
  109 |             data.user_form.invalid_email_form
  110 |         );
  111 |         await user.getSaveBtnandExceptdialog();
  112 |         await expect(user.Email).toHaveClass(/ng-invalid/);
  113 |     })
  114 | 
  115 |     test('check phone number with invalid data',async({page})=>{
  116 |         const user = new UserMgtPage(page);
  117 |         await user.getAddUserBtn();
  118 |         await user.getUserMgt(
  119 |             data.user_form.invalid_Phone_form
  120 |         );
  121 |         await user.getSaveBtnandExceptdialog();
  122 |         await expect(user.Phone).toHaveClass(/ng-invalid/);
  123 |     })
  124 | 
  125 |     test('check user id with invalid data',async({page})=>{
  126 |         const user = new UserMgtPage(page);
  127 |         await user.getAddUserBtn();
  128 |         await user.getUserMgt(
  129 |             data.user_form.invalid_userid_form
  130 |         );
  131 |         await user.getSaveBtnandExceptdialog();
  132 |         await expect(user.Userid).toHaveClass(/ng-invalid/);
  133 |     })
  134 | 
  135 |     test('check password with invalid data',async({page})=>{
  136 |         const user = new UserMgtPage(page);
  137 |         await user.getAddUserBtn();
  138 |         await user.getUserMgt(
  139 |             data.user_form.invalid_password_form
  140 |         );
  141 |         await user.getSaveBtnandExceptdialog();
  142 |         await expect(user.Password).toHaveClass(/ng-invalid/);
  143 |     })
  144 | 
  145 |     test.only('check status with invalid data',async({page})=>{
  146 |         const user = new UserMgtPage(page);
  147 |         await user.getAddUserBtn();
  148 |         await user.getUserMgt(
  149 |             data.user_form.invalid_status_form
  150 |         );
  151 |         await user.getSaveBtnandConfirm();
> 152 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/list');
      |                            ^ Error: expect(page).toHaveURL(expected) failed
  153 |     })
  154 |     
  155 | })
```