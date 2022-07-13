import React from 'react';

const LoginComponent = () => {
    return ( 

        <div>
            {/* login form */}
            <p className="login_register_title">ورود به سایت</p>
            <form className="from_login_component">
                <input input="text" className="form-control input-login-register-phone" placeholder="شماره موبایل" />
                <label className="login-register-textguid">با وارد کردن شماره موبایل کد ورود برای شما پیامک میشود</label>
                <button input="button" className="btn btn-primary input-login-register-loginbtn"  >ورود</button>
            </form>
        </div>

     );
}
 
export default LoginComponent;