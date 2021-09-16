import { GetProducts } from "Api/Product";
import { useEffect, useState } from "react";
import Product from "Shared/Product";

const ProductArea = (props) => {
    const [state, setstate] = useState({ products: [], fetched: false });

    const fetch = async () => {
        const response = await GetProducts();
        if (response.status) setstate({ fetched: true, products: response.message });
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div class="product-area" style={{ paddingTop: "8rem", backgroundColor: "#EFEFEF" }}>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title text-center mb-30px">
                            <p style={{ fontSize: "14px" }}>Forget About Quality</p>
                            <p style={{ fontSize: "18px" }}>We OFfer</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="tab-content mt-10px">
                            <div class="tab-pane fade show active" id="tab-jewelry">
                                <div class="row">
                                    {state.products.map(
                                        (product, idx) =>
                                            idx < 6 && (
                                                <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                                    <Product prop={product} />
                                                </div>
                                            )
                                    )}
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
