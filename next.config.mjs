import createMDX from "@next/mdx";
import withPlaiceholder from "@plaiceholder/next";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withPlaiceholder(withMDX(nextConfig));
