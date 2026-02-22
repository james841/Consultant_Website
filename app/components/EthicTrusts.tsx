'use client';

import React from 'react';
import { Shield, Users, Brain, Award, Heart, Lock, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const, // cubic-bezier equivalent of 'easeOut'
    },
  },
};
export default function EthicsTrustSection() {
  const principles = [
    { 
      icon: Shield, 
      title: 'Privacy First', 
      desc: 'GDPR-informed practices. Your data is encrypted, never sold, and you maintain full control.',
      color: '#00D9FF'
    },
    { 
      icon: Eye, 
      title: 'Transparent AI', 
      desc: 'We explain every insight in plain language. No black boxes, no hidden algorithms.',
      color: '#FF6B9D'
    },
    { 
      icon: Users, 
      title: 'Community Co-Design', 
      desc: 'Communities are partners, not subjects. We build together with cultural sensitivity.',
      color: '#FFC700'
    },
    { 
      icon: Brain, 
      title: 'Human-in-the-Loop', 
      desc: 'AI never acts alone. Licensed professionals review all insights and interventions.',
      color: '#00FF88'
    },
    { 
      icon: Award, 
      title: 'Research-Backed', 
      desc: 'Every feature is grounded in peer-reviewed research and ethical guidelines.',
      color: '#9D4EDD'
    },
    { 
      icon: Heart, 
      title: 'No Harm Principle', 
      desc: 'We actively monitor for bias and unintended consequences to protect vulnerable communities.',
      color: '#FF006E'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden bg-[#030712]">
      {/* Dynamic Animated Background Mesh */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#00D9FF] rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-[#9D4EDD] rounded-full blur-[120px]"
        />
      </div>

      {/* Texture Overlay (Your requested image with low opacity for elegance) */}
      <div 
        className="absolute inset-0 z-[1] opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/glowing-blue-shield-padlock-icon-signifies-digital-security-data-protection-illustrates-internet-safety-cyber-defense-network-393787346.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00D9FF] text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md"
          >
            <Lock className="w-4 h-4" />
            Integrity by Design
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Ethics, Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD]">&</span> Trust
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We believe technology should serve humanity, not exploit it. 
            Your safety is our architectural foundation.
          </motion.p>
        </div>

        {/* Principles Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${item.color}20, transparent 70%)`
                }}
              />

              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[5deg]"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
              
              {/* Subtle accent line */}
              <div 
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <motion.a
            href="/ethics"
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00D9FF] hover:text-black transition-all duration-300 group shadow-2xl shadow-white/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Read Our Full Ethics Framework
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <p className="mt-6 text-gray-500 text-sm font-medium uppercase tracking-widest">
            Last Updated: February 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}