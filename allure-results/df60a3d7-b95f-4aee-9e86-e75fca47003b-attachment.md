# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.spec.js >> test user management page >> check edit blank password working or not
- Location: tests\user.spec.js:170:10

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('tr').filter({ hasText: 'Abdullah Khan' }).locator(locator('button[title=\'Edit\']'))

```

# Test source

```ts
  49  |         console.log('Step 2: lastName fill');
  50  |         await this.lastName.fill(umgt.lname);
  51  | 
  52  |         console.log('Step 3: role select');
  53  |         if(umgt.role !== ''){
  54  |             let roleFound = false;
  55  |             const rolecount = await this.urole.count();
  56  |             for(let i=0; i<rolecount; i++){
  57  |                 const rolenumber = this.urole.nth(i);
  58  |                 const roleText = await rolenumber.textContent();
  59  |                 if(roleText.trim() === umgt.role){
  60  |                     await rolenumber.locator('input').click();
  61  |                     roleFound = true;
  62  |                     break;
  63  |                 }
  64  |             }
  65  |             if(!roleFound) throw new Error(`Role "${umgt.role}" not found`);
  66  |        }
  67  |        console.log('Step 4: utype select');
  68  |        if(umgt.utype !== '') await this.uType.selectOption(umgt.utype.trim());
  69  |        console.log('Step 5: orgdiv select');
  70  |        if(umgt.orgdiv !== '') await this.orgDiv.selectOption(umgt.orgdiv.trim());
  71  |        console.log('Step 6: dept select');
  72  |        if(umgt.dept !== '') await this.Dept.selectOption(umgt.dept.trim());
  73  |        console.log('Step 7: position select');
  74  |        if(umgt.position !== '') await this.Position.selectOption(umgt.position.trim());
  75  | 
  76  |        console.log('Step 8: email fill');
  77  |        await this.Email.scrollIntoViewIfNeeded();
  78  |        await this.Email.fill(umgt.email);
  79  |        console.log('Step 9: phone fill');
  80  |        await this.Phone.fill(umgt.phone);
  81  |        console.log('Step 10: userid fill');
  82  |        await this.Userid.fill(umgt.userid);
  83  |        console.log('Step 11: password fill');
  84  |        await this.Password.fill(umgt.password);
  85  |        console.log('Step 12: status select');
  86  |        if(umgt.status !== '') await this.Status.selectOption(umgt.status.trim());
  87  |        console.log('Step 13: lmdata click');
  88  |        await this.lmdata.click();
  89  |        console.log('Step 14: scroll to save');
  90  |        await this.lmdata.scrollIntoViewIfNeeded();
  91  |        console.log('=== getUserMgt completed ===');
  92  |     }
  93  | 
  94  |     async getSaveBtnandExceptdialog(){
  95  |         await this.saveBtn.click();
  96  |         const cmodal = this.page.locator('text=Are you sure you want to save this?');
  97  |         await cmodal.waitFor({state: 'visible', timeout: 10000});
  98  |         await this.page.locator('button:has-text("Yes")').click();
  99  |         await cmodal.waitFor({state: 'hidden', timeout: 10000});
  100 |     }
  101 | 
  102 |         async getSaveBtnandConfirm() {
  103 |         // ✅ Save button click
  104 |         await this.saveBtn.click();
  105 | 
  106 |         // ✅ প্রথম confirm modal wait করো
  107 |         const confirmModal = this.page.locator('text=Are you sure you want to save this?');
  108 |         await confirmModal.waitFor({ state: 'visible', timeout: 10000 });
  109 | 
  110 |         // ✅ Yes click
  111 |         await this.page.locator('button:has-text("Yes")').click();
  112 | 
  113 |         // ✅ প্রথম modal বন্ধ হওয়ার wait
  114 |         await confirmModal.waitFor({ state: 'hidden', timeout: 10000 });
  115 | 
  116 |         // ✅ Success অথবা Duplicate — যেটা আসে সেটা detect করো
  117 |         const successModal = this.page.locator('text=Data is saved successfully.');
  118 |         const duplicateModal = this.page.locator('text=Duplicate name, please check entry name.'); // আপনার actual text দিন
  119 | 
  120 |         // ✅ দুইটার মধ্যে যেটা আগে আসে সেটা catch করো
  121 |         const result = await Promise.race([
  122 |             successModal.waitFor({ state: 'visible', timeout: 10000 }).then(() => 'success'),
  123 |             duplicateModal.waitFor({ state: 'visible', timeout: 10000 }).then(() => 'duplicate'),
  124 |         ]);
  125 | 
  126 |         if (result === 'success') {
  127 |             // ✅ Success flow
  128 |             await expect(successModal).toBeVisible();
  129 |             await this.page.locator('button:has-text("Ok")').click();
  130 |             await successModal.waitFor({ state: 'hidden', timeout: 10000 });
  131 |             return 'success';
  132 | 
  133 |         } else if (result === 'duplicate') {
  134 |             // ✅ Duplicate flow
  135 |             await expect(duplicateModal).toBeVisible();
  136 |             await this.page.locator('button:has-text("Cancel")').click(); // আপনার button text দিন
  137 |             await duplicateModal.waitFor({ state: 'hidden', timeout: 10000 });
  138 |             return 'duplicate';
  139 |         }
  140 |     }
  141 | 
  142 |     async getViewBtn(name){
  143 |         const row = await this.page.locator('tr',{hasText:name});
  144 |         await row.locator(this.View).click();
  145 | 
  146 |     }
  147 |     async getEditBtn(name){
  148 |         const row = await this.page.locator('tr',{hasText:name});
> 149 |         await row.locator(this.Edit).click();
      |                                      ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  150 |     }
  151 | 
  152 |     async getEdituser(contact){
  153 |         await this.Password.fill(contact.password);
  154 | 
  155 |         if(contact.status === '' || !contact.status){
  156 |             await this.Status.selectOption({index:0});
  157 |         }else{
  158 |             await this.Status.selectOption(contact.status);
  159 |         }
  160 |     }
  161 |     async getupdateandExit(){
  162 |         
  163 |         await this.Update.click();
  164 |         const umodal =this.page.locator('text=Are you sure you want to update this?');
  165 |         await umodal.waitFor({state:'visible', timeout:10000});
  166 |         await this.page.locator('button:has-text("Yes")').click();
  167 |         await umodal.waitFor({state: 'hidden', timeout: 10000});
  168 |     }
  169 | 
  170 |     async getupdateandConfirm(){
  171 |         
  172 |         await this.Update.click();
  173 |         const umodal =this.page.locator('text=Are you sure you want to update this?');
  174 |         await umodal.waitFor({state:'visible', timeout:10000});
  175 |         await this.page.locator('button:has-text("Yes")').click();
  176 |         await umodal.waitFor({state: 'hidden', timeout: 10000});
  177 |         const sumodal = this.page.locator('text=Data is updated successfully.');
  178 |         await sumodal.waitFor({state:'visible', timeout:10000});
  179 |         await this.page.locator('button:has-text("Ok")').click();
  180 |         await sumodal.waitFor({state: 'hidden', timeout: 10000});
  181 |     }
  182 | 
  183 |     async getDeleteandConfirm(name){
  184 |         const row = await this.page.locator('tr',{hasText:name});
  185 |         await row.locator(this.Delete).click();
  186 |         const dmodal =this.page.locator('text=Do you want to delete this?');
  187 |         await dmodal.waitFor({state:'visible', timeout:10000});
  188 |         await this.page.locator('button:has-text("Yes")').click();
  189 |         await dmodal.waitFor({state: 'hidden', timeout: 10000});
  190 |     }
  191 |    
  192 | } 
```