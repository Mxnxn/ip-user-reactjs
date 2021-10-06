import { useState } from "react";

const { default: PageHeader } = require("Shared/Header/PageHeader");

const Login = ({ active }) => {
    return (
        <div id="lg1" class={active ? "tab-pane active" : "tab-pane "}>
            <div class="login-form-container">
                <div class="login-register-form">
                    <form action="#" method="post">
                        <input type="text" name="user-name" placeholder="Username" />
                        <input type="password" name="user-password" placeholder="Password" />
                        <div class="button-box">
                            <div class="login-toggle-btn">
                                <input type="checkbox" />
                                <a class="flote-none" href="javascript:void(0)">
                                    Remember me
                                </a>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit">
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const Register = ({ active }) => {

    const [state, setState] = useState({
        value:{
        email:"",
        password:"",
        street:'',
        city:"",
        state:'',
        pincode:"",
        companyName:"",
        phone:"",
        landmark:""
        },
        cpassword:"",
        file:null,
        error:null
    });

    const valueHandler = (evt) => {
        setState({...state,value:{...state.value,[evt.target.name]:evt.target.value}});
    }

    const verifyPassword = (evt) => {
        if(evt.target.value === state.value.password)
            return setState({...state,value:{...state.value,[evt.target.name]:evt.target.value}});
        return setState({...state,error:"Passwords aren't Matching!"})
    }

    return (
        <div id="lg2" class={!active ? "tab-pane active" : "tab-pane "}>
            <div class="login-form-container">
                <div class="login-register-form">
                        {state.error && <div class="alert alert-danger">{state.error}</div>}
                        <input onClick={valueHandler} type="email" name="email" placeholder="Email" />
                        <input onClick={valueHandler} type="password" name="password" placeholder="Password" />
                        <input  type="password" name="cpassword" placeholder="Confirm Password" />
                        <input onClick={valueHandler} type="text" name="name" placeholder="Name" />
                        <input onClick={valueHandler} type="text" name="street" placeholder="Street" />
                        <input onClick={valueHandler} type="text" name="landmark" placeholder="Landmark" />
                        <input onClick={valueHandler} type="text" name="city" placeholder="City" />
                        <input onClick={valueHandler} type="text" name="state" placeholder="State" />
                        <input onClick={valueHandler} type="number" name="pincode" placeholder="Pincode" />
                        <input onClick={valueHandler} type="text" name="phone" placeholder="Phone" />
                        <input onClick={valueHandler} type="text" name="companyName" placeholder="Firm/Business Name" />
                        <label for="formFileLg" class="form-label">Upload Proof</label>
                        <div class="button-box d-flex align-items-center justify-content-between">
                            <button onClick={() => document.getElementById('inpt1').click()} class="btn btn-outline-dark current-btn" name="" placeholder="Business Proof">Choose File</button>
                            <input id={"inpt1"} onChange={(evt) => {
                                if (evt.target.files[0].type === "image/jpg" || evt.target.files[0].type === "image/jpeg") {
                                                                    state.file = evt.target.files[0];
                                                                    state.error = false;
                                                                    setState({...state});
                                                                } else {
                                                                    state.file = null;
                                                                    state.error = "Please upload in valid Format";
                                                                    setState({...state});
                                                                }
                            }} type="file" style={{display:"none"}}/> 
                            <div className="ml-2">{state.file && state.file.name}</div>                     
                        </div>
                        <div class="button-box mt-3">
                            <button type="submit">
                                <span>Register</span>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

const AccountPage = (props) => {
    const [tabs, setTabs] = useState(false);
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
