import { GetAProducts } from "Api/Product";
import { useEffect, useState } from "react";
import { AiOutlineFrown } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { addItemToCart } from "Redux/CartAction";
import SwiperCore, { Navigation, Controller, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const ProductDetail = (props) => {
    SwiperCore.use([Navigation, Thumbs]);

    const { id } = useParams();
    const [state, setState] = useState({ product: {}, order: { len: null, height: null, qty: null }, dataFetched: false, alert: null });
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {
            const response = await GetAProducts(id);
            setState({ ...state, product: response.message, dataFetched: true });
        };
        fetch();
    }, [id]);

    const AddItemToCart = () => {
        console.log(!state.order.qty);
        if (!state.order.qty) return setState({ ...state, alert: "Invalid Quantity" });
        if (!state.product.sizeWithQty) {
            setState({ ...state, order: { ...state.order, estimatedPrice: parseInt(state.order.qty) * parseInt(state.product.numericPrice) } });
            // return dispatch(
            //     addItemToCart({ ...state.product, orderQty: state.order.qty, estimatedPrice: parseInt(state.order.qty) * parseInt(state.product.numericPrice) })
            // );
        }
        if (state.order.len && state.order.height && state.order.len.length > 1 && state.order.height.length > 1) {
            return setState({
                ...state,
                order: {
                    ...state.order,
                    estimatedPrice:
                        parseInt(state.order.qty) * parseInt(state.product.numericPrice) * parseInt(state.order.length) * parseInt(state.order.height),
                },
            });
        } else {
            setState({ ...state, alert: "Please fill below fields carefully!" });
        }
    };

    const valueHandler = (evt) => {
        setState({ ...state, order: { ...state.order, [evt.target.name]: evt.target.value } });
    };

    return (
        state.dataFetched && (
            <div class="product-details-area pt-100px pb-100px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                            <Swiper
                                className={"swiper-container zoom-top swiper-container-initialized swiper-container-horizontal"}
                                thumbs={{ swiper: controlledSwiper }}
                            >
                                <div
                                    class="swiper-wrapper"
                                    id="swiper-wrapper-15c14dcc26e39691"
                                    aria-live="polite"
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        position: "relative",
                                        listStyle: "none",
                                        padding: 0,
                                        zIndex: 1,
                                        overflow: "hidden",
                                    }}
                                >
                                    {state.product.images.map((imgObj) => (
                                        <SwiperSlide className="zoom-image-hover" style={{ position: "relative", overflow: "hidden", width: 576 }}>
                                            {/* <div class="swiper-slide zoom-image-hover swiper-slide-active" role="group" aria-label="1 / 5"> */}
                                            <img
                                                style={{ maxWidth: "100%", display: "block", width: "100%" }}
                                                class="img-responsive m-auto"
                                                src={process.env.REACT_APP_API_URL + "/uploads/" + imgObj.url}
                                                alt=""
                                            />
                                            <img
                                                role="presentation"
                                                alt=""
                                                src={process.env.REACT_APP_API_URL + "/uploads/" + imgObj.url}
                                                class="zoomImg"
                                                style={{
                                                    position: "absolute",
                                                    top: "0px",
                                                    left: "0px",
                                                    opacity: 0,
                                                    width: "800px",
                                                    height: "800px",
                                                    border: "none",
                                                    maxWidth: "none",
                                                    maxHeight: "none",
                                                }}
                                            />
                                            {/* </div> */}
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                            <Swiper
                                slidesPerView={5}
                                className="swiper-container mt-20px zoom-thumbs swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-thumbs"
                                watchSlidesProgress
                                onSwiper={setControlledSwiper}
                            >
                                <div class="swiper-wrapper" id="swiper-wrapper-41a10cd94726209a6" aria-live="polite">
                                    {state.product.images.map((imgObject) => (
                                        <SwiperSlide
                                            className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active mr-18"
                                            role="group"
                                            aria-label="1 / 5"
                                        >
                                            <img class="img-responsive m-auto" src={process.env.REACT_APP_API_URL + "/uploads/" + imgObject.url} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                            <div class="product-details-content quickview-content ml-25px">
                                <h2>{state.product.name}</h2>
                                <div class="pricing-meta">
                                    <ul class="d-flex">
                                        <li class="new-price">{state.product.price}</li>
                                        {/* <li class="old-price">
                                            <del>$30.90</del>
                                        </li> */}
                                    </ul>
                                </div>
                                <div class="stock mt-30px">
                                    <span class="avallabillty ">
                                        Availability:{" "}
                                        {state.product.isAvailable ? (
                                            <span class="in-stock text-success">
                                                <BsCheckAll style={{ marginRight: 6 }} />
                                                In Stock
                                            </span>
                                        ) : (
                                            <span class="in-stock text-danger">
                                                <AiOutlineFrown style={{ marginRight: 6 }} />
                                                Out of stock
                                            </span>
                                        )}
                                    </span>
                                </div>
                                {state.alert && (
                                    <div class="stock mt-30px">
                                        <div className="alert alert-danger">{state.alert}</div>
                                    </div>
                                )}
                                <div class="stock mt-30px">
                                    {state.product.sizeWithQty && (
                                        <div className="d-flex ">
                                            <div className="flex-1 default-form-box mr-18">
                                                <input
                                                    onChange={(evt) => valueHandler(evt)}
                                                    name="len"
                                                    value={state.order.len}
                                                    placeholder="Length in Inches"
                                                />
                                            </div>
                                            <div className="flex-1 default-form-box">
                                                <input
                                                    onChange={(evt) => valueHandler(evt)}
                                                    name="height"
                                                    value={state.order.height}
                                                    placeholder="Height in Inches"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div class="stock">
                                    <div className="d-flex ">
                                        <div className="flex-1 default-form-box mr-18">
                                            <input value={state.order.qty} onChange={(evt) => valueHandler(evt)} name="qty" placeholder="Quantity" />
                                        </div>
                                        <button class="btn-upload-design" onClick={AddItemToCart} style={{ marginLeft: 0 }}>
                                            Upload Design
                                        </button>
                                    </div>
                                </div>
                                <p class="mb-0">{state.product.description}</p>
                                <div class="pro-details-quality">
                                    <div class="pro-details-cart">
                                        <button class="add-cart" onClick={AddItemToCart} style={{ marginLeft: 0 }}>
                                            {" "}
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                                <div class="pro-details-categories-info pro-details-same-style d-flex">
                                    <span>Categories: </span>
                                    <ul class="d-flex">
                                        {state.product.category.map((cat) => (
                                            <li>
                                                <Link to={`/category/${cat._id}`}>{cat.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <div class="pro-details-social-info pro-details-same-style d-flex">
                                    <span>Share: </span>
                                    <ul class="d-flex">
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProductDetail;
