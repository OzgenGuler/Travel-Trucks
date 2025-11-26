import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import CamperDetailsPage from "./pages/CamperDetailsPage.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<CamperDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
