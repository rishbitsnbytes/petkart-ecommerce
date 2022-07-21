import { Routes, Route } from "react-router-dom";

// Page imports
import {
  HomePage,
  ProductListingPage,
  ProductDetailsPage,
  WishlistPage,
  AuthPage,
  ProfilePage,
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
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
