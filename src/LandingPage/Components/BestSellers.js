import React from "react";

const BestSellers = (props) => {
    return (
        <div class="banner-area pt-100px pb-100px">
            <div class="container">
                <div class="row">
                    <div class="single-col">
                        <div class="single-banner">
                            <img src={require("../../assets/images/banner/1.jpg").default} alt="" />
                            <div class="banner-content">
                                <span class="category">Best Seller</span>
                                <span class="title">
                                    Flower Vase <br />& Poot
                                </span>
                                <a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="single-col center-col">
                        <div class="single-banner">
                            <img src={require("../../assets/images/banner/2.jpg").default} alt="" />
                            <div class="banner-content">
                                <span class="category">Best Seller</span>
                                <span class="title">
                                    Wool Silk Dress <br />& Offer 2021
                                </span>
                                <a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="single-col">
                        <div class="single-banner">
                            <img src={require("../../assets/images/banner/3.jpg").default} alt="" />
                            <div class="banner-content">
                                <span class="category">Best Seller</span>
                                <span class="title">
                                    Pen Holder
                                    <br />& Poot
                                </span>
                                <a href="shop-left-sidebar.html" class="shop-link btn btn-primary text-uppercase">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
