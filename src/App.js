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

function App() {
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
            <Route path="orders-page" element={<OrdersPage/>} />
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
