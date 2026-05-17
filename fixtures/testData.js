export class testData{
    url = 'http://202.126.124.194:8264/ologin';

    user_login = {
        valid_login:{
            username : 'hrm@system.user',
            password : 'hr_payroll_2026'
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
}