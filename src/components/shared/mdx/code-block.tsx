"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import React from "react";

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre className="relative dark:bg-black/75 bg-black border text-white font-medium p-4 rounded-lg overflow-x-auto flex flex-col gap-3">
      {children}
      <CopyButton content={extractTextContent(children)} />
    </pre>
  );
};

const CopyButton = ({ content }: { content: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(content);
  };

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className="absolute z-10 bg-black top-2 right-2 p-2 border border-white/10 rounded-md hover:bg-black/90 text-white cursor-pointer transition-all duration-300"
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="text-green-500" />
      ) : (
        <Copy className="text-white" />
      )}
    </Button>
  );
};

// Add this function at the end of the file
function extractTextContent(children: React.ReactNode): string {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractTextContent).join("");
  }
  if (React.isValidElement(children)) {
    return extractTextContent(children.props.children);
  }
  return "";
}

export default CodeBlock;
