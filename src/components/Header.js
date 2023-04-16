import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { AiOutlineSwap, AiFillShop } from "react-icons/ai";
import { CiBitcoin } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="h-[100px] items-center pt-6 z-10 w-full bg-white drop-shadow-lg">
      <div className="flex flex-row justify-between px-6 items-center text-center m-auto  bg-yellow max-w-[1400px]">
        <h1 className="text-[25px]">
          LOGO<span>here.</span>
        </h1>

        <ul className="sm:hidden xl:flex flex-row space-x-10">
          <li>Dashboard</li>
          <li>Swap</li>
          <li>Staking</li>
          <li>Lottery</li>
          <li>NFT Marketplace</li>
        </ul>

        <div class="sm:hidden xl:block">
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>

        <div class="xl:hidden" onClick={handleClick}>
          {!nav ? <HiBars3 size="30px" /> : <HiOutlineXMark size="30px" />}
        </div>
      </div>

      <ul
        id="mobile-nav"
        className={
          !nav
            ? "hidden"
            : " h-[100vh] w-full m-auto p-10 space-y-10 absolute bg-white xl:hidden"
        }
      >
        <li className="text-[25px] border-b-2 flex items-center gap-2">
          <CiBitcoin />
          Dashboard
        </li>
        <li className="text-[25px] border-b-2 flex items-center gap-2">
          <AiOutlineSwap />
          Buy Token
        </li>
        <li className="text-[25px] border-b-2 flex items-center gap-2">
          <GrTechnology />
          Staking
        </li>
        <li className="text-[25px] border-b-2 flex items-center gap-2">
          <GiTakeMyMoney />
          Lottery
        </li>
        <li className="text-[25px] border-b-2 flex items-center gap-2">
          <AiFillShop />
          NFT Marketplace
        </li>

        <div class="xl:hidden justify-center flex">
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>
      </ul>
    </div>
  );
};

export default Header;
