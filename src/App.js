import { useCallback, useState } from "react";
import LandingPage from "./LandingPage/Components/LandingPage";
import Cart from "./Shared/Cart/Cart";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Search from "Shared/Search/Search";
import { BrowserRouter, Route } from "react-router-dom";
import AccountPage from "AccountPage/Components/AccountPage";

function App() {
    const [openMenu, setOpenMenu] = useState(false);

    useCallback(() => {
        document.getElementById("offcanvas-wishlist").classList.add("offcanvas-open");
    }, [openMenu]);

    return (
        <div className="app " id="app-main" style={{ overflow: openMenu && "hidden" }}>
            <Header setOpenMenu={setOpenMenu} />
            <div class="offcanvas-overlay" style={{ display: openMenu && "block" }}></div>
            <Cart setOpenMenu={setOpenMenu} />
            <BrowserRouter>
                <Route path="/" exact render={() => <LandingPage />} />
                <Route path="/myaccount" render={() => <AccountPage />} />
            </BrowserRouter>

            <Footer />
            <Search />
        </div>
    );
}

export default App;
