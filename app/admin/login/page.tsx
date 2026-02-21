'use client';

export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, AlertCircle, Loader2, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      router.push('/admin/dashboard');
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-3xl mb-6 shadow-2xl shadow-indigo-500/20">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2">Scribe Admin</h1>
          <p className="text-slate-500 font-medium">Internal Management Systems</p>
        </div>

        <div className="bg-[#121214] border border-white/5 rounded-[2.5rem] p-10 shadow-3xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enter your administrator credentials to access the dashboard.
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-red-200/80 text-xs font-medium leading-tight">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Username</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="Enter username"
                required
                autoComplete="username"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Enter password"
                  required
                  autoComplete="current-password"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 mt-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Access Dashboard'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-3 text-amber-500/80">
              <Shield className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Admin Access Only</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}