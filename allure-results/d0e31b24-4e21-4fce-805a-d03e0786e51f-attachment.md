# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendorAgreement.spec.js >> test vendor agreement page >> check valid all field vendor agreement @functional
- Location: tests\vendorAgreement.spec.js:99:8

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://202.126.124.194:8264/vendor-management/vendor-agreement-list"
Received: "http://202.126.124.194:8264/vendor-management/vendor-agreement-add"

Call log:
  - Expect "toHaveURL" with timeout 120000ms
    184 × unexpected value "http://202.126.124.194:8264/vendor-management/vendor-agreement-add"

```

```yaml
- dialog:
  - img
  - heading "Are you sure you want to save this?" [level=4]
  - button "No"
  - button "Yes"
```

# Test source

```ts
  7   | const data = new testData();
  8   | test.describe('test vendor agreement page',()=>{
  9   |   test.beforeEach(async({page})=>{
  10  |     const login = new LoginPage(page);
  11  |     await login.goto(data.url);
  12  |     await login.Login(
  13  |         data.user_login.valid_login.username,
  14  |         data.user_login.valid_login.password
  15  |     )
  16  | 
  17  |     await login.clickMenuLink();
  18  |     await login.getvendorMgtlink();
  19  |   })
  20  | 
  21  |   test.afterEach(async({page})=>{
  22  |     await page.close();
  23  |   })
  24  | 
  25  |   test('check blank select vendor @functional',async({page})=>{
  26  |     const vndragrmt = new VendorAgreementPage(page);
  27  |     await vndragrmt.getvndrAgreementLink();
  28  |     await vndragrmt.getAddvndrAgreementBtn();
  29  |     await vndragrmt.getvendrAgreementForm(
  30  |         data.vndragrmntForm.blank_svndr_name
  31  |     )
  32  |     await vndragrmt.getSaveBtn();
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
  99  |   test.only('check valid all field vendor agreement @functional',async({page})=>{
  100 |     const vndragrmt = new VendorAgreementPage(page);
  101 |     await vndragrmt.getvndrAgreementLink();
  102 |     await vndragrmt.getAddvndrAgreementBtn();
  103 |     await vndragrmt.getvendrAgreementForm(
  104 |         data.vndragrmntForm.valid_all_field_name
  105 |     )
  106 |     await vndragrmt.getsaveBtnwithnomsg();
> 107 |     await expect(page).toHaveURL('http://202.126.124.194:8264/vendor-management/vendor-agreement-list');
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  108 |     console.log('Data is saved successfully.');
  109 |     
  110 | 
  111 |   })
  112 | 
  113 |   // test('API দেখি', async ({ page }) => {
  114 |   // await inspectAPI(page, '/api/users');  // আপনার API path দিন
  115 |   // await page.goto('http://localhost:3000/users');  // আপনার page এর URL দিন
  116 |   // });
  117 | 
  118 | })
  119 | 
```