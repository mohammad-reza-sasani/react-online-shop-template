import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    
    return ( 

        <div>

            <div className="d-flex justify-content-around align-items-center Footer-component" >
            <NavLink  style={{ textDecoration: 'none' }} to="/login-register" ><div className="p-2"> <i className="fa fa-user Footer-component-icons"></i><br/> <span className="Footer-component-text">ورود/ثبت نام</span> </div></NavLink>
            <NavLink  style={{ textDecoration: 'none' }} to="/Shopping-Bag" ><div className="p-2"> <i className="fa fa-shopping-bag Footer-component-icons"><span className="badge badge-pill badge-danger Footer-component-badge-number">1</span></i><br/> <span className="Footer-component-text">سبد خرید </span> </div></NavLink>
            <NavLink  style={{ textDecoration: 'none' }} to="/" ><div className="p-2"> <i className="fa fa-calendar-check-o Footer-component-icons"></i><br/> <span className="Footer-component-text">وقت مشاوره</span> </div></NavLink>
            <NavLink  style={{ textDecoration: 'none' }} to="/shop" ><div className="p-2"> <i className="fa fa-shopping-cart Footer-component-icons"></i><br/> <span className="Footer-component-text">فروشگاه</span> </div></NavLink>
            <NavLink  style={{ textDecoration: 'none' }} to="/" ><div className="p-2"> <i className="fa fa-home Footer-component-icons"></i><br/> <span className="Footer-component-text">خانه</span> </div></NavLink>
            </div>
            

        </div>
     );
}
 
export default Footer;