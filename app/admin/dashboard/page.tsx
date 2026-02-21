'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PenSquare,
  LogOut,
  Eye,
  Edit,
  Trash2,
  Plus,
  FileText,
  TrendingUp,
  LayoutDashboard,
  Settings,
  Search,
  MoreVertical,
} from 'lucide-react';
import Link from 'next/link';

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published: boolean;
  created_at: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, published: 0, drafts: 0 });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, category, published, created_at')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
      setStats({
        total: data?.length || 0,
        published: data?.filter((p) => p.published).length || 0,
        drafts: data?.filter((p) => !p.published).length || 0,
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Updated: uses JWT cookie logout instead of Supabase auth
  const handleSignOut = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-[#09090b] text-slate-200 font-sans">
      {/* --- SIDEBAR --- */}
      <aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-[#0c0c0e] p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <PenSquare className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Scribe.ai</span>
        </div>

        <nav className="flex-1 space-y-1">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-600/10 text-indigo-400 font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
            <FileText className="w-5 h-5" /> Content
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2 w-full text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 border-b border-white/5 bg-[#09090b]/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-full max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>

          {/* ✅ Updated: shows static "Admin" label instead of Supabase user email */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white">Admin</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/10" />
          </div>
        </header>

        <div className="p-8 space-y-8 overflow-y-auto">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Overview</h1>
              <p className="text-slate-500">Manage your publication and track performance.</p>
            </div>
            <Link
              href="/admin/dashboard/new"
              className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-200 transition-all shadow-sm shadow-white/10"
            >
              <Plus className="w-4 h-4" /> New Post
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Total Articles', value: stats.total, icon: FileText, color: 'text-blue-400' },
              { label: 'Published', value: stats.published, icon: TrendingUp, color: 'text-emerald-400' },
              { label: 'Drafts', value: stats.drafts, icon: Edit, color: 'text-amber-400' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#121214] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Content Table */}
          <section className="bg-[#121214] border border-white/5 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="font-bold text-lg text-white">Recent Posts</h2>
              <button className="text-slate-500 hover:text-white transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              {loading ? (
                <div className="p-20 flex justify-center">
                  <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-white/5">
                      <th className="px-6 py-4 font-medium">Post Title</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium">Category</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <AnimatePresence>
                      {posts.map((post) => (
                        <motion.tr
                          layout
                          key={post.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="group hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="max-w-[300px]">
                              <p className="text-sm font-semibold text-white truncate">{post.title}</p>
                              <p className="text-xs text-slate-500 truncate mt-1">{post.excerpt}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                              post.published
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${post.published ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                              {post.published ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-xs font-medium text-slate-400 bg-white/5 px-2 py-1 rounded">
                              {post.category || 'Uncategorized'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs text-slate-500">
                            {new Date(post.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all">
                                <Eye className="w-4 h-4" />
                              </Link>
                              <Link href={`/admin/dashboard/edit/${post.id}`} className="p-2 hover:bg-indigo-500/20 rounded-lg text-slate-400 hover:text-indigo-400 transition-all">
                                <Edit className="w-4 h-4" />
                              </Link>
                              <button
                                onClick={() => {/* delete logic */}}
                                className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-400 transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}