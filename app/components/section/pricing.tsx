import Image from "next/image";
import { ButtonBlue } from "../styles";
import { Text } from "../styles";

export const Pricing = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-0 left-0 w-full h-full ">
          <div className="relative w-full h-full flex gap-[254px] items-start container mx-auto  md:px-[100px]">
            <Image src="/assets/$.png" alt="" width={175} height={315} />
            <Image src="/assets/$ (1).png" alt="" width={313} height={563} />
            <Image src="/assets/$.png" alt="" width={175} height={315} />
          </div>
        </div>
        <div className="flex container mx-auto font-plus flex-col items-center relative z-10 py-[114px]">
          <h3 className="text-[40px] leading-[48px] font-bold  #121D2F ">
            Pricing
          </h3>
          <span className="text-[18px] leading-[28px] mt-[32px]">
            Choose a plan that suits your business best!
          </span>
          <div className="mt-[48px] w-full gap-[32px] flex md:px-[100px]">
            <div className="flex basis-[352px] grow-[1] p-[40px] bg-white rounded-[24px] shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] flex-col justify-between">
              <div className="flex flex-col gap-[40px] ">
                <div className="flex justify-between">
                  <span className="font-medium text-[18px] leading-[32px]">
                    Single restaurant
                  </span>
                  <Image src="" alt="" />
                </div>
                <div className="">
                  <span className="text-[48px] tracking-[-0.48px] text-[#071223] leading-[50px] font-medium">
                    $10
                  </span>
                  <span className="text-sm font-medium leading-[20px] text-[#727C8F]">
                    /month
                  </span>
                </div>
                <div className="flex flex-col w-full gap-[24px]">
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    up to 20 drivers tracked
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    manage schelules, prices and offer
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    unlimited deliveries
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    Basic AI tools
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    Best choice for your restaurant install and start deliveries
                    today!
                  </li>
                </div>
              </div>
              <button className="bg-[#F1F6FF] w-full min-h-[48px] flex justify-center items-center  py-[16px] px-[24px] rounded-[8px] font-plus">
                <Text>Choose the plan</Text>
              </button>
            </div>
            <div className="flex flex-col min-h-[600px] basis-[352px] grow-[1] p-[40px] bg-white rounded-[24px] shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] justify-between">
              <div className="flex flex-col gap-[40px] ">
                <div className="flex justify-between">
                  <span className="font-medium text-[18px] leading-[32px]">
                    Small chain
                  </span>
                  <Image src="" alt="" />
                </div>
                <div className="">
                  <span className="text-[48px] tracking-[-0.48px] text-[#071223] leading-[50px] font-medium">
                    $50
                  </span>
                  <span className="text-sm font-medium leading-[20px] text-[#727C8F]">
                    /month
                  </span>
                </div>
                <div className="flex flex-col w-full gap-[24px]">
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    300 drivers, vehicles, licenses and more
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    Pro scheduling, price levels and multiple offers
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    unlimited deliveries and orders
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    Pro AI tools and smart bot
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    Grow and expand your business like never before!
                  </li>
                </div>
              </div>
              <ButtonBlue $height="48px" $width="100%">
                Choose this plan
              </ButtonBlue>
            </div>
            <div className="flex basis-[352px] grow-[1] p-[40px] bg-white rounded-[24px] shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] flex-col justify-between">
              <div className="flex flex-col gap-[40px] ">
                <div className="flex justify-between">
                  <span className="font-medium text-[18px] leading-[32px]">
                    Enterprise
                  </span>
                  <Image src="" alt="" />
                </div>
                <div className="">
                  <span className="text-[48px] tracking-[-0.48px] text-[#071223] leading-[50px] font-medium">
                    $75+
                  </span>
                  <span className="text-sm font-medium leading-[20px] text-[#727C8F]">
                    /month
                  </span>
                </div>
                <div className="flex flex-col w-full gap-[24px]">
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    unlimited drivers, licenses, vehicles and more
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    Pro+scheduling price levels and multiple offers
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    Unlimited deliveries and orders
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    Self-deployment for better security
                  </li>
                  <li className="list-disc text-[#364050] text-sm leading-[22px]">
                    A big business doesn’t have to be difficult to manage!
                  </li>
                </div>
              </div>
              <button className="bg-[#F1F6FF] w-full min-h-[48px] flex justify-center items-center  py-[16px] px-[24px] rounded-[8px] font-plus">
                <Text>Choose the plan</Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
