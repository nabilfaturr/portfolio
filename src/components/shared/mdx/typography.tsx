import { GeistMono } from "geist/font/mono";

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-black/75 mb-4 dark:text-white/75 leading-9">
      {children}
    </p>
  );
};

export const Heading = ({
  children,
  level,
}: {
  children: React.ReactNode;
  level: 1 | 2 | 3;
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const headingClasses = {
    1: "text-4xl font-bold mb-2 mt-7",
    2: "text-3xl font-bold mb-2 mt-12",
    3: "text-2xl font-bold mb-2 mt-12",
  };

  return <Tag className={headingClasses[level]}>{children}</Tag>;
};

export const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <code
      className={`${GeistMono.className} bg-teal-100 border border-teal-200 text-teal-700 px-1 rounded-md dark:bg-teal-900 dark:text-teal-300 dark:border-teal-800 leading-7 font-bold`}
    >
      {children}
    </code>
  );
};

export const UnorderedList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="list-disc mb-4 pl-8">{children}</ul>;
};

export const OrderedList = ({ children }: { children: React.ReactNode }) => {
  return <ol className="list-decimal mb-4 pl-8">{children}</ol>;
};

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="pl-2 pb-3 mb-3">{children}</li>;
};
