import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="h-[80px] w-full items-center border-b-[1px] border-blue-900">
      <div className="flex flex-row p-6 justify-between items-center m-auto max-w-[2440px]">
        <div className="flex flex-row gap-10  ">
          <h1>
            LOGO<span>here.</span>
          </h1>

          <ul className="sm:hidden lg:flex flex-row gap-5">
            <li>Home</li>
            <li>Swap</li>
            <li>Staking</li>
            <li>Lottery</li>
          </ul>
        </div>

        <div className="sm:hidden lg:flex flex-row items-center gap-5">
          <div className="sm:hidden lg:flex flex-row items-center gap-2">
            <RiMoneyDollarCircleFill size="30px" />
            <p>00.00</p>
          </div>
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>

        <div className="lg:hidden" onClick={handleClick}>
          {!nav ? (
            <HiOutlineBars3 size="30px" />
          ) : (
            <HiOutlineXMark size="30px" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "h-[100vh] w-full m-auto space-y-10 px-[80px] text-center  lg:hidden pt-[40px]"
        }
      >
        <li className="text-[30px] border-b-2 border-blue-900 flex justify-center   items-center">
          Home
        </li>
        <li className="text-[30px] border-b-2 border-blue-900 flex justify-center   items-center">
          Swap
        </li>
        <li className="text-[30px] border-b-2 border-blue-900 ">Staking</li>
        <li className="text-[30px] border-b-2 border-blue-900 ">Lottery</li>
        <div class="xl:hidden justify-center flex">
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
