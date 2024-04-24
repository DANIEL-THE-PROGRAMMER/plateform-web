import { Text } from "../styles";
import Image from "next/image";


export const Feature = () => {
    return (
      <>
        <div className="relative mt-[76px] pb-[107px]">
          <div className="py-[108px] container mx-auto flex items-center">
            <div className="w-[40%]">
              <span className="bg-[#F1F6FF] tracking-[2.4px] py-[16px] px-[24px] rounded-[8px] font-plus">
                <Text>MANAGEMENT</Text>
              </span>
              <h2 className="text-[40px] font-bold leading-[40px] text-[#121D2F] mt-[24px]">
                Focus on the essentials we{"'"}ll do the rest
              </h2>
              <p className="mt-[48px] md:w-[548px]">
                Plateform takes of your orders and employees, let you manage
                sales, marketing campaigns - easy and all in one place.
              </p>
              <p className="mt-[32px] md:w-[548px]">
                With our Ai based optimization tool, the system will suggest
                small, easy to implement changes to make your business run
                better and smoother.
              </p>
            </div>
            <div className="w-[60%] pr-[60px] pt-[62px] flex justify-end">
              <div className="relative">
                <div className="relative w-[436px] h-[326px]">
                  <Image
                    src="/assets/Frame 927.png"
                    alt=""
                    sizes="100vw"
                    fill={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-[160px] flex justify-between">
            <div className="flex items-center gap-[16px]">
              <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
                <Image
                  src="/assets/chart-square.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-semibold leading-[20px] text-sm flex flex-col">
                <span className="inline-block">All sale statistics</span>
                <span className="inline-block">in one place</span>
              </span>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
                <Image src="/assets/menu.png" alt="" width={32} height={32} />
              </div>
              <span className="font-semibold leading-[20px] text-sm flex flex-col">
                <span className="inline-block">Manage multiple</span>
                <span className="inline-block">locations and menu</span>
              </span>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
                <Image
                  src="/assets/favorite-chart.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-semibold leading-[20px] text-sm flex flex-col">
                <span className="inline-block">Keep track of</span>
                <span className="inline-block">marketing campaigns</span>
              </span>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
                <Image
                  src="/assets/element-4.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-semibold leading-[20px] text-sm flex flex-col">
                <span className="inline-block">Fully customizable to</span>
                <span className="inline-block">suits your business best</span>
              </span>
            </div>
          </div>
        </div>
      </>
    );
}