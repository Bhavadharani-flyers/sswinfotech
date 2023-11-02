import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Navbar } from "../Components/Nav";
import { Coins } from "../Pages/Coins";

export const Routerwrap = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav" element={<Navbar />} />
        <Route path="coins" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};
