import { contentfulClient } from "@/libs/api";

export default function Blogs({ posts = [] }) {
  return (
    <div>
      Hello
      <div>
        {posts.map((post) => (
          <a key={post.slug} href={`blog/${post.slug}`}>
            {post.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const blogList = [];
  await contentfulClient.getEntries().then((entries) => {
    entries.items.forEach((item) => {
      console.log(item);
      blogList.push({ title: item.fields.title, slug: item.fields.slug });
    });
  });
  return {
    props: {
      posts: blogList,
    },
  };
}
