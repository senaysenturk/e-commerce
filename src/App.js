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
import { ProductProvider } from "./contexts/product/ProductContext";

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
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="shopping" element={<Shopping />}>
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="products" element={<Products />}>
              <Route path={`product/${id}`} element={<CardDetail />} />
            </Route>

            <Route path="favorites" element={<Favorites />} />
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route
              path="add-product"
              element={
                <ProductProvider>
                  <AddProduct></AddProduct>
                </ProductProvider>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
