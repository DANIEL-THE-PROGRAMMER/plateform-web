import Image from "next/image";
import { Text, ButtonBlue } from "../styles";

export const HeroHeader = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/Rectangle 104.png"
        alt=""
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: "444px",
          height: "224px",
          zIndex: "-1px",
        }}
        className="absolute left-0 top-0"
      />
      <Image
        src="/assets/Rectangle 108.png"
        alt=""
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: "406px",
          height: "236px",
          zIndex: "-1px",
        }}
        className="absolute left-[75px] bottom-0"
      />
      <Image
        src="/assets/Rectangle 107.png"
        alt=""
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: "306px",
          height: "306px",
          zIndex: "-1px",
        }}
        className="absolute left-[35%] top-[153px]"
      />
      <div className="pt-[102px]">
        <div className="h-[90vh]">
          <Image
            src="/assets/Rectangle 97.png"
            alt=""
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: "52%",
              height: "80vh",
              zIndex: "-1px",
            }}
            className="absolute right-0 bottom-0"
          />

          <div className="container mx-auto flex h-full relative">
            <div className="pt-[170px] flex flex-col gap-[48px] w-[40%] font-plus">
              <h3 className="leading-[54px] text-[44px] font-bold text-[#030C1B] md:w-[625px]">
                Restaurant Management made as easy as pie
              </h3>
              <p className="leading-[150%] text-[18px] text-[#364050] md:w-[500px]">
                Plateform will help you manage your store easily with its
                outstanding features. Trusted be ten of thousands of customers
                all over the world.
              </p>
              <div className="flex gap-[18px]">
                <button className="inline-flex min-h-[48px] w-[180px] items-center rounded-[8px] bg-[#F1F6FF] justify-center">
                  <Image src="/assets/play.png" alt="" width={24} height={24} />
                  <Text>Watch video</Text>
                </button>
                <ButtonBlue $width="180px" $height="40px">
                  Try the demo
                </ButtonBlue>
              </div>
            </div>
            <div className="shrink-0 w-[60%]  h-full relative">
              <Image src="/assets/Group 27.png" alt="" sizes="100vw" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
