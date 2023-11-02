import { Tab } from "../../Components/Button/Tab";
import { Bgimg } from "../../assets";

export const Home = () => {
  return (
    <div className=" text-white ">
      <div className="h-screen fixed top-0 opacity-80 ">
        <img src={Bgimg} />
      </div>
      <main className="flex flex-row gap-5 items-center absolute ">
        <div className="flex flex-col pl-5">
          <p className="text-4xl italic pt-6">Gain your knowledge </p>
          <p className="text-4xl italic">With our ssw's content</p>
          <div className="pt-8 gap-6 flex flex-row ">
            <div className=" hover:scale-125 box-border drop-shadow-lg shadow-lg shadow-white h-20 w-20 bg-[#fca5a5] text-blue-950 text-xl font-bold rounded-lg flex justify-center items-center">
              Coins
            </div>
            <div className="hover:scale-125 box-border drop-shadow-lg shadow-lg shadow-white h-20 w-20 bg-[#fca5a5] text-blue-950 text-xl font-bold rounded-lg flex justify-center items-center">
              News
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
