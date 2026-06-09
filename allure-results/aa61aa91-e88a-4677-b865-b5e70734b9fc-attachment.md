# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorInfo.spec.js >> test vendor info page >> check blank Organization type name @functional @regresstion
- Location: tests\vendorInfo.spec.js:122:10

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://202.126.124.194:8264/vendor-management/vendor-information-list"
Received: "http://202.126.124.194:8264/vendor-management/vendor-information-add"

Call log:
  - Expect "toHaveURL" with timeout 120000ms
    82 × unexpected value "http://202.126.124.194:8264/vendor-management/vendor-information-add"

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
        - link "Vendor Management - Vendor Information":
          - /url: javascript:void(0)
      - listitem: / Add
  - button "Vendor Information List"
  - text: Official Name*
  - textbox "Official Name* Vendor Code*": ArenaBD
  - text: Vendor Short Name*
  - textbox "Vendor Short Name*": test
  - text: Vendor Code*
  - textbox: "1234"
  - text: Division*
  - combobox "Division*":
    - option "Select Division" [disabled]
    - option "Barishal"
    - option "Chattogram"
    - option "Dhaka" [selected]
    - option "Khulna"
    - option "Mymensingh"
    - option "Rajshahi"
    - option "Rangpur"
    - option "Sylhet"
  - text: District*
  - combobox "District*":
    - option "Select District" [selected]
    - option "DHAKA"
    - option "FARIDPUR"
    - option "GAZIPUR"
    - option "GOPALGANJ"
    - option "MADARIPUR"
    - option "MANIKGANJ"
    - option "MUNSHIGANJ"
    - option "NARAYANGANJ"
    - option "NARSINGDI"
    - option "RAJBARI"
    - option "SHARIATPUR"
    - option "TANGAIL"
  - text: Address*
  - textbox "Address*": test
  - text: Key Contact*
  - textbox "Key Contact*": samiul
  - text: Key Contact Position*
  - textbox "Key Contact Position*": pm
  - text: Enlisted Date*
  - textbox "Enlisted Date*":
    - /placeholder: dd-mmm-yyyy
    - text: 09-Jun-2026
  - text: Registered Date*
  - textbox "dd-MMM-yyyy": 09-Jun-2026
  - text: Organization Type*
  - combobox:
    - option "Select Organization Type" [disabled] [selected]
    - option "Public Limited Company"
    - option "Private Limited Company"
    - option "Sole proprietor"
  - text: Upload Document
  - button "Choose File"
  - button "Save"
```

# Test source

```ts
  30  |         await infovendor.getVendorForm(
  31  |             data.vendorinfodata.blankofclvendor
  32  |         )
  33  |         await infovendor.getSaveBtn();
  34  |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  35  |         console.log('Blank official name data is passed successfully.');
  36  |     })
  37  | 
  38  |     test('check blank vendor short name @functional @regresstion',async({page})=>{
  39  |         const infovendor = new VendorInfoPage(page);
  40  |         await infovendor.getVendorInfoLink();
  41  |         await infovendor.getAddVendorBtn();
  42  |         await infovendor.getVendorForm(
  43  |             data.vendorinfodata.blankvndrshname
  44  |         )
  45  |         await infovendor.getSaveBtn();
  46  |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  47  |         console.log('Blank vendor short name data is passed successfully.');
  48  |     })
  49  | 
  50  |     test('check blank vendor code with zero name @functional @regresstion',async({page})=>{
  51  |         const infovendor = new VendorInfoPage(page);
  52  |         await infovendor.getVendorInfoLink();
  53  |         await infovendor.getAddVendorBtn();
  54  |         await infovendor.getVendorForm(
  55  |             data.vendorinfodata.blankvndrcode
  56  |         )
  57  |         await infovendor.getSaveBtn();
  58  |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  59  |         console.log('Blank vendor short name data is passed successfully.');
  60  |     })
  61  | 
  62  |     test('check blank division name @functional @regresstion',async({page})=>{
  63  |         const infovendor = new VendorInfoPage(page);
  64  |         await infovendor.getVendorInfoLink();
  65  |         await infovendor.getAddVendorBtn();
  66  |         await infovendor.getVendorForm(
  67  |             data.vendorinfodata.blankvndrdiv
  68  |         )
  69  |         await infovendor.getSaveBtn();
  70  |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  71  |         console.log('Blank vendor division name data is passed successfully.');
  72  |     })
  73  | 
  74  |     test('check blank district name @functional @regresstion',async({page})=>{
  75  |         const infovendor = new VendorInfoPage(page);
  76  |         await infovendor.getVendorInfoLink();
  77  |         await infovendor.getAddVendorBtn();
  78  |         await infovendor.getVendorForm(
  79  |             data.vendorinfodata.blankvndrdist
  80  |         )
  81  |         await infovendor.getSaveBtn();
  82  |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  83  |         console.log('Blank vendor district name data is passed successfully.');
  84  |     })
  85  | 
  86  |     test('check blank address name @functional @regresstion',async({page})=>{
  87  |         const infovendor = new VendorInfoPage(page);
  88  |         await infovendor.getVendorInfoLink();
  89  |         await infovendor.getAddVendorBtn();
  90  |         await infovendor.getVendorForm(
  91  |             data.vendorinfodata.blankvndraddr
  92  |         )
  93  |         await infovendor.getSaveBtn();
  94  |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  95  |         console.log('Blank vendor address name data is passed successfully.');
  96  |     })
  97  | 
  98  |     test('check blank key contact name @functional @regresstion',async({page})=>{
  99  |         const infovendor = new VendorInfoPage(page);
  100 |         await infovendor.getVendorInfoLink();
  101 |         await infovendor.getAddVendorBtn();
  102 |         await infovendor.getVendorForm(
  103 |             data.vendorinfodata.blankvndrcontact
  104 |         )
  105 |         await infovendor.getSaveBtn();
  106 |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  107 |         console.log('Blank vendor key contact name data is passed successfully.');
  108 |     })
  109 | 
  110 |     test('check blank key contact position name @functional @regresstion',async({page})=>{
  111 |         const infovendor = new VendorInfoPage(page);
  112 |         await infovendor.getVendorInfoLink();
  113 |         await infovendor.getAddVendorBtn();
  114 |         await infovendor.getVendorForm(
  115 |             data.vendorinfodata.blankvndrcontactpos
  116 |         )
  117 |         await infovendor.getSaveBtn();
  118 |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
  119 |         console.log('Blank vendor key contact position name data is passed successfully.');
  120 |     })
  121 | 
  122 |     test.only('check blank Organization type name @functional @regresstion',async({page})=>{
  123 |         const infovendor = new VendorInfoPage(page);
  124 |         await infovendor.getVendorInfoLink();
  125 |         await infovendor.getAddVendorBtn();
  126 |         await infovendor.getVendorForm(
  127 |             data.vendorinfodata.blankvndrorgtype
  128 |         )
  129 |         await infovendor.getSaveBtn();
> 130 |         await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-information-list');
      |                            ^ Error: expect(page).toHaveURL(expected) failed
  131 |         console.log('Blank vendor organization type name data is passed successfully.');
  132 |     })
  133 | })
```