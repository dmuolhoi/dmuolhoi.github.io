import rss from '@astrojs/rss';

const allPostImports = import.meta.glob('../pages/blog/*.{md,mdx}');

export async function GET(context) {
  const iterablePostImports = Object.entries(allPostImports);
  const posts = await Promise.all(
    iterablePostImports.map(async ([path, resolver]) => {
      const post = await resolver();
      return {
        ...post,
        url: path
          .replace('../pages', '')
          .replace(/\.mdx?$/, ''),
      };
    })
  );

  const nonDraftPosts = posts.filter(post => !post.frontmatter.draft);

  return rss({
    title: 'MinBlog',
    description: 'A minimalist blog built with Astro',
    site: context.site,
    items: nonDraftPosts.map(post => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}