import { useCallback, useState } from "react";
import LandingPage from "./LandingPage/Components/LandingPage";
import Cart from "./Shared/Cart/Cart";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Search from "Shared/Search/Search";
import { BrowserRouter, Route } from "react-router-dom";
import AccountPage from "AccountPage/Components/AccountPage";
import ByCategory from "Category/components/ByCategory";
import Products from "Product/Products";

function App() {
    const [openMenu, setOpenMenu] = useState(false);

    useCallback(() => {
        document.getElementById("offcanvas-wishlist").classList.add("offcanvas-open");
    }, [openMenu]);

    return (
        <BrowserRouter>
            <div className="app " id="app-main" style={{ overflow: openMenu && "hidden" }}>
                <Header setOpenMenu={setOpenMenu} />
                <div class="offcanvas-overlay" style={{ display: openMenu && "block" }}></div>
                <Cart setOpenMenu={setOpenMenu} />
                <Route path="/" exact render={() => <LandingPage />} />
                <Route path="/all" exact render={() => <Products />} />
                <Route path="/category/:id" exact render={() => <ByCategory />} />
                <Route path="/myaccount" render={() => <AccountPage />} />

                <Footer />
                <Search />
            </div>
        </BrowserRouter>
    );
}

export default App;
