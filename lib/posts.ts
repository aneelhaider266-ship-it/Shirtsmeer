import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const SITE_URL = "https://shirtsmeer.com";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "posts");
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80";

const SLUG_TO_JSON: Record<string, string> = {
  "what-color-shirt-goes-with-grey-pants": "grey-pants.json",
  "what-color-shirt-goes-with-brown-pants": "brown-pants.json",
  "what-color-shirt-goes-with-navy-pants": "navy-pants.json",
  "what-color-shirt-goes-with-khaki-pants": "khaki-pants.json",
  "what-color-shirt-goes-with-olive-green-pants": "olive-green-pants.json",
  "collars-and-co-dress-collar-polo-review": "collars-and-co.json",
  "charles-tyrwhitt-vs-kamakura-dress-shirts": "charles-tyrwhitt-vs-kamakura.json",
  "untuckit-shirts-sizing-and-fit-guide": "untuckit.json",
  "criquet-shirts-retro-polo-review": "criquet-shirts.json",
  "comfort-colors-1717-vs-gildan-5000-review": "comfort-colors-vs-gildan.json",
  "mens-shirt-collar-types-guide": "shirt-collars.json",
  "poplin-vs-twill-vs-oxford-shirt-fabrics": "shirt-fabrics.json",
  "how-to-style-cuban-camp-collar-shirts": "cuban-collar-styling.json",
  "how-a-dress-shirt-should-fit-guide": "dress-shirt-fit-guide.json",
};

export interface FAQItem {
  question: string;
  answer: string;
  [key: string]: any;
}

export interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: any[];
  [key: string]: any;
}

export interface PostContent {
  quickAnswerTitle?: string;
  quickAnswer?: string;
  intro?: string;
  swatchHeading?: string;
  swatches?: any[];
  sections: Section[];
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
  [key: string]: any;
}

export interface PostData {
  frontmatter: PostMeta;
  content: string;
  contentData: PostContent | null;
  [key: string]: any;
}

