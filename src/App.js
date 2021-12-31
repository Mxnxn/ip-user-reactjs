import { useCallback, useState } from "react";
import LandingPage from "./LandingPage/Components/LandingPage";
import Cart from "./Shared/Cart/Cart";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Search from "Shared/Search/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountPage from "AccountPage/Components/AccountPage";
import ByCategory from "Category/components/ByCategory";
import Products from "Product/Products";
import NotificationProvider from "Shared/Notification/NotificationProvider";
import AuthRoute from "AccountPage/Components/AuthRoute";
import AccountDetails from "AccountPage/Components/AccountDetails";
import ProductDetail from "Product/ProductDetail";
import RestrictRoute from "AccountPage/Components/RestrictRoute";

function App() {
    const [openMenu, setOpenMenu] = useState(false);

    useCallback(() => {
        document.getElementById("offcanvas-wishlist").classList.add("offcanvas-open");
    }, [openMenu]);

    return (
        <BrowserRouter>
            <NotificationProvider>
                <div className="app " id="app-main" style={{ overflow: openMenu && "hidden" }}>
                    <Header setOpenMenu={setOpenMenu} />
                    <div class="offcanvas-overlay" style={{ display: openMenu && "block" }}></div>
                    <Cart setOpenMenu={setOpenMenu} openMenu={openMenu} />
                    <Switch>
                        <Route path="/" exact render={() => <LandingPage />} />
                        <Route path="/all" exact render={() => <Products />} />
                        <Route path="/category/:id" exact render={() => <ByCategory />} />
                        <RestrictRoute path="/myaccount" exact component={AccountPage} />
                        <Route path="/product/:id" exact render={() => <ProductDetail setOpenMenu={setOpenMenu} />} />
                        <AuthRoute component={AccountDetails} path="/myaccount/details" exact />
                    </Switch>
                    <Footer />
                    <Search />
                </div>
            </NotificationProvider>
        </BrowserRouter>
    );
}

export default App;
