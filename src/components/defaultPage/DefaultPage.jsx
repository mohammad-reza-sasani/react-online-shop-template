import React from 'react';
import CategoryPartWebsite from './category-part-website/Category-part-website';
import Slider from './slider/Slider'
import SpecialProduct from './specialProduct/SpecialProduct';
const DefaultPage = () => {
    return ( 
        <div>
            <Slider/>
            <CategoryPartWebsite/>
            <SpecialProduct/>
        </div>
     );
}
 
export default DefaultPage;