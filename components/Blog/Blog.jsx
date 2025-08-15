import Content from "./Content";
import Footer from "./Footer";
import Hero from "./Hero";

export default function Blog({ title, shortDescription, createdAt, content }) {
  return (
    <main className="m-4 sm:m-6 md:m-9">
      <Hero
        blogTitle={title}
        blogShortDescription={shortDescription}
        blogCreatedAt={createdAt}
      />
      <Content blogContent={content} />
      <Footer />
    </main>
  );
}
