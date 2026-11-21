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
  "linen-pants-men-outfit": "linen-pants-men-outfit.json",
  "dress-pants-with-boots": "dress-pants-with-boots.json",
  "best-chinos-and-shirt-combinations-for-men": "best-chinos-and-shirt-combinations-for-men.json",
  "what-color-pants-go-with-grey-shirt": "what-color-pants-go-with-grey-shirt.json",
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
  title: "What Color Shirt Goes with Grey Pants? Best Colors & Outfits",
  metaTitle: "Shirts to Wear with Grey Pants",
  metaDescription: "What color shirt goes with grey pants? Compare white, blue, navy, black and pink shirts for light grey, medium grey and charcoal trousers.",
  description: "Compare the best shirt colors for grey pants, including white, light blue, navy, black, pink and lavender, with outfit ideas for work and weekends.",
  excerpt: "Find shirt colors that work with light grey, medium grey and charcoal pants, with practical outfit ideas for work, evenings and weekends.",
  leadExcerpt: "Find shirt colors that work with light grey, medium grey and charcoal pants, with practical outfit ideas for work, evenings and weekends.",
  shortLabel: "Grey Pants Combinations",
  primaryKeyword: "what color shirt goes with grey pants",
  publishedDate: "2026-03-15",
  updatedDate: "2026-11-16",
  date: "2026-03-15",
  readTime: "9 min read",
  image: "/sage-shirt-grey-pants-editorial.webp",
  imageAlt: "Sage green shirt paired with tailored grey trousers",
  related: [
    "what-color-shirt-goes-with-navy-pants",
    "charles-tyrwhitt-vs-kamakura-dress-shirts",
    "poplin-vs-twill-vs-oxford-shirt-fabrics"
  ],
},
  {
  slug: "what-color-shirt-goes-with-brown-pants",
  title: "What Color Shirt Goes with Brown Pants? 8 Best Matches",
  metaTitle: "Shirts to Wear with Brown Pants",
  metaDescription: "What color shirt goes with brown pants? Compare 8 shirt colors for tan, medium and dark brown trousers, with outfit ideas for work and weekends.",
  description: "What color shirt goes with brown pants? Compare white, cream, light blue, pink, sage, navy, burgundy and black for different brown shades.",
  excerpt: "Compare eight shirt colors for light, medium and dark brown pants, with practical outfit combinations for work, weekends and evenings.",
  leadExcerpt: "Compare eight shirt colors for light, medium and dark brown pants, with practical outfit combinations for work, weekends and evenings.",
  shortLabel: "Brown Pants Styling",
  primaryKeyword: "what color shirt goes with brown pants",
  publishedDate: "2026-03-16",
  updatedDate: "2026-11-20",
  date: "2026-03-16",
  readTime: "7 min read",
  image: "/brown-pants-shirt-combinations.webp",
  imageAlt: "Men's brown trousers styled with complementary shirts",
  related: [
    "what-color-shirt-goes-with-khaki-pants",
    "what-color-shirt-goes-with-navy-pants",
    "what-color-shirt-goes-with-olive-green-pants",
    "what-color-shirt-goes-with-grey-pants"
  ],
},
  {
    slug: "what-color-shirt-goes-with-navy-pants",
    title: "What Color Shirt Goes with Navy Pants? 7 Best Combinations",
    metaTitle: "What Color Shirt Goes with Navy Pants? 7 Ideas",
    metaDescription: "What color shirt goes with navy pants? Compare white, light blue, pink, grey and sage shirts, with outfit ideas for work, weekends and formal occasions.",
    description: "What color shirt goes with navy pants? Compare white, light blue, pink, grey and sage shirts, with outfit ideas for work, weekends and formal occasions.",
    excerpt: "Find the best shirt colors for navy pants, including white, light blue, pink, grey and sage, with outfit ideas for work and weekends.",
    leadExcerpt: "Find the best shirt colors for navy pants, including white, light blue, pink, grey and sage, with outfit ideas for work and weekends.",
    shortLabel: "Navy Pants Pairing",
    primaryKeyword: "what color shirt goes with navy pants",
    publishedDate: "2026-03-17",
    updatedDate: "2026-11-16",
    date: "2026-03-17",
    readTime: "7 min read",
    image: "/white-shirt-navy-pants-combination.webp",
    imageAlt: "White shirt paired with navy trousers",
    related: ["what-color-shirt-goes-with-grey-pants", "collars-and-co-dress-collar-polo-review", "how-a-dress-shirt-should-fit-guide"],
  },
  {
    slug: "what-color-shirt-goes-with-khaki-pants",
    title: "What Color Shirt Goes with Khaki Pants? Men's Guide",
    metaTitle: "Best Shirt Colors for Khaki Pants: Men's Guide",
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
    image: "/khaki-chinos-white-shirt.webp",
    imageAlt: "White shirt styled with classic khaki chinos",
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
    image: "/olive-chinos-cream-shirt-style.webp",
    imageAlt: "Cream shirt paired with olive green chinos",
    related: ["what-color-shirt-goes-with-grey-pants", "how-to-style-cuban-camp-collar-shirts", "comfort-colors-1717-vs-gildan-5000-review"],
  },
  {
    slug: "collars-and-co-dress-collar-polo-review",
    title: "Collars & Co Dress Collar Polo Review: Fit & Value",
    metaTitle: "Collars & Co Polo Review: Fit and Value",
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
    image: "/navy-chinos-blue-shirt.webp",
    imageAlt: "Structured shirt styling with navy chinos",
    related: ["untuckit-shirts-sizing-and-fit-guide", "how-a-dress-shirt-should-fit-guide", "poplin-vs-twill-vs-oxford-shirt-fabrics", "interview-outfit-guide"],
  },
  {
    slug: "charles-tyrwhitt-vs-kamakura-dress-shirts",
    title: "Charles Tyrwhitt vs. Kamakura: Which Dress Shirt Fits Best?",
    metaTitle: "Charles Tyrwhitt vs Kamakura: Shirt Guide",
    metaDescription: "Compare Charles Tyrwhitt and Kamakura shirts by non-iron cotton options, Japanese-made Oxford styles, fit, care, collars and total buying cost.",
    description: "A product-information comparison of Charles Tyrwhitt and Kamakura shirts, covering fabric, collars, fit, care and how to choose the right model.",
    excerpt: "Compare Charles Tyrwhitt and Kamakura by fabric options, collar style, fit, care and delivered cost before choosing a dress shirt.",
    leadExcerpt: "Compare Charles Tyrwhitt and Kamakura by fabric options, collar style, fit, care and delivered cost before choosing a dress shirt.",
    shortLabel: "CT vs Kamakura",
    primaryKeyword: "charles tyrwhitt shirts",
    publishedDate: "2026-03-21",
    updatedDate: "2026-11-16",
    date: "2026-03-21",
    readTime: "5 min read",
    image: "/light-blue-shirt-navy-trousers-editorial.webp",
    imageAlt: "Light blue dress shirt with navy tailored trousers",
    related: ["mens-shirt-collar-types-guide", "poplin-vs-twill-vs-oxford-shirt-fabrics", "what-color-shirt-goes-with-grey-pants"],
  },
  {
    slug: "untuckit-shirts-sizing-and-fit-guide",
    title: "Do Untuckit Shirts Run Small? Sizing Guide",
    metaTitle: "Do Untuckit Shirts Run Small? Sizing Guide",
    metaDescription: "Do Untuckit shirts run small? Yes—men's shirts fit smaller than traditional brands. Compare fits, check measurements, and learn when to size up.",
    description: "Do Untuckit shirts run small? Yes—men's shirts fit smaller than traditional brands. Compare fits, check measurements, and learn when to size up.",
    excerpt: "Do Untuckit shirts run small? Check the official size chart, compare Regular, Slim, Relaxed and Tall fits, and learn when to order one size up.",
    leadExcerpt: "Do Untuckit shirts run small? Check the official size chart, compare Regular, Slim, Relaxed and Tall fits, and learn when to order one size up.",
    shortLabel: "Untuckit Sizing Guide",
    primaryKeyword: "do untuckit shirts run small",
    publishedDate: "2026-03-22",
    updatedDate: "2026-11-21",
    date: "2026-03-22",
    readTime: "7 min read",
    image: "/smart-casual-shirt-trouser-look.webp",
    imageAlt: "Casual shirt styled with tailored trousers",
    related: ["how-a-dress-shirt-should-fit-guide", "what-color-shirt-goes-with-khaki-pants", "criquet-shirts-retro-polo-review"],
  },
  {
    slug: "criquet-shirts-retro-polo-review",
    title: "Criquet Shirts Review: Is the Players Polo Worth It?",
    metaTitle: "Criquet Shirts Review: The Players Polo Guide",
    metaDescription: "Research-based Criquet Players shirt guide covering removable collar stays, fabric options, fit checks, care and styling.",
    description: "A research-based guide to Criquet Players shirts, including the brand’s fabric ranges, removable collar stays, fit and styling.",
    excerpt: "Learn how Criquet Players shirts differ across cotton, Pima and performance ranges, and what to check before ordering.",
    leadExcerpt: "Learn how Criquet Players shirts differ across cotton, Pima and performance ranges, and what to check before ordering.",
    shortLabel: "Criquet Polo Review",
    primaryKeyword: "criquet shirts",
    publishedDate: "2026-03-23",
    updatedDate: "2026-11-16",
    date: "2026-03-23",
    readTime: "5 min read",
    image: "/forest-green-shirt-chinos-editorial.webp",
    imageAlt: "Green shirt with chinos in a smart casual outfit",
    related: ["what-color-shirt-goes-with-brown-pants", "mens-shirt-collar-types-guide", "collars-and-co-dress-collar-polo-review"],
  },
  {
    slug: "comfort-colors-1717-vs-gildan-5000-review",
    title: "Comfort Colors 1717 vs Gildan 5000: Which Is Better?",
    metaTitle: "Comfort Colors 1717 vs Gildan 5000 Review",
    metaDescription: "Compare Comfort Colors 1717 and Gildan 5000 by fabric weight, fibre content, garment dye, fit, care and printing suitability.",
    description: "A specification-based comparison of Comfort Colors 1717 and Gildan 5000, including fabric weight, fit, colour and care.",
    excerpt: "Compare two popular blank tees by weight, cotton composition, fit and intended use before buying for everyday wear or custom printing.",
    leadExcerpt: "Compare two popular blank tees by weight, cotton composition, fit and intended use before buying for everyday wear or custom printing.",
    shortLabel: "Comfort Colors vs Gildan",
    primaryKeyword: "comfort colors t shirts",
    publishedDate: "2026-03-24",
    updatedDate: "2026-11-16",
    date: "2026-03-24",
    readTime: "5 min read",
    image: "/beige-chinos-green-shirt.webp",
    imageAlt: "Olive green shirt with beige chinos",
    related: ["poplin-vs-twill-vs-oxford-shirt-fabrics", "what-color-shirt-goes-with-olive-green-pants", "untuckit-shirts-sizing-and-fit-guide"],
  },
  {
    slug: "mens-shirt-collar-types-guide",
    title: "Men's Shirt Collar Types: 10 Styles Explained",
    metaTitle: "10 Men's Shirt Collar Types Explained",
    metaDescription: "Visual guide to 10 men's shirt collar styles. Match spread, button-down, cutaway, and Cuban collars to your face shape, tie knots, and formal suits.",
    description: "Visual guide to 10 men's shirt collar styles. Match spread, button-down, cutaway, and Cuban collars to your face shape, tie knots, and formal suits.",
    excerpt: "A shirt collar defines your face proportions and suit formality. Learn the differences between semi-spread, point, cutaway, and camp collars.",
    leadExcerpt: "A shirt collar defines your face proportions and suit formality. Learn the differences between semi-spread, point, cutaway, and camp collars.",
    shortLabel: "Shirt Collar Guide",
    primaryKeyword: "mens shirt collar types",
    publishedDate: "2026-03-25",
    updatedDate: "2026-11-16",
    date: "2026-03-25",
    readTime: "5 min read",
    image: "/forest-green-shirt-grey-trousers-outfit.webp",
    imageAlt: "Close-up of a dark green button-down shirt collar and placket",
    related: ["charles-tyrwhitt-vs-kamakura-dress-shirts", "collars-and-co-dress-collar-polo-review", "how-a-dress-shirt-should-fit-guide"],
  },
{
  slug: "poplin-vs-twill-vs-oxford-shirt-fabrics",
  title: "Broadcloth vs Oxford: Poplin, Twill & Shirt Fabric Guide",
  metaTitle: "Broadcloth vs Oxford: Shirt Fabric Guide",
  metaDescription:
    "Broadcloth vs Oxford explained, plus how poplin and twill differ in weave, texture, formality and everyday shirt use.",
  description:
    "Learn the difference between broadcloth and Oxford, and compare poplin and twill by weave, texture, formality, creasing and use.",
  excerpt:
    "Broadcloth vs Oxford, with a practical comparison of poplin and twill shirt fabrics.",
  leadExcerpt:
    "Broadcloth vs Oxford, with a practical comparison of poplin and twill shirt fabrics.",
  shortLabel: "Broadcloth vs Oxford",
  primaryKeyword: "poplin vs oxford",
  searchVolume: 1900,
  publishedDate: "2026-03-26",
  updatedDate: "2026-11-16",
  date: "2026-03-26",
  readTime: "9 min read",
  image: "/grey-pants-shirt-combinations.webp",
  imageAlt: "Sage green shirt paired with tailored grey trousers",
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
    updatedDate: "2026-11-16",
    date: "2026-03-27",
    readTime: "5 min read",
    image: "/navy-shirt-khaki-chinos-style.webp",
    imageAlt: "Navy button-down shirt paired with khaki chinos",
    related: ["what-color-shirt-goes-with-olive-green-pants", "what-color-shirt-goes-with-brown-pants", "mens-shirt-collar-types-guide"],
  },
  {
    slug: "how-a-dress-shirt-should-fit-guide",
    title: "How Should a Dress Shirt Fit? Slim, Classic & Athletic",
    metaTitle: "How Should a Dress Shirt Fit? Men's Guide",
    metaDescription: "Complete dress shirt fit guide. Master the 2-finger collar rule, shoulder seam placement, sleeve length at wrist bone, and eliminating muffin tops.",
    description: "Complete dress shirt fit guide. Master the 2-finger collar rule, shoulder seam placement, sleeve length at wrist bone, and eliminating muffin tops.",
    excerpt: "Even an expensive bespoke shirt looks cheap if the fit is off. Learn the 5 exact anatomical checkpoints for a perfect dress shirt fit.",
    leadExcerpt: "Even an expensive bespoke shirt looks cheap if the fit is off. Learn the 5 exact anatomical checkpoints for a perfect dress shirt fit.",
    shortLabel: "Dress Shirt Fit Guide",
    primaryKeyword: "how should a dress shirt fit",
    publishedDate: "2026-03-28",
    updatedDate: "2026-11-16",
    date: "2026-03-28",
    readTime: "5 min read",
    image: "/mens-shirt-fit-style-portrait.webp",
    imageAlt: "Well-fitted men's shirt across shoulders and torso",
    related: ["untuckit-shirts-sizing-and-fit-guide", "charles-tyrwhitt-vs-kamakura-dress-shirts", "what-color-shirt-goes-with-navy-pants"],
  },
  {
    slug: "interview-outfit-guide",
    title: "Interview Outfit: Best Work Interview Outfits for Men",
    metaTitle: "Men's Interview Outfits: What to Wear",
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
    image: "/white-shirt-navy-pants-editorial.webp",
    imageAlt: "White dress shirt with navy trousers for an interview",
    related: [
      "what-color-shirt-goes-with-navy-pants",
      "what-color-shirt-goes-with-grey-pants",
      "what-color-shirt-goes-with-khaki-pants"
    ],
  },
{
  slug: "what-color-shirt-goes-with-black-pants",
  title: "What Color Shirt Goes with Black Pants? 7 Best Matches",
  metaTitle: "Best Shirt Colors for Black Pants: Men's Guide",
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
  image: "/grey-chinos-black-shirt.webp",
  imageAlt: "Black shirt paired with grey and dark trousers",
  related: [
    "what-color-shirt-goes-with-grey-pants",
    "what-color-shirt-goes-with-navy-pants",
    "interview-outfit-guide"
  ]
},

  {
    slug: "dress-pants-with-boots",
    title: "Can Men Wear Boots with Dress Pants? Best Styles & Outfits",
    metaTitle: "Dress Pants with Boots: Men's Styling Guide",
    metaDescription: "Learn how to wear boots with dress pants for men. Compare Chelsea, lace-up and chukka boots, trouser length, colors and outfit ideas.",
    description: "A practical men's guide to wearing boots with dress pants, including Chelsea boots, lace-up dress boots, chukkas, color matching and trouser length.",
    excerpt: "Find the best boots for dress pants, with outfit combinations, color advice and fit tips for business casual and smart casual looks.",
    leadExcerpt: "Find the best boots for dress pants, with outfit combinations, color advice and fit tips for business casual and smart casual looks.",
    shortLabel: "Dress Pants & Boots",
    primaryKeyword: "dress pants with boots",
    publishedDate: "2026-11-21",
    updatedDate: "2026-11-21",
    date: "2026-11-21",
    readTime: "8 min read",
    image: "/white-shirt-navy-pants-style.webp",
    imageAlt: "Smart men's outfit with a crisp shirt and tailored trousers",
    related: [
      "what-color-shirt-goes-with-grey-pants",
      "what-color-shirt-goes-with-khaki-pants",
      "interview-outfit-guide",
      "how-a-dress-shirt-should-fit-guide"
    ],
  },
  {
    slug: "linen-pants-men-outfit",
    title: "Linen Pants Outfits for Men: Shirts, Shoes & Styling Ideas",
    metaTitle: "Men's Linen Pants: Outfit & Shoe Guide",
    metaDescription: "Learn how to style linen pants for men with the best shirts, colors and shoes. Outfit ideas for white, beige, navy and olive linen trousers.",
    description: "A practical men's guide to linen pants outfits, including shirt colors, footwear, fit, tucking, and combinations for travel, dinners and smart-casual settings.",
    excerpt: "Find the right shirts, shoes and colors for men's linen pants, with practical outfit combinations for white, beige, navy and olive trousers.",
    leadExcerpt: "Find the right shirts, shoes and colors for men's linen pants, with practical outfit combinations for white, beige, navy and olive trousers.",
    shortLabel: "Linen Pants Outfits",
    primaryKeyword: "linen pants men outfit",
    publishedDate: "2026-11-20",
    updatedDate: "2026-11-20",
    date: "2026-11-20",
    readTime: "10 min read",
    image: "/olive-chinos-pink-shirt.webp",
    imageAlt: "Relaxed warm-weather shirt and trouser combination",
    related: [
      "what-color-shirt-goes-with-khaki-pants",
      "what-color-shirt-goes-with-olive-green-pants",
      "what-color-shirt-goes-with-navy-pants",
      "poplin-vs-twill-vs-oxford-shirt-fabrics",
      "how-to-style-cuban-camp-collar-shirts"
    ],
  },

  {
    slug: "best-chinos-and-shirt-combinations-for-men",
    title: "Best Chinos and Shirt Combinations for Men: 6 Colors, Outfit Ideas & Shoes",
    metaTitle: "Best Chinos and Shirt Combinations for Men",
    metaDescription: "Find the best shirts to wear with khaki, navy, olive, grey, beige and black chinos. Get men's outfit combinations, shoe advice and fit tips.",
    description: "A practical guide to matching shirts with men's chinos by color, fabric, fit and occasion, with outfit formulas and footwear advice.",
    excerpt: "Match shirts with khaki, navy, olive, grey, beige and black chinos, then finish each outfit with the right shoes.",
    leadExcerpt: "Match shirts with khaki, navy, olive, grey, beige and black chinos, then finish each outfit with the right shoes.",
    shortLabel: "Chinos & Shirt Combinations",
    primaryKeyword: "best chinos and shirt combinations for men",
    publishedDate: "2026-11-21",
    updatedDate: "2026-11-21",
    date: "2026-11-21",
    readTime: "10 min read",
    image: "/navy-shirt-beige-chinos-outfit.webp",
    imageAlt: "Navy shirt paired with beige chinos",
    related: [
      "what-color-shirt-goes-with-khaki-pants",
      "what-color-shirt-goes-with-olive-green-pants",
      "what-color-shirt-goes-with-navy-pants",
      "poplin-vs-twill-vs-oxford-shirt-fabrics",
      "dress-pants-with-boots"
    ],
  },
  {
    slug: "what-color-pants-go-with-grey-shirt",
    title: "What Color Pants Go with a Grey Shirt? 8 Easy Combinations",
    metaTitle: "Pants to Wear with a Grey Shirt",
    metaDescription: "Find the best pants for a grey shirt, from black and navy to khaki, beige, olive and denim. Compare light grey, medium grey and charcoal outfits.",
    description: "A shade-specific guide to pairing grey shirts with trousers and jeans, including outfit ideas, shoes, fabric and occasion advice.",
    excerpt: "Pair light-grey, medium-grey and charcoal shirts with the right pants, from navy and black to khaki, olive and denim.",
    leadExcerpt: "Pair light-grey, medium-grey and charcoal shirts with the right pants, from navy and black to khaki, olive and denim.",
    shortLabel: "Grey Shirt Pairings",
    primaryKeyword: "what color pants go with a grey shirt",
    publishedDate: "2026-11-21",
    updatedDate: "2026-11-21",
    date: "2026-11-21",
    readTime: "9 min read",
    image: "/white-shirt-olive-trousers-outfit.webp",
    imageAlt: "White shirt paired with olive green trousers",
    related: [
      "what-color-shirt-goes-with-grey-pants",
      "what-color-shirt-goes-with-black-pants",
      "what-color-shirt-goes-with-khaki-pants",
      "what-color-shirt-goes-with-navy-pants",
      "dress-pants-with-boots"
    ],
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
