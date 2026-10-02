import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // 1. OpenAI (ChatGPT Search, GPTBot, OAI-SearchBot)
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      // 2. Perplexity AI (Fast growing search engine)
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // 3. Anthropic (Claude AI)
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // 4. Google & Gemini
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // 5. Microsoft Copilot & Bing
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // 6. Social Media Bots (Preview Card Crawlers)
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Pinterestbot",
        allow: "/",
      },
    ],
    sitemap: "https://shirtsmeer.com/sitemap.xml",
    host: "https://shirtsmeer.com",
  };
}
