import { Link } from "react-router-dom";
import { Tab } from "../../Components/Button/Tab";

export const Home = () => {
  return (
    <div className=" text-white ">
      <div className="h-screen fixed top-0 opacity-80 ">
        {/* <img src={Bgimg} /> */}
        <div className="flex flex-row"></div>
      </div>
      <main className="flex flex-row gap-5 items-center absolute ">
        <div className="flex flex-col pl-5">
          <p className="text-9xl tracking-tighter pt-[30%] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-200">
            R&D
          </p>

          <p className="text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <p className="text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing vuijjk
          </p>
          <p className="text-left ">Lorem ipsum dolor ipsum dolor</p>
          <p className="text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <button className="box-border h-10 w-24 bg-[#22d3ee] rounded-lg">
            Get Started
          </button>
          {/* <div className="pt-8 gap-6 flex flex-row ">
            <Link
              target="_blank"
              to="coins"
              className=" hover:scale-125 box-border drop-shadow-lg shadow-lg shadow-white h-20 w-20 bg-[#fca5a5] text-blue-950 text-xl font-bold rounded-lg flex justify-center items-center"
            >
              Coins
            </Link>
            <div className="hover:scale-125 box-border drop-shadow-lg shadow-lg shadow-white h-20 w-20 bg-[#fca5a5] text-blue-950 text-xl font-bold rounded-lg flex justify-center items-center">
              News
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};
