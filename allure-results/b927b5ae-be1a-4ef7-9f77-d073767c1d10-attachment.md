# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: vendor.spec.js >> test vendor user login management page. >> check status name with update data
- Location: tests\vendor.spec.js:224:10

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('//select[@formcontrolname=\'userStatus\']')
Expected pattern: /ng-invalid/
Timeout: 120000ms
Error: element(s) not found

Call log:
  - Expect "toHaveClass" with timeout 120000ms
  - waiting for locator('//select[@formcontrolname=\'userStatus\']')
    5 × locator resolved to <select formcontrolname="userStatus" aria-label="Default select example" _ngcontent-ng-cli-universal-c1859390029="" class="form-control form-select ng-untouched ng-valid ng-dirty">…</select>
      - unexpected value "form-control form-select ng-untouched ng-valid ng-dirty"

```

```yaml
- dialog:
  - img
  - heading "Data is updated successfully." [level=4]
  - button "Ok"
```

# Test source

```ts
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
  159 |     //ei test er firstname thik kore chalate hobe
  160 |     test('check vendor name with update data',async({page})=>{
  161 |         const vendor = new VendorMgtPage(page);
  162 |         await vendor.getEditVendor(
  163 |             data.view_vendor_row.view_row_name.name
  164 |         );
  165 |         await vendor.getEditvendorForm(
  166 |             data.update_vendor_user.invalid_vendor_vUser
  167 |         )
  168 |         await vendor.getUpdateandConfirm();
  169 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
  170 |         console.log('vendor name saved successfully.');
  171 |     })
  172 | 
  173 |     test('check role name with update data',async({page})=>{
  174 |         const vendor = new VendorMgtPage(page);
  175 |         await vendor.getEditVendor(
  176 |             data.view_vendor_row1.view_row_name1.name
  177 |         );
  178 |         await vendor.getEditvendorForm(
  179 |             data.update_vendor_user.invalid_role_vUser
  180 |         )
  181 |         await vendor.getUpdateandError();
  182 |         console.log('role name is blank.');
  183 |     })
  184 | 
  185 |     test('check email name with update data',async({page})=>{
  186 |         const vendor = new VendorMgtPage(page);
  187 |         await vendor.getEditVendor(
  188 |             data.view_vendor_row1.view_row_name1.name
  189 |         );
  190 |         await vendor.getEditvendorForm(
  191 |             data.update_vendor_user.invalid_email_vUser
  192 |         )
  193 |         await vendor.getUpdateandError();
  194 |         await expect(vendor.Email).toHaveClass(/ng-invalid/);
  195 |         console.log('Email name is blank.');
  196 |     })
  197 | 
  198 |     test('check Phone name with update data',async({page})=>{
  199 |         const vendor = new VendorMgtPage(page);
  200 |         await vendor.getEditVendor(
  201 |             data.view_vendor_row1.view_row_name1.name
  202 |         );
  203 |         await vendor.getEditvendorForm(
  204 |             data.update_vendor_user.invalid_phone_vUser
  205 |         )
  206 |         await vendor.getUpdateandError();
  207 |         await expect(vendor.Phone).toHaveClass(/ng-invalid/);
  208 |         console.log('Phone name is blank.');
  209 |     })
  210 | 
  211 |     test('check Password name with update data',async({page})=>{
  212 |         const vendor = new VendorMgtPage(page);
  213 |         await vendor.getEditVendor(
  214 |             data.view_vendor_row1.view_row_name1.name
  215 |         );
  216 |         await vendor.getEditvendorForm(
  217 |             data.update_vendor_user.invalid_password_vUser
  218 |         )
  219 |         await vendor.getUpdateandError();
  220 |         await expect(vendor.Password).toHaveClass(/ng-invalid/);
  221 |         console.log('Password name is blank.');
  222 |     })
  223 | 
  224 |     test.only('check status name with update data',async({page})=>{
  225 |         const vendor = new VendorMgtPage(page);
  226 |         await vendor.getEditVendor(
  227 |             data.view_vendor_row1.view_row_name1.name
  228 |         );
  229 |         await vendor.getEditvendorForm(
  230 |             data.update_vendor_user.invalid_status_vUser
  231 |         )
  232 |         await vendor.getUpdateandConfirm();
> 233 |         await expect(page).toHaveURL('http://202.126.124.194:8264/users/vendor-list');
      |                                     ^ Error: expect(locator).toHaveClass(expected) failed
  234 |         console.log('Status is saved successfully.');
  235 |     })
  236 | 
  237 | })
  238 | 
```