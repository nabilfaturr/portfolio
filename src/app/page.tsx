import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="border">
      <Hero />
    </section>
  );
}

const Hero = () => {
  return (
    <section className="border">
      <h1>Nabil Faturrahman</h1>
      <p>Fullstack Developer from Indonesia</p>
      <p>
        I&apos;m a fullstack developer with a passion for building web
        applications. I&apos;m currently a software engineer at PT. ABC and a
        freelance developer.
      </p>
      <Button>Download CV</Button>
    </section>
  );
};
