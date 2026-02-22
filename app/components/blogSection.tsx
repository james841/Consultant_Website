'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/lib/supabase';

const CATEGORY_META: Record<string, { label: string; color: string }> = {
  'mental-health':        { label: 'Mental Health',         color: '#9BC1BC' },
  'ai-ethics':            { label: 'AI & Ethics',           color: '#0F4C5C' },
  'community-psychology': { label: 'Community Psychology', color: '#E07A5F' },
  'research':             { label: 'Research',               color: '#2F3E46' },
  'wellness':             { label: 'Wellness Tips',         color: '#9BC1BC' },
};

function SkeletonCard() {
  return (
    <div className="bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-6 border border-[#9BC1BC]/20 animate-pulse h-[450px]">
      <div className="w-full h-56 rounded-[2rem] bg-[#9BC1BC]/10 mb-6" />
      <div className="space-y-4">
        <div className="h-3 w-24 rounded-full bg-[#9BC1BC]/20" />
        <div className="h-8 w-full rounded-md bg-[#9BC1BC]/10" />
        <div className="h-4 w-2/3 rounded-md bg-[#9BC1BC]/10" />
      </div>
    </div>
  );
}

function BlogGridCard({ post, index }: { post: BlogPost; index: number }) {
  const meta = CATEGORY_META[post.category] || { label: post.category, color: '#9BC1BC' };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative bg-white rounded-[2.8rem] p-5 pb-10 border border-[#9BC1BC]/10 transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(15,76,92,0.15)] group-hover:-translate-y-2">
          
          {/* Image Container with advanced hover */}
          <div className="relative aspect-[16/11] rounded-[2.2rem] overflow-hidden mb-8 shadow-sm">
            {post.cover_image ? (
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F4F1DE] to-[#9BC1BC]/20">
                <BookOpen className="w-12 h-12 text-[#9BC1BC]" />
              </div>
            )}
            
            {/* Category Badge - Glassmorphism */}
            <div className="absolute top-5 left-5 overflow-hidden rounded-full">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 block text-[10px] font-black uppercase tracking-[0.15em] backdrop-blur-xl bg-white/80 shadow-lg text-[#0F4C5C]"
              >
                {meta.label}
              </motion.span>
            </div>
          </div>

          {/* Content */}
          <div className="px-4">
            <div className="flex items-center gap-4 text-[10px] text-[#2F3E46]/40 mb-4 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#E07A5F]" />
                {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]/30" />
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E07A5F]" />
                5 Min Read
              </span>
            </div>

            <h3 className="font-serif text-[#0F4C5C] text-2xl font-bold leading-[1.2] mb-5 group-hover:text-[#E07A5F] transition-colors duration-300">
              {post.title}
            </h3>

            <p className="text-[#2F3E46]/60 leading-relaxed line-clamp-2 mb-8 text-base font-medium">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 text-[#0F4C5C] font-black text-xs uppercase tracking-widest group/btn">
              <span className="relative">
                Read Narrative
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E07A5F] transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 text-[#E07A5F] transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function HomepageBlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Parallax Effect for Background
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

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
    <section className="py-32 px-6 bg-gradient-to-b from-[#FDFCF7] via-[#F4F1DE] to-[#FDFCF7] relative overflow-hidden">
      {/* Parallax Background Blobs */}
      <motion.div style={{ y: y1 }} className="absolute top-40 left-[-5%] w-[45%] h-[45%] bg-[#9BC1BC]/15 rounded-full blur-[140px] pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-[-10%] w-[40%] h-[40%] bg-[#E07A5F]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-[#E07A5F]" />
              <span className="text-[#E07A5F] text-xs font-black uppercase tracking-[0.4em]">
                The Journal
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[#0F4C5C] text-6xl md:text-8xl font-bold leading-[0.85] tracking-tight"
            >
              Latest<br />
              <span className="italic font-light text-[#E07A5F]">Insights.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:text-right"
          >
            <p className="max-w-xs text-lg text-[#2F3E46]/60 mb-8 leading-relaxed font-medium italic">
              Thoughtful reflections on the future of care and technology.
            </p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-4 bg-[#0F4C5C] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#E07A5F] transition-all group"
            >
              Explore Archive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : posts.map((post, i) => <BlogGridCard key={post.id} post={post} index={i} />)
            }
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {!loading && posts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-white/40 backdrop-blur-md rounded-[4rem] border border-[#9BC1BC]/20 shadow-inner"
          >
            <BookOpen className="w-16 h-16 text-[#9BC1BC]/40 mx-auto mb-6" />
            <p className="text-[#0F4C5C] font-serif italic text-2xl">The journal is currently quiet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}