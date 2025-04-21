import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BarberShopList from "../pages/BarberShopList";
import BarberShopProfile from "../pages/BarberShopProfile";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login.";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/barbearias" element={<BarberShopList />} />
            <Route path="/barbearia/:id" element={<BarberShopProfile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
