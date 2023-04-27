import React, { useState } from "react";
import { FaCoins } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useAccount, useContractRead, useBalance } from "wagmi";
import contractAbi from "../contract.json";

import { ethers } from "ethers";

const Home = () => {
  const { address } = useAccount();
  // const address = "0xEE9A4eCF08e569bcCf805Bff0f9fFB47E1650c38";
  const contractAddress = "0x98564e70c7fcc6d947ffe6d9efed5ba68b306f2e";
  const deadWallet = "0x000000000000000000000000000000000000dead";

  //Checks Balance // //Balance // //Balance //
  const balance = useBalance({
    address: address,
    token: contractAddress,
  });

  const userBalance = balance.data ? (
    Math.floor(balance.data?.formatted).toLocaleString()
  ) : (
    <span style={{ color: "gray", fontSize: "12px" }}>
      Connect your Wallet..
    </span>
  );

  const { data: deadBalance } = useBalance({
    address: deadWallet,
    token: contractAddress,
  });

  const deadSupply =
    deadBalance && ethers.utils.formatUnits(deadBalance?.value);
  const deadWalletSupply = parseInt(deadSupply).toLocaleString();

  //Checks Balance // //Balance // //Balance //

  //Checks Supply // //Supply // //Supply //
  const { data: tokenInfo } = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: "totalSupply",
  });

  const infoSupply = tokenInfo && ethers.utils.formatUnits(tokenInfo, 18);
  const totalSupply = parseInt(infoSupply).toLocaleString();

  const { data: dividendsInfo } = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: "getTotalDividendsDistributed",
  });

  const dividendsDistributed =
    dividendsInfo && ethers.utils.formatEther(dividendsInfo);
  const usdtRewards = parseInt(dividendsDistributed).toLocaleString();
  //Checks Supply // //Supply // //Supply //

  const { data: earningsInfo } = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: "getAccountDividendsInfo",
    args: [address],
  });

  const userUsdt = earningsInfo ? (
    Number(ethers.utils.formatEther(earningsInfo[4])).toFixed(2)
  ) : (
    <span style={{ color: "gray", fontSize: "12px" }}>
      Connect your Wallet..
    </span>
  );

  const { data: withdrawable } = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: "withdrawableDividendOf",
    args: [address],
  });

  const pendingRewards = withdrawable ? (
    ethers.utils.formatEther(withdrawable)
  ) : (
    <span style={{ color: "gray", fontSize: "12px" }}>
      Connect your Wallet..
    </span>
  );

  return (
    <div className="w-full">
      <div className="sm:gap-10 sm:pb-16 grid place-content-center gap-20 m-auto mt-[50px] max-w-[1024px] xl:mt-[100px]">
        <div className="flex flex-wrap justify-center gap-5 xl:gap-15">
          <div
            id="border"
            className="flex flex-col justify-center text-center items-center p-5 gap-10 "
          >
            <div className="text-white flex flex-row  gap-3">
              <FaCoins size="25px" />
              <p className="">Ignore Fud Supply</p>
            </div>
            <p className="text-center text-[20px] text-[#f89e52]">
              {totalSupply}
            </p>
          </div>
          <div
            id="border"
            className="flex flex-col justify-start items-center p-5 gap-10 "
          >
            <div className="text-white flex flex-row text-center gap-3">
              <BsFire size="25px" />
              <p className="">Burnt Tokens</p>
            </div>
            <p className="text-start text-[20px] text-[#f89e52]">
              {deadWalletSupply}
            </p>
          </div>
          <div
            id="border"
            className="flex flex-col justify-start items-center p-5 gap-10 "
          >
            <div className="text-white flex flex-row  gap-3">
              <GiReceiveMoney size="25px" />
              <p className="">Total USDT Distributed</p>
            </div>
            <p className="text-center text-[20px] text-[#f89e52]">
              {usdtRewards}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 xl:gap-15">
          <div
            id="border"
            className="flex flex-col justify-start items-center p-5 gap-10 "
          >
            <div className="text-white flex flex-row text-center gap-3">
              <TbMoneybag size="25px" />
              <p className="">Your Holdings</p>
            </div>
            <p className="text-start text-[20px] text-[#f89e52]">
              {userBalance}
            </p>
          </div>
          <div
            id="border"
            className="flex flex-col justify-start items-center p-5 gap-10 "
          >
            <div className="text-white flex flex-row  gap-3">
              <RiMoneyDollarCircleLine size="25px" />
              <p className="">Your USDT so far!</p>
            </div>
            <p className="text-center text-[20px] text-[#f89e52]">{userUsdt}</p>
          </div>
          <div
            id="border"
            className="flex flex-col justify-start items-center p-5 gap-10 "
          >
            <div className="text-white flex flex-row  gap-3">
              <GiTakeMyMoney size="25px" />
              <p className="">Pending Rewards</p>
            </div>
            <p className="text-centertext-[20px] text-[#f89e52]">
              {pendingRewards}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
