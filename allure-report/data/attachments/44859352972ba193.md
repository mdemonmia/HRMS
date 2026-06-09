# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendor.spec.js >> test vendor user login management page. >> check vendor name with update data
- Location: tests\vendor.spec.js:159:10

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('//select[@formcontrolname=\'userOrgId\']')
Expected pattern: /ng-invalid/
Received string:  "form-control form-select ng-untouched ng-valid ng-dirty"
Timeout: 120000ms

Call log:
  - Expect "toHaveClass" with timeout 120000ms
  - waiting for locator('//select[@formcontrolname=\'userOrgId\']')
    236 × locator resolved to <select formcontrolname="userOrgId" aria-label="Default select example" _ngcontent-ng-cli-universal-c1859390029="" class="form-control form-select ng-untouched ng-valid ng-dirty">…</select>
        - unexpected value "form-control form-select ng-untouched ng-valid ng-dirty"

```

```yaml
- combobox "Default select example":
  - option "Select Vendor" [selected]
  - option "Demo Vendor"
```

# Test source

```ts
  68  |     })
  69  | 
  70  |     test('check role with invalid data',async({page})=>{
  71  |         const vendor = new VendorMgtPage(page);
  72  |         await vendor.getAddvendor();
  73  |         await vendor.getVendorForm(
  74  |             data.vendor_user.invalid_role_form
  75  |         )
  76  |         await vendor.getSaveandError();
  77  |         console.log('role is blank.please check the role.');
  78  |     })
  79  | 
  80  |     test('check email with invalid data',async({page})=>{
  81  |         const vendor = new VendorMgtPage(page);
  82  |         await vendor.getAddvendor();
  83  |         await vendor.getVendorForm(
  84  |             data.vendor_user.invalid_email_form
  85  |         )
  86  |         await vendor.getSaveandError();
  87  |         await expect(vendor.Email).toHaveClass(/ng-invalid/);
  88  |         console.log('email is blank.please check the email.');
  89  |     })
  90  | 
  91  |     test('check phone with invalid data',async({page})=>{
  92  |         const vendor = new VendorMgtPage(page);
  93  |         await vendor.getAddvendor();
  94  |         await vendor.getVendorForm(
  95  |             data.vendor_user.invalid_phone_form
  96  |         )
  97  |         await vendor.getSaveandError();
  98  |         await expect(vendor.Phone).toHaveClass(/ng-invalid/);
  99  |         console.log('Phone is blank.please check the Phone.');
  100 |     })
  101 | 
  102 |     test('check userid with invalid data',async({page})=>{
  103 |         const vendor = new VendorMgtPage(page);
  104 |         await vendor.getAddvendor();
  105 |         await vendor.getVendorForm(
  106 |             data.vendor_user.invalid_userid_form
  107 |         )
  108 |         await vendor.getSaveandError();
  109 |         await expect(vendor.Userid).toHaveClass(/ng-invalid/);
  110 |         console.log('Userid is blank.please check the userid.');
  111 |     })
  112 | 
  113 |     test('check password with invalid data',async({page})=>{
  114 |         const vendor = new VendorMgtPage(page);
  115 |         await vendor.getAddvendor();
  116 |         await vendor.getVendorForm(
  117 |             data.vendor_user.invalid_password_form
  118 |         )
  119 |         await vendor.getSaveandError();
  120 |         await expect(vendor.Password).toHaveClass(/ng-invalid/);
  121 |         console.log('Password is blank.please check the Password.');
  122 |     })
  123 | 
  124 |     test('check status with invalid data',async({page})=>{
  125 |         const vendor = new VendorMgtPage(page);
  126 |         await vendor.getAddvendor();
  127 |         await vendor.getVendorForm(
  128 |             data.vendor_user.invalid_status_form
  129 |         )
  130 |         await vendor.getSaveBtnandConfirm();
  131 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
  132 |         console.log('status saved successfully.');
  133 |     })
  134 | 
  135 |     test('check vendor user with valid data',async({page})=>{
  136 |         const vendor = new VendorMgtPage(page);
  137 |         await vendor.getAddvendor();
  138 |         await vendor.getVendorForm(
  139 |             data.vendor_user.valid_form
  140 |         )
  141 |         await vendor.getSaveBtnandConfirm();
  142 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
  143 |         console.log('vendor user saved successfully.');
  144 |     })
  145 | 
  146 |     test('check first name with update data',async({page})=>{
  147 |         const vendor = new VendorMgtPage(page);
  148 |         await vendor.getEditVendor(
  149 |             data.view_vendor_row.view_row_name.name
  150 |         );
  151 |         await vendor.getEditvendorForm(
  152 |             data.update_vendor_user.invalid_fname_vUser
  153 |         )
  154 |         await vendor.getUpdateandError();
  155 |         await expect(vendor.firstName).toHaveClass(/ng-invalid/);
  156 |         console.log('first name is blank.please check the first name.');
  157 |     })
  158 | 
  159 |     test.only('check vendor name with update data',async({page})=>{
  160 |         const vendor = new VendorMgtPage(page);
  161 |         await vendor.getEditVendor(
  162 |             data.view_vendor_row.view_row_name.name
  163 |         );
  164 |         await vendor.getEditvendorForm(
  165 |             data.update_vendor_user.invalid_vendor_vUser
  166 |         )
  167 |         await vendor.getUpdateandError();
> 168 |         await expect(vendor.vendorName).toHaveClass(/ng-invalid/);
      |                                         ^ Error: expect(locator).toHaveClass(expected) failed
  169 |         console.log('vendor name is blank.please check the vendor name.');
  170 |     })
  171 | 
  172 | })
  173 | 
```