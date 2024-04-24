import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <>
      <div className="pt-[49px] pb-[19px] absolute top-0 left-0 w-full">
        <nav className="flex justify-between items-center container mx-auto">
          <div className="relative w-[125px] h-[34px]">
            <Image
              src="/assets/logoup.png"
              alt="logoup"
              fill={true}
              sizes="100vw"
            />
          </div>
          <ul className="flex items-center gap-[72px] font-plus">
            <li className="">
              <Link href="">About us</Link>
            </li>
            <li>
              <Link href="">Features</Link>
            </li>
            <li>
              <Link href="">Testimonials</Link>
            </li>
            <li>
              <Link href="">Integration</Link>
            </li>
            <li>
              <Link href="">Pricing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
