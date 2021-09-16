const DeliveryInfo = (props) => {
    return (
        <div class="feature-area pt-100px pb-100px" style={{ backgroundColor: "#EFEFEF" }}>
            <div class="container">
                <div class="feature-wrapper">
                    <div class="single-feture-col">
                        <div class="single-feature">
                            <div class="feature-icon">
                                <img src={require("../../assets/images/icons/1.png").default} alt="" />
                            </div>
                            <div class="feature-content">
                                <h4 class="title">Free Shipping</h4>
                                <span class="sub-title">On order worth over ₹ 1999</span>
                            </div>
                        </div>
                    </div>

                    <div class="single-feture-col ">
                        <div class="single-feature">
                            <div class="feature-icon">
                                <img src={require("../../assets/images/icons/2.png").default} alt="" />
                            </div>
                            <div class="feature-content">
                                <h4 class="title">UPI Payments</h4>
                                <span class="sub-title">Gpay/Paytm/PhonePay</span>
                            </div>
                        </div>
                    </div>
                    <div class="single-feture-col">
                        <div class="single-feature">
                            <div class="feature-icon">
                                <img src={require("../../assets/images/icons/3.png").default} alt="" />
                            </div>
                            <div class="feature-content">
                                <h4 class="title">Fast Delivery</h4>
                                <span class="sub-title">With Minimum charges</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;
