import React from 'react';
import CardComponent from '../cardComponent/CardComponent';

const ShopComponent = () => {
    return ( 
        
        <div className="shop-product-parent-product">
            <h3  className="shop-product-top-product-text shadow" >
            <i className="fa fa-star" aria-hidden="true"></i>
                فروشگاه محصولات
            <i className="fa fa-star" aria-hidden="true"></i>    
            </h3>
            <CardComponent/>                                                                                     
        </div>
     );
}
 
export default ShopComponent;