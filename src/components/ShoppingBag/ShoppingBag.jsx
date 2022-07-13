import { textAlign } from "@mui/system";
import React from "react";

const ShoppingBag = () => {
  return (
    
      <div className="ShoppingBag-parent">
        <p className="shoppingBag-title-page">سبد خرید شما</p>
        <table className="table table-striped table-reverse ShoppingBag-table">
          <thead>
            <tr>
              <th scope="col">نام محصول</th>
              <th scope="col">قیمت</th>
              <th scope="col">حذف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>آموزش خودهیپنوتیزم</td>
              <td className="shoppingBag-price-td">1,200,000</td>
              <td><button  className="btn btn-danger">
                حذف
              </button></td>
            </tr>

            
          </tbody>
        </table>

        <div className="ShoppingBag-off-form-parent">
          <form className="form-inline ShoppingBag-off-form">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control test-test"
                id="inputPassword2"
                placeholder="کد تخفیف را وارد کنید"
              />
            </div>
            <div className="form-group mx-sm-3 mb-2 ShoppingBag-off-button">
              <button type="submit" className="btn btn-danger">
                اعمال کد تخفیف
              </button>
            </div>
          </form>
        </div>

        <div className="ShoppingBag-Checkout-parent">
          <div className="d-flex flex-row-reverse">
            <table
              className="table table-bordered shoppingBag-table"
              style={{ direction: "rtl" }}
            >
              <tbody>
                <tr>
                  <td className="shoppingBag-checkout-text">قیمت کل</td>                  
                </tr>
                </tbody>

                
                <tr>                    
                <td className="shoppingBag-checkout-price">
                    1,200,000 تومان
                </td>
                </tr>                              
            </table>            
          </div>
          


          

        </div>


        <div className="shoppingBag-checkout-parent-button"  >              
            <button type="submit" className="btn btn-success">
                پرداخت
            </button>  
        </div>

          
    
      </div>

  );
};

export default ShoppingBag;
