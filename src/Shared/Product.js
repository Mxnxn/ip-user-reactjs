import React from "react";
import { BsEye } from "react-icons/bs";

const Product = ({ num }) => {
    return (
        <div class="product">
            <div class="thumb">
                <a href="single-product.html" class="image">
                    <img src={require(`../assets/images/product-image/${num}.jpg`).default} alt="Product" />
                    <img class="hover-image" src={require(`../assets/images/product-image/${num}.jpg`).default} alt="Product" />
                </a>
                <span class="badges">
                    <span class="new">New</span>
                </span>
                <div class="actions">
                    <a href="wishlist.html" class="action wishlist" title="Wishlist">
                        <BsEye style={{ fontSize: 24 }} />
                    </a>
                </div>
            </div>
            <div class="content">
                <span class="ratings">
                    <span class="rating-wrap">
                        <span class="star" style={{ width: "100%" }}></span>
                    </span>
                    <span class="rating-num">( 5 Review )</span>
                </span>
                <h5 class="title">
                    <a href="single-product.html">Hand-Made Garlic Mortar</a>
                </h5>
                <span class="price">
                    <span class="new">$38.50</span>
                </span>
            </div>
            <button title="Add To Cart" class=" add-to-cart">
                Add To Cart
            </button>
        </div>
    );
};

export default Product;
