import Image from "next/image";

export const WhatPpleSay = () => {
  return (
    <>
      <div className="relative pb-[120px] pt-[183px] overflow-hidden">
        <div className="flex container mx-auto font-plus flex-col items-center">
          <h3 className="text-[40px] leading-[48px] font-bold  #121D2F ">
            What people say
          </h3>
          <span className="text-[18px] leading-[28px] mt-[32px] flex flex-col">
            <span>Our customer are our top priority</span>
            <span>Let{"'"}s hear what they have to say.</span>
          </span>
        </div>
        <div className="mt-[64px] flex gap-[40px]">
          <div className="font-plus flex gap-[40px] peoplemarque">
            {People.map((pple, index: number) => {
              return (
                <div
                  style={{
                    transform:
                      index === 0 || index === 2
                        ? "translateY(64px)"
                        : "translateY(0%)",
                  }}
                  className="w-[332px] rounded-[24px] p-[40px] shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] bg-white flex flex-col justify-between min-h-[408px]"
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="relative w-[200px] h-[32px]">
                      <Image src="" alt="" sizes="100vw" fill={true} />
                    </div>
                    <div className="mt-[56px]">
                      <Image src="" alt="" width={48} height={48} />
                    </div>
                    <p className="leading-[26px] text-[#253042] text-[16px]">
                      {pple.context}
                    </p>
                  </div>
                  <span className="flex items-center gap-[8px]">
                    <div className="w-[16px] h-[3px] bg-[#8D96A6]"></div>
                    <span className="font-medium text-[12px] leading-[17px] text-[#8D96A6]">
                      {pple.name}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="font-plus flex gap-[40px] peoplemarque">
            {People.map((pple, index: number) => {
              return (
                <div
                  style={{
                    transform:
                      index === 1 ? "translateY(64px)" : "translateY(0%)",
                  }}
                  className="w-[332px] rounded-[24px] p-[40px] shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] bg-white flex flex-col justify-between min-h-[408px]"
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="relative w-[200px] h-[32px]">
                      <Image src="" alt="" sizes="100vw" fill={true} />
                    </div>
                    <div className="mt-[56px]">
                      <Image src="" alt="" width={48} height={48} />
                    </div>
                    <p className="leading-[26px] text-[#253042] text-[16px]">
                      {pple.context}
                    </p>
                  </div>
                  <span className="flex items-center gap-[8px]">
                    <div className="w-[16px] h-[3px] bg-[#8D96A6]"></div>
                    <span className="font-medium text-[12px] leading-[17px] text-[#8D96A6]">
                      {pple.name}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="font-plus flex gap-[40px] peoplemarque">
            {People.map((pple, index: number) => {
              return (
                <div
                  style={{
                    transform:
                      index === 0 || index === 2
                        ? "translateY(64px)"
                        : "translateY(0%)",
                  }}
                  className="w-[332px] rounded-[24px] p-[40px] shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] bg-white flex flex-col justify-between min-h-[408px]"
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="relative w-[200px] h-[32px]">
                      <Image src="" alt="" sizes="100vw" fill={true} />
                    </div>
                    <div className="mt-[56px]">
                      <Image src="" alt="" width={48} height={48} />
                    </div>
                    <p className="leading-[26px] text-[#253042] text-[16px]">
                      {pple.context}
                    </p>
                  </div>
                  <span className="flex items-center gap-[8px]">
                    <div className="w-[16px] h-[3px] bg-[#8D96A6]"></div>
                    <span className="font-medium text-[12px] leading-[17px] text-[#8D96A6]">
                      {pple.name}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="font-plus flex gap-[40px] peoplemarque">
            {People.map((pple, index: number) => {
              return (
                <div
                  style={{
                    transform:
                      index === 1 ? "translateY(64px)" : "translateY(0%)",
                  }}
                  className="w-[332px] rounded-[24px] p-[40px] shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] bg-white flex flex-col justify-between min-h-[408px]"
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="relative w-[200px] h-[32px]">
                      <Image src="" alt="" sizes="100vw" fill={true} />
                    </div>
                    <div className="mt-[56px]">
                      <Image src="" alt="" width={48} height={48} />
                    </div>
                    <p className="leading-[26px] text-[#253042] text-[16px]">
                      {pple.context}
                    </p>
                  </div>
                  <span className="flex items-center gap-[8px]">
                    <div className="w-[16px] h-[3px] bg-[#8D96A6]"></div>
                    <span className="font-medium text-[12px] leading-[17px] text-[#8D96A6]">
                      {pple.name}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="font-plus flex gap-[40px] peoplemarque">
            {People.map((pple, index: number) => {
              return (
                <div
                  style={{
                    transform:
                      index === 0 || index === 2
                        ? "translateY(64px)"
                        : "translateY(0%)",
                  }}
                  className="w-[332px] rounded-[24px] p-[40px] shadow-[0px_12px_24px_0px_rgba(37,98,204,0.12)] bg-white flex flex-col justify-between min-h-[408px]"
                  key={index}
                >
                  <div className="flex flex-col">
                    <div className="relative w-[200px] h-[32px]">
                      <Image src="" alt="" sizes="100vw" fill={true} />
                    </div>
                    <div className="mt-[56px]">
                      <Image src="" alt="" width={48} height={48} />
                    </div>
                    <p className="leading-[26px] text-[#253042] text-[16px]">
                      {pple.context}
                    </p>
                  </div>
                  <span className="flex items-center gap-[8px]">
                    <div className="w-[16px] h-[3px] bg-[#8D96A6]"></div>
                    <span className="font-medium text-[12px] leading-[17px] text-[#8D96A6]">
                      {pple.name}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const People = [
  {
    image: "",
    context:
      "Plateform is exactly what our business needed to grow! It saves us soo much time and effort it's unbelievable!",
    name: "Dirk Michon, Co-Founder",
  },
  {
    image: "",
    context:
      "We've been seeing amazing results already! I can't believe how we ran the company before plateform. Groundbreaking!",
    name: "Mark Churry, CEO",
  },
  {
    image: "",
    context: "I am completely blown away! We are growing at a rate that's unprecedented for both the industry and the city!",
    name: "Derpina Wickers, CEO",
  },
];
