import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const SITE_URL = "https://shirtsmeer.com";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "posts");

export interface FAQItem {
  question: string;
  answer: string;
  [key: string]: any;
}

export interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: Section[];
  swatch?: any;
  table?: any;
  callout?: any;
  [key: string]: any;
}

export interface Swatch {
  name: string;
  hex: string;
  role?: string;
}

export interface PostContent {
  quickAnswer?: string;
  quickAnswerTitle?: string;
  intro?: string[] | string;
  swatchHeading?: string;
  swatches?: Swatch[];
  sections: Section[];
  afterTable?: Section[];
  tableCaption?: string;
  tableRows?: any;
  table?: any;
  faqs?: FAQItem[];
  [key: string]: any;
}

export interface PostMeta {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description?: string;
  excerpt?: string;
  leadExcerpt?: string;
  shortLabel?: string;
  primaryKeyword: string;
  searchVolume: number;
  publishedDate: string;
  updatedDate?: string | Date;
  date?: string;
  readTime: string;
  image?: string;
  imageAlt?: string;
  related?: string[];
  faqs?: FAQItem[];
  sections?: Section[];
  content?: any;
  [key: string]: any;
}

export interface PostData {
  frontmatter: PostMeta;
  content: string;
  [key: string]: any;
}

export interface PostData {
  frontmatter: PostMeta;
  content: string;
  [key: string]: any;
}

// --- 2. 5 CORE PILLAR POSTS ---
export const POSTS: PostMeta[] = [
  {
    slug: "what-color-shirt-goes-with-grey-pants",
    title: "What Color Shirt Goes with Grey Pants? Complete Men's Guide",
    metaTitle: "What Color Shirt with Grey Pants? Style Guide",
    metaDescription: "Wondering what color shirt goes with grey pants? Style grey trousers with white, light blue, black, or navy shirts using our complete outfit matrix.",
    description: "Wondering what color shirt goes with grey pants? Style grey trousers with white, light blue, black, or navy shirts using our complete outfit matrix.",
    excerpt: "Grey pants offer the most versatile neutral foundation in menswear. Discover the exact shirt colors, contrast ratios, and leather pairings that create foolproof outfits.",
    leadExcerpt: "Grey pants offer the most versatile neutral foundation in menswear. Discover the exact shirt colors, contrast ratios, and leather pairings that create foolproof outfits.",
    shortLabel: "Grey Pants Combinations",
    primaryKeyword: "grey pants",
    searchVolume: 2900,
    publishedDate: "2026-03-15",
    updatedDate: "2026-03-15",
    date: "2026-03-15",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tailored grey trousers neatly paired with crisp white and blue dress shirts",
    related: ["what-color-shirt-goes-with-navy-pants", "what-color-shirt-goes-with-brown-pants", "what-color-shirt-goes-with-olive-green-pants"],
    sections: [],
  },
  {
    slug: "what-color-shirt-goes-with-brown-pants",
    title: "What Color Shirt Goes with Brown Pants? Complete Men's Guide",
    metaTitle: "What Color Shirt with Brown Pants? Style Guide",
    metaDescription: "Discover what color shirt to wear with brown pants. Match dark brown and tan trousers with blue, white, pink, or black shirts and leather shoes.",
    description: "Discover what color shirt to wear with brown pants. Match dark brown and tan trousers with blue, white, pink, or black shirts and leather shoes.",
    excerpt: "Brown pants provide a rich, earthy alternative to black and grey. Learn how to pair chocolate, tobacco, and chestnut trousers with precision shirt choices.",
    leadExcerpt: "Brown pants provide a rich, earthy alternative to black and grey. Learn how to pair chocolate, tobacco, and chestnut trousers with precision shirt choices.",
    shortLabel: "Brown Pants Styling",
    primaryKeyword: "brown pants",
    searchVolume: 2900,
    publishedDate: "2026-03-16",
    updatedDate: "2026-03-16",
    date: "2026-03-16",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rich chocolate brown trousers laid flat with sky blue and ecru shirts",
    related: ["what-color-shirt-goes-with-grey-pants", "what-color-shirt-goes-with-khaki-pants", "what-color-shirt-goes-with-olive-green-pants"],
    sections: [],
  },
  {
    slug: "what-color-shirt-goes-with-navy-pants",
    title: "What Color Shirt to Wear with Navy Pants? Men's Outfit Rules",
    metaTitle: "What Color Shirt with Navy Pants? Style Guide",
    metaDescription: "Learn what color shirt to wear with navy pants. Pair dark navy trousers with crisp white, pink, light grey, or patterned shirts for sharp outfits.",
    description: "Learn what color shirt to wear with navy pants. Pair dark navy trousers with crisp white, pink, light grey, or patterned shirts for sharp outfits.",
    excerpt: "Navy pants form the bedrock of business casual and tailored menswear. Master tonal contrasts, pastel balances, and shoe coordination effortlessly.",
    leadExcerpt: "Navy pants form the bedrock of business casual and tailored menswear. Master tonal contrasts, pastel balances, and shoe coordination effortlessly.",
    shortLabel: "Navy Pants Pairing",
    primaryKeyword: "navy blue pants",
    searchVolume: 1600,
    publishedDate: "2026-03-17",
    updatedDate: "2026-03-17",
    date: "2026-03-17",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Midnight navy blue tailored trousers styled with white and pastel shirts",
    related: ["what-color-shirt-goes-with-grey-pants", "what-color-shirt-goes-with-khaki-pants", "what-color-shirt-goes-with-brown-pants"],
    sections: [],
  },
  {
    slug: "what-color-shirt-goes-with-khaki-pants",
    title: "What Color Shirt Goes with Khaki Pants? Men's Style Rules",
    metaTitle: "What Color Shirt with Khaki Pants? Style Guide",
    metaDescription: "Find out what color shirt goes with khaki pants. Discover the best combinations with navy, white, olive, and denim shirts plus shoe recommendations.",
    description: "Find out what color shirt goes with khaki pants. Discover the best combinations with navy, white, olive, and denim shirts plus shoe recommendations.",
    excerpt: "Khaki pants are a staple that frequently gets styled wrong. Learn how to break away from dull office looks using high-contrast shirts and modern textures.",
    leadExcerpt: "Khaki pants are a staple that frequently gets styled wrong. Learn how to break away from dull office looks using high-contrast shirts and modern textures.",
    shortLabel: "Khaki Pants Rules",
    primaryKeyword: "khaki pants",
    searchVolume: 1300,
    publishedDate: "2026-03-18",
    updatedDate: "2026-03-18",
    date: "2026-03-18",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Classic tan khaki chinos paired with deep navy and white shirts",
    related: ["what-color-shirt-goes-with-navy-pants", "what-color-shirt-goes-with-olive-green-pants", "what-color-shirt-goes-with-grey-pants"],
    sections: [],
  },
  {
    slug: "what-color-shirt-goes-with-olive-green-pants",
    title: "What Color Shirt with Olive Green Pants? Top Men's Outfits",
    metaTitle: "What Color Shirt with Olive Pants? Style Guide",
    metaDescription: "Find what color shirt goes with olive green pants. Pair olive chinos with white, black, navy, or chambray shirts using our visual color matrix.",
    description: "Find what color shirt goes with olive green pants. Pair olive chinos with white, black, navy, or chambray shirts using our visual color matrix.",
    excerpt: "Olive green pants are the modern sartorial wildcard. Learn how to style green chinos and military trousers with clean, sharp shirt combinations.",
    leadExcerpt: "Olive green pants are the modern sartorial wildcard. Learn how to style green chinos and military trousers with clean, sharp shirt combinations.",
    shortLabel: "Olive Green Chinos",
    primaryKeyword: "olive green pants",
    searchVolume: 1600,
    publishedDate: "2026-03-19",
    updatedDate: "2026-03-19",
    date: "2026-03-19",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Olive green cotton chinos paired with white, black, and denim shirts",
    related: ["what-color-shirt-goes-with-grey-pants", "what-color-shirt-goes-with-navy-pants", "what-color-shirt-goes-with-khaki-pants"],
    sections: [],
  },
];

