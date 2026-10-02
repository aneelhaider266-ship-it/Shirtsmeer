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
