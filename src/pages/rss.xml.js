import rss from '@astrojs/rss';

export async function GET(context) {
  // Defensive check for site URL
  const siteUrl = context.site || 'https://dmuolhoi.github.io';
  if (!context.site) {
    console.warn('Warning: `context.site` is undefined; falling back to hardcoded site URL.');
  }

  // Glob posts in /blog folder
  const posts = await context.glob('./blog/*.{md,mdx}');

  // Filter out drafts
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