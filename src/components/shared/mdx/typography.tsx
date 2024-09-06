import React from "react";

const levelToTag = (level: number) =>
  `h${level}` as keyof JSX.IntrinsicElements;
type TLevel = 1 | 2 | 3 | 4 | 5 | 6;

const Heading = ({
  children,
  level,
  ...props
}: {
  children: React.ReactNode;
  level: TLevel;
}) => {
  const Tag = levelToTag(level);
  const tagStyle: Record<TLevel, string> = {
    1: "text-3xl font-bold",
    2: "text-2xl font-bold",
    3: "text-xl font-bold",
    4: "text-lg font-bold",
    5: "text-md font-bold",
    6: "text-sm font-bold",
  };

  return (
    <Tag className={tagStyle[level]} {...props}>
      {children}
    </Tag>
  );
};

const Text = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-base">{children}</p>;
};

export { Heading, Text };
