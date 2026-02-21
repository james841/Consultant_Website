'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Sparkles,
  Inbox,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/navigation';
import Footer from '../components/Footer';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Constants
const POSTS_PER_PAGE = 12;

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  cover_image: string;
  created_at: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { value: 'all', label: 'All Posts', color: '#00D9FF' },
    { value: 'mental-health', label: 'Mental Health', color: '#FF6B9D' },
    { value: 'ai-ethics', label: 'AI & Ethics', color: '#00FF88' },
    { value: 'community-psychology', label: 'Community Psychology', color: '#FFC700' },
    { value: 'research', label: 'Research', color: '#9D4EDD' },
    { value: 'wellness', label: 'Wellness Tips', color: '#FF006E' },
  ];

  useEffect(() => { fetchPosts(); }, []);

  useEffect(() => {
    filterPosts();
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [selectedCategory, searchQuery, posts]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const queryLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) => post.title.toLowerCase().includes(queryLower) || post.excerpt.toLowerCase().includes(queryLower)
      );
    }
    setFilteredPosts(filtered);
  };

  // --- Pagination Calculations ---
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentDisplayedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' }); // Scroll back to top of grid
  };

  return (
    <main className="min-h-screen bg-[#FDFEFF]">
      <Navigation />

      {/* Hero Section (Condensed for brevity, same as previous) */}
      <section className="relative pt-40 pb-32 px-4 bg-[#0A3D4A] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-serif font-medium text-white mb-8 tracking-tight">
             Blog <span className="italic text-[#00D9FF]">&</span> Insights
          </h1>
        </div>
      </section>

      {/* Filters (Condensed) */}
      <section className="relative z-20 -mt-12 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/3">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 focus:ring-2 focus:ring-[#00D9FF]/50 outline-none" 
                />
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end flex-1">
                {categories.map(cat => (
                    <button 
                      key={cat.value} 
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${selectedCategory === cat.value ? 'bg-[#00D9FF] text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-40 animate-pulse text-[#00D9FF]">Loading...</div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-32"><Inbox className="mx-auto mb-4 opacity-20" size={48} /> No posts found.</div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {currentDisplayedPosts.map((post, idx) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
                    >
                      <div className="h-60 overflow-hidden relative">
                        <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs font-bold text-[#00D9FF] mb-4 uppercase tracking-widest">
                           {post.category}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2">{post.title}</h2>
                        <p className="text-slate-600 text-sm line-clamp-3 mb-6">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 font-bold text-[#0A3D4A] hover:text-[#00D9FF] transition-colors">
                          Read More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination UI */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                        currentPage === number 
                        ? 'bg-[#0A3D4A] text-white shadow-lg scale-110' 
                        : 'text-slate-500 hover:bg-slate-100 border border-transparent'
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}