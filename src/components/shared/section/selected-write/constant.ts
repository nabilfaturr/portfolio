import { blog_metadata_collection } from "@/lib/blog-metadata";

export const latest_write_blog_metadata = Object.values(
  blog_metadata_collection
).slice(0, 2).reverse();