export const POSTS: PostMeta[] = [
  {
    slug: "what-color-shirt-goes-with-grey-pants",
    title: "What Color Shirts Go with Grey Dress Pants? Shirts That Go with Grey Pants Guide",
    metaTitle: "What Color Pants with Grey Shirt? Shirts That Go with Grey Pants",
    metaDescription: "Wondering what color shirt goes with grey pants? Style grey trousers with white, light blue, black, or navy shirts using our complete outfit matrix.",
    description: "Wondering what color shirt goes with grey pants? Style grey trousers with white, light blue, black, or navy shirts using our complete outfit matrix.",
    excerpt: "Grey pants offer the most versatile neutral foundation in menswear. Discover the exact shirt colors, contrast ratios, and leather pairings that create foolproof outfits.",
    leadExcerpt: "Grey pants offer the most versatile neutral foundation in menswear. Discover the exact shirt colors, contrast ratios, and leather pairings that create foolproof outfits.",
    shortLabel: "Grey Pants Combinations",
    primaryKeyword: "what color shirt goes with grey pants",
    searchVolume: 2900,
    publishedDate: "2026-03-15",
    updatedDate: "2026-03-15",
    date: "2026-03-15",
    readTime: "7 min read",
    image: DEFAULT_IMAGE,
    imageAlt: "Tailored grey trousers neatly paired with crisp white and blue dress shirts",
    related: ["what-color-shirt-goes-with-navy-pants", "charles-tyrwhitt-vs-kamakura-dress-shirts", "poplin-vs-twill-vs-oxford-shirt-fabrics"],
  },
  {
    slug: "what-color-shirt-goes-with-brown-pants",
    title: "Shirts to Wear with Brown Pants: What Color Goes Best?",
    metaTitle: "Shirts to Wear with Brown Pants: Color Guide",
    metaDescription: "Discover what color shirt to wear with brown pants. Match dark brown and tan trousers with blue, white, pink, or black shirts and leather shoes.",
    description: "Discover what color shirt to wear with brown pants. Match dark brown and tan trousers with blue, white, pink, or black shirts and leather shoes.",
    excerpt: "Brown pants provide a rich, earthy alternative to black and grey. Learn how to pair chocolate, tobacco, and chestnut trousers with precision shirt choices.",
    leadExcerpt: "Brown pants provide a rich, earthy alternative to black and grey. Learn how to pair chocolate, tobacco, and chestnut trousers with precision shirt choices.",
    shortLabel: "Brown Pants Styling",
    primaryKeyword: "shirts to wear with brown pants",
    searchVolume: 2900,
    publishedDate: "2026-03-16",
    updatedDate: "2026-03-16",
    date: "2026-03-16",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rich chocolate brown trousers laid flat with sky blue and ecru shirts",
    related: ["what-color-shirt-goes-with-khaki-pants", "how-to-style-cuban-camp-collar-shirts", "criquet-shirts-retro-polo-review"],
  },
  {
    slug: "what-color-shirt-goes-with-navy-pants",
    title: "Blue Pants with What Color Shirt? What Color Pants with Navy Shirt",
    metaTitle: "Blue Pants with What Color Shirt? Navy Shirt Style Guide",
    metaDescription: "Blue pants with what color shirt? Pair navy trousers with white, pink, light blue, or grey shirts for the office, business meetings, and weekends.",
    description: "Blue pants with what color shirt? Pair navy trousers with white, pink, light blue, or grey shirts for the office, business meetings, and weekends.",
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
    related: ["what-color-shirt-goes-with-grey-pants", "collars-and-co-dress-collar-polo-review", "how-a-dress-shirt-should-fit-guide"],
  },
  {
    slug: "what-color-shirt-goes-with-khaki-pants",
    title: "What Color Dress Shirt with Khaki Pants? Men's Style Rules",
    metaTitle: "What Color Dress Shirt with Khaki Pants? Style Guide",
    metaDescription: "Find out what color dress shirt goes with khaki pants. Discover the best combinations with navy, white, olive, and denim shirts plus shoe recommendations.",
    description: "Find out what color dress shirt goes with khaki pants. Discover the best combinations with navy, white, olive, and denim shirts plus shoe recommendations.",
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
    related: ["what-color-shirt-goes-with-olive-green-pants", "untuckit-shirts-sizing-and-fit-guide", "poplin-vs-twill-vs-oxford-shirt-fabrics"],
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
    related: ["what-color-shirt-goes-with-grey-pants", "how-to-style-cuban-camp-collar-shirts", "comfort-colors-1717-vs-gildan-5000-review"],
  },
  {
    slug: "collars-and-co-dress-collar-polo-review",
    title: "Collars & Co Review: Is the Dress Collar Polo Actually Worth It?",
    metaTitle: "Collars & Co Review: Dress Collar Polo Guide",
    metaDescription: "Honest Collars & Co dress collar polo review. Learn how the firm structured collar holds up under sweaters, office comfort, sizing, and styling rules.",
    description: "Honest Collars & Co dress collar polo review. Learn how the firm structured collar holds up under sweaters, office comfort, sizing, and styling rules.",
    excerpt: "Collars & Co solved the floppy collar problem for business casual. Here is an honest review of the fabric, collar firmness, durability, and fit.",
    leadExcerpt: "Collars & Co solved the floppy collar problem for business casual. Here is an honest review of the fabric, collar firmness, durability, and fit.",
    shortLabel: "Collars & Co Review",
    primaryKeyword: "collars and co men's shirts",
    searchVolume: 872,
    publishedDate: "2026-03-20",
    updatedDate: "2026-03-20",
    date: "2026-03-20",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Collars and Co dress collar polo layered neatly under a navy sweater",
    related: ["mens-shirt-collar-types-guide", "what-color-shirt-goes-with-navy-pants", "charles-tyrwhitt-vs-kamakura-dress-shirts"],
  },
  {
    slug: "charles-tyrwhitt-vs-kamakura-dress-shirts",
    title: "Charles Tyrwhitt vs. Kamakura: Which Dress Shirt Fits Best?",
    metaTitle: "Charles Tyrwhitt vs Kamakura: Shirt Guide",
    metaDescription: "Charles Tyrwhitt vs Kamakura dress shirts compared. Compare non-iron twill vs Japanese single-needle tailoring, collar rolls, longevity, and price.",
    description: "Charles Tyrwhitt vs Kamakura dress shirts compared. Compare non-iron twill vs Japanese single-needle tailoring, collar rolls, longevity, and price.",
    excerpt: "Can affordable British tailoring beat authentic Japanese Oxford cloth? We compare Charles Tyrwhitt and Kamakura on fabric quality, collar roll, and fit.",
    leadExcerpt: "Can affordable British tailoring beat authentic Japanese Oxford cloth? We compare Charles Tyrwhitt and Kamakura on fabric quality, collar roll, and fit.",
    shortLabel: "CT vs Kamakura",
    primaryKeyword: "charles tyrwhitt shirts",
    searchVolume: 946,
    publishedDate: "2026-03-21",
    updatedDate: "2026-03-21",
    date: "2026-03-21",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Crisp white and light blue business dress shirts folded side by side",
    related: ["mens-shirt-collar-types-guide", "poplin-vs-twill-vs-oxford-shirt-fabrics", "what-color-shirt-goes-with-grey-pants"],
  },
  {
    slug: "untuckit-shirts-sizing-and-fit-guide",
    title: "Untuckit Shirts Review: Sizing, Fit, and How to Wear Untucked",
    metaTitle: "Untuckit Shirts Review: Sizing & Fit Guide",
    metaDescription: "Untuckit shirts review and sizing breakdown. Learn the right hem length for your height, slim vs regular fit, and pairing untucked shirts with chinos.",
    description: "Untuckit shirts review and sizing breakdown. Learn the right hem length for your height, slim vs regular fit, and pairing untucked shirts with chinos.",
    excerpt: "Wearing dress shirts untucked often looks messy. Does Untuckit's contoured hem really fix the proportions? We break down the exact sizing formula.",
    leadExcerpt: "Wearing dress shirts untucked often looks messy. Does Untuckit's contoured hem really fix the proportions? We break down the exact sizing formula.",
    shortLabel: "Untuckit Fit Review",
    primaryKeyword: "untuckit shirts for men",
    searchVolume: 1877,
    publishedDate: "2026-03-22",
    updatedDate: "2026-03-22",
    date: "2026-03-22",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Casual button down shirt worn untucked with classic chinos",
    related: ["how-a-dress-shirt-should-fit-guide", "what-color-shirt-goes-with-khaki-pants", "criquet-shirts-retro-polo-review"],
  },
  {
    slug: "criquet-shirts-retro-polo-review",
    title: "Criquet Shirts Review: The Cult-Favorite Players Polo Examined",
    metaTitle: "Criquet Shirts Review: The Players Polo Guide",
    metaDescription: "Criquet Shirts in-depth review. Explore the deep 4-button placket, removable collar stays, organic cotton pique weave, and country club styling.",
    description: "Criquet Shirts in-depth review. Explore the deep 4-button placket, removable collar stays, organic cotton pique weave, and country club styling.",
    excerpt: "Criquet brought vintage golf style back into menswear. We test the iconic Players Polo on fabric breathability, collar firmness, and longevity.",
    leadExcerpt: "Criquet brought vintage golf style back into menswear. We test the iconic Players Polo on fabric breathability, collar firmness, and longevity.",
    shortLabel: "Criquet Polo Review",
    primaryKeyword: "criquet shirts",
    searchVolume: 1044,
    publishedDate: "2026-03-23",
    updatedDate: "2026-03-23",
    date: "2026-03-23",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Vintage retro golf polo shirt laid flat with casual chinos",
    related: ["what-color-shirt-goes-with-brown-pants", "mens-shirt-collar-types-guide", "collars-and-co-dress-collar-polo-review"],
  },
  {
    slug: "comfort-colors-1717-vs-gildan-5000-review",
    title: "Comfort Colors 1717 vs Gildan 5000: Which Blank T-Shirt Is Best?",
    metaTitle: "Comfort Colors 1717 vs Gildan 5000 Review",
    metaDescription: "Comfort Colors 1717 vs Gildan 5000 compared. Discover differences in garment dye, cotton softness, shrinkage, durability, and streetwear fit.",
    description: "Comfort Colors 1717 vs Gildan 5000 compared. Discover differences in garment dye, cotton softness, shrinkage, durability, and streetwear fit.",
    excerpt: "Which blank t-shirt should you buy for casual wear or merch? We compare heavyweight ringspun Comfort Colors with budget champion Gildan 5000.",
    leadExcerpt: "Which blank t-shirt should you buy for casual wear or merch? We compare heavyweight ringspun Comfort Colors with budget champion Gildan 5000.",
    shortLabel: "Comfort Colors vs Gildan",
    primaryKeyword: "comfort colors t shirts",
    searchVolume: 1225,
    publishedDate: "2026-03-24",
    updatedDate: "2026-03-24",
    date: "2026-03-24",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Heavyweight ringspun cotton t-shirts folded in neutral pastel colors",
    related: ["poplin-vs-twill-vs-oxford-shirt-fabrics", "what-color-shirt-goes-with-olive-green-pants", "untuckit-shirts-sizing-and-fit-guide"],
  },
  {
    slug: "mens-shirt-collar-types-guide",
    title: "Men's Shirt Collar Types: 10 Styles Explained (Spread, Point & Cuban)",
    metaTitle: "Men's Shirt Collar Types Explained: 10 Styles Guide",
    metaDescription: "Visual guide to 10 men's shirt collar styles. Match spread, button-down, cutaway, and Cuban collars to your face shape, tie knots, and formal suits.",
    description: "Visual guide to 10 men's shirt collar styles. Match spread, button-down, cutaway, and Cuban collars to your face shape, tie knots, and formal suits.",
    excerpt: "A shirt collar defines your face proportions and suit formality. Learn the differences between semi-spread, point, cutaway, and camp collars.",
    leadExcerpt: "A shirt collar defines your face proportions and suit formality. Learn the differences between semi-spread, point, cutaway, and camp collars.",
    shortLabel: "Shirt Collar Guide",
    primaryKeyword: "mens shirt collar types",
    searchVolume: 2400,
    publishedDate: "2026-03-25",
    updatedDate: "2026-03-25",
    date: "2026-03-25",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Different men's dress shirt collar styles arranged in studio flat lay",
    related: ["charles-tyrwhitt-vs-kamakura-dress-shirts", "collars-and-co-dress-collar-polo-review", "how-a-dress-shirt-should-fit-guide"],
  },
  {
    slug: "poplin-vs-twill-vs-oxford-shirt-fabrics",
    title: "Broadcloth vs Twill vs Oxford Cloth: The Ultimate Fabric Breakdown",
    metaTitle: "Broadcloth vs Twill vs Oxford Cloth: Fabric Guide",
    metaDescription: "Broadcloth (poplin) vs twill vs Oxford cloth (OCBD) shirt fabrics compared. Learn which weave is best for office work, breathability, summer heat, and wrinkle resistance.",
    description: "Broadcloth (poplin) vs twill vs Oxford cloth (OCBD) shirt fabrics compared. Learn which weave is best for office work, breathability, summer heat, and wrinkle resistance.",
    excerpt: "Should you choose crisp poplin, silky diagonal twill, or rugged basketweave Oxford? We compare weight, formality, breathability, and ease of ironing.",
    leadExcerpt: "Should you choose crisp poplin, silky diagonal twill, or rugged basketweave Oxford? We compare weight, formality, breathability, and ease of ironing.",
    shortLabel: "Shirt Fabric Breakdown",
    primaryKeyword: "broadcloth vs twill",
    searchVolume: 1900,
    publishedDate: "2026-03-26",
    updatedDate: "2026-03-26",
    date: "2026-03-26",
    readTime: "8 min read",
    image: DEFAULT_IMAGE,
    imageAlt: "Close up macro texture of woven poplin, diagonal twill, and Oxford cloth",
    related: ["charles-tyrwhitt-vs-kamakura-dress-shirts", "what-color-shirt-goes-with-grey-pants", "what-color-shirt-goes-with-khaki-pants"],
  },
  {
    slug: "how-to-style-cuban-camp-collar-shirts",
    title: "How to Wear a Cuban Collar (Camp Collar) Shirt in 2026",
    metaTitle: "How to Style Cuban Collar Shirts: Men's Guide",
    metaDescription: "Master the Cuban collar (camp collar) shirt trend. How to wear open notch lapels with pleated trousers, linen shorts, loafers, and summer layering.",
    description: "Master the Cuban collar (camp collar) shirt trend. How to wear open notch lapels with pleated trousers, linen shorts, loafers, and summer layering.",
    excerpt: "Camp collar shirts are the ultimate warm-weather statement. Learn how to style retro open collars with chinos and trousers without looking like a tourist.",
    leadExcerpt: "Camp collar shirts are the ultimate warm-weather statement. Learn how to style retro open collars with chinos and trousers without looking like a tourist.",
    shortLabel: "Cuban Collar Styling",
    primaryKeyword: "camp collar shirt styling",
    searchVolume: 1600,
    publishedDate: "2026-03-27",
    updatedDate: "2026-03-27",
    date: "2026-03-27",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Man wearing a relaxed linen Cuban collar shirt open over a white undershirt",
    related: ["what-color-shirt-goes-with-olive-green-pants", "what-color-shirt-goes-with-brown-pants", "mens-shirt-collar-types-guide"],
  },
  {
    slug: "how-a-dress-shirt-should-fit-guide",
    title: "How a Dress Shirt Should Fit: Slim vs Classic vs Athletic Fit",
    metaTitle: "How a Dress Shirt Should Actually Fit: Men's Guide",
    metaDescription: "Complete dress shirt fit guide. Master the 2-finger collar rule, shoulder seam placement, sleeve length at wrist bone, and eliminating muffin tops.",
    description: "Complete dress shirt fit guide. Master the 2-finger collar rule, shoulder seam placement, sleeve length at wrist bone, and eliminating muffin tops.",
    excerpt: "Even an expensive bespoke shirt looks cheap if the fit is off. Learn the 5 exact anatomical checkpoints for a perfect dress shirt fit.",
    leadExcerpt: "Even an expensive bespoke shirt looks cheap if the fit is off. Learn the 5 exact anatomical checkpoints for a perfect dress shirt fit.",
    shortLabel: "Dress Shirt Fit Guide",
    primaryKeyword: "how should a dress shirt fit",
    searchVolume: 2900,
    publishedDate: "2026-03-28",
    updatedDate: "2026-03-28",
    date: "2026-03-28",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tailored slim-fit dress shirt fitting cleanly across shoulders and chest",
    related: ["untuckit-shirts-sizing-and-fit-guide", "charles-tyrwhitt-vs-kamakura-dress-shirts", "what-color-shirt-goes-with-navy-pants"],
  },
];

