import React, { useEffect, useRef, useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { classManager } from "../helper/classManager";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { GetCategories } from "Api/Category";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaUserLock } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useHistory } from "react-router";
gsap.registerPlugin(ScrollTrigger);

const Header = ({ setOpenMenu }) => {
    const history = useHistory();
    const headerFix = useRef(null);

    const [state, setState] = useState({ categories: [], fetched: false });

    const fetch = async () => {
        const resp = await GetCategories();
        if (resp.status) setState({ ...state, categories: resp.message, fetched: true });
    };

    useEffect(() => {
        fetch();
    }, []);

    // useEffect(() => {
    //     gsap.from(".header-main", {
    //         duration: 1,
    //         ease: "ease-in",
    //         scrollTrigger: {
    //             trigger: ".app",
    //             start: "150px 100px",
    //             end: `bottom 0%`,
    //             anticipatePin: 1,
    //             onUpdate: (evt) => {
    //                 if (evt.progress > 0.03) {
    //                     document.getElementById("to-sticky").classList.add("menu_fixed");
    //                     document.getElementById("to-sticky").classList.add("animated");
    //                     document.getElementById("to-sticky").classList.add("fadeInDown");
    //                 } else {
    //                     document.getElementById("to-sticky").classList.remove("menu_fixed");
    //                     document.getElementById("to-sticky").classList.remove("animated");
    //                     document.getElementById("to-sticky").classList.remove("fadeInDown");
    //                 }
    //             },
    //         },
    //     });
    // });

    return (
        <header>
            <div id="to-sticky" ref={headerFix} class="header-main sticky-nav menu_fixed  ">
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-auto align-self-center">
                            <div class="header-logo">
                                <a href="index.html">
                                    <img src={require("../../assets/images/xx.png").default} height={60} alt="Site Logo" />
                                </a>
                            </div>
                        </div>
                        <div class="col align-self-center d-none d-lg-block">
                            <div class="main-menu">
                                <ul>
                                    <li class="dropdown">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li class="dropdown position-static">
                                        <Link to="/">SHOP</Link>
                                        <ul class="mega-menu d-block">
                                            <li class="d-flex">
                                                <ul class="d-block">
                                                    <li class="title">
                                                        <a>Category</a>
                                                    </li>
                                                    {state.fetched &&
                                                        state.categories.map(
                                                            (cat, idx) =>
                                                                idx < 4 && (
                                                                    <li>
                                                                        <Link to={`/category/${cat._id}`}>{cat.name}</Link>
                                                                    </li>
                                                                )
                                                        )}
                                                </ul>
                                                <ul class="d-block">
                                                    <li class="title">
                                                        <a>{state.categories.length > 0 && "More"}</a>
                                                    </li>
                                                    {state.categories.map(
                                                        (cat, idx) =>
                                                            idx > 4 &&
                                                            idx < 8 && (
                                                                <li>
                                                                    <Link to={`/category/${cat._id}`}>{cat.name}</Link>
                                                                </li>
                                                            )
                                                    )}
                                                </ul>

                                                <ul
                                                    class="d-flex align-items-center p-0 border-0 flex-column justify-content-center  that-box"
                                                    style={{ marginLeft: 25 }}
                                                    onClick={() => history.push("/all")}
                                                >
                                                    <li>
                                                        <div class="p-0" href="shop-left-sidebar.html " className="overlap-all-p ">
                                                            <span>ALL PRODUCTS</span>
                                                            <img class="" src={require("../../assets/images/ww.jpg").default} alt="" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="contact.html">CONTACT US</a>
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
                                    <BiSearch style={{ fontSize: 28 }} />
                                </a>
                                <div class="header-bottom-set dropdown ">
                                    {window.localStorage.getItem("_t") ? (
                                        <Link className="dropdown-toggle header-action-btn" to="/myaccount">
                                            <AiOutlineUser style={{ fontSize: 28 }} />
                                        </Link>
                                    ) : (
                                        <Link className="dropdown-toggle header-action-btn" to="/myaccount">
                                            <FaUserLock style={{ fontSize: 28 }} />
                                        </Link>
                                    )}
                                </div>

                                <a href="#offcanvas-cart" class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                    <IoBagHandleOutline
                                        style={{ fontSize: 28 }}
                                        onClick={() => {
                                            setOpenMenu(true);
                                            classManager("offcanvas-wishlist", "offcanvas-open");
                                        }}
                                    />
                                    <span class="header-action-num"></span>
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
