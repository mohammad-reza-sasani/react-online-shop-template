import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const OtherProduct = () => {
  return (
    <div>
      
      <div className="OtherProduct-title-text">دوره های دیگر این مدرس</div>

      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        slidesPerGroup={2}
        loop={false}
        loopFillGroupWithBlank={true}
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            slidesPerGroup:1,
            spaceBetween: 20,            
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup:2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup:2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup:3,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        

        <SwiperSlide>
        <div className="myslide" >
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 other-product-parent" >
        <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
          <div className="other-product-card  shadow "  style={{width:"250px" }}>
            <div className="other-product-card-image-parent">
              <img src={require("../../img/products_images/product1.jpg")} />
              {/* off */}
              <span className="other-product-off-price">30%</span>
            </div>
            <div className="other-product-detail">
              <h2 className="other-product-name">
                <span>آموزش خود هیپنوتیزم</span>
              </h2>

              <div className="other-product-parent-tacher">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                <span>زهرا یاری زاده</span>
              </div>

              <div className="other-product-line"></div>

              <div className="other-product-parent-price">
                <span className="other-product-price-text">
                  <i>1,200,000</i> تومان{" "}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
        </div>
        </SwiperSlide>

        
        <SwiperSlide>
        <div className="myslide" >
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 other-product-parent" >
        <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
          <div className="other-product-card  shadow "  style={{width:"250px" }}>
            <div className="other-product-card-image-parent">
              <img src={require("../../img/products_images/product1.jpg")} />
              {/* off */}
              <span className="other-product-off-price">30%</span>
            </div>
            <div className="other-product-detail">
              <h2 className="other-product-name">
                <span>آموزش خود هیپنوتیزم</span>
              </h2>

              <div className="other-product-parent-tacher">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                <span>زهرا یاری زاده</span>
              </div>

              <div className="other-product-line"></div>

              <div className="other-product-parent-price">
                <span className="other-product-price-text">
                  <i>1,200,000</i> تومان{" "}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
        </div>
        </SwiperSlide>

        
        <SwiperSlide>
        <div className="myslide" >
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 other-product-parent" >
        <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
          <div className="other-product-card  shadow "  style={{width:"250px" }}>
            <div className="other-product-card-image-parent">
              <img src={require("../../img/products_images/product1.jpg")} />
              {/* off */}
              <span className="other-product-off-price">30%</span>
            </div>
            <div className="other-product-detail">
              <h2 className="other-product-name">
                <span>آموزش خود هیپنوتیزم</span>
              </h2>

              <div className="other-product-parent-tacher">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                <span>زهرا یاری زاده</span>
              </div>

              <div className="other-product-line"></div>

              <div className="other-product-parent-price">
                <span className="other-product-price-text">
                  <i>1,200,000</i> تومان{" "}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
        </div>
        </SwiperSlide>



        <SwiperSlide>
        <div className="myslide" >
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 other-product-parent" >
        <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
          <div className="other-product-card  shadow "  style={{width:"250px" }}>
            <div className="other-product-card-image-parent">
              <img src={require("../../img/products_images/product1.jpg")} />
              {/* off */}
              <span className="other-product-off-price">30%</span>
            </div>
            <div className="other-product-detail">
              <h2 className="other-product-name">
                <span>آموزش خود هیپنوتیزم</span>
              </h2>

              <div className="other-product-parent-tacher">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                <span>زهرا یاری زاده</span>
              </div>

              <div className="other-product-line"></div>

              <div className="other-product-parent-price">
                <span className="other-product-price-text">
                  <i>1,200,000</i> تومان{" "}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
        </div>
        </SwiperSlide>


      </Swiper>

    </div>
  );
};

export default OtherProduct;
