import { Button } from "@/components/ui/button";
import Image from "next/image";
import profPic from "@/../public/prof-pic.png";
import WavingHand from "@/components/shared/icons/waving-hand";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="w-full h-screen mt-16">
      <Hero />
    </section>
  );
}

const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <Image
          src={profPic}
          alt="profile"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold flex flex-col">
            <span className="flex items-center gap-2">
              <WavingHand />
              Hello World!
            </span>
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              You can call me{" "}
              <span className="font-bold bg-gradient-to-r from-teal-200 to-teal-400 dark:from-teal-600 dark:to-teal-400">
                Nabil
              </span>
            </span>
          </h2>
          <p className={`text-foreground/80 max-w-xl text-lg md:text-xl flex flex-col gap-2 ${inter.className}`}>
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
      <Button className="bg-teal-600 text-white hover:bg-teal-600/80 transition-all duration-300">
        Read my blog
      </Button>
      <Button
        variant="outline"
        className="bg-teal-600/10 text-teal-600 border-0 hover:bg-teal-600/20 hover:text-teal-600/80 transition-all duration-300"
      >
        Explore my work
      </Button>
    </div>
  );
};
