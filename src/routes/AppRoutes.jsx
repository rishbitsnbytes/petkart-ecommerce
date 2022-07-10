import { Routes, Route } from "react-router-dom";

// Page imports
import {
  HomePage,
  ProductListingPage,
  ProductDetailsPage,
  WishlistPage,
} from "../pages";
import { NotFoundPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export { AppRoutes };
