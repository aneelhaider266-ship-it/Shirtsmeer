import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const SITE_URL = "https://shirtsmeer.com";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "posts");
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80";


const SLUG_TO_JSON: Record<string, string> = {
  "what-color-shirt-goes-with-grey-pants": "what-color-shirt-goes-with-grey-pants.json",
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
  "interview-outfit-guide": "interview-outfit-guide.json",
  "what-color-shirt-goes-with-black-pants": "what-color-shirt-goes-with-black-pants.json",
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
  searchVolume?: number;
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
  title: "What Color Shirt Goes with Grey Pants? 7 Best Combinations",
  metaTitle: "What Color Shirt Goes with Grey Pants? 7 Best Combinations",
  metaDescription: "Discover the best shirt colors to wear with grey pants, including white, navy, light blue, black, pink, and lavender. Explore outfit ideas for every occasion.",
  description: "Discover the best shirt colors to wear with grey pants, including white, navy, light blue, black, pink, and lavender. Explore outfit ideas for every occasion.",
  excerpt: "Find the best shirt colors for grey pants, from crisp white and light blue to navy, black, pink, and lavender. Explore outfit combinations for work and casual wear.",
  leadExcerpt: "Find the best shirt colors for grey pants, from crisp white and light blue to navy, black, pink, and lavender. Explore outfit combinations for work and casual wear.",
  shortLabel: "Grey Pants Combinations",
  primaryKeyword: "what color shirt goes with grey pants",
  publishedDate: "2026-03-15",
  updatedDate: "2026-11-03",
  date: "2026-03-15",
  readTime: "7 min read",
  image: DEFAULT_IMAGE,
  imageAlt: "Tailored grey trousers neatly paired with crisp white and blue dress shirts",
  related: [
    "what-color-shirt-goes-with-navy-pants",
    "charles-tyrwhitt-vs-kamakura-dress-shirts",
    "poplin-vs-twill-vs-oxford-shirt-fabrics"
  ],
},
  {
  slug: "what-color-shirt-goes-with-brown-pants",
  title: "What Color Shirt Goes with Brown Pants? Best Colors",
  metaTitle: "What Color Shirt Goes with Brown Pants? Easy Guide",
  metaDescription: "What top goes with brown pants? Compare shirt colors for light, medium and dark brown trousers, with outfit ideas, shoes and shade tips.",
  description: "Find shirt and top colors for light, medium and dark brown pants, with outfit ideas for work, casual days and evenings.",
  excerpt: "Find the best shirt colors for brown pants, from light tan to dark chocolate, with easy combinations for work, weekends and evenings.",
  leadExcerpt: "Find the best shirt colors for brown pants, from light tan to dark chocolate, with easy combinations for work, weekends and evenings.",
  shortLabel: "Brown Pants Styling",
  primaryKeyword: "what color shirt goes with brown pants",
  publishedDate: "2026-03-16",
  updatedDate: "2026-11-15",
  date: "2026-03-16",
  readTime: "7 min read",
  image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Brown trousers styled with light blue and cream shirts",
  related: [
    "what-color-shirt-goes-with-khaki-pants",
    "what-color-shirt-goes-with-navy-pants",
    "what-color-shirt-goes-with-olive-green-pants"
  ],
},
  {
    slug: "what-color-shirt-goes-with-navy-pants",
    title: "What Color Shirt Goes with Navy Pants? 7 Best Combinations",
    metaTitle: "What Color Shirt Goes with Navy Pants? 7 Best Combinations",
    metaDescription: "Find shirt colors for navy pants, including white, light blue, pink and grey. See smart combinations for work, weekends and formal occasions.",
    description: "Find shirt colors for navy pants, including white, light blue, pink and grey. See smart combinations for work, weekends and formal occasions.",
    excerpt: "Discover how to pair navy pants with white, light blue, pink and grey shirts for polished workwear, smart-casual outfits and relaxed weekends.",
    leadExcerpt: "Discover how to pair navy pants with white, light blue, pink and grey shirts for polished workwear, smart-casual outfits and relaxed weekends.",
    shortLabel: "Navy Pants Pairing",
    primaryKeyword: "navy blue pants",
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
    title: "What Color Shirt Goes with Khaki Pants? Men's Guide",
    metaTitle: "What Color Shirt Goes with Khaki Pants? Men's Guide",
    metaDescription: "Find the best shirts for khaki pants, from white and blue to grey, burgundy and olive. Get dress-shirt, casual outfit and shade-matching tips.",
    description: "Find shirt colors for khaki pants, including office dress shirts, casual button-downs, and tips for distinguishing khaki, tan and beige.",
    excerpt: "Choose the right shirt for khaki pants with office-ready combinations, casual ideas and clear advice on khaki, tan and beige shades.",
    leadExcerpt: "Choose the right shirt for khaki pants with office-ready combinations, casual ideas and clear advice on khaki, tan and beige shades.",
    shortLabel: "Khaki Pants Rules",
    primaryKeyword: "what color shirt goes with khaki pants",
    publishedDate: "2026-03-18",
    updatedDate: "2026-11-15",
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
    title: "Collars & Co Dress Collar Polo Review: Fit & Value",
    metaTitle: "Collars & Co Dress Collar Polo Review: Fit & Value",
    metaDescription: "Is the Collars & Co Dress Collar Polo worth it? Check official fit, fabric and care guidance, buyer-review considerations and who it suits.",
    description: "A research-based Collars & Co Dress Collar Polo review covering official fit guidance, fabric, care instructions, buyer-review checks and value.",
    excerpt: "Considering a Collars & Co Dress Collar Polo? Review its fit options, performance fabric, care instructions and whether the structured collar suits your wardrobe.",
    leadExcerpt: "Considering a Collars & Co Dress Collar Polo? Review its fit options, performance fabric, care instructions and whether the structured collar suits your wardrobe.",
    shortLabel: "Collars & Co Review",
    primaryKeyword: "collars and co reviews",
    publishedDate: "2026-03-20",
    updatedDate: "2026-11-15",
    date: "2026-03-20",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Collars and Co dress collar polo layered neatly under a navy sweater",
    related: ["untuckit-shirts-sizing-and-fit-guide", "how-a-dress-shirt-should-fit-guide", "poplin-vs-twill-vs-oxford-shirt-fabrics", "interview-outfit-guide"],
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
    title: "Do Untuckit Shirts Run Small? Sizing Guide",
    metaTitle: "Do Untuckit Shirts Run Small? Men's Sizing Guide",
    metaDescription: "Do Untuckit shirts run small? Yes—men's shirts fit smaller than traditional brands. Compare fits, check measurements, and learn when to size up.",
    description: "Do Untuckit shirts run small? Yes—men's shirts fit smaller than traditional brands. Compare fits, check measurements, and learn when to size up.",
    excerpt: "Do Untuckit shirts run small? Check the official size chart, compare Regular, Slim, Relaxed and Tall fits, and learn when to order one size up.",
    leadExcerpt: "Do Untuckit shirts run small? Check the official size chart, compare Regular, Slim, Relaxed and Tall fits, and learn when to order one size up.",
    shortLabel: "Untuckit Sizing Guide",
    primaryKeyword: "do untuckit shirts run small",
    publishedDate: "2026-03-22",
    updatedDate: "2026-11-15",
    date: "2026-03-22",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Casual button down shirt worn untucked with classic chinos",
    related: ["how-a-dress-shirt-should-fit-guide", "what-color-shirt-goes-with-khaki-pants", "criquet-shirts-retro-polo-review"],
  },
  {
    slug: "criquet-shirts-retro-polo-review",
    title: "Criquet Shirts Review: Is the Players Polo Worth It?",
    metaTitle: "Criquet Shirts Review: The Players Polo Guide",
    metaDescription: "Criquet Shirts in-depth review. Explore the deep 4-button placket, removable collar stays, organic cotton pique weave, and country club styling.",
    description: "Criquet Shirts in-depth review. Explore the deep 4-button placket, removable collar stays, organic cotton pique weave, and country club styling.",
    excerpt: "Criquet brought vintage golf style back into menswear. We test the iconic Players Polo on fabric breathability, collar firmness, and longevity.",
    leadExcerpt: "Criquet brought vintage golf style back into menswear. We test the iconic Players Polo on fabric breathability, collar firmness, and longevity.",
    shortLabel: "Criquet Polo Review",
    primaryKeyword: "criquet shirts",
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
    title: "Comfort Colors 1717 vs Gildan 5000: Which Is Better?",
    metaTitle: "Comfort Colors 1717 vs Gildan 5000 Review",
    metaDescription: "Comfort Colors 1717 vs Gildan 5000 compared. Discover differences in garment dye, cotton softness, shrinkage, durability, and streetwear fit.",
    description: "Comfort Colors 1717 vs Gildan 5000 compared. Discover differences in garment dye, cotton softness, shrinkage, durability, and streetwear fit.",
    excerpt: "Which blank t-shirt should you buy for casual wear or merch? We compare heavyweight ringspun Comfort Colors with budget champion Gildan 5000.",
    leadExcerpt: "Which blank t-shirt should you buy for casual wear or merch? We compare heavyweight ringspun Comfort Colors with budget champion Gildan 5000.",
    shortLabel: "Comfort Colors vs Gildan",
    primaryKeyword: "comfort colors t shirts",
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
    title: "Men's Shirt Collar Types: 10 Styles Explained",
    metaTitle: "Men's Shirt Collar Types Explained: 10 Styles Guide",
    metaDescription: "Visual guide to 10 men's shirt collar styles. Match spread, button-down, cutaway, and Cuban collars to your face shape, tie knots, and formal suits.",
    description: "Visual guide to 10 men's shirt collar styles. Match spread, button-down, cutaway, and Cuban collars to your face shape, tie knots, and formal suits.",
    excerpt: "A shirt collar defines your face proportions and suit formality. Learn the differences between semi-spread, point, cutaway, and camp collars.",
    leadExcerpt: "A shirt collar defines your face proportions and suit formality. Learn the differences between semi-spread, point, cutaway, and camp collars.",
    shortLabel: "Shirt Collar Guide",
    primaryKeyword: "mens shirt collar types",
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
  title: "Poplin vs Oxford vs Twill: Key Differences & Best Uses",
  metaTitle: "Poplin vs Oxford vs Twill: Key Differences & Best Uses",
  metaDescription:
    "Compare poplin vs Oxford, twill and broadcloth shirt fabrics. Learn the differences in weave, texture, formality, wrinkles and everyday use.",
  description:
    "Compare poplin, Oxford, twill and broadcloth shirt fabrics, including weave, texture, formality, crease appearance and when to wear each.",
  excerpt:
    "Compare poplin, Oxford and twill shirt fabrics by weave, texture, formality and everyday use.",
  leadExcerpt:
    "Compare poplin, Oxford and twill shirt fabrics by weave, texture, formality and everyday use.",
  shortLabel: "Poplin vs Oxford Fabrics",
  primaryKeyword: "poplin vs oxford",
  searchVolume: 1900,
  publishedDate: "2026-03-26",
  updatedDate: "2026-11-15",
  date: "2026-03-26",
  readTime: "8 min read",
  image: DEFAULT_IMAGE,
  imageAlt: "Close-up comparison of poplin, twill, and Oxford shirt fabric textures",
  related: [
    "charles-tyrwhitt-vs-kamakura-dress-shirts",
    "how-a-dress-shirt-should-fit-guide",
    "interview-outfit-guide",
    "what-color-shirt-goes-with-khaki-pants"
  ],
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
    title: "How Should a Dress Shirt Fit? Slim, Classic & Athletic",
    metaTitle: "How a Dress Shirt Should Actually Fit: Men's Guide",
    metaDescription: "Complete dress shirt fit guide. Master the 2-finger collar rule, shoulder seam placement, sleeve length at wrist bone, and eliminating muffin tops.",
    description: "Complete dress shirt fit guide. Master the 2-finger collar rule, shoulder seam placement, sleeve length at wrist bone, and eliminating muffin tops.",
    excerpt: "Even an expensive bespoke shirt looks cheap if the fit is off. Learn the 5 exact anatomical checkpoints for a perfect dress shirt fit.",
    leadExcerpt: "Even an expensive bespoke shirt looks cheap if the fit is off. Learn the 5 exact anatomical checkpoints for a perfect dress shirt fit.",
    shortLabel: "Dress Shirt Fit Guide",
    primaryKeyword: "how should a dress shirt fit",
    publishedDate: "2026-03-28",
    updatedDate: "2026-03-28",
    date: "2026-03-28",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tailored slim-fit dress shirt fitting cleanly across shoulders and chest",
    related: ["untuckit-shirts-sizing-and-fit-guide", "charles-tyrwhitt-vs-kamakura-dress-shirts", "what-color-shirt-goes-with-navy-pants"],
  },
  {
    slug: "interview-outfit-guide",
    title: "Interview Outfit: Best Work Interview Outfits for Men",
    metaTitle: "Interview Outfit: Best Work Interview Outfits for Men",
    metaDescription: "Master your next job interview with our complete interview outfit guide. Discover simple interview attire, business casual rules, and shoe pairings.",
    description: "Master your next job interview with our complete interview outfit guide. Discover simple interview attire, business casual rules, and shoe pairings.",
    excerpt: "Master your next job interview with our complete interview outfit guide. Discover simple interview attire, business casual rules, and shoe pairings.",
    leadExcerpt: "Master your next job interview with our complete interview outfit guide. Discover simple interview attire, business casual rules, and shoe pairings.",
    shortLabel: "Interview Outfits",
    primaryKeyword: "interview outfit",
    publishedDate: "2026-03-29",
    updatedDate: "2026-03-29",
    date: "2026-03-29",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professional men interview outfit with navy blue blazer and white dress shirt",
    related: [
      "what-color-shirt-goes-with-navy-pants",
      "what-color-shirt-goes-with-grey-pants",
      "what-color-shirt-goes-with-khaki-pants"
    ],
  },
{
  slug: "what-color-shirt-goes-with-black-pants",
  title: "What Color Shirt Goes with Black Pants? 7 Best Matches",
  metaTitle: "What Color Shirt Goes with Black Pants? Men's Guide",
  metaDescription: "Find the best shirt colors for black pants, from white and light blue to grey, cream, olive and burgundy. Compare outfits, shoes and styling tips for men.",
  description: "Find the best shirt colors for black pants, from white and light blue to grey, cream, olive and burgundy. Compare outfits, shoes and styling tips for men.",
  excerpt: "Discover what color shirt goes with black pants. Explore white, light blue, grey, cream, olive and burgundy combinations, plus shoes and outfit ideas for men.",
  leadExcerpt: "Discover what color shirt goes with black pants. Explore white, light blue, grey, cream, olive and burgundy combinations, plus shoes and outfit ideas for men.",
  shortLabel: "Black Pants Outfits",
  primaryKeyword: "what color shirt goes with black pants",
  publishedDate: "2026-11-05",
  updatedDate: "2026-11-06",
  date: "2026-11-05",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Men's black trousers styled with a crisp white dress shirt",
  related: [
    "what-color-shirt-goes-with-grey-pants",
    "what-color-shirt-goes-with-navy-pants",
    "interview-outfit-guide"
  ]
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
