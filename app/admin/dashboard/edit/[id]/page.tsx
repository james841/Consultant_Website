'use client';

import React, { useState, useEffect, use } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Send, Upload, X, Loader2, EyeOff, Sparkles } from 'lucide-react';
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
        <p className="text-slate-500 text-sm font-medium">Loading content...</p>
      </div>
    ),
  }
);

export default function EditPost({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  
  // ✅ Next.js 15 Fix: Unwrap params promise
  const resolvedParams = use(params);
  const postId = resolvedParams.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          category: data.category || '',
          tags: data.tags?.join(', ') || '',
          cover_image: data.cover_image || '',
          published: data.published,
        });
      }
    } catch (error) {
      toast.error('Post not found');
      router.push('/admin/dashboard');
    } finally {
      setLoading(false);
    }
  };

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
    if (!file || file.size > 2 * 1024 * 1024) {
      toast.error(file ? 'Image must be < 2MB' : 'Upload failed');
      return;
    }

    setImageUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, cover_image: reader.result as string }));
      setImageUploading(false);
      toast.success('Cover updated');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (publishStatus: boolean) => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error('Required fields missing');
      return;
    }

    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/admin/login');
        return;
      }

      const { error } = await supabase
        .from('blog_posts')
        .update({
          ...formData,
          tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
          published: publishStatus,
        })
        .eq('id', postId);

      if (error) throw error;

      toast.success('Changes synced successfully');
      router.push('/admin/dashboard');
    } catch (error) {
      toast.error('Sync failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
        <p className="text-slate-500 font-medium animate-pulse">Fetching Article...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 pb-20">
      <Toaster position="bottom-center" />

      {/* --- STICKY NAV --- */}
      <nav className="sticky top-0 z-30 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-2 text-slate-400 hover:text-white transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Cancel Editing</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSubmit(formData.published)}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:bg-white/5 transition-all disabled:opacity-50 flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
            <button
              onClick={() => handleSubmit(!formData.published)}
              disabled={saving}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg disabled:opacity-50 ${
                formData.published 
                ? 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 shadow-amber-500/5' 
                : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/20'
              }`}
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : (formData.published ? <EyeOff className="w-4 h-4" /> : <Send className="w-4 h-4" />)}
              {formData.published ? 'Unpublish Post' : 'Go Live'}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-12">
        <div className="space-y-12">
          
          <section className="space-y-4">
            <input
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="Post Title"
              className="w-full bg-transparent text-5xl md:text-6xl font-black text-white placeholder-white/10 focus:outline-none tracking-tight"
            />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Path</span>
                <span className="text-xs font-mono text-slate-400">/blog/{formData.slug}</span>
              </div>
            </div>
          </section>

          <hr className="border-white/5" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
              >
                <option value="" className="bg-[#0c0c0e]">Uncategorized</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase().replace(/ /g, '-')} className="bg-[#0c0c0e]">{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Search Tags</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="Comma separated..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Article Summary</label>
              <span className="text-[10px] font-bold text-slate-600 uppercase">{formData.excerpt.length}/200</span>
            </div>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              maxLength={200}
              rows={2}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Article Media</label>
            {formData.cover_image ? (
              <div className="relative group rounded-[2rem] overflow-hidden border border-white/10 aspect-video">
                <img src={formData.cover_image} alt="Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button onClick={() => setFormData({ ...formData, cover_image: '' })} className="p-4 bg-red-500 text-white rounded-full shadow-xl hover:scale-110 transition-transform">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full aspect-video bg-white/[0.02] border-2 border-dashed border-white/10 rounded-[2rem] cursor-pointer hover:bg-white/[0.04] transition-all group">
                <div className="p-4 bg-indigo-500/10 rounded-2xl mb-3 group-hover:scale-110 transition-all">
                  <Upload className="w-6 h-6 text-indigo-400" />
                </div>
                <p className="text-sm font-bold text-slate-300">Replace Cover Image</p>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={imageUploading} />
              </label>
            )}
          </div>

          <div className="space-y-3 pb-10">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
              Post Content <Sparkles className="w-3 h-3 text-indigo-400" />
            </label>
            <div className="prose prose-invert max-w-none">
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