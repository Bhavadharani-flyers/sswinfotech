import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Navbar } from "../Components/Nav";
import { Coins } from "../Pages/Coins";
import Team from "../Pages/Home/Team";

export const Routerwrap = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav" element={<Navbar />} />
        <Route path="coins" element={<Coins />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};
