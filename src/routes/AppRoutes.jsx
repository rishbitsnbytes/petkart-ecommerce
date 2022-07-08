import { Routes, Route } from "react-router-dom";

// Page imports
import { HomePage, ProductListingPage, ProductDetailsPage } from "../pages";
import { NotFoundPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export { AppRoutes };
