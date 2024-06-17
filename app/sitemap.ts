// import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  // CJB TODO - Once you have a blog, then add ...blogs to the return at the bottom.
  // let blogs = getBlogPosts().map((post) => ({
  //   url: `https://chrisbaileydeveloper.com/blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }));

  let routes = [''].map((route) => ({
    url: `https://chrisbaileydeveloper.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // return [...routes, ...blogs];   // TODO - add once you have a blog
  return [...routes];
}
