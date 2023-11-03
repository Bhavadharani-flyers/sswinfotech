import React from "react";

const Team = () => {
  return (
    <div>
      <p className="text-white flex justify-center text-3xl  font-bold">
        Our Team
      </p>
      <div className=" pt-10 flex flex-row gap-8 justify-center ">
        <div className="box-border pb-5 items-end h-52 w-[15%] bg-[#a8a29e] drop-shadow-2xl shadow-white shadow-lg rounded-xl flex  justify-center">
          Kishore
        </div>
        <div className="box-border pb-5 items-end h-52 w-[15%] bg-[#a8a29e] drop-shadow-2xl shadow-white shadow-lg rounded-xl flex  justify-center">
          Bhavadharani
        </div>
        <div className="box-border pb-5 items-end h-52 w-[15%] bg-[#a8a29e] drop-shadow-2xl shadow-white shadow-lg rounded-xl flex  justify-center">
          Jothy
        </div>
        <div className="box-border pb-5 items-end h-52 w-[15%] bg-[#a8a29e] drop-shadow-2xl shadow-white shadow-lg rounded-xl flex  justify-center">
          Suhail
        </div>
      </div>
    </div>
  );
};

export default Team;
