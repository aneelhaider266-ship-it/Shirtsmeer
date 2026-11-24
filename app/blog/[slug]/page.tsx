import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/posts";
import PostBody from "@/components/PostBody";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import OutfitTable from "@/components/OutfitTable";
import ColorSwatch from "@/components/ColorSwatch";
import FAQAccordion from "@/components/FAQAccordion";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { Calendar, Clock, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const mdxComponents = {
  QuickAnswerBox,
  OutfitTable,
  ColorSwatch,
  FAQAccordion,
  Image: (props: any) => {
    if (!props.width && !props.height && !props.fill) {
      return (
        <img
          {...props}
          className="rounded-xl border border-slate-200 my-6 shadow-sm w-full h-auto object-cover"
          loading="lazy"
        />
      );
    }
    return (
      <Image
        {...props}
        className={`rounded-xl border border-slate-200 my-6 shadow-sm ${props.className || ""}`}
        loading={props.priority ? undefined : "lazy"}
      />
    );
  },
  img: (props: any) => (
    <img
      {...props}
      className="rounded-xl border border-slate-200 my-6 shadow-sm w-full h-auto object-cover"
      loading="lazy"
    />
  ),
  a: ({ href, children, className = "", ...props }: any) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    const linkClasses = `text-blue-600 underline font-medium hover:text-blue-800 transition-colors ${className}`;
    if (isInternal) {
      return <Link href={href} className={linkClasses} {...props}>{children}</Link>;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses} {...props}>{children}</a>;
  },
};

const DEFAULT_FALLBACK_IMAGE = "/sage-shirt-grey-pants-editorial.webp";

