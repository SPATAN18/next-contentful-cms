import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { contentfulClient } from "@/libs/api";
import renderRichText from "@/rich-text";
import Image from "next/image";
import renderHeroSection from "@/rich-text/hero-section";

function Post({ post }) {
  const {
    fields: { title, description, hero },
  } = post;

  return (
    <div className="container mx-auto h-screen min-w-full">
      <article className="prose">
        <h1>{title}</h1>
        {renderRichText(description)}
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [];
  await contentfulClient.getEntries().then((entries) => {
    entries.items.forEach((item) => {
      paths.push({ params: { slug: item.fields.slug } });
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  return { props: { post: entries.items[0] } };
}

export default Post;
