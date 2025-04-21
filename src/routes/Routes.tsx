import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BarberShopList from "../pages/BarberShopList";
import BarberShopProfile from "../pages/BarberShopProfile";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login.";
import Registro from "../pages/Registro";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Registro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/barbearias" element={<BarberShopList />} />
            <Route path="/barbearia/:id" element={<BarberShopProfile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
