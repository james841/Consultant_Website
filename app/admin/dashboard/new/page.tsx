'use client';

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Send, Upload, X, Info, Sparkles } from 'lucide-react';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const RichTextEditor = dynamic(
  () => import('@/app/components/RichTextEditor'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-80 bg-white/[0.02] border border-white/10 rounded-2xl animate-pulse flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        <p className="text-slate-500 text-sm font-medium">Initializing Editor...</p>
      </div>
    ),
  }
);

export default function NewPost() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    cover_image: '',
    published: false,
  });

  const categories = [
    'Mental Health',
    'AI & Ethics',
    'Community Psychology',
    'Research',
    'Wellness Tips',
  ];

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error('Image must be less than 2MB');
      return;
    }

    setImageUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, cover_image: reader.result as string }));
      setImageUploading(false);
      toast.success('Cover image ready');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (publish: boolean) => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error('Missing required fields');
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Unauthorized');

      const tagsArray = formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

      const { error } = await supabase.from('blog_posts').insert({
        ...formData,
        tags: tagsArray,
        published: publish,
        author_email: user.email,
      });

      if (error) throw error;

      toast.success(publish ? 'Article Published!' : 'Draft Saved');
      router.push('/admin/dashboard');
    } catch (error) {
      toast.error('Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 pb-20">
      <Toaster position="bottom-center" toastOptions={{
        style: { background: '#121214', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
      }} />

      {/* --- STICKY NAV --- */}
      <nav className="sticky top-0 z-30 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Exit Editor</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSubmit(false)}
              disabled={loading}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:bg-white/5 transition-all disabled:opacity-50"
            >
              Save as Draft
            </button>
            <button
              onClick={() => handleSubmit(true)}
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20 disabled:opacity-50"
            >
              {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
              Publish Post
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* --- MAIN FORM --- */}
        <div className="space-y-12">
          
          {/* Title Section */}
          <section className="space-y-4">
            <input
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="Post Title"
              className="w-full bg-transparent text-5xl md:text-6xl font-black text-white placeholder-white/10 focus:outline-none tracking-tight border-none p-0"
            />
            <div className="flex items-center gap-4 text-slate-500">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Slug</span>
                <span className="text-xs font-mono">/blog/{formData.slug || '...'}</span>
              </div>
            </div>
          </section>

          <hr className="border-white/5" />

          {/* Metadata Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                Category <Info className="w-3 h-3" />
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0c0c0e]">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase().replace(/ /g, '-')} className="bg-[#0c0c0e]">{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Tags (Comma separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="ai, health, psychology"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Short Excerpt</label>
              <span className={`text-[10px] font-bold ${formData.excerpt.length > 180 ? 'text-amber-400' : 'text-slate-600'}`}>
                {formData.excerpt.length}/200
              </span>
            </div>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="What is this article about? (Keep it catchy)"
              maxLength={200}
              rows={2}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
            />
          </div>

          {/* Cover Image */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Cover Media</label>
            {formData.cover_image ? (
              <div className="relative group rounded-[2rem] overflow-hidden border border-white/10 aspect-video">
                <img src={formData.cover_image} alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setFormData({ ...formData, cover_image: '' })}
                    className="p-4 bg-red-500 text-white rounded-full shadow-xl hover:scale-110 transition-transform"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full aspect-[21/9] bg-white/[0.02] border-2 border-dashed border-white/10 rounded-[2rem] cursor-pointer hover:bg-white/[0.04] hover:border-indigo-500/40 transition-all group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <div className="p-4 bg-indigo-500/10 rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6 text-indigo-400" />
                  </div>
                  <p className="text-sm font-bold text-slate-300">Upload Header Image</p>
                  <p className="text-xs text-slate-500 mt-1">Maximum size: 2MB</p>
                </div>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={imageUploading} />
              </label>
            )}
          </div>

          {/* Content Editor */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
               <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                Article Body <Sparkles className="w-3 h-3 text-indigo-400" />
              </label>
            </div>
            <div className="prose prose-invert max-w-none min-h-[400px]">
              <RichTextEditor
                value={formData.content}
                onChange={(content: string) => setFormData({ ...formData, content })}
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}