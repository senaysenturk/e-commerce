import "./App.css";
import "./utilities.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard-layout/DashboardLayout";
import AuthLayout from "./layouts/auth-layout/AuthLayout";
import Home from "./pages/dashboard/home/Home";
import Women from "./pages/dashboard/women/Women";
import Man from "./pages/dashboard/man/Man";
import Children from "./pages/dashboard/children/Children";
import NewArrivals from "./pages/dashboard/new-arrivals/NewArrivals";
import BestSellers from "./pages/dashboard/best-sellers/BestSellers";
import Trending from "./pages/dashboard/trending/Trending";
import Sale from "./pages/dashboard/sale/Sale";
import ShoppingCart from "./pages/dashboard/shopping-cart/ShoppingCart";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/sign-up/SignUp";
import OrdersPage from "./components/shared/orders-page/OrdersPage";

import NotFound from "./pages/not-found/NotFound";
import Product from "./pages/dashboard/product/Product";

function App() {
  let id = 1;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="women" element={<Women />} />
            <Route path="man" element={<Man />} />
            <Route path="children" element={<Children />} />
            <Route path="new-arrivals" element={<NewArrivals />} />
            <Route path="best-sellers" element={<BestSellers />} />
            <Route path="trending" element={<Trending />} />
            <Route path="sale" element={<Sale />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />
<<<<<<< HEAD
            <Route path="orders-page" element={<OrdersPage/>} />
=======
            <Route path={`/product/${id}`} element={<Product />} />
>>>>>>> c8d2aea091ccc7dbe3d0c29934debc44183fcee8
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
