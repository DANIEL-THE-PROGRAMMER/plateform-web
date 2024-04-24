import { Text } from "../styles";
import Image from "next/image";

export const Analytics = () => {
  return (
    <>
      <div className="relative">
        <div className="relative flex container mx-auto font-plus mt-[100px] mb-[81px]">
          <div className="w-[40%]">
            <span className="bg-[#F1F6FF] tracking-[2.4px] py-[16px] px-[24px] rounded-[8px] font-plus">
              <Text>ANALYTICS</Text>
            </span>
            <h2 className="text-[40px] font-bold leading-[40px] text-[#121D2F] mt-[24px]">
              We analyse your date, to give you a roadmap to success
            </h2>
            <div className="flex flex-col mt-[48px] gap-[40px]">
              <div className="flex items-center gap-[16px]">
                <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
                  <Image
                    src="/assets/favorite-chart.png"
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <span
                  className="font-semibold flex flex-col gap-[15px]"
                  style={{ width: "calc(100% - 32px)" }}
                >
                  <span className="inline-block font-semibold  leading-[32px] text-[18px]">
                    Sales analytics
                  </span>
                  <span className="inline-block text-[18px] leading-[28px] font-light">
                    We monitor your sales in real-time and determine patterns
                    for growth.
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
                  <Image
                    src="/assets/presention-chart.png"
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <span
                  className="font-semibold flex flex-col gap-[15px]"
                  style={{ width: "calc(100% - 32px)" }}
                >
                  <span className="inline-block font-semibold  leading-[32px] text-[18px]">
                    Marketing analytics
                  </span>
                  <span className="inline-block text-[18px] leading-[28px] font-light">
                    Track your campaigns with multiple metrics and correlation
                    to in-house data.
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
                  <Image
                    src="/assets/chart.png"
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <span
                  className="font-semibold flex flex-col gap-[15px]"
                  style={{ width: "calc(100% - 32px)" }}
                >
                  <span className="inline-block font-semibold  leading-[32px] text-[18px]">
                    Employee analytics
                  </span>
                  <span className="inline-block text-[18px] leading-[28px] font-light">
                    Help your employees perform their best, take the time off
                    when needed and more.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
