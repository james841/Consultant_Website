import React from 'react';
import { ArrowLeft, Share2, Clock, ChevronRight, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Navigation from '@/app/components/navigation';
import Footer from '@/app/components/Footer';

type Params = Promise<{ slug: string }>;

interface BlogPostPageProps {
  params: Params;
}

async function getPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !data) return null;
  return data;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const wordsPerMinute = 225;
  const wordCount = post.content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <main className="min-h-screen bg-white selection:bg-[#00D9FF]/30">
      <Navigation />

      {/* Sticky Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-gray-50">
        <div className="h-full bg-gradient-to-r from-[#00D9FF] to-[#0A3D4A] w-1/4 transition-all duration-300" />
      </div>

      <article className="pt-32 pb-20">
        {/* Editorial Header */}
        <header className="max-w-4xl mx-auto px-6 mb-12">
          <Link href="/blog" className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#00D9FF] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#00D9FF]/10 text-[#00D9FF] text-xs font-bold uppercase tracking-widest rounded-full">
              {post.category || 'Perspective'}
            </span>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A3D4A] leading-[1.1] tracking-tight mb-10">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A3D4A] to-[#00D9FF] flex items-center justify-center text-white font-bold">
                AA
              </div>
              <div>
                <p className="font-bold text-[#0A3D4A]">Abigail Ajayi</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-full hover:bg-gray-50 text-gray-400 hover:text-[#00D9FF] transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-full hover:bg-gray-50 text-gray-400 hover:text-[#FF6B9D] transition-all">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Cover Image - regular img tag */}
        {post.cover_image && (
          <div className="max-w-6xl mx-auto px-4 mb-20">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        )}

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,72ch)_1fr] gap-12">

          {/* Left: Empty spacer */}
          <aside className="hidden lg:block" />

          {/* Center: Readable content */}
          <div
            className="
              w-full max-w-none text-left
              prose prose-lg md:prose-xl
              prose-p:text-slate-600
              prose-p:leading-[1.8]
              prose-p:mb-8
              prose-p:text-[1.125rem]
              prose-headings:text-slate-800
              prose-headings:font-serif
              prose-headings:font-bold
              prose-headings:tracking-tight
              prose-h2:mt-12
              prose-h2:mb-4
              prose-h2:border-b-2
              prose-h2:border-slate-100
              prose-h2:pb-2
              prose-strong:text-slate-900
              prose-strong:font-bold
              prose-blockquote:border-l-4
              prose-blockquote:border-[#00D9FF]
              prose-blockquote:bg-slate-50
              prose-blockquote:py-2
              prose-blockquote:rounded-r-lg
              prose-ul:list-disc
              prose-ul:pl-5
              prose-li:text-slate-600
              prose-li:mb-2
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Right: Author Sidebar */}
          <aside className="hidden lg:block sticky top-40 h-fit">
            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">About The Author</h4>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-serif font-bold text-[#0A3D4A]">Abigail Ajayi</h3>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  Exploring the intersection of psychology and digital innovation to build a more mindful web.
                </p>
                <Link href="/about" className="text-sm font-bold text-[#00D9FF] hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Full Profile <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A3D4A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#00D9FF] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#FF6B9D] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Did this spark a thought?
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            I would love to hear your perspective on this topic. Let is start a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#00D9FF] hover:bg-[#00B8D9] text-[#0A3D4A] px-10 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-[#00D9FF]/20">
              Get in Touch
            </Link>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold backdrop-blur-sm transition-all">
              Share Article
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}