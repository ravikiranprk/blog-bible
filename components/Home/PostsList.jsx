import PostCard from "./PostCard";

export default function PostsList({ posts }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 p-5 md:p-8 xl:p-10">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id-1}
          title={post.title}
          shortDescription={post.shortDescription}
          createdAt={post.createdAt}
        />
      ))}
    </section>
  );
}
