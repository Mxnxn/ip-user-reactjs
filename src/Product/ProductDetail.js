import { GetAProducts } from "Api/Product";
import { useEffect, useState } from "react";
import { AiOutlineFrown } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { BsCheckAll } from "react-icons/bs";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { AllowedExtension } from "Shared/Constants";
import { getPrice } from "Shared/helper/getPrice";
import { AddItemToCart } from "Api/Cart";
import SwiperCore, { Navigation, Controller, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Snackbar from "Shared/Notification/Snackbar";
import { classManager } from "Shared/helper/classManager";
const ProductDetail = ({ setOpenMenu }) => {
    const displaySnackbar = Snackbar();
    SwiperCore.use([Navigation, Thumbs]);

    const { id } = useParams();
    const [state, setState] = useState({
        product: {},
        order: { len: null, height: null, qty: null, design: null, estimatedPrice: 0, eyelets: false },
        dataFetched: false,
        alert: null,
    });
    const [controlledSwiper, setControlledSwiper] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            const response = await GetAProducts(id);
            setState({ ...state, product: response.message, dataFetched: true });
        };
        fetch();
    }, [id]);

    // const history = useHistory();
    const onAddItemToCart = async () => {
        // if (!localStorage.getItem("_u")) return history.replace("/myaccount");
        setState({ ...state, alert: null });
        const { product, order } = state;
        if (!order.qty) return setState({ ...state, alert: "Invalid Quantity" });
        const formData = new FormData();
        formData.set("pid", product._id);
        formData.set("name", product.name);
        formData.set("price", product.price);
        formData.set("numericPrice", product.numericPrice);
        for (let i = 0; i < product.images.length; i++) {
            const img = product.images[i];
            formData.set(`images[${i}]`, img._id);
        }
        for (let i = 0; i < product.category.length; i++) {
            const cat = product.category[i];
            formData.set(`category[${i}]`, cat._id);
        }
        formData.set("gsmOrMicron", product.gsmOrMicron);
        formData.set("description", product.description);
        formData.set("eyelets", order.eyelets);
        formData.set("qty", order.qty);
        formData.set("uid", localStorage.getItem("_u"));
        formData.append("designFile", order.design);
        if (!product.sizeWithQty) {
            formData.set("rate", parseInt(order.qty) * parseInt(product.numericPrice));
            setState({
                ...state,
                order: { ...order, estimatedPrice: parseInt(order.qty) * parseInt(product.numericPrice) },
                alert: null,
            });
            const response = await AddItemToCart(formData);
            console.log(response.message);
            classManager("offcanvas-wishlist", "offcanvas-open");
            setOpenMenu(true);
            return displaySnackbar({ head: response.message[0], variant: "success", message: "Thank you!" });
        }
        if (Number(order.len) > 1 && Number(order.height) > 1) {
            formData.set("rate", getPrice(order.len, order.height, product.sizes) * Number(product.numericPrice) * Number(order.qty));
            formData.set("len", order.len);
            formData.set("height", order.height);
            setState({
                ...state,
                order: {
                    ...order,
                    estimatedPrice: getPrice(order.len, order.height, product.sizes) * Number(product.numericPrice) * Number(order.qty),
                    alert: null,
                },
            });
            const response = await AddItemToCart(formData);
            console.log(response.message);
            classManager("offcanvas-wishlist", "offcanvas-open");
            setOpenMenu(true);
            return displaySnackbar({ head: response.message[0], variant: "success", message: "Thank you!" });
        } else {
            return setState({ ...state, alert: "Please fill below fields carefully!" });
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
                                                src={process.env.REACT_APP_API_URL + "/" + imgObj.url}
                                                alt=""
                                            />
                                            <img
                                                role="presentation"
                                                alt=""
                                                src={process.env.REACT_APP_API_URL + "/" + imgObj.url}
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
                                            <img class="img-responsive m-auto" src={process.env.REACT_APP_API_URL + "/" + imgObject.url} alt="" />
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
                                        <div className="alert alert-danger" style={{ lineHeight: 1.7 }}>
                                            {state.alert}
                                        </div>
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
                                        <button
                                            class={state.order.design ? "btn-upload-design-success btn-upload-design" : "btn-upload-design"}
                                            onClick={() => {
                                                document.getElementById("upld").click();
                                            }}
                                            style={{ marginLeft: 0 }}
                                        >
                                            {state.order.design ? "Design Uploaded" : "Upload Design"}
                                            <BiCheck style={{ height: state.order.design ? 16 : 0, width: state.order.design ? 16 : 0, marginLeft: 6 }} />
                                        </button>
                                        <input
                                            type="file"
                                            onChange={(evt) => {
                                                if (!evt.target.files[0]) return setState({ ...state, alert: "Kindly, Upload Design with Instruction." });
                                                let arr = evt.target.files[0].name.split(".");
                                                let type = arr[arr.length - 1];
                                                if (type.toLowerCase() === AllowedExtension) {
                                                    setState({ ...state, order: { ...state.order, design: evt.target.files[0] } });
                                                } else {
                                                    setState({
                                                        ...state,
                                                        alert: "Please Upload CDR file with Instruction and Contact Information. Refer Help and Support for more Details.",
                                                    });
                                                }
                                            }}
                                            style={{ display: "none" }}
                                            id="upld"
                                        />
                                    </div>
                                </div>
                                {state.product.eyelets && (
                                    <div class="d-flex">
                                        <div class="d-flex">
                                            <input
                                                type="checkbox"
                                                checked={state.order.eyelets}
                                                onClick={() => setState((prev) => ({ ...state, order: { ...state.order, eyelets: !prev.order.eyelets } }))}
                                                class="slide-checkbox"
                                                name="slide1"
                                                id="slide1"
                                                required
                                            />
                                            <label for="slide1" class="checkbox mb20"></label>
                                            <span style={{ marginLeft: 65, marginTop: 5 }}>Eyelets</span>
                                        </div>
                                    </div>
                                )}
                                <p class="mb-0">{state.product.description}</p>
                                {!!state.order.estimatedPrice && (
                                    <div class=" alert alert-info pro-details-categories-info pro-details-same-style d-flex">
                                        <span>Estimated Price: </span>
                                        Rs {state.order.estimatedPrice}
                                    </div>
                                )}
                                <div class="pro-details-quality">
                                    <div class="pro-details-cart">
                                        <button class="add-cart" onClick={onAddItemToCart} style={{ marginLeft: 0 }}>
                                            {" "}
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                                <div class="pro-details-categories-info pro-details-same-style d-flex">
                                    <span>Categories: </span>
                                    <ul class="d-flex">
                                        {state.product.category.map((cat) => (
                                            <li className="btn-icon mr-18 px-2">
                                                <Link className="text-white" to={`/category/${cat._id}`}>
                                                    {cat.name}
                                                </Link>
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
