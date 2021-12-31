import { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { AddToWalletRequest } from "Api/User";
const AddToWallet = ({ tabs, mSnackbar }) => {
    const [addToWallet, setAddToWallet] = useState({
        upi: false,
        netbanking: false,
        file: null,
        amount: 0,
    });

    const uploadRequest = async () => {
        try {
            if (Number(addToWallet.amount) < 1) return mSnackbar({ variant: "danger", head: "Kindly, enter amount.", message: "You've transferred." });
            const formData = new FormData();
            formData.set("uid", window.localStorage.getItem("_u"));
            formData.set("amount", addToWallet.amount);
            formData.append("receipt", addToWallet.file);
            const response = await AddToWalletRequest(formData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div class={tabs === "ADDTOWALLET" ? "tab-pane fade show active" : "tab-pane fade"} id="orders">
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="pp-l">Add to Wallet</h4>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="alert alert-danger">
                    <p className="pp-l">
                        Note: Please enter <span className="pp-b text-success">EXACT</span> amount as you have transfered and that will be added to wallet. If
                        you've already submitted wrong, we will reject and You can request for new addition with same receipt.
                    </p>
                </div>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="alert alert-danger">
                    <p className="pp-l">Note: Details given below should be confidential. In such case of disclose, we can suspend account.</p>
                </div>
            </div>
            <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="alert alert-info">
                    <p className="pp-l">You can transfer via scanning QR Code for GPAY/PhonePe/PayTm other options are Net Banking/IMPS/NEFT.</p>
                </div>
            </div>
            <div className="my-2 row  align-items-center">
                <div className="flex-1 default-form-box mr-18 col-sm-6">
                    <span>Step 1: Enter Amount in multiple of 500</span>
                    <input
                        onChange={(evt) => {
                            setAddToWallet({ ...addToWallet, amount: evt.target.value });
                        }}
                        placeholder="Amount"
                    />
                </div>
                <div className="flex-1 default-form-box mr-18 col-sm-6">
                    <span>Step 2: Upload Receipt of Transfer.</span>
                    <button
                        class={addToWallet.file ? "btn-upload-design-success btn-upload-design" : "btn-upload-design"}
                        onClick={() => {
                            document.getElementById("upldreceipt").click();
                        }}
                        style={{ marginLeft: 0 }}
                    >
                        {addToWallet.file ? "Design Uploaded" : "Upload Receipt/ScreenShot"}
                        <BiCheck style={{ height: addToWallet.file ? 16 : 0, width: addToWallet.file ? 16 : 0, marginLeft: 6 }} />
                    </button>
                    <input
                        type="file"
                        onChange={(evt) => {
                            if (!evt.target.files[0])
                                return mSnackbar({
                                    variant: false,
                                    head: "Kindly, Upload.",
                                    message: "Receipt/Screenshot of your Transfer.",
                                });
                            if (
                                evt.target.files[0].type === "image/png" ||
                                evt.target.files[0].type === "image/jpg" ||
                                evt.target.files[0].type === "image/jpeg"
                            )
                                return setAddToWallet({ ...addToWallet, file: evt.target.files[0] });
                            return mSnackbar({
                                variant: "danger",
                                head: "Kindly, upload Image File.",
                                message: "Jpeg, Jpg or Png",
                            });
                        }}
                        style={{ display: "none" }}
                        id="upldreceipt"
                    />
                </div>
                <div className="col-sm-6 col-lg-12 default-form-box">
                    <span>Final Step: Submit Here. We usally take 1-2 hours to respond.</span>
                    <button onClick={uploadRequest} class={"btn-upload-design-done btn-upload-design  mr-18"} style={{ marginLeft: 0 }}>
                        Done
                    </button>
                </div>
            </div>
            <div className="my-2 row  align-items-center">
                <span>Select Payment Method:</span>
                <div className="col-sm-4">
                    <button
                        class={"btn-upload-design-upi btn-upload-design  mr-18"}
                        onClick={() => {
                            setAddToWallet((prev) => ({ ...addToWallet, upi: !prev.upi, netbanking: prev.upi }));
                        }}
                        style={{ marginLeft: 0 }}
                    >
                        UPI
                        {addToWallet.upi ? (
                            <BsCaretDownFill style={{ height: 13, width: 13, marginLeft: 6 }} />
                        ) : (
                            <BsCaretUpFill style={{ height: 13, width: 13, marginLeft: 6 }} />
                        )}
                    </button>
                </div>
                <div className="col-sm-4">
                    <button
                        class={"btn-upload-design-netb btn-upload-design"}
                        onClick={() => {
                            setAddToWallet((prev) => ({ ...addToWallet, netbanking: !prev.netbanking, upi: prev.netbanking }));
                        }}
                        style={{ marginLeft: 0 }}
                    >
                        IMPS/NEFT/RTGS
                        {addToWallet.netbanking ? (
                            <BsCaretDownFill style={{ height: 13, width: 13, marginLeft: 6 }} />
                        ) : (
                            <BsCaretUpFill style={{ height: 13, width: 13, marginLeft: 6 }} />
                        )}
                    </button>
                </div>
            </div>
            {addToWallet.upi && (
                <div className="my-2 d-flex justify-content-between align-items-center col-sm-6">
                    <img src={require("../../assets/images/gpayqr.jpeg").default} className="img-responsive" style={{ borderRadius: 12 }} />
                </div>
            )}
            {addToWallet.netbanking && (
                <div className="my-2 d-flex flex-column justify-content-between">
                    <div>Bank Details:</div>
                    <div className="alert alert-success">
                        <p className="pp-l">
                            Name: Dharmprints.com
                            <br />
                            Bank Name:
                            <br />
                            Account Number: 1234512345
                            <br />
                            IFSC: KKBK00001234
                            <br />
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddToWallet;
