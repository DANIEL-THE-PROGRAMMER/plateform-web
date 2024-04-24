import { Text } from "../styles";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="overflow-x-hidden font-plus">
      <div className="flex flex-col items-center pt-[78px]">
        <span className="bg-[#F1F6FF] tracking-[2.4px] py-[16px] px-[24px] rounded-[8px]">
          <Text>THIS IS PLATFORM</Text>
        </span>
        <h2 className="text-[40px] font-bold leading-[40px] text-[#121D2F] mt-[24px]">
          Restaurant reimagined
        </h2>
        <p className="mt-[48px] md:w-[548px] text-center">
          We are one-stop solution to track, optimize and deliver food with an
          easy to use mobile app for ordering and our award winning desktop app
          for manament.
        </p>
        <div className="flex justify-center items-center gap-[64px] mt-[48px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
              <Image
                src="/assets/truck-fast.png"
                alt=""
                width={32}
                height={32}
              />
            </div>
            <span className="font-semibold leading-[20px] text-sm">
              Fast to deploy
            </span>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
              <Image src="/assets/award.png" alt="" width={32} height={32} />
            </div>
            <span className="font-semibold leading-[20px] text-sm">
              Easy to learn
            </span>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="w-[64px] h-[64px] rounded-[12px] bg-[#F1F6FF] flex items-center justify-center">
              <Image
                src="/assets/dollar-circle.png"
                alt=""
                width={32}
                height={32}
              />
            </div>
            <span className="font-semibold leading-[20px] text-sm">
              Future rich
            </span>
          </div>
        </div>
        <span className="leading-[150px] tracking-[2.8px] text-sm font-bold uppercase text-[#8D96A6] mt-[90px] inline-block">
          software build for and trusted by 100+ brands
        </span>
        <div className="flex gap-[60px]">
          <div className="flex gap-[60px marque">
            {MarqqueImages.map((image, index) => {
              return (
                <div className="relative w-[120px] h-[120px]" key={index}>
                  <Image
                    src={`${image}`}
                    alt=""
                    width={120}
                    height={120}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-[60px] marque">
            {MarqqueImages.map((image, index) => {
              return (
                <div className="relative w-[120px] h-[120px]" key={index}>
                  <Image
                    src={`${image}`}
                    alt=""
                    width={120}
                    height={120}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-[60px] marque">
            {MarqqueImages.map((image, index) => {
              return (
                <div className="relative w-[120px] h-[120px]" key={index}>
                  <Image
                    src={`${image}`}
                    alt=""
                    width={120}
                    height={120}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-[60px] marque">
            {MarqqueImages.map((image, index) => {
              return (
                <div className="relative w-[120px] h-[120px]" key={index}>
                  <Image
                    src={`${image}`}
                    alt=""
                    width={120}
                    height={120}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


const MarqqueImages = [
  "/assets/image 8.png",
  "/assets/image 12.png",
  "/assets/image 9.png",
  "/assets/image 10.png",
  "/assets/image 14.png",
  "/assets/image 15.png",
  "/assets/image 16.png",
];