// --- 3. HELPER FUNCTIONS ---
export function getPostSlugs(): string[] {
  if (fs.existsSync(POSTS_DIRECTORY)) {
    const files = fs.readdirSync(POSTS_DIRECTORY).filter((file) => file.endsWith(".mdx"));
    if (files.length > 0) {
      return files.map((file) => file.replace(/\.mdx$/, ""));
    }
  }
  return POSTS.map((post) => post.slug);
}

export function getPostBySlug(slug: string): PostData | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(POSTS_DIRECTORY, `${realSlug}.mdx`);

  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      frontmatter: {
        slug: realSlug,
        title: String(data.title || ""),
        metaTitle: String(data.metaTitle || data.title || ""),
        metaDescription: String(data.description || ""),
        description: String(data.description || ""),
        excerpt: String(data.excerpt || data.description || ""),
        shortLabel: String(data.shortLabel || data.title || ""),
        date: String(data.date || "2026-03-15"),
        publishedDate: String(data.date || "2026-03-15"),
        updatedDate: String(data.updatedDate || data.date || "2026-03-15"),
        readTime: "7 min read",
        primaryKeyword: String(data.primaryKeyword || "Menswear"),
        searchVolume: Number(data.searchVolume || 1600),
        image: String(data.image || ""),
        imageAlt: String(data.imageAlt || ""),
        related: Array.isArray(data.related) ? data.related.map(String) : [],
        faqs: Array.isArray(data.faqs) ? data.faqs : [],
        sections: Array.isArray(data.sections) ? data.sections : [],
      },
      content,
    };
  }

  const fallback = POSTS.find((p) => p.slug === realSlug);
  if (!fallback) return null;

  return {
    frontmatter: fallback,
    content: fallback.leadExcerpt || "",
  };
}

export function getAllPosts(): PostData[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is PostData => post !== null);
}

export function getRelatedPosts(currentSlug: string, relatedSlugs: string[]): PostMeta[] {
  const targetSlugs = relatedSlugs && relatedSlugs.length > 0 
    ? relatedSlugs 
    : POSTS.filter(p => p.slug !== currentSlug).map(p => p.slug).slice(0, 3);

  return targetSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => {
      const post = getPostBySlug(slug);
      return post ? post.frontmatter : null;
    })
    .filter((post): post is PostMeta => post !== null);
}
