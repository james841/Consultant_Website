{/*'use client'; 
    
    import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Eye, Upload, X } from 'lucide-react';
import Link from 'next/link';

import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import RichTextEditor from '@/app/components/RichTextEditor';

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
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be less than 5MB');
      return;
    }

    setImageUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from('blog-images').getPublicUrl(filePath);

      setFormData({ ...formData, cover_image: publicUrl });
      toast.success('Image uploaded successfully!');
    } catch (error) {
      toast.error('Failed to upload image');
      console.error('Upload error:', error);
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (publish: boolean) => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const tagsArray = formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

      const { error } = await supabase.from('blog_posts').insert({
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        tags: tagsArray,
        cover_image: formData.cover_image,
        published: publish,
        author_email: session?.user?.email || '',
      });

      if (error) throw error;

      toast.success(publish ? 'Post published!' : 'Draft saved!');
      setTimeout(() => router.push('/admin/dashboard'), 1000);
    } catch (error) {
      toast.error('Failed to save post');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
     
          <div className="flex items-center justify-between mb-8">
            <Link href="/admin/dashboard">
              <button className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Dashboard
              </button>
            </Link>

            <div className="flex gap-3">
              <button
                onClick={() => handleSubmit(false)}
                disabled={loading}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all border border-white/20 disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                Save Draft
              </button>

              <button
                onClick={() => handleSubmit(true)}
                disabled={loading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-purple-500/50 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
                Publish
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 space-y-6">
         
            <div>
              <label className="block text-white font-bold mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Enter your blog post title..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">URL Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="auto-generated-from-title"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
              />
              <p className="text-gray-400 text-sm mt-1">
                Preview: /blog/{formData.slug || 'your-post-url'}
              </p>
            </div>

        
            <div>
              <label className="block text-white font-bold mb-2">Excerpt *</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief summary of your post (200 characters max)"
                maxLength={200}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all resize-none"
              />
              <p className="text-gray-400 text-sm mt-1">
                {formData.excerpt.length}/200 characters
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-bold mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-all"
                >
                  <option value="" className="bg-slate-900">Select category...</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat.toLowerCase().replace(/ /g, '-')} className="bg-slate-900">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-bold mb-2">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="anxiety, therapy, wellness (comma-separated)"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
            </div>

       
            <div>
              <label className="block text-white font-bold mb-2">Cover Image</label>

              {formData.cover_image ? (
                <div className="relative">
                  <img
                    src={formData.cover_image}
                    alt="Cover"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <button
                    onClick={() => setFormData({ ...formData, cover_image: '' })}
                    className="absolute top-4 right-4 p-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <label className="block w-full px-4 py-8 bg-white/10 border-2 border-dashed border-white/20 rounded-xl text-center cursor-pointer hover:border-purple-500 transition-all">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-white mb-1">
                    {imageUploading ? 'Uploading...' : 'Click to upload cover image'}
                  </p>
                  <p className="text-gray-400 text-sm">PNG, JPG up to 5MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={imageUploading}
                  />
                </label>
              )}
            </div>

       
            <div>
              <label className="block text-white font-bold mb-2">Content *</label>
              <RichTextEditor
                value={formData.content}
                onChange={(content: string) => setFormData({ ...formData, content })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
*/}