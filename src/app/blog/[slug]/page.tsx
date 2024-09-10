import { getPostBySlug } from "@/lib/post";
import { notFound } from "next/navigation";

type BlogSlugPageProps = {
  params: { slug: string };
};

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const post = await getPostBySlug(params.slug);
  console.log({ post });

  if (!post) {
    notFound();
  }

  const { default: Content } = await import(
    `@/content/blog/${params.slug}.mdx`
  );

  return (
    <article>
      <h1>{post.title}</h1>
      <Content />
    </article>
  );
}
