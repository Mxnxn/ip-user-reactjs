const FullProductBanner = (props) => {
    return (
        <div class="deal-area pb-100px pt-100px">
            <div class="container ">
                <div class="row">
                    <div class="col-12">
                        <div
                            class="deal-inner deal-bg position-relative ptb-80px"
                            style={{ backgroundImage: `url(' + require('"../../assets/images/deal-img/deal-bg.jpg"') + ')` }}
                        >
                            <div class="deal-wrapper">
                                <h3 class="title">
                                    Handmade Pen Holder <br />& Offer Sale -20%{" "}
                                </h3>
                                <span class="price">
                                    <span class="old">
                                        {" "}
                                        <del>$25.00</del>
                                    </span>
                                    <span class="new">- $18.00</span>
                                </span>
                                <a href="single-product-variable.html" class="btn btn-lg btn-primary">
                                    Add To Cart
                                </a>
                            </div>
                            <div class="deal-image">
                                <img class="img-fluid" src={require("../../assets/images/deal-img/woman.png").default} alt="" />
                                <div class="discount">
                                    <h3>-20%</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullProductBanner;
