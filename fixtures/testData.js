export class testData{
    url = 'http://202.126.124.194:8264/ologin';

    user_login = {
        valid_login:{
            username : 'hrm@system.user',
            password : 'hr_payroll_2026_'
        },

        invalid_login:{
            username : '',
            password : ''
        },

        invalid_username:{
            username : 'hr@system.user',
            password : 'hr_payroll_2026'
        },

        invalid_password :{
            username : 'hrm@system.user',
            password : 'hr_payroll_202'
        }
    }

    user_form={
        valid_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_fname_form:{
            fname : '',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_lname_form:{
            fname : 'Abdullah',
            lname : '',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_role_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : '',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_utype_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : '',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_orgdiv_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : '',
            dept : '',
            position : '',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_dept_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : '',
            position : '',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_position_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : '',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_email_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : '',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_Phone_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_userid_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : '',
            password : 'ab_payroll_2026',
            status : 'Active'
        },

        invalid_password_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : '',
            status : 'Active'
        },

        invalid_status_form:{
            fname : 'Abdullah',
            lname : 'Khan',
            role : 'Admin',
            utype : 'Vendor Login',
            orgdiv : 'Arena Phone',
            dept : 'Software Development',
            position : 'Software Engineer',
            email : 'abdullah@gmail.com',
            phone : '01754872541',
            userid : 'abdullah@system.user',
            password : 'ab_payroll_2026',
            status : ''
        }

    }

    view_row={
        view_row_name:{
            name:'Abdullah Khan'
        }     
    }

    edit_user={
        edit_blank_password:{
            password: '',
            status: 'Active'
        },

        edit_blank_status:{
            password: 'ab_payroll_2026',
            status: ''
        },
        edit_valid_data:{
            password:'hr_payroll_2026',
            status:'Active'
        }
    }

    name_filter={
        name_search_filter:{
            name: 'Rifat'
        },
        sysname_search_filter:{
            sysname:'DVendor0000003'
        },
        phone_search_filter:{
            phone: '01518349300'
        }
    }

    dept_filter={
        dept_search_filter:{
            dept:'Software Technical'
        },
        posi_search_filter:{
            posi:'UI/UX Designer'
        }
    }

    role_filter={
        role_search_filter:{
            role:'Admin'
        }
    }

    vendor_user={
        valid_form:{
            fname : 'Hasan',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : 'V102',
            password : 'hasan123456',
            status : 'Active'   
        },

        invalid_fname_form:{
            fname : '',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : 'V102',
            password : 'hasan123456',
            status : 'Active'   
        },

        invalid_lname_form:{
            fname : 'Hasan',
            lname : '',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : 'V102',
            password : 'hasan123456',
            status : 'Active'   
        },

        invalid_vendor_form:{
            fname : 'Hasan',
            lname : 'Imam',
            vendor : '',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : 'V102',
            password : 'hasan123456',
            status : 'Active'   
        },

        invalid_role_form:{
            fname : 'Hasan',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : '',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : 'V102',
            password : 'hasan123456',
            status : 'Active'   
        },
        invalid_email_form:{
            fname : 'Hasan',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : '',
            phone : '01785749685',
            userid : 'V102',
            password : 'hasan123456',
            status : 'Active'   
        },
        invalid_phone_form:{
            fname : 'Hasan',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '',
            userid : 'V102',
            password : 'hasan123456',
            status : 'Active'   
        },

        invalid_userid_form:{
            fname : 'Hasan',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : '',
            password : 'hasan123456',
            status : 'Active'   
        },

        invalid_password_form:{
            fname : 'Hasan',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : 'V102',
            password : '',
            status : 'Active'   
        },
        invalid_status_form:{
            fname : 'Hasan',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : 'V102',
            password : 'hasan123456',
            status : ''   
        }
    }

    update_vendor_user={
        valid_vUser:{
            fname : 'Hasan1',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            userid : 'V1023',
            password : 'hasan123456',
            status : 'Active'
        },
        invalid_fname_vUser:{
            fname : '',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            password : 'hasan123456',
            status : 'Active'
        },
        invalid_lname_vUser:{
            fname : 'Hasan1',
            lname : '',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            password : 'hasan123456',
            status : 'Active'
        },
        invalid_vendor_vUser:{
            fname : 'Hasan1',
            lname : 'Imam',
            vendor : '',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            password : 'hasan123456',
            status : 'Active'
        },
        invalid_role_vUser:{
            fname : 'Hasan1',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : '',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            password : 'hasan123456',
            status : 'Active'
        },
        invalid_email_vUser:{
            fname : 'Hasan1',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : '',
            phone : '01785749685',
            password : 'hasan123456',
            status : 'Active'
        },
        invalid_phone_vUser:{
            fname : 'Hasan1',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '',
            password : 'hasan123456',
            status : 'Active'
        },
        
        invalid_password_vUser:{
            fname : 'Hasan1',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            password : '',
            status : 'Active'
        },
        invalid_status_vUser:{
            fname : 'Hasan1',
            lname : 'Imam',
            vendor : 'Demo Vendor',
            role : 'Admin',
            email : 'hasan@gmail.com',
            phone : '01785749685',
            password : 'hasan123456',
            status : ''
        }
    }

    view_vendor_row={
        view_row_name:{
            name:'Hasan Imam'
        }     
    }

    view_vendor_row1={
        view_row_name1:{
            name:'Hasan1 Imam'
        }     
    }

    name_filter={
        uname_filter_search:{
            name:'Hasan1 Imam'
        },
        sysname_filter_search:{
            sysname:'V102'
        },
        phone_filter_search:{
            phone:'01785749685'
        }
    }

    UserLoginHis={
        UserTypeName:{
            userType: 'Super Admin'
        },
        UserGroupName:{
            userGroup: 'Admin'
        },
        OrgDivPosName:{
            orgDivPos: 'Arena Phone'
        },
        UserNamePhoneName:{
            userNamePhone: '01913366446'
        },
        dateFilter:{
            startDate: '01-Jun-2026',
            endDate: '06-Jun-2026'
        }
        
    }

    vendorinfodata={
        blankofclvendor:{
            ofcl : '',
            vendorShName : 'test',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },
        //H:\\automation_doc\\2nd class.pptx.pdf
        blankvndrshname:{
            ofcl : 'ArenaBD',
            vendorShName : '',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrcode:{
            ofcl : 'ArenaBD',
            vendorShName : 'test',
            vndrcode : '0',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrdiv:{
            ofcl : 'ArenaBD',
            vendorShName : 'test',
            vndrcode : '1234',
            div : '',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrdist:{
            ofcl : 'ArenaBD',
            vendorShName : 'test',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : '',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndraddr:{
            ofcl : 'ArenaBD',
            vendorShName : 'test',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : '',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrcontact:{
            ofcl : 'ArenaBD',
            vendorShName : 'test',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : '',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrcontactpos:{
            ofcl : 'ArenaBD',
            vendorShName : 'test',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : '',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrorgtype:{
            ofcl : 'ArenaBD',
            vendorShName : 'test',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : '',
            fileupload : ''
        },

        validvndrinfo:{
            ofcl : 'ArenaBD',
            vendorShName : 'test',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        }

    }

    update_vndrinfo_row_name={
        valid_row_name:{
            name:'ArenaBD'
        }
    }

    updatevendordata={
        blankvndrofclinfo:{
            ofcl : '',
            vendorShName : 'test',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrshname:{
            ofcl : 'ArenaBD',
            vendorShName : '',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrcodename:{
            ofcl : 'ArenaBD',
            vendorShName : 'TEST',
            vndrcode : '0',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrdivname:{
            ofcl : 'ArenaBD',
            vendorShName : 'TEST',
            vndrcode : '1234',
            div : '',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrdistname:{
            ofcl : 'ArenaBD',
            vendorShName : 'TEST',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : '',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndraddrname:{
            ofcl : 'ArenaBD',
            vendorShName : 'TEST',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : '',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrcontactname:{
            ofcl : 'ArenaBD',
            vendorShName : 'TEST',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : '',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrcontactposname:{
            ofcl : 'ArenaBD',
            vendorShName : 'TEST',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : '',
            orgType : 'Private Limited Company',
            fileupload : ''
        },

        blankvndrorgtypename:{
            ofcl : 'ArenaBD',
            vendorShName : 'TEST',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Public Limited Company',
            fileupload : ''
        },

        validallvndrinfo:{
            ofcl : 'ArenaBD',
            vendorShName : 'TEST',
            vndrcode : '1234',
            div : 'Dhaka',
            dist : 'gazipur',
            addr : 'test',
            contact : 'samiul',
            contactPos : 'pm',
            orgType : 'Private Limited Company',
            fileupload : ''
        }
    }

    delete_vndrinfo_row_name={
        delete_row_name:{
            dltname:'ArenaBD'
        }
    }

    vndragrmntForm={
        blank_svndr_name:{
            svndr:'',
            docname:'test',
            filename:'H:\\automation_doc\\2nd class.pptx.pdf',
            sdate:'05-Jun-2026',
            duration:'5'
        },

        blank_doc_name:{
            svndr:'ArenaBD',
            docname:'',
            filename:'H:\\automation_doc\\2nd class.pptx.pdf',
            sdate:'05-Jun-2026',
            duration:'5'
        },

        blank_file_name:{
            svndr:'ArenaBD',
            docname:'test',
            filename:'',
            sdate:'05-Jun-2026',
            duration:'5'
        },

        blank_sdate_name:{
            svndr:'ArenaBD',
            docname:'test',
            filename:'H:\\automation_doc\\2nd class.pptx.pdf',
            sdate:'',
            duration:'5'
        },

        blank_duration_name:{
            svndr:'ArenaBD',
            docname:'test',
            filename:'H:\\automation_doc\\2nd class.pptx.pdf',
            sdate:'05-Jun-2026',
            duration:''
        },

        valid_all_field_name:{
            svndr:'ArenaBD',
            docname:'test',
            filename:'H:\\automation_doc\\2nd class.pptx.pdf',
            sdate:'05-Jun-2026',
            duration:'5'
        }
    }

    viewvndragrmentForm={
        viewvndragrmntBtn:{
            vname:'ArenaBD'
        }
    }

    EditvndragrmentForm={
        vndragrmntEditBtn:{
            ename:'ArenaBD'
        }
    }

    DeletevndragrmentForm={
        vndragrmntDltBtn:{
            dname:'exctest'
        }
    }

    udatevndragrmntForm={
        changed_svndr_name:{
            svndr:'exctest',
            docname:'test',
            filename:'',
            sdate:'05-Jun-2026',
            duration:'5'
        },
        //H:\\automation_doc\\2nd class.pptx.pdf

        blank_doc_name:{
            svndr:'exctest',
            docname:'',
            filename:'',
            sdate:'05-Jun-2026',
            duration:'5'
        },

        blank_file_name:{
            svndr:'ArenaBD',
            docname:'test',
            filename:'',
            sdate:'05-Jun-2026',
            duration:'5'
        },

        blank_sdate_name:{
            svndr:'ArenaBD',
            docname:'test',
            filename:'',
            sdate:'',
            duration:'5'
        },

        blank_duration_name:{
            svndr:'ArenaBD',
            docname:'test',
            filename:'H:\\automation_doc\\2nd class.pptx.pdf',
            sdate:'05-Jun-2026',
            duration:''
        },

        valid_all_field_name:{
            svndr:'exctest',
            docname:'test',
            filename:'',
            sdate:'05-Jun-2026',
            duration:'6'
        }
        //H:\\automation_doc\\2nd class.pptx.pdf
    }


    apiResponse = {
    // Vendor save success
        saveSuccess: {
            status: 200,
            body: { message: 'Data is saved successfully.' }
        },

        // Vendor save duplicate
        saveDuplicate: {
            status: 409,
            body: { message: 'Duplicate name, please check entry name.' }
        },

        // Vendor update success
        updateSuccess: {
            status: 200,
            body: { message: 'Data is updated successfully.' }
        },

        // Vendor delete success
        deleteSuccess: {
            status: 200,
            body: { message: 'Data is deleted successfully.' }
        },

        // Server error
        serverError: {
            status: 500,
            body: { message: 'Could not save changes. Please configure your entity type accordingly.' }
        }
    }
   
}