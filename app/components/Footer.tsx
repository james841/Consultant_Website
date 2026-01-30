'use client';

import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const linkVariants = {
  hover: {
    x: 5,
    transition: { duration: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#0A3D4A] text-white relative overflow-hidden">
      {/* Decorative top border - solid colors instead of gradient */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-[#00D9FF]" />
        <div className="flex-1 bg-[#FF6B9D]" />
        <div className="flex-1 bg-[#FFC700]" />
        <div className="flex-1 bg-[#00FF88]" />
      </div>

      {/* Subtle background elements - solid colors only */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#00D9FF] opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF6B9D] opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#FFC700] opacity-[0.02] rounded-full blur-3xl" />

      {/* Geometric accent shapes */}
      <div className="absolute top-32 right-20 w-24 h-24 border-2 border-[#00D9FF] opacity-10 rounded-2xl rotate-12" />
      <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-[#FF6B9D] opacity-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-16 border-b-2 border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#00D9FF] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#00D9FF]/20">
              <Heart className="w-4 h-4" />
              Stay Connected
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Get Mental Health Insights
            </h3>
            
            <p className="text-gray-400 text-lg mb-8">
              Research updates, wellness tips, and ethical AI developments delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors backdrop-blur-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#00D9FF] text-[#0A3D4A] px-8 py-4 rounded-xl font-bold hover:bg-[#00B8DD] transition-all shadow-xl shadow-[#00D9FF]/30 flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* 1. Brand & Social */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="relative">
                <Brain className="w-11 h-11 text-[#00D9FF] group-hover:text-[#FF6B9D] transition-colors duration-300" />
                <div className="absolute -inset-2 bg-[#00D9FF] opacity-20 rounded-full blur-lg group-hover:bg-[#FF6B9D] transition-colors" />
              </div>
              <span className="text-3xl font-serif font-bold">MindCare</span>
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Ethical AI-powered mental health platform bridging science, technology, and human care for communities worldwide.
            </p>

            {/* Social icons - improved design */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, color: '#00D9FF', label: 'Facebook' },
                { Icon: Twitter, color: '#FF6B9D', label: 'Twitter' },
                { Icon: Linkedin, color: '#00FF88', label: 'LinkedIn' },
                { Icon: Instagram, color: '#FFC700', label: 'Instagram' },
              ].map(({ Icon, color, label }, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border-2 border-white/10 hover:border-current backdrop-blur-sm bg-white/5"
                  style={{ 
                    color,
                    boxShadow: `0 0 20px ${color}20`
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 2. Platform links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-[#00D9FF] flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00D9FF] rounded-full" />
              Platform
            </h4>
            <ul className="space-y-3.5">
              {['About Us', 'Services', 'AI Platform', 'Research', 'Team'].map((item, idx) => (
                <motion.li key={idx} variants={linkVariants} whileHover="hover">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Resources links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-[#FF6B9D] flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FF6B9D] rounded-full" />
              Resources
            </h4>
            <ul className="space-y-3.5">
              {['Blog & Insights', 'Mental Health Toolkits', 'Ethics Framework', 'Crisis Resources', 'Community Forum'].map((item, idx) => (
                <motion.li key={idx} variants={linkVariants} whileHover="hover">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FF6B9D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 text-[#00FF88] flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#00FF88] rounded-full" />
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-9 h-9 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FF88]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#00FF88]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email us</p>
                  <a href="mailto:hello@mindcare.com" className="hover:text-white transition-colors text-sm">
                    hello@mindcare.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-9 h-9 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FF88]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#00FF88]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Call us</p>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors text-sm">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-9 h-9 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#00FF88]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="pt-10 border-t-2 border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left mb-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MindCare Platform. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {[
                { text: 'Privacy Policy', color: '#00D9FF' },
                { text: 'Terms of Service', color: '#FF6B9D' },
                { text: 'Data Governance', color: '#00FF88' }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  {item.text}
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: item.color }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Tagline with badges */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              { text: 'Ethical AI', color: '#00D9FF' },
              { text: 'Human-Centered Care', color: '#FF6B9D' },
              { text: 'Community Empowerment', color: '#00FF88' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border backdrop-blur-sm"
                style={{
                  color: item.color,
                  borderColor: `${item.color}40`,
                  backgroundColor: `${item.color}10`
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.color }} />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}