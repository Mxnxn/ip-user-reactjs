import React from "react";
import { BsEye } from "react-icons/bs";

const Product = ({ prop }) => {
    return (
        <div class="product">
            <div class="thumb">
                <a href="single-product.html" class="image">
                    <img src={`${process.env.REACT_APP_API_URL}/uploads/${prop.images[0].url}`} alt="Product" />
                    {/* <img src={require(`../assets/images/product-image/${1}.jpg`).default} alt="Product" />
                    <img class="hover-image" src={require(`../assets/images/product-image/${1}.jpg`).default} alt="Product" /> */}
                </a>
                <span class="badges">
                    <span class="new">New</span>
                </span>
                <div class="actions">
                    <a href="wishlist.html" class="action wishlist" title="Wishlist">
                        <BsEye style={{ fontSize: 20 }} />
                    </a>
                </div>
            </div>
            <div class="content">
                <h5 class="title">
                    <a href="single-product.html">{prop.name}</a>
                </h5>
                <span class="price">
                    <span class="new">{prop.price}</span>
                </span>
            </div>
        </div>
    );
};

export default Product;
