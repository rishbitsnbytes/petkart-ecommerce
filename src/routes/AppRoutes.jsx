import { Routes, Route } from "react-router-dom";

// Page imports
import {
  HomePage,
  ProductListingPage,
  ProductDetailsPage,
  WishlistPage,
  AuthPage,
  ProfilePage,
  CartPage,
  CheckoutPage,
  OrderSummaryPage,
} from "../pages";
import { ProtectedRoutes } from "../routes";
import { NotFoundPage } from "../pages";
import Mockman from "mockman-js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/sign-up" element={<AuthPage />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="" element={<ProfilePage />} />
          <Route path="addresses" element={<ProfilePage />} />
          <Route path="orders" element={<ProfilePage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-summary/:orderId" element={<OrderSummaryPage />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
