import type { MetadataRoute } from "next";
import { POSTS, SITE_URL } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: "2026-10-02", changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: "2026-10-02", changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: "2026-10-02", changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: "2026-10-02", changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: "2026-10-02", changeFrequency: "yearly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
