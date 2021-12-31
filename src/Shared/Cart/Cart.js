import { GetUserCart, RemoveItemsFromCart } from "Api/Cart";
import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GlobalLogout } from "Shared/helper/GlobalLogout";
import Snackbar from "Shared/Notification/Snackbar";
import { classManager } from "../helper/classManager";

const Cart = ({ setOpenMenu, openMenu }) => {
    const [state, setState] = useState({ cart: [], fetchedCart: false });
    const history = useHistory();
    const displaySnackbar = Snackbar();

    useEffect(() => {
        const fetch = async () => {
            const mCart = await GetUserCart();
            if (mCart.code === 401) {
                GlobalLogout();
                displaySnackbar({ head: "Kindly,", variant: "danger", message: "Sign in to access Cart." });
                setOpenMenu(false);
                classManager("offcanvas-wishlist", "offcanvas-open");
                return history.replace("/myaccount?q=login");
            }
            setState({ ...state, cart: mCart.message, fetchedCart: true });
        };
        if (openMenu) fetch();
    }, [openMenu]);

    const onRemoveItemFromCart = async (id) => {
        const formData = new FormData();
        formData.set("cpid", id);
        formData.set("uid", localStorage.getItem("_u"));
        const response = await RemoveItemsFromCart(formData);
        setState({ ...state, cart: { ...response.message } });
    };

    return (
        <div id="offcanvas-wishlist" class={"offcanvas offcanvas-wishlist"}>
            {state.fetchedCart && (
                <div class="inner">
                    <div class="head">
                        <span class="title">Cart</span>
                        <button
                            class="offcanvas-close"
                            onClick={() => {
                                setOpenMenu(false);
                                classManager("offcanvas-wishlist", "offcanvas-open");
                            }}
                        >
                            ×
                        </button>
                    </div>
                    <div class="body customScroll">
                        <ul class="minicart-product-list">
                            {state.cart.products.map((prdct, idx) => (
                                <li>
                                    <a href="single-product.html" class="image">
                                        <img src={`${process.env.REACT_APP_API_URL}/${prdct.images[0].url}`} alt="Cart product Image" />
                                    </a>
                                    <div class="content">
                                        <a href="single-product.html" class="title">
                                            {/* Hand-Made Garlic Mortar */}
                                            {prdct._id}
                                        </a>
                                        <span class="quantity-price">
                                            Qty: {prdct.qty} <br /> Price: {prdct.numericPrice} Inr
                                        </span>
                                        <span class="">Total: {prdct.rate}</span>
                                        <button
                                            class="remove"
                                            onClick={() => {
                                                onRemoveItemFromCart(prdct._id);
                                            }}
                                        >
                                            <BiTrash style={{ fontSize: 20 }} />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div class="foot">
                        <div class="buttons">
                            <a href="wishlist.html" class="btn btn-dark btn-hover-primary mt-30px mb-30px">
                                View Cart
                            </a>
                            <a href="checkout.html" class="btn btn-outline-dark current-btn">
                                checkout
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
