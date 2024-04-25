"use client";

import Image from "next/image";
import { ButtonBlue, Text, MangoBig, MangoMedium, MangoSmall } from "../styles";

export const SuccessStory = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-0 w-full left-0 h-full">
          <div className="relative mx-auto container h-full flex flex-col justify-between">
            <div className="flex justify-between px-[250px]">
              <div className="mt-[91px]">
                <MangoMedium />
              </div>
              <MangoBig />
            </div>
            <div className="flex justify-between container mx-auto  px-[100px] items-end">
              <div className="ml-[200px]">
                <MangoSmall />
              </div>
              <div className="mb-[119px]">
                <MangoSmall />
              </div>
            </div>
          </div>
        </div>
        <div className="relative container mx-auto py-[130px] px-[200px] z-10">
          <div className="flex flex-col items-center">
            <span className="bg-[#F1F6FF] tracking-[2.4px] py-[16px] px-[24px] rounded-[8px]">
              <Text>WE LOVE TO SEE YOU GROW</Text>
            </span>
            <h2 className="text-[40px] font-bold leading-[40px] text-[#121D2F] mt-[24px]">
              Success stories
            </h2>
            <p className="md:w-[548px] text-center mt-[48px]">
              <span>
                Plateform helps businesses thrive - see how we help our
              </span>
              our
              <span>
                clients manage their restaurant and grow their revenue!
              </span>
            </p>
          </div>
          <div className="mt-[40px]">
            <div className="shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] bg-white flex min-h-[560px] overflow-hidden rounded-[32px] ">
              <div className="w-[50%] relative">
                <Image
                  src="/assets/image 32.png"
                  alt=""
                  fill={true}
                  sizes="100vw"
                />
              </div>
              <div className="w-[50%] px-[48px] py-[57px] flex flex-col justify-between">
                <div className="flex flex-col gap-[64px] text-[18px] leading-[28px]">
                  <Image
                    src="/assets/Frame 1009.png"
                    alt=""
                    width={199}
                    height={49}
                  />
                  <div className="">
                    <p className="">
                      See how our friends at Avoburger used our AI tools to
                      optimize their routes, reach new customers and explode
                      their reach in just a year.
                    </p>
                    <p className="mt-[32px]">
                      An interview with Avoburger CEO Janet Smith.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[16px]">
                  <button className="inline-flex min-h-[48px] w-full items-center rounded-[8px] bg-[#F1F6FF] justify-center">
                    <Image
                      src="/assets/play.png"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <Text>Watch interview</Text>
                  </button>
                  <ButtonBlue $width="100%" $height="48px">
                    See all success stories
                  </ButtonBlue>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
