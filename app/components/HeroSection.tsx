"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, Shield, Users } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: easeOut, delay: 0.2 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-5 md:px-8 bg-[#0A3D4A] overflow-hidden">
      {/* Abstract background shapes - solid colors only */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D9FF] opacity-[0.08] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF6B9D] opacity-[0.06] blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#FFC700] opacity-[0.04] blur-3xl"></div>
      
      {/* Geometric accent elements */}
      <div className="absolute top-40 right-32 w-32 h-32 border-4 border-[#00D9FF] opacity-20 rounded-3xl rotate-12"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-[#FF6B9D] opacity-15 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Left - Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#00D9FF] text-[#0A3D4A] px-6 py-3 rounded-full font-bold shadow-xl shadow-[#00D9FF]/30">
            <Sparkles className="w-4 h-4" />
            Research-Led • Ethics-Driven
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
            You dont have to navigate this{" "}
            <span className="relative inline-block">
              alone
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C60 2 140 2 198 10" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#00D9FF] font-semibold leading-relaxed">
            I am here to help you heal, ethically and compassionately.
          </motion.p>

          {/* Description */}
          <motion.p variants={fadeInUp} className="text-lg text-gray-200 leading-relaxed max-w-xl">
            Led by a mental health professional and researcher, this work combines ethical AI with human care to help individuals and communities identify mental health risks early, prevent harm, and access personalized support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-[#FF6B9D] text-white px-8 py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center group shadow-2xl shadow-[#FF6B9D]/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-[#FF4D85] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-3 border-[#00D9FF] bg-transparent text-[#00D9FF] px-8 py-5 rounded-2xl font-bold hover:bg-[#00D9FF] hover:text-[#0A3D4A] transition-all duration-300 shadow-lg shadow-[#00D9FF]/30"
            >
              Learn My Approach
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={fadeInUp} className="pt-6 space-y-6">
            {/* Social Proof */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {['#00D9FF', '#FF6B9D', '#FFC700', '#00FF88'].map((color, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-[#0A3D4A] flex items-center justify-center text-xs font-bold shadow-xl transition-transform hover:scale-110 hover:z-10"
                    style={{ backgroundColor: color, color: i % 2 === 0 ? '#0A3D4A' : '#FFF' }}
                  >
                    {i === 3 ? '+5K' : String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-white">
                <p className="font-bold text-lg text-[#00D9FF]">5,000+ Lives Supported</p>
                <p className="text-sm text-gray-300">Through community-led mental health work</p>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                <Shield className="w-4 h-4 text-[#00D9FF]" />
                <span className="text-sm font-semibold">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                <Users className="w-4 h-4 text-[#FF6B9D]" />
                <span className="text-sm font-semibold">Community Focused</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          className="relative"
        >
          <div className="relative group">
            {/* Main image container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border-4 border-[#00D9FF]/40 shadow-[#00D9FF]/30 transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/image three.jpeg"
                  alt="Mental health support illustration"
                  fill
                  className="object-cover"
                  priority={false}
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"
                />
              </div>

              {/* Color accent overlay on hover */}
              <div className="absolute inset-0 bg-[#00D9FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFC700] rounded-3xl rotate-12 opacity-80 shadow-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#FF6B9D] rounded-full opacity-80 shadow-2xl"></div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ rotate: 3, scale: 0.9 }}
              animate={{ rotate: [-3, 3, -3], scale: 1 }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                scale: { duration: 0.5 }
              }}
              className="absolute -top-4 -right-4 bg-[#00FF88] text-[#0A3D4A] px-6 py-4 rounded-2xl font-bold shadow-2xl shadow-[#00FF88]/60 z-20"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <div className="text-left">
                  <div className="text-xs font-medium">Verified</div>
                  <div className="text-sm">Ethical AI</div>
                </div>
              </div>
            </motion.div>

            {/* Background accent shapes */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#00D9FF] opacity-10 rounded-[2.5rem] blur-2xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - improved design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#00D9FF] text-sm font-semibold tracking-wider">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-[#00D9FF] drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}