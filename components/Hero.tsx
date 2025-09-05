"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex xl:flex-row flex-col gap-8 relative z-0 max-w-[1440px] mx-auto px-6 sm:px-12">
      <div className="flex-1 pt-28">
        <h1 className="font-extrabold tracking-tight text-[44px] sm:text-[56px] 2xl:text-[72px] leading-[1.1]">
          Find, book, or rent a car — quickly and easily!
        </h1>

        <p className="mt-6 text-[16px] sm:text-[18px] text-[color:var(--foreground)]/70 max-w-xl">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="mt-8 inline-flex bg-[var(--primary)] text-white rounded-full px-6 py-3"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[560px] z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-[url('/hero-bg.png')] bg-repeat-round -z-10 w-full xl:h-screen h-[560px] overflow-hidden" />
      </div>
    </div>
  );
};

export default Hero;