# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: user.spec.js >> test user management page >> checked dept with invalid data
- Location: tests\user.spec.js:87:10

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('text=Data is saved successfully.') to be visible

```

# Test source

```ts
  30  |     async getUserMgtlink(){
  31  |         await this.userMgtlink.click();
  32  |     }
  33  | 
  34  |     async getUserlink(){
  35  |         await this.userlink.click();
  36  |     }
  37  | 
  38  |     async getAddUserBtn(){
  39  |         await this.addUserBtn.click();
  40  |     }
  41  | 
  42  |     async getUserMgt(umgt){
  43  |         console.log('Step 1: firstName fill');
  44  |         await this.firstName.fill(umgt.fname);
  45  |         console.log('Step 2: lastName fill');
  46  |         await this.lastName.fill(umgt.lname);
  47  | 
  48  |         console.log('Step 3: role select');
  49  |         if(umgt.role !== ''){
  50  |             let roleFound = false;
  51  |             const rolecount = await this.urole.count();
  52  |             for(let i=0; i<rolecount; i++){
  53  |                 const rolenumber = this.urole.nth(i);
  54  |                 const roleText = await rolenumber.textContent();
  55  |                 if(roleText.trim() === umgt.role){
  56  |                     await rolenumber.locator('input').click();
  57  |                     roleFound = true;
  58  |                     break;
  59  |                 }
  60  |             }
  61  |             if(!roleFound) throw new Error(`Role "${umgt.role}" not found`);
  62  |        }
  63  |        console.log('Step 4: utype select');
  64  |        if(umgt.utype !== '') await this.uType.selectOption(umgt.utype.trim());
  65  |        console.log('Step 5: orgdiv select');
  66  |        if(umgt.orgdiv !== '') await this.orgDiv.selectOption(umgt.orgdiv.trim());
  67  |        console.log('Step 6: dept select');
  68  |        if(umgt.dept !== '') await this.Dept.selectOption(umgt.dept.trim());
  69  |        console.log('Step 7: position select');
  70  |        if(umgt.position !== '') await this.Position.selectOption(umgt.position.trim());
  71  | 
  72  |        console.log('Step 8: email fill');
  73  |        await this.Email.scrollIntoViewIfNeeded();
  74  |        await this.Email.fill(umgt.email);
  75  |        console.log('Step 9: phone fill');
  76  |        await this.Phone.fill(umgt.phone);
  77  |        console.log('Step 10: userid fill');
  78  |        await this.Userid.fill(umgt.userid);
  79  |        console.log('Step 11: password fill');
  80  |        await this.Password.fill(umgt.password);
  81  |        console.log('Step 12: status select');
  82  |        if(umgt.status !== '') await this.Status.selectOption(umgt.status.trim());
  83  |        console.log('Step 13: lmdata click');
  84  |        await this.lmdata.click();
  85  |        console.log('Step 14: scroll to save');
  86  |        await this.lmdata.scrollIntoViewIfNeeded();
  87  |        console.log('=== getUserMgt completed ===');
  88  |     }
  89  | 
  90  |     async getSaveBtnandExceptdialog(){
  91  |         this.page.once('dialog',async(dialog)=>{
  92  |             expect(dialog.message()).toContain('Are you sure you want to save this?');
  93  |             await dialog.accept();
  94  |         })
  95  |         await this.saveBtn.click();
  96  |     }
  97  | 
  98  |     // async getSaveBtnandConfirm() {
  99  |     //     this.page.once('dialog', async (dialog) => {
  100 |     //         expect(dialog.message()).toContain('Are you sure you want to save this?');
  101 | 
  102 |     //         // ✅ first accept এর আগেই second register করো
  103 |     //         this.page.once('dialog', async (dialog2) => {
  104 |     //             expect(dialog2.message()).toContain('Data saved successfully');
  105 |     //             await dialog2.accept();
  106 |     //         });
  107 | 
  108 |     //         await dialog.accept();
  109 |     //     });
  110 | 
  111 |     //     await this.saveBtn.click();
  112 |     // }
  113 | 
  114 |     async getSaveBtnandConfirm() {
  115 |     // ✅ Save button click করো
  116 |     await this.saveBtn.click();
  117 | 
  118 |     // ✅ প্রথম modal — "Are you sure you want to save this?" আসার জন্য wait করো
  119 |     const confirmModal = this.page.locator('text=Are you sure you want to save this?');
  120 |     await confirmModal.waitFor({ state: 'visible', timeout: 10000 });
  121 | 
  122 |     // ✅ "Yes" button click করো
  123 |     await this.page.locator('button:has-text("Yes")').click();
  124 | 
  125 |         // ✅ প্রথম modal বন্ধ হওয়ার জন্য wait করো
  126 |         await confirmModal.waitFor({ state: 'hidden', timeout: 10000 });
  127 | 
  128 |         // ✅ দ্বিতীয় modal — "Data is saved successfully." আসার জন্য wait করো
  129 |         const successModal = this.page.locator('text=Data is saved successfully.');
> 130 |         await successModal.waitFor({ state: 'visible', timeout: 10000 });
      |                            ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  131 | 
  132 |         // ✅ assertion করো
  133 |         await expect(successModal).toBeVisible();
  134 | 
  135 |         // ✅ "Ok" button click করো
  136 |         await this.page.locator('button:has-text("Ok")').click();
  137 | 
  138 |         // ✅ success modal বন্ধ হওয়ার জন্য wait করো
  139 |         await successModal.waitFor({ state: 'hidden', timeout: 10000 });
  140 |     }   
  141 | } 
```