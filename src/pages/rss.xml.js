import rss from '@astrojs/rss';

export async function GET(context) {
  const siteUrl = context.site || 'https://dmuolhoi.github.io';

  if (!context.site) {
    console.warn('Warning: `context.site` is undefined; falling back to hardcoded site URL.');
  }

  // Recursive glob to catch nested folders like src/pages/blog/post1/index.md
  const posts = await context.glob('../blog/*.{md,mdx}');
  console.log(`[rss.xml] Found ${posts.length} posts in ./blog`);

  if (posts.length === 0) {
    throw new Error("No markdown files found in './blog'. Check if files exist and are committed.");
  }

  const nonDraftPosts = posts.filter(post => !post.frontmatter.draft);

  return rss({
    title: 'MinBlog',
    description: 'A minimalist blog built with Astro',
    site: siteUrl,
    items: nonDraftPosts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}