import { useState } from "react";
import { Home } from "../../../Pages/Home";
import About from "../../../Pages/About";
export const Tab = () => {
  const [tab, setTab] = useState("Home");

  return (
    <div className="relative z-10 h-screen text-white ">
      <main className="flex flex-grow justify-end pr-10 gap-5 pt-5">
        <button onClick={() => setTab("Home")}>Home</button>
        <button onClick={() => setTab("About")}>About</button>
      </main>

      {tab === "Home" && <Home />}
      {tab === "About" && <About />}
    </div>
  );
};
