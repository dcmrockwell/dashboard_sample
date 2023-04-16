import React, { useState, useEffect } from "react";
import { useAccount, useContractRead, useBalance } from "wagmi";
import contractAbi from "../data.json";
import dividendAbi from "../dividend.json";
import { ethers } from "ethers";

const Test = () => {
  // const { address } = useAccount();
  const address = "0x357472fd4596c4ae3ad7d84da82d1b23b48abb54";
  const dividendAddress = "0xfbAb1D829e36EFbD13642229EAe2964004f38C41";
  const contractAddress = "0xC001BBe2B87079294C63EcE98BdD0a88D761434e";

  //token balance for egc
  const balance = useBalance({
    address: address,
    token: contractAddress,
  });

  // console.log(balance.data?.formatted);

  //rewards accumulated
  const { data: rewards } = useContractRead({
    address: dividendAddress,
    abi: dividendAbi,
    functionName: "shares",
    args: [address],
  });

  console.log(rewards);

  //unpaid earnings
  const { data: unclaimedRewards } = useContractRead({
    address: dividendAddress,
    abi: dividendAbi,
    functionName: "getUnpaidEarnings",
    args: [address],
  });

  const totalRewards = rewards && rewards.totalRealised;

  return (
    <div className="w-full h-screen text-start items-start">
      <div className="">Account: {address}</div>

      <div className="">
        Wallet Balance: {Math.floor(balance.data?.formatted).toLocaleString()}
      </div>
      <div className="">
        Rewards:{" "}
        {totalRewards &&
          Math.floor(
            ethers.utils.formatEther(totalRewards?.toString())
          ).toLocaleString()}
      </div>
      <div className="">
        Unclaimed Rewards:{" "}
        {unclaimedRewards &&
          Math.floor(
            ethers.utils.formatEther(unclaimedRewards?.toString())
          ).toLocaleString()}
      </div>

      {/* <div className="m-auto mt-[30px] lg:flex flex-col space-y-[200px] p-6 max-w-[1400px]">
        <div className="sm:flex flex-col gap-10  lg:flex lg:flex-row justify-between items-center text-center">
          <div
            id="boxes"
            className="h-[150px] w-[250px] flex flex-col items-center justify-top-start pt-5 gap-10"
          >
            <img src={supplySvg} alt="" />
            <p className="font-semibold">Total Supply </p>
            <p className="font-semibold"> 000</p>
          </div>
          <div
            id="boxes"
            className="h-[150px] w-[250px] flex flex-col items-center justify-top-start pt-5 gap-10"
          >
            <p className="font-semibold">Burnt Supply </p>
            <p className="font-semibold"> 000</p>
          </div>
          <div
            id="boxes"
            className="h-[150px] w-[250px] flex flex-col items-center justify-top-start pt-5 gap-10"
          >
            <p className="font-semibold">
              Total Rewards Distributed to Holders{" "}
            </p>
            <p className="font-semibold"> 000</p>
          </div>
        </div>

        <div className="sm:flex flex-col gap-10  lg:flex lg:flex-row justify-between items-center text-center">
          <div
            id="boxes"
            className="h-[150px] w-[250px] flex flex-col items-center justify-top-start pt-5 gap-10"
          >
            <p className="font-semibold">Your Token balance </p>
            <p className="font-semibold"> 000</p>
          </div>

          <div
            id="boxes"
            className="h-[150px] w-[250px] flex flex-col items-center justify-top-start pt-5 gap-10"
          >
            <p className="font-semibold">Total Accumulated Rewards </p>
            <p className="font-semibold"> 000</p>
          </div>

          <div
            id="boxes"
            className="h-[150px] w-[250px] flex flex-col items-center justify-top-start pt-5 gap-10"
          >
            <p className="font-semibold">Your Pending Rewards </p>
            <p className="font-semibold"> 000</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Test;

// 274287.722
//274287721580006483898592
