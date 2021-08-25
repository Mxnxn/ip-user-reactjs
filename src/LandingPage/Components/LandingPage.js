import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellers from "LandingPage/Components/BestSellers";
import FullProductBanner from "LandingPage/Components/FullProductBanner";
import DeliveryInfo from "LandingPage/Components/DeliveryInfo";
import ProductArea from "LandingPage/Components/ProductArea";
const LandingPage = (props) => {
    SwiperCore.use([Navigation]);
    return (
        <>
            <div class="section ">
                <Swiper
                    className={"hero-slider swiper-container slider-nav-style-1 slider-dot-style-1"}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div class="swiper-wrapper">
                        <SwiperSlide virtualIndex="1">
                            {({ isActive }) => (
                                <div
                                    className={
                                        isActive
                                            ? "hero-slide-item slider-height swiper-slide d-flex bg-color1 swiper-slide-duplicate swiper-slide-duplicate-active"
                                            : "hero-slide-item slider-height swiper-slide d-flex bg-color1 swiper-slide-duplicate-next"
                                    }
                                    data-bg-image="assets/images/slider-image/slider-bg-1.jpg"
                                >
                                    <div class="container align-self-center">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                                <div class="hero-slide-content slider-animated-1">
                                                    <h2 class="title-1">
                                                        Best Handmade <br class="d-sm-none"></br> Goods
                                                    </h2>
                                                    <span class="price">
                                                        <span class="old">
                                                            {" "}
                                                            <del>$25.00</del>
                                                        </span>
                                                        <span class="new">- $18.00</span>
                                                    </span>
                                                    <a href="shop-left-sidebar.html" class="btn btn-primary m-auto text-uppercase">
                                                        View Collection
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative">
                                                <div class="show-case">
                                                    <div class="hero-slide-image">
                                                        <img src="assets/images/slider-image/slider-1.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                        <SwiperSlide virtualIndex="2">
                            {" "}
                            <div
                                className="hero-slide-item slider-height swiper-slide d-flex bg-color1"
                                data-bg-image="assets/images/slider-image/slider-bg-1.jpg"
                            >
                                <div class="container align-self-center">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                            <div class="hero-slide-content slider-animated-1">
                                                <h2 class="title-1">
                                                    Best Handmade <br class="d-sm-none" /> Goods
                                                </h2>
                                                <span class="price">
                                                    <span class="old">
                                                        {" "}
                                                        <del>$25.00</del>
                                                    </span>
                                                    <span class="new">- $18.00</span>
                                                </span>
                                                <a href="shop-left-sidebar.html" class="btn btn-primary m-auto text-uppercase">
                                                    View Collection
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative">
                                            <div class="show-case">
                                                <div class="hero-slide-image">
                                                    <img src="assets/images/slider-image/slider-2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
            <BestSellers />
            <ProductArea />
            <DeliveryInfo />
            <FullProductBanner />
        </>
    );
};

export default LandingPage;
