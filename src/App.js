import "./App.css";
import "./utilities.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard-layout/DashboardLayout";
import AuthLayout from "./layouts/auth-layout/AuthLayout";
import Home from "./pages/dashboard/home/Home";
import NewArrivals from "./pages/dashboard/new-arrivals/NewArrivals";
import Shopping from "./pages/dashboard/shopping/Shopping";
import Cart from "./pages/dashboard/shopping/cart/Cart";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/sign-up/SignUp";
import NotFound from "./pages/not-found/NotFound";
import Checkout from "./pages/dashboard/shopping/checkout/Checkout";
import Favorites from "./pages/dashboard/favorites/Favorites";
import UserProfile from "./pages/user-profile/UserProfile";
import Products from "./pages/dashboard/product/Products";
import CardDetail from "./components/shared/card/CardDetail";
import AddProduct from "./pages/admin/add-product/AddProduct";
import AdminLayout from "./layouts/admin-layout/AdminLayout";
import OrderTracking from "./components/app/shopping-cart/order-tracking/OrderTracking";
import AllProducts from "./pages/admin/all-product/AllProducts";
import AllOrders from "./pages/admin/all-orders/AllOrders";
import AllUsers from "./pages/admin/all-users/AllUsers";
import Search from "./pages/dashboard/search/Search";
import ViewMore from "./pages/dashboard/view-more/ViewMore";
import AboutUs from "./components/shared/about-us/AboutUs";
import ContactUs from "./components/shared/contact/ContactUs";
import AllMessages from "./pages/admin/all-messages/AllMessages";
import OrdersDetail from "./components/app/shopping-cart/order-tracking/OrdersDetail";
import BasketSummary from "./components/app/shopping-cart/basket-summary/BasketSummary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="new-arrivals" element={<NewArrivals />} />
            <Route path="order-tracking" element={<OrderTracking />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="orders-detail" element={<OrdersDetail />} />
            <Route path="basket-summary" element={<BasketSummary />} />
            <Route path="contact" element={<ContactUs></ContactUs>} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="shopping" element={<Shopping />}>
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="products" element={<Products />}>
              <Route path={`product/:productId`} element={<CardDetail />} />
              <Route path="search" element={<Search />} />
            </Route>

            <Route path="favorites" element={<Favorites />} />
            <Route path="view-more" element={<ViewMore />} />
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="add-product" element={<AddProduct></AddProduct>} />
            <Route path="all-products" element={<AllProducts />}></Route>
            <Route path="all-orders" element={<AllOrders />}></Route>
            <Route path="all-users" element={<AllUsers />}></Route>
            <Route path="all-messages" element={<AllMessages />}></Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
