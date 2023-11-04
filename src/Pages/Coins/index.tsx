import { Link } from "react-router-dom";
import { cryptobg, cryptobg1 } from "../../assets/images";

export const Coins = () => {
  return (
    <div>
      <img className="h-screen fixed w-full " src={cryptobg1} />
      <div className="pl-[50%] absolute">
        <p className=" pt-5 italic  text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200  text-5xl font-bold ">
          Cryprocurrency datas here
        </p>
        <div className="text-white pt-10 text-3xl font-extrabold pl-10">
          <Link
            target="_blank"
            to="https://youtu.be/Xp9_EnikoQs?si=bcupD1BK_KdxZf9v"
          >
            Beldex (bdx)
          </Link>{" "}
          <p>Ethereum (ETH)</p>
        </div>
      </div>
    </div>
  );
};
