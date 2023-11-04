import { Link } from "react-router-dom";
import { Tab } from "../../Components/Button/Tab";
import Team from "./Team";
import Aboutus from "./Aboutus";
import { Blog } from "../../assets/icons";

export const Home = () => {
  return (
    <div className=" text-white ">
      <div className="flex flex-row items-center justify-end gap-2 pr-10 pt-5 ">
        {/* <img src={Bgimg} /> */}
        <p className="text-xl font-bold">Our Blogs</p>
        <Link to="blog" className="">
          <Blog />
        </Link>
      </div>
      <section className="flex flex-row gap-5 items-center pl-16">
        <div className="flex flex-col pl-5">
          <p className="text-9xl tracking-tighter pt-[10%] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-200">
            R&D
          </p>
          <p className="text-left mr-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dolorem beatae nesciunt tempora. Possimus, libero deserunt?
          </p>
          <div className="pt-2">
            {/* <button className="box-border h-10 w-24 bg-[#22d3ee] rounded-lg ">
              Get Started
            </button> */}
          </div>

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
      </section>
      <section className="pt-[15%]">
        <Team />
      </section>
      <section className="pt-[15%]">
        <Aboutus />
      </section>
    </div>
  );
};
