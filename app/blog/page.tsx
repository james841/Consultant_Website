'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  Tag,
  ArrowRight,
  Search,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/lib/supabase';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: 'all', label: 'All Posts', color: '#00D9FF' },
    { value: 'mental-health', label: 'Mental Health', color: '#FF6B9D' },
    { value: 'ai-ethics', label: 'AI & Ethics', color: '#00FF88' },
    { value: 'community-psychology', label: 'Community Psychology', color: '#FFC700' },
    { value: 'research', label: 'Research', color: '#9D4EDD' },
    { value: 'wellness', label: 'Wellness Tips', color: '#FF006E' },
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
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
      setFilteredPosts(data || []);
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
        (post) =>
          post.title.toLowerCase().includes(queryLower) ||
          post.excerpt.toLowerCase().includes(queryLower)
      );
    }

    setFilteredPosts(filtered);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-[#0A3D4A] relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D9FF] opacity-10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#00D9FF] text-[#0A3D4A] px-5 py-2.5 rounded-full mb-6 font-bold">
            <Sparkles className="w-4 h-4" />
            BLOG & INSIGHTS
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Thoughts on <span className="text-[#00D9FF]">Mental Health</span> & AI
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Research insights, wellness tips, and reflections on ethical AI in mental health
          </p>
        </motion.div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 px-4 bg-[#F8FAFC] border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-xl border-2 border-gray-300 focus:border-[#00D9FF] focus:outline-none text-lg transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.value ? category.color : undefined,
                  boxShadow:
                    selectedCategory === category.value ? `0 10px 30px ${category.color}40` : undefined,
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="text-center mt-6 text-gray-600">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-16 h-16 border-4 border-[#00D9FF] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-[#00D9FF] hover:shadow-2xl transition-all duration-300 group"
                >
                  {post.cover_image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {post.category && (
                      <div className="inline-block bg-[#00D9FF]/10 text-[#00D9FF] px-3 py-1 rounded-full text-sm font-bold mb-3">
                        {categories.find((c) => c.value === post.category)?.label || post.category}
                      </div>
                    )}

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold text-[#0A3D4A] mb-3 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Dr. [Client Name]
                      </div>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link href={`/blog/${post.slug}`}>
                      <button className="flex items-center gap-2 text-[#00D9FF] font-bold hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-[#0A3D4A]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights on mental health, AI ethics, and community wellbeing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B9D] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#FF4D85] transition-all shadow-xl shadow-[#FF6B9D]/40"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}