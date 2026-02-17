'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  PenSquare,
  LogOut,
  Eye,
  Edit,
  Trash2,
  Plus,
  FileText,
  TrendingUp,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';

// ✅ Defined inline — avoids importing from @/lib/supabase which crashes at build time
type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  cover_image: string;
  published: boolean;
  author_email: string;
  created_at: string;
};

// ✅ Use createClient directly — avoids SSR crash during Vercel build
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
  });

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    // ✅ FIXED: Use getUser() instead of getSession() — more secure
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.email) {
      setUserEmail(user.email);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setPosts(data || []);
      setStats({
        total: data?.length || 0,
        published: data?.filter((p) => p.published).length || 0,
        drafts: data?.filter((p) => !p.published).length || 0,
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Blog Dashboard</h1>
            <p className="text-purple-300">Welcome back, {userEmail}</p>
          </div>

          <div className="flex gap-3">
            {/* ✅ FIXED: Link directly, no nested button */}
            <Link
              href="/admin/dashboard/new"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-purple-500/50 hover:opacity-90 transition-opacity"
            >
              <Plus className="w-5 h-5" />
              New Post
            </Link>

            <button
              onClick={handleSignOut}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all border border-white/20"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Posts', value: stats.total, icon: FileText, color: 'from-blue-500 to-cyan-500' },
            { label: 'Published', value: stats.published, icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
            { label: 'Drafts', value: stats.drafts, icon: Edit, color: 'from-orange-500 to-yellow-500' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Posts List */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-2xl font-bold text-white">All Posts</h2>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <div className="inline-block w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="p-12 text-center">
              <PenSquare className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-4">No blog posts yet</p>
              {/* ✅ FIXED: Link directly, no nested button */}
              <Link
                href="/admin/dashboard/new"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold inline-block hover:opacity-90 transition-opacity"
              >
                Create Your First Post
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-white/10">
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 hover:bg-white/5 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{post.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            post.published
                              ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                          }`}
                        >
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.created_at).toLocaleDateString()}
                        </span>
                        {post.category && (
                          <span className="bg-white/10 px-2 py-1 rounded">{post.category}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {/* ✅ FIXED: All Link+button combos replaced with styled Links */}
                      {post.published && (
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-xl transition-all"
                        >
                          <Eye className="w-5 h-5" />
                        </Link>
                      )}

                      <Link
                        href={`/admin/dashboard/edit/${post.id}`}
                        className="p-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-xl transition-all"
                      >
                        <Edit className="w-5 h-5" />
                      </Link>

                      <button
                        onClick={() => deletePost(post.id)}
                        className="p-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}