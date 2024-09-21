import { Button } from "@/components/ui/button";
import Image from "next/image";
import profPic from "@/../public/prof-pic.png";
import WavingHand from "@/components/shared/icons/waving-hand";
import { Metadata } from "next";
import Link from "next/link";
import SectionProvider from "@/components/shared/provider/section-provider";
import HeroSection from "@/components/shared/section/hero";

export const metadata: Metadata = {
  title: "Home | nabilfaturr",
  description:
    "Nabil Faturrahman's personal website. I'm a fullstack developer and a tech enthusiast.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
