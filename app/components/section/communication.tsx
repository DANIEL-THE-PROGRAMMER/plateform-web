"use client";

import { Text } from "../styles";
import Image from "next/image";

export const Communication = () => {
  return (
    <>
      <div className="relative pt-[118px] pb-[86px]">
        <div className="container mx-auto flex">
          <div className="w-[60%]"></div>
          <div className="w-[40%]">
            <span className="bg-[#F1F6FF] tracking-[2.4px] py-[16px] px-[24px] rounded-[8px] font-plus">
              <Text>COMMUNICATION</Text>
            </span>
            <h2 className="text-[40px] font-bold leading-[40px] text-[#121D2F] mt-[24px]">
              Great communication means more time and profit
            </h2>
            <p className="mt-[48px] md:w-[548px]">
              Communication is key! That{"'"}s why we make it easy and
              hassle-free, so you don{"'"}t waster time on unnecessary
              interactions.
            </p>
            <p className="mt-[32px] md:w-[548px]">
              Keep track of your employees, drivers and vehicles, manage social
              media and stay in touch with your customers.
            </p>
          </div>
        </div>
        <div className="mt-[182px] relative">
          <div className="absolute left-0 w-full h-[3px] bottom-[21.6%] bg-[#0EB03B]"></div>
          <div className="relative container mx-auto px-[100px] flex justify-between">
            <div className="flex flex-col leading-[20px] items-center font-plus text-sm font-semibold">
              <span>communicate with your</span>
              <span>employees</span>
              <Image
                src="/assets/Group 16.png"
                alt=""
                width={48}
                height={48}
                sizes="100vw"
                className="mt-[24px]"
              />
            </div>
            <div className="flex flex-col leading-[20px] items-center font-plus text-sm font-semibold">
              <span>Track both drivers</span>
              <span>and orders</span>
              <Image
                src="/assets/Group 16.png"
                alt=""
                width={48}
                height={48}
                sizes="100vw"
                className="mt-[24px]"
              />
            </div>
            <div className="flex flex-col leading-[20px] items-center font-plus text-sm font-semibold">
              <span>Keep in touch with</span>
              <span>the customers</span>
              <Image
                src="/assets/Group 16.png"
                alt=""
                width={48}
                height={48}
                sizes="100vw"
                className="mt-[24px]"
              />
            </div>
            <div className="flex flex-col leading-[20px] items-center font-plus text-sm font-semibold">
              <span>Manage deliveries with</span>
              <span>your suppliers</span>
              <Image
                src="/assets/Group 16.png"
                alt=""
                width={48}
                height={48}
                sizes="100vw"
                className="mt-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
