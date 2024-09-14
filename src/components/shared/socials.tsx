import { social_links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <h2 className="text-lg font-medium">Socials</h2>
      <ul className="flex flex-col gap-3 items-start">
        {social_links.map((link) => (
          <SocialItem key={link.label} {...link} />
        ))}
      </ul>
    </div>
  );
};

const SocialItem = ({
  label,
  href,
  icon: Icon,
}: {
  label: string;
  href: string;
  icon: React.ElementType;
}) => {
  const colorClasses = {
    GitHub: "bg-black text-white hover:bg-black/90 border",
    Twitter: "bg-blue-500 text-white hover:bg-blue-500/90",
    LinkedIn: "bg-blue-600 text-white hover:bg-blue-600/90",
    Email: "bg-white text-black border",
  };

  return (
    <li
      className={cn(
        "rounded-lg hover:scale-105 transition-all duration-300 w-32",
        colorClasses[label as keyof typeof colorClasses]
      )}
    >
      <Link
        href={href}
        className="flex items-center justify-center gap-2 font-medium px-4 py-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label} <Icon className="w-4 h-4" />
      </Link>
    </li>
  );
};

export default Socials;
