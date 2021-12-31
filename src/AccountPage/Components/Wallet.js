import { CgMoreVertical } from "react-icons/cg";
import { getDate } from "Shared/Helpers";

const Wallet = ({ mSnackbar, tabs, wallet, moreMenu, setMoreMenu }) => {
    return (
        <div class={tabs === "WALLET" ? "tab-pane fade show active" : "tab-pane fade"} id="orders">
            <div className="d-flex justify-content-between">
                <h4 className="pp-l">Wallet</h4>
                <h4 className="pp-b">{wallet.currentBalance} RS</h4>
            </div>

            <div className="my-2 alert alert-info">
                <p className="pp-l">
                    Rows with <span className="pp-b text-success">GREEN</span> has been added to wallet already.
                    <br />
                    <span className="pp-b text-danger">RED</span> have rejected by us. <br />
                    <span class="pp-b text-pending">BLUE</span> is in pending, we will provide decision as soon as possible.
                </p>
            </div>
            <div class=" my-2 table_page">
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
                        {wallet.balanceHistory.map((txn, idx) => (
                            <tr>
                                <td className="pp-l">{idx + 1}</td>
                                <td className="pp-l">{getDate(txn.createdAt)}</td>
                                <td className="pp-b">
                                    {txn.granted && <span class="text-success">{txn.balance} rs</span>}
                                    {txn.reject && <span class="text-danger">{txn.balance} rs</span>}
                                    {!txn.reject && !txn.granted && <span class="text-pending">{txn.balance} rs</span>}
                                </td>
                                <td>
                                    <div class="block-verticalmore">
                                        <button className="btn-icon btn-sm" onClick={() => setMoreMenu((prev) => (prev === idx ? -1 : idx))}>
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
                                                <a class="dropdown-item pp-l fs-12" target="_blank" href={`${process.env.REACT_APP_API_URL}/${txn.file}`}>
                                                    Uploaded Receipt
                                                </a>
                                            </li>
                                            {txn.reject && (
                                                <li>
                                                    <a
                                                        class="dropdown-item pp-l fs-12"
                                                        onClick={() => mSnackbar({ variant: "danger", head: "Apologize", message: txn.reason })}
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
    );
};

export default Wallet;
