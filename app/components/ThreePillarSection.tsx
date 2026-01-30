'use client';

import React from 'react';
import { Users, Brain, Award, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  }),
};

const iconFloat = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export default function ThreePillarsSection() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#00D9FF] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF6B9D] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#0A3D4A] px-5 py-2 rounded-full mb-6 border border-[#00D9FF]/20">
            <Sparkles className="w-4 h-4 text-[#00D9FF]" />
            <span className="font-bold text-sm tracking-wide">MY APPROACH</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0A3D4A] mb-6 leading-tight">
            Grounded Conversations.<br />
            <span className="text-[#00D9FF]">Meaningful Change.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I bridge science, ethical technology, and human care to deliver meaningful and lasting mental health outcomes.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Card 1 - Personalized Coaching */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#00D9FF]/20 hover:border-[#00D9FF]/50 hover:shadow-2xl hover:shadow-[#00D9FF]/20 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D9FF]/5 rounded-bl-full"></div>
            
            <motion.div 
              variants={iconFloat}
              initial="initial"
              animate="animate"
              className="w-20 h-20 bg-[#00D9FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#00D9FF]/30 relative z-10"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0A3D4A] mb-4 group-hover:text-[#00D9FF] transition-colors">
              Personalized Therapeutic Support

            </h3>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              One-on-one support guided by Me clinical expertise, thoughtfully tailored to each individual’s needs and lived experience.
            </p>

            {/* Hover indicator */}
            <div className="mt-6 flex items-center gap-2 text-[#00D9FF] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Learn More</span>
              <TrendingUp className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 2 - AI-Powered (Featured) */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className="bg-[#0A3D4A] rounded-3xl p-8 shadow-2xl hover:shadow-[#FF6B9D]/40 border-2 border-[#FF6B9D] transform md:scale-105 hover:scale-110 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-[#FF6B9D]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Floating sparkles */}
            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-[#FFC700] opacity-50 group-hover:opacity-100 transition-opacity" />
            <Zap className="absolute bottom-4 left-4 w-5 h-5 text-[#00FF88] opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <motion.div 
              variants={iconFloat}
              initial="initial"
              animate="animate"
              className="w-20 h-20 bg-[#FF6B9D] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-[#FF6B9D]/50 relative z-10"
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 group-hover:text-[#FF6B9D] transition-colors">
             Ethical AI–Informed Insights

            </h3>
            
            <p className="text-gray-200 leading-relaxed mb-6 text-lg">
              Ethical, research-informed AI used under My professional guidance to identify early community-level mental health risks and support prevention.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-[#FF6B9D] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#FF6B9D]/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4" />
              Rooted in Research & Practice

            </div>
          </motion.div>

          {/* Card 3 - Community Impact */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#00FF88]/20 hover:border-[#00FF88]/50 hover:shadow-2xl hover:shadow-[#00FF88]/20 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FF88]/5 rounded-bl-full"></div>
            
            <motion.div 
              variants={iconFloat}
              initial="initial"
              animate="animate"
              className="w-20 h-20 bg-[#00FF88] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#00FF88]/30 relative z-10"
            >
              <Award className="w-10 h-10 text-[#0A3D4A]" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0A3D4A] mb-4 group-hover:text-[#00FF88] transition-colors">
              Community-Led Impact

            </h3>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Evidence-based training and consultation that empowers organizations to build mental health resilience.
              </p>

            {/* Hover indicator */}
            <div className="mt-6 flex items-center gap-2 text-[#00FF88] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Learn More</span>
              <TrendingUp className="w-4 h-4" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}