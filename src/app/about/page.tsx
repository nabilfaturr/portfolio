import FindMe from "@/components/shared/find-me";
import SectionProvider from "@/components/shared/provider/section-provider";
import { webStacks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About | nabilfaturr",
  description:
    "Nabil Faturrahman's about page. talk about my journey and my tech stack.",
};

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <SectionProvider className="flex flex-col gap-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="flex flex-col gap-3 text-color">
          <span>
            Hello, my name is{" "}
            <strong className="font-semibold text-teal-600">
              Nabil Faturrahman
            </strong>
            . I&apos;m 20 years old and currently in my 5th semester studying
            Computer Science at Mikroskil University in Indonesia. I have a
            strong passion for web development and design, and I&apos;m working
            towards becoming a full-stack developer development and design.
          </span>
          <span>
            My coding journey started back in 2020 during the COVID
            lockdown(shoutout to the K-drama Startup for inspiring me to dive in
            HAHAHA). I started by diving deep into the internet and picked up
            Python as my first programming language. Since then, college has
            introduced me to React for web development, Flutter for mobile
            development, and C++ for competitive programming.
          </span>
          <span>
            I know the journey ahead is long, and that’s the best part! There’s
            so much to learn, and I’m motivated to explore as much as I can. I
            love learning, improving, and sharing my journey, so feel free to
            reach out—I’d be more than happy to connect.
          </span>
        </p>
      </div>
      <FindMe />
      <TechStack />
    </SectionProvider>
  );
};

const TechStack = () => {
  return (
    <div className="flex flex-col gap-2 text-color">
      <h2 className="text-2xl font-bold">Tech Stack</h2>
      <p>
        Here are some of the technologies and tools I&apos;ve worked with to
        build this website:
      </p>
      {Object.entries(webStacks).map(([key, value]) => (
        <ol key={key} className="list-disc list-inside">
          <li className="pl-2">
            <span>{key}: </span>
            <Link
              href={value.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                `font-semibold text-teal-600 hover:text-black transition-all duration-300`,
                `dark:hover:text-white`
              )}
            >
              {value.name}
            </Link>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default AboutPage;
