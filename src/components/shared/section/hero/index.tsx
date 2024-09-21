import React from "react";
import SectionProvider from "../../provider/section-provider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WavingHand from "../../icons/waving-hand";

const HeroSection = () => {
  return (
    <SectionProvider className="flex flex-col justify-center pb-40">
      <Hero />
    </SectionProvider>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold flex flex-col">
            <span className="flex items-center gap-2">
              <WavingHand />
              Hello World!
            </span>
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              You can call me{" "}
              <span className="font-bold bg-brand-gradient">Nabil</span>
            </span>
          </h2>
          <p
            className={`text-foreground/80 max-w-xl text-md sm:text-lg md:text-xl flex flex-col gap-2`}
          >
            I&apos;m a fullstack developer. I love to build end-to-end web
            applications and design systems. Whenever I feel like I should share
            my knowledge with others, I like to do it on my blog.
          </p>
        </div>
        <TimezoneBadge />
        <CTA />
      </div>
    </div>
  );
};

const TimezoneBadge = () => {
  return <span className="text-teal-600">Indonesia &#x2022; GMT+8</span>;
};

const CTA = () => {
  return (
    <div className="flex gap-4">
      <Button
        className="bg-teal-600 text-white hover:bg-teal-600/80 transition-all duration-300"
        asChild
      >
        <Link href="/blog">Read my blog</Link>
      </Button>
      <Button
        variant="outline"
        className="bg-teal-600/10 text-teal-600 border-0 hover:bg-teal-600/20 hover:text-teal-600/80 transition-all duration-300"
        asChild
      >
        <Link href="/projects">Explore my work</Link>
      </Button>
    </div>
  );
};

export default HeroSection;