const ARTICLE_IMAGES: Record<string, { url: string; alt: string }> = {
  "what-color-shirt-goes-with-grey-pants": {
    url: "/sage-shirt-grey-pants-editorial.webp",
    alt: "Sage green shirt paired with tailored grey trousers",
  },
  "what-color-shirt-goes-with-brown-pants": {
    url: "/brown-pants-shirt-combinations.webp",
    alt: "Men's brown trousers styled with complementary shirts",
  },
  "what-color-shirt-goes-with-navy-pants": {
    url: "/white-shirt-navy-pants-combination.webp",
    alt: "White shirt paired with navy trousers",
  },
  "what-color-shirt-goes-with-khaki-pants": {
    url: "/khaki-chinos-white-shirt.webp",
    alt: "White shirt styled with classic khaki chinos",
  },
  "what-color-shirt-goes-with-olive-green-pants": {
    url: "/olive-chinos-cream-shirt-style.webp",
    alt: "Cream shirt paired with olive green chinos",
  },
  "collars-and-co-dress-collar-polo-review": {
    url: "/navy-chinos-blue-shirt.webp",
    alt: "Structured shirt styling with navy chinos",
  },
  "charles-tyrwhitt-vs-kamakura-dress-shirts": {
    url: "/light-blue-shirt-navy-trousers-editorial.webp",
    alt: "Light blue dress shirt with navy tailored trousers",
  },
  "untuckit-shirts-sizing-and-fit-guide": {
    url: "/smart-casual-shirt-trouser-look.webp",
    alt: "Casual shirt styled with tailored trousers",
  },
  "criquet-shirts-retro-polo-review": {
    url: "/forest-green-shirt-chinos-editorial.webp",
    alt: "Green shirt with chinos in a smart casual outfit",
  },
  "comfort-colors-1717-vs-gildan-5000-review": {
    url: "/beige-chinos-green-shirt.webp",
    alt: "Olive green shirt with beige chinos",
  },
  "mens-shirt-collar-types-guide": {
    url: "/forest-green-shirt-grey-trousers-outfit.webp",
    alt: "Close-up of a dark green button-down shirt collar and placket",
  },
  "poplin-vs-twill-vs-oxford-shirt-fabrics": {
    url: "/grey-pants-shirt-combinations.webp",
    alt: "Sage green shirt paired with tailored grey trousers",
  },
  "how-to-style-cuban-camp-collar-shirts": {
    url: "/navy-shirt-khaki-chinos-style.webp",
    alt: "Navy button-down shirt paired with khaki chinos",
  },
  "how-a-dress-shirt-should-fit-guide": {
    url: "/mens-shirt-fit-style-portrait.webp",
    alt: "Well-fitted men's shirt across shoulders and torso",
  },
  "interview-outfit-guide": {
    url: "/white-shirt-navy-pants-editorial.webp",
    alt: "White dress shirt with navy trousers for an interview",
  },
  "what-color-shirt-goes-with-black-pants": {
    url: "/grey-chinos-black-shirt.webp",
    alt: "Black shirt paired with grey and dark trousers",
  },
  "linen-pants-men-outfit": {
    url: "/olive-chinos-pink-shirt.webp",
    alt: "Relaxed warm-weather shirt and trouser combination",
  },
  "dress-pants-with-boots": {
    url: "/white-shirt-navy-pants-style.webp",
    alt: "Smart men's outfit with a crisp shirt and tailored trousers",
  },
  "best-chinos-and-shirt-combinations-for-men": {
    url: "/navy-shirt-beige-chinos-outfit.webp",
    alt: "Navy shirt paired with beige chinos",
  },
  "what-color-pants-go-with-grey-shirt": {
    url: "/white-shirt-olive-trousers-outfit.webp",
    alt: "White shirt paired with olive green trousers",
  },

  "button-up-vs-button-down-shirt": {
    url: "/forest-green-shirt-grey-trousers-outfit.webp",
    alt: "Close-up of a dark green button-down shirt collar and placket",
  },
  "best-white-dress-shirts-for-men": {
    url: "/white-shirt-navy-pants-editorial.webp",
    alt: "White dress shirt paired with navy tailored trousers",
  },
  "white-button-down-shirts-for-men": {
    url: "/smart-casual-shirt-trouser-look.webp",
    alt: "White casual shirt styled with tailored trousers",
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
      {/* Schema Markup for Google SEO */}
      <ArticleJsonLd
        title={frontmatter.title || "Men's Styling Guide"}
        description={frontmatter.description || ""}
        url={`https://shirtsmeer.com/blog/${slug}`}
        datePublished={frontmatter.date || frontmatter.publishedDate || "2026-03-15"}
        dateModified={frontmatter.updatedDate || frontmatter.date || frontmatter.publishedDate || "2026-03-15"}
        image={activeImage.url}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

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
  {frontmatter.title || "Style Guide"}
</span>
      </nav>

      {/* Article Header (Clean Professional Badge) */}
      <header className="border-b border-slate-200 pb-8 mb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Published{" "}
            {new Date(`${frontmatter.publishedDate || frontmatter.date || "2026-03-15"}T00:00:00`).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          {frontmatter.updatedDate && frontmatter.updatedDate !== (frontmatter.publishedDate || frontmatter.date) && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Updated{" "}
              {new Date(`${frontmatter.updatedDate}T00:00:00`).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {frontmatter.readTime || "Guide"}
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-semibold">
            Editorial Guide
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {frontmatter.title}
        </h1>
      </header>

      <div className="mb-6 text-sm text-slate-600">
        Written and edited by{" "}
        <Link href="/author/aneel-haider" className="font-semibold text-blue-700 hover:underline">
          Aneel Haider
        </Link>
        <span className="ml-1">, Founder &amp; Editor of ShirtsMeer</span>
      </div>

      {/* Featured Header Image */}
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

      {/* 1. IF POST HAS JSON (13 Posts) -> RENDER VIA POSTBODY */}
      {post.contentData && (
        <PostBody content={post.contentData} post={frontmatter} />
      )}

      {/* 2. IF POST HAS MDX (Grey Pants) -> RENDER VIA MDXREMOTE */}
      {post.content && !post.contentData && (
        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      )}

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
