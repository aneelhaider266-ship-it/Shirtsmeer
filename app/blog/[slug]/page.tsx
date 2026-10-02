import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import { POSTS, SITE_URL, getPost, getPostContent } from "@/lib/posts";
import PostBody from "@/components/PostBody";
import JsonLd from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      url,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  const content = getPostContent(slug);
  if (!post || !content) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "ShirtsMeer Editorial Team", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ShirtsMeer", url: SITE_URL },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:py-14">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-slate-500">
        <Link href="/" className="transition-colors hover:text-blue-600">Home</Link>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        <Link href="/blog" className="transition-colors hover:text-blue-600">Guides</Link>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        <span className="max-w-[200px] truncate font-medium text-slate-800 sm:max-w-xs">
          {post.shortLabel}
        </span>
      </nav>

      <header className="mb-8 border-b border-slate-200 pb-8">
        <div className="mb-3 flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> Updated {post.updatedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.readTime}
          </span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
      </header>

      <PostBody slug={post.slug} content={content} />
    </article>
  );
}
