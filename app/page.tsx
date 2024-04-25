import Image from "next/image";
import { HeroHeader } from "./components/section/hero";
import { AboutUs } from "./components/section/aboutus";
import { Feature } from "./components/section/feature";
import { Communication } from "./components/section/communication";
import { Analytics } from "./components/section/analytics";
import { Pricing } from "./components/section/pricing";
import { WhatPpleSay } from "./components/section/whatsay";
import { SuccessStory } from "./components/section/successstroy";
import { SignUp } from "./components/section/signup";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <AboutUs />
      <Feature />
      <Communication />
      <Analytics />
      <Pricing />
      <WhatPpleSay />
      <SuccessStory />
      <SignUp/>
    </>
  );
}
