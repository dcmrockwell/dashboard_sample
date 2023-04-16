import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { HiBars3CenterLeft, HiBarsArrowUp } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="h-[80px] w-full pt-6 items-center ">
      <div className="flex flex-row px-6 justify-between items-center m-auto max-w-[2440px]">
        <div className="">
          <h1>LOGOhere.</h1>

          <ul className="sm:hidden">
            <li>Home</li>
            <li>Swap</li>
            <li>Staking</li>
            <li>Lottery</li>
          </ul>
        </div>

        <div className="sm:hidden">
          <p>Logo</p>
          <p>00.00</p>
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>
        <div className="lg:hidden">
          <HiBars3CenterLeft color="white" size="30px" />
        </div>
      </div>

      <ul className="h-[100vh] w-full m-auto space-y-10 text-center absolute bg-red-300">
        <li>Home</li>
        <li>Swap</li>
        <li>Staking</li>
        <li>Lottery</li>
      </ul>
    </div>
  );
};

export default Navbar;
