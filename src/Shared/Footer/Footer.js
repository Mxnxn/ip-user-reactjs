import React from "react";

const Footer = (props) => {
    return (
        <div class="footer-area" style={{ backgroundColor: "#fff" }}>
            <div class="footer-container">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-lg-3 mb-md-30px mb-lm-30px">
                                <div class="single-wedge">
                                    <h4 class="footer-herading">Information</h4>
                                    <div class="footer-links">
                                        <div class="footer-row">
                                            <ul class="align-items-center">
                                                <li class="li">
                                                    <a class="single-link" href="about.html">
                                                        About us
                                                    </a>
                                                </li>
                                                <li class="li">
                                                    <a class="single-link" href="#">
                                                        Delivery information
                                                    </a>
                                                </li>
                                                <li class="li">
                                                    <a class="single-link" href="privacy-policy.html">
                                                        Privacy Policy
                                                    </a>
                                                </li>

                                                <li class="li">
                                                    <a class="single-link" href="#">
                                                        Terms & Conditions
                                                    </a>
                                                </li>
                                                <li class="li">
                                                    <a class="single-link" href="#">
                                                        Shipping Policy
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 col-sm-6 mb-lm-30px">
                                <div class="single-wedge">
                                    <h4 class="footer-herading">Account</h4>
                                    <div class="footer-links">
                                        <div class="footer-row">
                                            <ul class="align-items-center">
                                                <li class="li">
                                                    <a class="single-link" href="my-account.html">
                                                        {" "}
                                                        My account
                                                    </a>
                                                </li>
                                                <li class="li">
                                                    <a class="single-link" href="cart.html">
                                                        My orders
                                                    </a>
                                                </li>
                                                <li class="li">
                                                    <a class="single-link" href="#">
                                                        Returns
                                                    </a>
                                                </li>
                                                <li class="li">
                                                    <a class="single-link" href="shop-left-sidebar.html">
                                                        Shipping
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-2 col-sm-6 mb-sm-30px"></div>
                            <div class="col-md-6 col-lg-4 col-md-6 col-sm-6 pl-120px line-shape">
                                <div class="single-wedge ">
                                    <h4 class="footer-herading">Contact Us</h4>
                                    <div class="footer-links">
                                        <p class="mail">
                                            If you have any question. Kindly,
                                            <br />
                                            contact us at <a href="mailto:care@manangraphics.com">abc@abc.com</a>{" "}
                                        </p>
                                        <p class="address">
                                            <i class="pe-7s-map-marker"></i>{" "}
                                            <span>
                                                Your address goes here.
                                                <br />
                                                123, Address.
                                            </span>{" "}
                                        </p>
                                        <p class="phone m-0">
                                            <i class="pe-7s-phone"></i>
                                            <span>
                                                <a href="tel:919825505771">+91 98255 05771</a> <br /> <a href="tel:919825505771">+91 98255 07071</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
