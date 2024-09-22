import { Metadata } from "next";
import HeroSection from "@/components/shared/section/hero";
import LatestProjectSection from "@/components/shared/section/latest-project";
import LatestWrite from "@/components/shared/section/selected-write";

export const metadata: Metadata = {
  title: "Home | nabilfaturr",
  description:
    "Nabil Faturrahman's personal website. I'm a fullstack developer and a tech enthusiast.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestProjectSection />
      <LatestWrite />
    </>
  );
}
