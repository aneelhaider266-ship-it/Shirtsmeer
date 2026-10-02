import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx-components";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import { Calendar, Clock, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80";

const ARTICLE_IMAGES: Record<string, { url: string; alt: string }> = {
  "what-color-shirt-goes-with-grey-pants": {
    url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
    alt: "Tailored grey trousers neatly paired with crisp white and blue dress shirts",
  },
  "what-color-shirt-goes-with-brown-pants": {
    url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80",
    alt: "Rich chocolate brown trousers laid flat with sky blue and ecru shirts",
  },
  "what-color-shirt-goes-with-navy-pants": {
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    alt: "Midnight navy blue tailored trousers styled with white and pastel shirts",
  },
  "what-color-shirt-goes-with-khaki-pants": {
    url: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=80",
    alt: "Classic tan khaki chinos paired with deep navy and white shirts",
  },
  "what-color-shirt-goes-with-olive-green-pants": {
    url: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80",
    alt: "Olive green cotton chinos paired with white, black, and denim shirts",
  },
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug) as any;
  if (!post) return {};

  const frontmatter = post.frontmatter || {};
  const metaTitle = frontmatter.metaTitle || frontmatter.title || "Men's Styling Guide";
  const metaDesc = frontmatter.description || "Expert styling guide for men.";
  const fullTitle = `${metaTitle} | ShirtsMeer`;
  
  // Safe Image URL (Never undefined)
  const featuredImageUrl: string = 
    ARTICLE_IMAGES[slug]?.url || 
    (typeof frontmatter.image === "string" && frontmatter.image.startsWith("http") ? frontmatter.image : DEFAULT_FALLBACK_IMAGE);
  
  const imageAlt: string = 
    ARTICLE_IMAGES[slug]?.alt || frontmatter.imageAlt || metaTitle;

  return {
    title: metaTitle,
    description: metaDesc,
    alternates: {
      canonical: `https://shirtsmeer.com/blog/${slug}`,
    },
    openGraph: {
      title: fullTitle,
      description: metaDesc,
      type: "article",
      url: `https://shirtsmeer.com/blog/${slug}`,
      publishedTime: frontmatter.date || new Date().toISOString(),
      images: [
        {
          url: featuredImageUrl,
          width: 1200,
          height: 800,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDesc,
      images: [featuredImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug) as any;
  if (!post) notFound();

  const frontmatter = post.frontmatter || {};
  const content = post.content || "";
  const relatedSlugs = Array.isArray(frontmatter.related) ? frontmatter.related : [];
  const relatedPosts = getRelatedPosts(slug, relatedSlugs);

  const activeImage = ARTICLE_IMAGES[slug] || {
    url: typeof frontmatter.image === "string" && frontmatter.image.startsWith("http")
      ? frontmatter.image
      : DEFAULT_FALLBACK_IMAGE,
    alt: frontmatter.imageAlt || frontmatter.title || "Menswear Guide",
  };

  const breadcrumbs = [
    { name: "Home", url: "https://shirtsmeer.com" },
    { name: "Guides", url: "https://shirtsmeer.com/blog" },
    { name: frontmatter.title || "Guide", url: `https://shirtsmeer.com/blog/${slug}` },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Schema Markup */}
      <ArticleJsonLd
        title={frontmatter.title || "Men's Styling Guide"}
        description={frontmatter.description || ""}
        url={`https://shirtsmeer.com/blog/${slug}`}
        datePublished={frontmatter.date || "2026-03-15"}
        image={activeImage.url}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />
      {frontmatter.faqs && frontmatter.faqs.length > 0 && (
        <FAQPageJsonLd items={frontmatter.faqs} />
      )}

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          Guides
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-xs">
          {frontmatter.primaryKeyword || "Styling"}
        </span>
      </nav>

      {/* Article Header */}
      <header className="border-b border-slate-200 pb-8 mb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {frontmatter.date || "March 2026"}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 7 min read
          </span>
          <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold">
            US Searches: {(frontmatter.searchVolume || 1600).toLocaleString()} /mo
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {frontmatter.title}
        </h1>
      </header>

      {/* UPSCALE FEATURED HEADER IMAGE */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] mb-10 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
        <Image
          src={activeImage.url}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Render MDX Body */}
      <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <aside className="mt-14 p-6 bg-slate-50 rounded-xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Explore Companion Trouser Styling Guides
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Master the complete menswear color rotation with our companion styling matrices:
          </p>
          <ul className="space-y-2 list-disc list-inside text-sm text-blue-600">
            {relatedPosts.map((related: any) => (
              <li key={related.slug}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="font-medium hover:underline hover:text-blue-800 transition-colors"
                >
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}
