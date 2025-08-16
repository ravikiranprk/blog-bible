import Blog from "@/components/Blog/Blog";
import Menu from "@/components/Menu/Menu";
import { posts } from "@/blogposts/posts";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  const { blogId } = await params;
  const post = posts[blogId];

  if(!post) return notFound();

  return (
    <div className="">
      <Menu />
      <Blog
        title={post.title}
        shortDescription={post.shortDescription}
        content={post.content}
        createdAt={post.createdAt}
      />
    </div>
  );
}
