import { Routes, Route } from "react-router-dom";

// Page imports
import { HomePage } from "../pages";
import { NotFoundPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export { AppRoutes };
