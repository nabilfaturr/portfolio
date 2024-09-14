import type { MDXComponents } from "mdx/types";
import {
  Code,
  Heading,
  OrderedList,
  Text,
  UnorderedList,
  ListItem,
  CodeBlock,
  MdxLink,
} from "./components/shared/mdx/typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <Text>{children}</Text>,
    h1: ({ children }) => <Heading level={1}>{children}</Heading>,
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
    code: ({ children }) => <Code>{children}</Code>,
    ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
    ol: ({ children }) => <OrderedList>{children}</OrderedList>,
    li: ({ children }) => <ListItem>{children}</ListItem>,
    pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
    a: ({ children, href, className }) => (
      <MdxLink href={href || ""} className={className}>
        {children}
      </MdxLink>
    ),
    ...components,
  };
}
