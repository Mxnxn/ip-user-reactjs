import Product from "Shared/Product";

const ProductArea = (props) => {
    return (
        <div class="product-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title text-center mb-30px">
                            <h2 class="title">Popular Categories</h2>
                            <p>Choose a Product we provide you and Forget about quality. </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="tab-content mt-10px">
                            <div class="tab-pane fade show active" id="tab-jewelry">
                                <div class="row">
                                    {[1, 2, 3, 4, 1, 2, 3, 4].map((num) => (
                                        <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            <Product num={num} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductArea;