export function getPostSlugs(): string[] {
  return POSTS.map((post) => post.slug);
}

export function getPostBySlug(slug: string): PostData | null {
  const fallback = POSTS.find((p) => p.slug === slug);
  if (!fallback) return null;

  // 1. Check if .mdx file exists (Grey Pants)
  const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  let mdxContent = "";
  if (fs.existsSync(mdxPath)) {
    try {
      const raw = fs.readFileSync(mdxPath, "utf8");
      const clean = raw.replace(/^```[a-z]*\r?\n/, "").trimStart();
      const { content } = matter(clean);
      mdxContent = content.replace(/^---[\s\S]*?---\r?\n?/, "").trim();
    } catch (err) {
      console.error("MDX Read Error:", err);
    }
  }

  // 2. Check if .json file exists
  const jsonFileName = SLUG_TO_JSON[slug];
  let contentData: PostContent | null = null;
  if (jsonFileName) {
    const jsonPath = path.join(POSTS_DIRECTORY, jsonFileName);
    if (fs.existsSync(jsonPath)) {
      try {
        const rawJson = fs.readFileSync(jsonPath, "utf8");
        contentData = JSON.parse(rawJson);
      } catch (err) {
        console.error("JSON Read Error:", err);
      }
    }
  }

  return {
    frontmatter: fallback,
    content: mdxContent,
    contentData,
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
