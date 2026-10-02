import type { OutfitRow } from "@/components/OutfitTable";
import type { FAQItem } from "@/components/FAQAccordion";
import grey from "@/content/posts/grey-pants.json";
import brown from "@/content/posts/brown-pants.json";
import navy from "@/content/posts/navy-pants.json";
import khaki from "@/content/posts/khaki-pants.json";
import olive from "@/content/posts/olive-green-pants.json";

export interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: { label: string; text: string }[];
}

export interface PostContent {
  quickAnswerTitle: string;
  quickAnswer: string;
  intro: string;
  swatchHeading: string;
  swatches: { name: string; hex: string; role: string }[];
  sections: Section[];
  tableCaption: string;
  tableRows: OutfitRow[];
  afterTable: Section[];
  faqs: FAQItem[];
}

export interface PostMeta {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  shortLabel: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  excerpt: string;
}

export const SITE_URL = "https://shirtsmeer.com";

export const POSTS: PostMeta[] = [
  {
    slug: "what-color-shirt-goes-with-grey-pants",
    title: "What Color Shirt Goes with Grey Pants? Complete Men's Guide",
    metaTitle: "What Color Shirt Goes with Grey Pants? Men's Guide",
    metaDescription:
      "Not sure what color shirt goes with grey pants? See the best white, blue, pink, navy and black pairings, plus the shoes and belts that match.",
    primaryKeyword: "grey pants",
    shortLabel: "Grey Pants Combinations",
    publishedDate: "2026-03-15",
    updatedDate: "2026-10-02",
    readTime: "7 min read",
    excerpt:
      "Grey pants are the most versatile neutral in menswear. Learn which shirt colors, contrast levels and leather shoes make foolproof outfits.",
  },
  {
    slug: "what-color-shirt-goes-with-brown-pants",
    title: "What Color Shirt Goes with Brown Pants? Complete Men's Guide",
    metaTitle: "What Color Shirt Goes with Brown Pants? Men's Guide",
    metaDescription:
      "Find out what color shirt goes with brown pants. Match chocolate, tobacco and tan trousers with blue, white, pink or green shirts and the right shoes.",
    primaryKeyword: "brown pants",
    shortLabel: "Brown Pants Styling",
    publishedDate: "2026-03-16",
    updatedDate: "2026-10-02",
    readTime: "7 min read",
    excerpt:
      "Brown pants are a rich, earthy alternative to black and grey. See how to pair chocolate, tobacco and tan trousers with the right shirts.",
  },
  {
    slug: "what-color-shirt-goes-with-navy-pants",
    title: "What Color Shirt to Wear with Navy Blue Pants? Men's Guide",
    metaTitle: "What Color Shirt with Navy Blue Pants? Men's Guide",
    metaDescription:
      "Learn what color shirt to wear with navy blue pants. Pair navy trousers with white, pink, light grey, sky blue or sage shirts for sharp outfits.",
    primaryKeyword: "navy blue pants",
    shortLabel: "Navy Blue Pants Pairing",
    publishedDate: "2026-03-17",
    updatedDate: "2026-10-02",
    readTime: "7 min read",
    excerpt:
      "Navy blue pants anchor business casual and tailored outfits. Master tonal contrast, pastel balance and shoe coordination with simple rules.",
  },
  {
    slug: "what-color-shirt-goes-with-khaki-pants",
    title: "What Color Shirt Goes with Khaki Pants? Men's Style Rules",
    metaTitle: "What Color Shirt Goes with Khaki Pants? Men's Guide",
    metaDescription:
      "Discover what color shirt goes with khaki pants. See the best navy, white, olive, denim and burgundy combinations plus shoe and belt advice.",
    primaryKeyword: "khaki pants",
    shortLabel: "Khaki Pants Rules",
    publishedDate: "2026-03-18",
    updatedDate: "2026-10-02",
    readTime: "7 min read",
    excerpt:
      "Khaki pants are a staple that is easy to style badly. Break out of dull office looks with higher contrast shirts and better textures.",
  },
  {
    slug: "what-color-shirt-goes-with-olive-green-pants",
    title: "What Color Shirt Goes with Olive Green Pants? Men's Guide",
    metaTitle: "What Color Shirt with Olive Green Pants? Men's Guide",
    metaDescription:
      "Find out what color shirt goes with olive green pants. Pair olive chinos with white, navy, black, cream or chambray shirts and the right shoes.",
    primaryKeyword: "olive green pants",
    shortLabel: "Olive Green Chinos",
    publishedDate: "2026-03-19",
    updatedDate: "2026-10-02",
    readTime: "7 min read",
    excerpt:
      "Olive green pants are the modern wildcard of menswear. Learn how to style olive chinos with clean, confident shirt combinations.",
  },
];

const CONTENT: Record<string, PostContent> = {
  "what-color-shirt-goes-with-grey-pants": grey as PostContent,
  "what-color-shirt-goes-with-brown-pants": brown as PostContent,
  "what-color-shirt-goes-with-navy-pants": navy as PostContent,
  "what-color-shirt-goes-with-khaki-pants": khaki as PostContent,
  "what-color-shirt-goes-with-olive-green-pants": olive as PostContent,
};

export function getPost(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostContent(slug: string): PostContent | undefined {
  return CONTENT[slug];
}
