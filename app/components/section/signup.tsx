import Image from "next/image";

import { Text, ButtonBlue } from "../styles";


export const SignUp = () => {
    return (
      <>
        <div className="relative font-plus">
          <div className="relative container mx-auto py-[95px] flex flex-col gap-[48px] items-center">
            <div className="relative">
              <h3 className="text-[40px] leading-[48px] font-bold">
                Let Plateform boost your business!
              </h3>
            </div>
            <div className="relative text-[18px] leading-[28px] text-[#121D2F]">
              <p>Join 250+ restaurants and cafes that are already using</p>
              <p>Plateform and growing their reach, revenue and sales.</p>
            </div>
            <div className="flex gap-[18px] items-center">
              <button className="inline-flex min-h-[48px] w-[200px] items-center rounded-[8px] bg-[#F1F6FF] justify-center">
                <Image src="/assets/play.png" alt="" width={24} height={24} />
                <Text>Watch video</Text>
              </button>
              <ButtonBlue $width="200px" $height="40px">
                Sign up for free
              </ButtonBlue>
            </div>
          </div>
        </div>
      </>
    );
}