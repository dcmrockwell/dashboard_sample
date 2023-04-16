import React, { useState } from "react";
import { FaCoins } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row flex-auto p-6 justify-between items-center m-auto max-w-[1024px]">
        <div
          className="flex flex-col justify-center items-center gap-10"
          id="border"
        >
          <div className="text-white flex flex-row items-center gap-3">
            <FaCoins size="25px" />
            <p className="">Total Supply</p>
          </div>
          <p className="">0.000 </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
