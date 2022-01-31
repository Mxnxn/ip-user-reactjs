import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/style.css";

const App = (props) => {
    return (
        <BrowserRouter>
            <div id="shopify-section-featured-collections" class="shopify-section shopify-section--bordered">
                <section class="Section Section--spacingNormal" data-section-id="featured-collections" data-section-type="featured-collections">
                    <header class="SectionHeader SectionHeader--center">
                        <div class="Container">
                            <h3 class="SectionHeader__SubHeading Heading u-h6">Featured collection</h3>
                            <h2 class="SectionHeader__Heading Heading u-h1">Switches</h2>
                        </div>
                    </header>
                    <div className="TabPanel">
                        <div className="ProductListWrapper">
                            <div className="ProductList ProductList--grid ProductList--removeMargin Grid">
                                <div className="Grid__Cell 1/2--phone 1/2--tablet 1/4--lap-and-up">
                                    <div class="ProductItem ">
                                        <div class="ProductItem__Wrapper">
                                            <a href="/products/alpaca-linears" class="ProductItem__ImageWrapper ">
                                                <div class="AspectRatio AspectRatio--withFallback">
                                                    <span class="Image__Loader"></span>
                                                </div>
                                            </a>
                                            <div class="ProductItem__Info ProductItem__Info--center">
                                                <h2 class="ProductItem__Title Heading">
                                                    <a href="/products/alpaca-linears">Alpaca Linears</a>
                                                </h2>
                                                <div class="ProductItem__PriceList  Heading">
                                                    <span class="ProductItem__Price Price Text--subdued">Rs. 600</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
};

export default App;
