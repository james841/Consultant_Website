'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/lib/supabase';

// ─── Refined Color Palette ───────────────────────────────────────────────
const COLORS = {
  teal: '#0F4C5C',
  sage: '#9BC1BC',
  sand: '#F4F1DE',
  coral: '#E07A5F',
  charcoal: '#2F3E46',
};

const CATEGORY_META: Record<string, { label: string; color: string }> = {
  'mental-health':        { label: 'Mental Health',         color: '#9BC1BC' },
  'ai-ethics':            { label: 'AI & Ethics',           color: '#0F4C5C' },
  'community-psychology': { label: 'Community Psychology', color: '#E07A5F' },
  'research':             { label: 'Research',              color: '#2F3E46' },
  'wellness':             { label: 'Wellness Tips',         color: '#9BC1BC' },
};

// ─── Skeleton Card ────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white/50 rounded-3xl p-6 border border-[#9BC1BC]/20 animate-pulse h-[400px]">
      <div className="w-full h-48 rounded-2xl bg-[#9BC1BC]/20 mb-6" />
      <div className="space-y-3">
        <div className="h-3 w-20 rounded-full bg-[#9BC1BC]/30" />
        <div className="h-6 w-3/4 rounded-md bg-[#9BC1BC]/20" />
        <div className="h-4 w-full rounded-md bg-[#9BC1BC]/15" />
      </div>
    </div>
  );
}

// ─── Modern Blog Grid Card ─────────────────────────────────────
function BlogGridCard({ post, index }: { post: BlogPost; index: number }) {
  const meta = CATEGORY_META[post.category] || { label: post.category, color: '#9BC1BC' };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative bg-white rounded-[2.5rem] p-4 pb-8 border border-transparent hover:border-[#9BC1BC]/30 hover:shadow-2xl hover:shadow-[#0F4C5C]/5 transition-all duration-500"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100 shadow-inner">
          {post.cover_image ? (
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F4F1DE] to-[#9BC1BC]/20">
              <BookOpen className="w-12 h-12 text-[#9BC1BC]" />
            </div>
          )}
          {/* Floating Category */}
          <div className="absolute top-4 left-4">
             <span 
              className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-white/90 shadow-sm"
              style={{ color: meta.color }}
            >
              {meta.label}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="px-3">
          <div className="flex items-center gap-3 text-[11px] text-[#2F3E46]/50 mb-3 font-medium">
            <span className="flex items-center gap-1.5 uppercase tracking-tighter">
              <Calendar className="w-3 h-3 text-[#E07A5F]" />
              {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#9BC1BC]" />
            <span className="flex items-center gap-1.5 uppercase tracking-tighter">
              <Clock className="w-3 h-3 text-[#E07A5F]" />
              5 min read
            </span>
          </div>

          <h3 className="font-serif text-[#0F4C5C] text-xl font-bold leading-tight mb-4 group-hover:text-[#E07A5F] transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-[#2F3E46]/70 leading-relaxed line-clamp-3 mb-6 font-light">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-[#0F4C5C] font-bold text-xs group-hover:gap-4 transition-all duration-300">
            Read Full Article
            <ArrowRight className="w-4 h-4 text-[#E07A5F]" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function HomepageBlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatest() {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, slug, title, excerpt, cover_image, category, created_at')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        setPosts((data as BlogPost[]) || []);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchLatest();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#F4F1DE] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] bg-[#9BC1BC]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[30%] h-[30%] bg-[#E07A5F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-[#E07A5F]" />
              <span className="text-[#E07A5F] text-xs font-bold uppercase tracking-[0.3em]">
                The Journal
              </span>
            </div>
            <h2 className="font-serif text-[#0F4C5C] text-5xl md:text-7xl font-bold leading-[0.9]">
              Latest<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C5C] to-[#E07A5F]">Insights</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="max-w-xs text-sm text-[#2F3E46]/60 md:text-right leading-relaxed font-medium">
              Exploring the intersection of psychology, ethical technology, and community wellness.
            </p>
            <Link href="/blog" className="group flex items-center gap-3 text-[#0F4C5C] font-bold text-sm tracking-tighter uppercase border-b-2 border-[#9BC1BC] pb-1 hover:border-[#E07A5F] transition-all">
              Explore All Stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Blog Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : posts.map((post, i) => <BlogGridCard key={post.id} post={post} index={i} />)
            }
          </AnimatePresence>
        </div>

        {/* ── Empty State ── */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-20 bg-white/30 rounded-[3rem] border-2 border-dashed border-[#9BC1BC]/30">
            <BookOpen className="w-12 h-12 text-[#9BC1BC] mx-auto mb-4 opacity-50" />
            <p className="text-[#0F4C5C] font-serif italic text-xl">The journal is currently quiet. Check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}