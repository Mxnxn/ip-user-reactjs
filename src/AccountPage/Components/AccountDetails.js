import { GetUserWallet } from "Api/User";
import React, { useEffect, useState } from "react";
import { CgMoreVertical } from "react-icons/cg";
import PageHeader from "Shared/Header/PageHeader";
import { getDate } from "Shared/Helpers";
import DelaySnackbar from "Shared/Notification/DelaySnackbar";
import Snackbar from "Shared/Notification/Snackbar";

const AccountDetails = (props) => {
    const [tabs, setTabs] = useState("DASHBOARD");

    const [state, setState] = useState({
        wallet: {},
        orders: {},
        user: {},
        fetched: false,
    });

    useEffect(() => {
        const fetch = async () => {
            const response = await GetUserWallet();
            console.log(response);
            setState({
                ...state,
                fetched: true,
                wallet: response.message.wallet,
                user: {
                    name: response.message.name,
                    city: response.message.city,
                    email: response.message.email,
                    companyName: response.message.companyName,
                    phone: response.message.phone,
                    pincode: response.message.pincode,
                    state: response.message.state,
                    street: response.message.street,
                },
            });
        };
        fetch();
    }, []);

    const [moreMenu, setMoreMenu] = useState(-1);

    const snackBar = DelaySnackbar();
    const mSnackBar = Snackbar();

    return (
        state.fetched && (
            <>
                <div class="account-dashboard pt-100px pb-100px">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-lg-3">
                                <div class="dashboard_tab_button" data-aos="fade-up" data-aos-delay="0">
                                    <ul role="tablist" class="nav flex-column dashboard-list">
                                        <li>
                                            <span
                                                onClick={() => {
                                                    setTabs("DASHBOARD");
                                                }}
                                                class={tabs === "DASHBOARD" ? "nav-link  active" : "nav-link "}
                                            >
                                                Dashboard
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                onClick={() => {
                                                    setTabs("WALLET");
                                                }}
                                                class={tabs === "WALLET" ? "nav-link  active" : "nav-link "}
                                            >
                                                Wallet
                                            </span>
                                        </li>
                                        <li>
                                            {" "}
                                            <span
                                                onClick={() => {
                                                    setTabs("ORDERS");
                                                }}
                                                class={tabs === "ORDERS" ? "nav-link  active" : "nav-link "}
                                            >
                                                Orders
                                            </span>
                                        </li>

                                        <li>
                                            <span
                                                onClick={() => {
                                                    setTabs("ACCOUNT");
                                                }}
                                                class={tabs === "ACCOUNT" ? "nav-link  active" : "nav-link "}
                                            >
                                                Account details
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                class={"nav-link "}
                                                onClick={() => {
                                                    localStorage.removeItem("_t");
                                                    localStorage.removeItem("_u");
                                                    localStorage.removeItem("_e");
                                                }}
                                            >
                                                Logout
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-9 col-lg-9">
                                <div class="tab-content dashboard_content" data-aos="fade-up" data-aos-delay="200">
                                    <div class={tabs === "DASHBOARD" ? "tab-pane fade show active" : "tab-pane fade"} id="dashboard">
                                        <h4>Dashboard </h4>
                                        <p>
                                            From your account dashboard. you can easily check &amp; view your <a href="#">recent orders</a>, manage your{" "}
                                            <a href="#">shipping and billing addresses</a> and <a href="#">Edit your password and account details.</a>
                                        </p>
                                    </div>
                                    <div class={tabs === "ORDERS" ? "tab-pane fade show active" : "tab-pane fade"} id="orders">
                                        <h4>Orders</h4>
                                        <div class="table_page table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Order</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>May 10, 2018</td>
                                                        <td>
                                                            <span class="success">Completed</span>
                                                        </td>
                                                        <td>$25.00 for 1 item </td>
                                                        <td>
                                                            <a href="cart.html" class="view">
                                                                view
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>May 10, 2018</td>
                                                        <td>Processing</td>
                                                        <td>$17.00 for 1 item </td>
                                                        <td>
                                                            <a href="cart.html" class="view">
                                                                view
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class={tabs === "WALLET" ? "tab-pane fade show active" : "tab-pane fade"} id="orders">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="pp-l">Wallet</h4>
                                            <h4 className="pp-b">{state.wallet.currentBalance} RS</h4>
                                        </div>
                                        <div className="my-2">
                                            <p className="pp-l">
                                                Note: Those with <span className="pp-b text-success">GREEN</span> has been added to wallet and{" "}
                                                <span className="pp-b text-danger">RED</span> have rejected by us.
                                            </p>
                                        </div>
                                        <div class="table_page table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="pp-b">Sr</th>
                                                        <th className="pp-b">Date</th>
                                                        <th className="pp-b">Amount</th>
                                                        <th className="pp-b">#</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {state.wallet.balanceHistory.map((txn, idx) => (
                                                        <tr>
                                                            <td className="pp-l">{idx + 1}</td>
                                                            <td className="pp-l">{getDate(txn.createdAt)}</td>
                                                            <td className="pp-b">
                                                                {txn.granted && <span class="text-success">{txn.balance} rs</span>}
                                                                {txn.reject && <span class="text-danger">{txn.balance} rs</span>}
                                                            </td>
                                                            <td>
                                                                <div class="block-verticalmore">
                                                                    <button
                                                                        className="btn-icon btn-sm"
                                                                        onClick={() => setMoreMenu((prev) => (prev === idx ? -1 : idx))}
                                                                    >
                                                                        <CgMoreVertical />
                                                                    </button>
                                                                    <ul
                                                                        onMouseLeave={() => setMoreMenu((prev) => (prev === idx ? -1 : idx))}
                                                                        id="header-users-btn"
                                                                        class={
                                                                            moreMenu === idx
                                                                                ? "dpdwn-menu dropdown-menu dropdown-menu-right show"
                                                                                : "dpdwn-menu dropdown-menu dropdown-menu-right "
                                                                        }
                                                                    >
                                                                        <li>
                                                                            <a
                                                                                class="dropdown-item pp-l fs-12"
                                                                                target="_blank"
                                                                                href={`${process.env.REACT_APP_API_URL}/${txn.file}`}
                                                                            >
                                                                                Uploaded Receipt
                                                                            </a>
                                                                        </li>
                                                                        {txn.reject && (
                                                                            <li>
                                                                                <a
                                                                                    class="dropdown-item pp-l fs-12"
                                                                                    onClick={() => snackBar({ message: txn.reason })}
                                                                                >
                                                                                    Reason
                                                                                </a>
                                                                            </li>
                                                                        )}
                                                                        <li>
                                                                            <a class="dropdown-item pp-l fs-12" href="/myaccount">
                                                                                Generate Query
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class={tabs === "ACCOUNT" ? "tab-pane fade show active" : "tab-pane fade"} id="account-details">
                                        <h3>Account details </h3>
                                        <div class="login">
                                            <div class="login_form_container">
                                                <div class="account_login_form">
                                                    <div class="default-form-box mb-20">
                                                        <label>Email</label>
                                                        <input class="disabled form-control" value={state.user.email} disabled type="text" name="email-name" />
                                                    </div>
                                                    <div class="default-form-box mb-20">
                                                        <label>Name</label>
                                                        <input value={state.user.name} type="text" name="first-name" />
                                                    </div>
                                                    <div class="default-form-box mb-20">
                                                        <label>Company Name</label>
                                                        <input value={state.user.companyName} type="text" name="last-name" />
                                                    </div>
                                                    <div class="default-form-box mb-20">
                                                        <label>Street</label>
                                                        <input value={state.user.street} type="text" name="email-name" />
                                                    </div>
                                                    <div class="default-form-box mb-20">
                                                        <label>Landmark</label>
                                                        <input value={state.user.landmark} type="text" name="email-name" />
                                                    </div>
                                                    <div class="default-form-box mb-20">
                                                        <label>Phone</label>
                                                        <input value={state.user.phone} type="text" name="email-name" />
                                                    </div>
                                                    <div class="default-form-box mb-20">
                                                        <label>State</label>
                                                        <input value={state.user.state} type="text" name="email-name" />
                                                    </div>
                                                    <div class="default-form-box mb-20">
                                                        <label>Pincode</label>
                                                        <input value={state.user.pincode} type="text" name="email-name" />
                                                    </div>

                                                    <div class="save_button mt-3">
                                                        <button
                                                            class="btn"
                                                            onClick={() =>
                                                                mSnackBar({ variant: "success", head: "Account Details", message: "Successfully Saved." })
                                                            }
                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default AccountDetails;
