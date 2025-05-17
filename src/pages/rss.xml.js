import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await context.glob('./blog/*.{md,mdx}');
  const nonDraftPosts = posts.filter(post => !post.frontmatter.draft);
  
  return rss({
    title: 'MinBlog',
    description: 'A minimalist blog built with Astro',
    site: context.site,
    items: nonDraftPosts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}