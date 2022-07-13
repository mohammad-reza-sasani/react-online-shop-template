import React from 'react';

const RegisterComponent = () => {
    return ( 
        <div>
            {/* Register form */}
        <p className="login_register_title">ثبت نام </p>
        <form className="from_login_component">
            <input input="text" className="form-control input-login-register-phone" placeholder="نام و نام خانوادگی" />
            <input input="text" className="form-control input-login-register-phone" placeholder="شماره موبایل" />
            
            <label className="login-register-textguid"> شماره موبایل شما کاملا محفوظ میماند و فقط برای ورود به وبسایت و اطلاع رسانی ها از آن استفاده میشود</label>
            <button input="button" className="btn btn-primary input-login-register-loginbtn"  >ثبت نام</button>
        </form>

        </div>
     );
}
 
export default RegisterComponent;