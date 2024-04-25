import Image from "next/image"


export const Footer = () => {
    return (
      <div className="py-[64px] bg-[#001333]">
        <div className="container mx-auto flex justify-between items-start font-plus">
          <Image
            src="/assets/Frame 98.png"
            alt=""
            width={150}
            height={34}
            sizes="100vw"
          />
          <div className="flex gap-[150px]">
            <div className="flex flex-col gap-[40px] text-white leading-[22px]">
              <h6 className="font-bold text-[18px] leading-[32px]">Features</h6>
              <span className="leading-[22px]">Management</span>
              <span className="leading-[22px] text-sm">Communication</span>
              <span className="leading-[22px] text-sm">Analytic</span>
            </div>
            <div className="flex flex-col gap-[40px] text-white leading-[22px]">
              <h6 className="font-bold text-[18px] leading-[32px]">
                Success stories
              </h6>
              <span className="leading-[22px] text-sm">Avoburger</span>
              <span className="text-sm">Star Coffee</span>
              <span className="leading-[22px] text-sm">Forest Hotdogs</span>
            </div>
            <div className="flex flex-col gap-[40px] text-white leading-[22px]">
              <h6 className="font-bold text-[18px] leading-[32px]">
                Social Media
              </h6>
              <span className="leading-[22px] text-sm">Instagram</span>
              <span className="leading-[22px] text-sm">Communication</span>
              <span className="leading-[22px] text-sm">Analytic</span>
            </div>
            <div className="flex flex-col gap-[40px] text-white leading-[22px]">
              <h6 className="font-bold text-[18px] leading-[32px]">Contact</h6>
              <span className="leading-[22px] text-sm flex flex-col">
                <span>123 Main Street, Cityville,</span>
                <span>Stateville, ZIP Code</span>
              </span>
              <span className="leading-[22px] text-sm">hello@plateform.io</span>
            </div>
          </div>
        </div>
      </div>
    );
}