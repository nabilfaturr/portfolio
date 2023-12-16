import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import profile from "@/public/profile.png";
import SocialMedia from "./components/SocialMedia";

export default function Home() {
  const textGradient = `bg-gradient-to-r from-[#5201FF]/80 via-[#AD00FF]/80 to-[#FF00D6]/80 inline-block text-transparent bg-clip-text`;
  return (
    <section className="h-[90vh] mt-3">
      <article className="md:flex flex-row-reverse justify-between mt-20 items-center">
        <div>
          <Image
            src={profile}
            width={120}
            height={120}
            className="rounded-full"
            alt="profile-picture"
          ></Image>
        </div>

        <div className="mt-5">
          <h1 className="text-2xl font-medium">Helllloooo &#128075;</h1>
          <h2 className={`font-extrabold text-3xl  ${textGradient}`}>
            Nabil Faturrahman
          </h2>
          <h3 className="text-slate-600 mt-3">
            19 y/o • Full-stack developer • Tech Enthusiast
          </h3>
          <p className="text-slate-900 mt-5">
            I am a college student from indonesia, excited about creating web
            solutions with both front-end and back-end skills, especially react,
            nextjs and nodejs goodies.
          </p>
        </div>
      </article>
      <SocialMedia />
    </section>
  );
}

// 19 y/0 • Full-stack developer • Tech Enthusiast
