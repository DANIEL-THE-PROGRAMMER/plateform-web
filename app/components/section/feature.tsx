import { Text } from "../styles";
import Image from "next/image";


export const Feature = () => {
    return (
      <>
        <div className="relative mt-[76px]">
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
                        <Image src="/assets/Frame 927.png" alt="" sizes="100vw" fill={true}  />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
}