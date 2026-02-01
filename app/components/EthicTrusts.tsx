'use client';

import React from 'react';
import { Shield, Users, Brain, Award, Heart, Lock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1] as const, // ← this fixes the TS error
    },
  }),
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
    <section 
      className="py-20 md:py-24 px-4 md:px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/glowing-blue-shield-padlock-icon-signifies-digital-security-data-protection-illustrates-internet-safety-cyber-defense-network-393787346.jpg')`,
      }}
    >
      {/* Darker overlay tuned for this new image – keeps text crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/75"></div>
      
      {/* Reduced-opacity orbs to complement the new background */}
      <div className="absolute top-20 left-10 md:left-20 w-80 md:w-96 h-80 md:h-96 bg-[#00D9FF] opacity-6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 md:right-20 w-64 md:w-72 h-64 md:h-72 bg-[#FF6B9D] opacity-6 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header – slight polish */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF6B9D] to-[#FF4D85] text-white px-6 py-3 rounded-full mb-8 font-bold shadow-xl shadow-[#FF6B9D]/40">
            <Lock className="w-5 h-5" />
            MY ETHICAL FOUNDATION
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Ethics, Privacy {'&'} {' '}
            <span className="text-[#00D9FF]">Trust</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            Your wellbeing, dignity, and data sovereignty come first — always.
          </p>
        </motion.div>

        {/* Grid – same improved styling from before */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.04 }}
              className="bg-white/8 backdrop-blur-md rounded-3xl p-7 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-400 group relative overflow-hidden shadow-xl shadow-black/30"
              style={{ 
                borderColor: `${item.color}30`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(10,61,74,0.4))`
              }}
            >
              <div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                style={{ backgroundColor: item.color }}
              />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 md:w-18 md:h-18 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all"
                style={{ 
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}CC)`,
                }}
              >
                <item.icon className="w-8 h-8 md:w-9 md:h-9 text-white drop-shadow-md" />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#00D9FF] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-center mt-16 md:mt-20"
        >
          <a href="/ethics" className="block cursor-pointer mx-auto w-max">
            <motion.button
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#FF6B9D] to-[#FF4D85] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-[#FF6B9D]/50 hover:shadow-[#FF6B9D]/70 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Read Our Full Ethics Framework
              <Shield className="w-5 h-5" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}