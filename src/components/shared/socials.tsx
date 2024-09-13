import { social_links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import clsx from "clsx";

type SocialsVariant = "footer" | "about";

const Socials = ({ variant = "footer" }: { variant?: SocialsVariant }) => {
  return (
    <div className={cn("flex flex-col items-start", 
      variant === "about" && "gap-6")}>
      {variant === "footer" && <h2 className="text-lg font-medium mb-4">Socials</h2>}
      <ul className={cn("flex gap-3",
        variant === "footer" ? "flex-col items-start" : "flex-row items-center")}>
        {social_links.map((link) => (
          <SocialItem key={link.label} {...link} variant={variant} />
        ))}
      </ul>
    </div>
  );
};

const SocialItem = ({
  label,
  href,
  icon: Icon,
  variant,
}: {
  label: string;
  href: string;
  icon: React.ElementType;
  variant: SocialsVariant;
}) => {
  const colorClasses = {
    GitHub: "bg-black text-white hover:bg-black/90",
    Twitter: "bg-blue-500 text-white hover:bg-blue-500/90",
    LinkedIn: "bg-blue-600 text-white hover:bg-blue-600/90",
  };

  return (
    <li
      className={cn(
        "rounded-lg hover:scale-105 transition-all duration-300",
        variant === "footer" ? "w-32" : "w-10 h-10",
        colorClasses[label as keyof typeof colorClasses]
      )}
    >
      <Link
        href={href}
        className={clsx(
          "flex items-center justify-center gap-2 font-medium",
          variant === "footer" ? "px-4 py-4" : "w-full h-full"
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {variant === "footer" ? (
          <>
            {label} <Icon className="w-4 h-4" />
          </>
        ) : (
          <Icon className="w-5 h-5" />
        )}
      </Link>
    </li>
  );
};

export default Socials;
