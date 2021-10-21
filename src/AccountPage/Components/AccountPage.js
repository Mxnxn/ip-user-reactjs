import { LoginUser, RegisterUser } from "Api/User";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "Shared/Notification/Snackbar";
import { useHistory } from "react-router";
const { default: PageHeader } = require("Shared/Header/PageHeader");

const Login = ({ active }) => {
    const history = useHistory();
    const [state, setState] = useState({
        value: {
            email: "",
            password: "",
        },
        error: null,
    });

    const displaySnackbar = Snackbar();

    const onSubmitHandler = async () => {
        try {
            const formData = new FormData();
            Object.keys(state.value).forEach((key) => {
                formData.set(key, state.value[key]);
            });
            const response = await LoginUser(formData);
            window.localStorage.setItem("_t", response.message.token);
            window.localStorage.setItem("_e", response.message.email);
            window.localStorage.setItem("_u", response.message.uid);
            displaySnackbar({ head: "Kindly,", variant: "success", message: response.message.message });
            return history.push("/myaccount/details");
        } catch (error) {
            return setState({ ...state, error: error.message[0] });
        }
    };

    const valueHandler = (evt) => {
        setState({ ...state, value: { ...state.value, [evt.target.name]: evt.target.value } });
    };

    return (
        <div id="lg1" class={active ? "tab-pane active" : "tab-pane "}>
            <div class="login-form-container">
                <div class="login-register-form">
                    {state.error && <div class="alert alert-danger">{state.error}</div>}
                    <input type="email" value={state.value.email} onChange={valueHandler} name="email" placeholder="Username" />
                    <input type="password" value={state.value.password} onChange={valueHandler} name="password" placeholder="Password" />
                    <div class="button-box">
                        <div class="login-toggle-btn">
                            <button onClick={onSubmitHandler}>
                                <span>Login</span>
                            </button>
                            <Link to="/forgotPassword">Forgot Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Register = ({ active }) => {
    const displaySnackbar = Snackbar();

    const [state, setState] = useState({
        value: {
            email: "",
            password: "",
            street: "",
            city: "",
            state: "",
            pincode: "",
            companyName: "",
            phone: "",
            landmark: "",
        },
        cpassword: "",
        file: null,
        error: null,
    });

    const valueHandler = (evt) => {
        setState({ ...state, value: { ...state.value, [evt.target.name]: evt.target.value } });
    };

    const verifyPassword = (evt) => {
        if (evt.target.value === state.value.password) {
            return setState({ ...state, cpassword: evt.target.value, error: null });
        }

        if (evt.target.value.length > 5) {
            setState({ ...state, cpassword: evt.target.value });
            return displaySnackbar({ head: "Kindly, Check", variant: "danger", message: "Your passwords aren't matching" });
        }
    };

    const onSubmitHandler = async () => {
        try {
            const formData = new FormData();
            Object.keys(state.value).forEach((key) => {
                formData.set(key, state.value[key]);
            });
            formData.append("businessProof", state.file);
            const response = await RegisterUser(formData);
            return displaySnackbar({ head: "Kindly, Check", variant: "danger", message: response.message[0] });
        } catch (error) {
            return displaySnackbar({ head: "Kindly, Check", variant: "danger", message: error.message[0] });
        }
    };

    return (
        <div id="lg2" class={!active ? "tab-pane active" : "tab-pane "}>
            <div class="login-form-container">
                <div class="login-register-form">
                    {state.error && <div class="alert alert-danger">{state.error}</div>}
                    <input onChange={valueHandler} type="email" name="email" placeholder="Email" />
                    <input onChange={valueHandler} type="password" name="password" placeholder="Password" />
                    <input type="password" onChange={verifyPassword} name="cpassword" placeholder="Confirm Password" />
                    <input onChange={valueHandler} type="text" name="name" placeholder="Name" />
                    <input onChange={valueHandler} type="text" name="street" placeholder="Street" />
                    <input onChange={valueHandler} type="text" name="landmark" placeholder="Landmark" />
                    <input onChange={valueHandler} type="text" name="city" placeholder="City" />
                    <input onChange={valueHandler} type="text" name="state" placeholder="State" />
                    <input onChange={valueHandler} type="number" name="pincode" placeholder="Pincode" />
                    <input onChange={valueHandler} type="text" name="phone" placeholder="Phone" />
                    <input onChange={valueHandler} type="text" name="companyName" placeholder="Firm/Business Name" />
                    <label for="formFileLg" class="form-label">
                        Upload Proof
                    </label>
                    <div class="button-box d-flex align-items-center justify-content-between">
                        <button
                            onClick={() => document.getElementById("inpt1").click()}
                            class="btn btn-outline-dark current-btn"
                            name=""
                            placeholder="Business Proof"
                        >
                            Choose File
                        </button>
                        <input
                            id={"inpt1"}
                            onChange={(evt) => {
                                if (evt.target.files[0].type === "image/jpg" || evt.target.files[0].type === "image/jpeg") {
                                    state.file = evt.target.files[0];
                                    state.error = false;
                                    setState({ ...state });
                                } else {
                                    state.file = null;
                                    state.error = "Please upload in valid Format";
                                    setState({ ...state });
                                }
                            }}
                            type="file"
                            style={{ display: "none" }}
                        />
                        <div className="ml-2">{state.file && state.file.name}</div>
                    </div>
                    <div class="button-box mt-3">
                        <button onClick={onSubmitHandler}>
                            <span>Register</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AccountPage = (props) => {
    const query = window.location.search.substr(1).split("=")[0];
    const [tabs, setTabs] = useState(query === "login" ? true : false);
    useEffect(() => {
        document.body.scrollTo = 300;
        document.documentElement.scrollTop = 300;
    }, [tabs]);
    useEffect(() => {
        document.body.scrollTo = 300;
        document.documentElement.scrollTop = 300;
    }, []);
    return (
        <>
            <PageHeader />
            <div class="login-register-area pt-100px pb-100px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                            <div class="login-register-wrapper">
                                <div class="login-register-tab-list nav">
                                    <a
                                        class={tabs && "active"}
                                        onClick={() => {
                                            setTabs(true);
                                        }}
                                        data-bs-toggle="tab"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <h4>login</h4>
                                    </a>
                                    <a
                                        class={!tabs && "active"}
                                        onClick={() => {
                                            setTabs(false);
                                        }}
                                        data-bs-toggle="tab"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <h4>register</h4>
                                    </a>
                                </div>
                                <div class="tab-content">
                                    <Login active={tabs} />
                                    <Register active={tabs} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountPage;
