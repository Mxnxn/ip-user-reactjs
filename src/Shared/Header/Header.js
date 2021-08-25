import React, { useEffect, useRef, useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { classManager } from "../helper/classManager";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = ({ setOpenMenu }) => {
    const headerFix = useRef(null);

    const [endOfScroll, setEndOfScroll] = useState(200);

    useEffect(() => {
        gsap.from(".header-main", {
            duration: 1,
            ease: "ease-in",
            scrollTrigger: {
                trigger: ".app",
                start: "150px 100px",
                end: `bottom 0%`,
                anticipatePin: 1,
                onUpdate: (evt) => {
                    if (evt.progress > 0.03) {
                        document.getElementById("to-sticky").classList.add("menu_fixed");
                        document.getElementById("to-sticky").classList.add("animated");
                        document.getElementById("to-sticky").classList.add("fadeInDown");
                    } else {
                        document.getElementById("to-sticky").classList.remove("menu_fixed");
                        document.getElementById("to-sticky").classList.remove("animated");
                        document.getElementById("to-sticky").classList.remove("fadeInDown");
                    }
                },
            },
        });
    });

    return (
        <header>
            <div id="to-sticky" ref={headerFix} class="header-main sticky-nav ">
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-auto align-self-center">
                            <div class="header-logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo.png" alt="Site Logo" />
                                </a>
                            </div>
                        </div>
                        <div class="col align-self-center d-none d-lg-block">
                            <div class="main-menu">
                                <ul>
                                    <li class="dropdown">
                                        <a href="#">
                                            Home <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="index.html">Home 1</a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">Home 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li class="dropdown position-static">
                                        <a href="about.html">
                                            Pages <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="mega-menu d-block">
                                            <li class="d-flex">
                                                <ul class="d-block">
                                                    <li class="title">
                                                        <a href="#">Inner Pages</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404 Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="privacy-policy.html">Privacy Policy</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">Faq Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="coming-soon.html">Coming Soon Page</a>
                                                    </li>
                                                </ul>
                                                <ul class="d-block">
                                                    <li class="title">
                                                        <a href="#">Other Shop Pages</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">Cart Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Checkout Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">Compare Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist Page</a>
                                                    </li>
                                                </ul>
                                                <ul class="d-block">
                                                    <li class="title">
                                                        <a href="#">Related Shop Pages</a>
                                                    </li>
                                                    <li>
                                                        <a href="my-account.html">Account Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">Login & Register Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="empty-cart.html">Empty Cart Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="thank-you-page.html">Thank You Page</a>
                                                    </li>
                                                </ul>
                                                <ul class="d-flex align-items-center p-0 border-0 flex-column justify-content-center">
                                                    <li>
                                                        <a class="p-0" href="shop-left-sidebar.html">
                                                            <img class="img-responsive w-100" src="assets/images/banner/menu-banner-1.jpg" alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown position-static">
                                        <a href="#">
                                            Shop <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="mega-menu d-block">
                                            <li class="d-flex">
                                                <ul class="d-block">
                                                    <li class="title">
                                                        <a href="#">Shop Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-3-column.html">Shop 3 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-4-column.html">Shop 4 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-left-sidebar.html">Shop Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">Cart Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Checkout Page</a>
                                                    </li>
                                                </ul>
                                                <ul class="d-block">
                                                    <li class="title">
                                                        <a href="#">product Details Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product.html">Product Single</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-variable.html">Product Variable</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-affiliate.html">Product Affiliate</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-group.html">Product Group</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-tabstyle-2.html">Product Tab 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-tabstyle-3.html">Product Tab 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-slider.html">Product Slider</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-gallery-left.html">Product Gallery Left</a>
                                                    </li>
                                                </ul>
                                                <ul class="d-block">
                                                    <li class="title">
                                                        <a href="#">Single Product Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-gallery-right.html">Product Gallery Right</a>{" "}
                                                    </li>
                                                    <li>
                                                        <a href="single-product-sticky-left.html">Product Sticky Left</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-sticky-right.html">Product Sticky Right</a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">Compare Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="my-account.html">Account Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">Login & Register Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="empty-cart.html">Empty Cart Page</a>
                                                    </li>
                                                </ul>
                                                <ul class="d-flex align-items-center p-0 border-0 flex-column justify-content-center">
                                                    <li>
                                                        <a class="p-0" href="shop-left-sidebar.html">
                                                            <img class="img-responsive w-100" src="assets/images/banner/menu-banner-2.png" alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown ">
                                        <a href="#">
                                            Blog <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="blog-grid.html">Blog Grid Page</a>
                                            </li>
                                            <li>
                                                <a href="blog-grid-left-sidebar.html">Grid Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="blog-grid-right-sidebar.html">Grid Right Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="blog-single.html">Blog Single Page</a>
                                            </li>
                                            <li>
                                                <a href="blog-single-left-sidebar.html">Single Left Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="blog-single-right-sidebar.html">Single Right Sidbar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-lg-auto align-self-center pl-0">
                            <div class="header-actions">
                                <a
                                    onClick={() => {
                                        classManager("app-main", "modal-open");
                                        classManager("searchActive", "show");
                                        classManager("searchActive", "d-block");
                                    }}
                                    class="header-action-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchActive"
                                >
                                    <i class="pe-7s-search"></i>
                                </a>
                                <div class="header-bottom-set dropdown ">
                                    <button class="dropdown-toggle header-action-btn" data-bs-toggle="dropdown">
                                        <i
                                            class="pe-7s-users"
                                            onClick={() => {
                                                classManager("header-users-btn", "show");
                                            }}
                                        ></i>
                                    </button>
                                    <ul id="header-users-btn" class="dropdown-menu dropdown-menu-right ">
                                        <li>
                                            <a class="dropdown-item" href="my-account.html">
                                                My account
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="checkout.html">
                                                Checkout
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="login.html">
                                                Sign in
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <a href="#offcanvas-cart" class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                    <i
                                        className="pe-7s-shopbag"
                                        onClick={() => {
                                            setOpenMenu(true);
                                            classManager("offcanvas-wishlist", "offcanvas-open");
                                        }}
                                    />
                                    <span class="header-action-num">01</span>
                                    {/* // <span class="cart-amount">€30.00</span> */}
                                </a>
                                <a href="#offcanvas-mobile-menu" class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                    <i class="pe-7s-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;