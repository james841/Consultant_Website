'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brain, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname(); // ← This gives us the current route

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/ai-platform', label: 'AI Platform' },
    { href: '/blog', label: 'blog' },
    { href: '/ethics', label: 'Ethics' },
    { href: '/contact', label: 'Contact' },
  ];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A3D4A]/95 shadow-2xl shadow-[#00D9FF]/20 backdrop-blur-xl border-b border-[#00D9FF]/30'
          : 'bg-[#0A3D4A]/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
        
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Brain className="w-9 h-9 text-[#00D9FF] group-hover:text-[#FF6B9D] transition-colors duration-300" />
              <Sparkles className="w-4 h-4 text-[#FFC700] absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <span className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-[#00D9FF] transition-colors duration-300">
              SentinelMind
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-white font-medium transition-all duration-300 rounded-lg group ${
                    isActive
                      ? 'text-[#00D9FF] bg-[#00D9FF]/10 border border-[#00D9FF]/30'
                      : 'hover:text-[#00D9FF] hover:bg-[#00D9FF]/5'
                  }`}
                >
                  {link.label}

             
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-[#00D9FF] transition-all duration-300 rounded-full ${
                      isActive
                        ? 'w-1/2 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-70'
                    }`}
                  />
                </Link>
              );
            })}

            <Link href="/contact">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="ml-6 bg-gradient-to-r from-[#FF6B9D] to-[#FF4D85] text-white px-7 py-3 rounded-xl font-bold shadow-lg shadow-[#FF6B9D]/40 hover:shadow-xl hover:shadow-[#FF6B9D]/60 transition-all duration-300"
              >
                Book Consultation
              </motion.button>
            </Link>
          </div>

         
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 hover:bg-[#00D9FF]/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <X className="w-7 h-7 text-[#00D9FF]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu className="w-7 h-7 text-[#00D9FF]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="lg:hidden bg-[#0A3D4A]/95 backdrop-blur-lg border-t border-[#00D9FF]/30 shadow-2xl shadow-[#00D9FF]/20 overflow-hidden"
          >
            <div className="px-5 py-8 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-4 px-5 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/40'
                        : 'text-white hover:bg-[#00D9FF]/10 hover:text-[#00D9FF]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="bg-gradient-to-r from-[#FF6B9D] to-[#FF4D85] text-white py-4 px-6 rounded-xl font-bold text-center shadow-lg shadow-[#FF6B9D]/40 hover:shadow-xl hover:shadow-[#FF6B9D]/60 transition-all duration-300"
                >
                  Book Consultation
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}