import Image from "next/image";
import { HeroHeader } from "./components/section/hero";
import { AboutUs } from "./components/section/aboutus";
import { Feature } from "./components/section/feature";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <AboutUs />
      <Feature />
    </>
  );
}
