import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import CamperDetails from "../pages/CamperDetails";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/campers/:id" element={<CamperDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
