"use client";

import React from "react";
import {
  ArrowRight,
  Heart,
  Award,
  Users,
  Briefcase,
  Sparkles,
  Star,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function CoachSection() {
  const stats = [
    { icon: Users, value: "600+", label: "Clients Served", color: "#00D9FF" },
    { icon: Briefcase, value: "5+", label: "Organizations", color: "#FF6B9D" },
    { icon: Award, value: "40+", label: "Workshops", color: "#00FF88" },
  ];

  const highlights = [
    "Licensed Mental Health Professional",
    "Specialized in Community Psychology",
    "Evidence-Based Approaches",
    "Ethical AI Integration in Wellness",
  ];

  return (
    <section className="py-28 px-5 md:px-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background elements - solid colors only */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#FF6B9D] opacity-[0.04] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#00D9FF] opacity-[0.04] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#FFC700] opacity-[0.03] rounded-full blur-3xl"></div>

      {/* Geometric accents */}
      <div className="absolute top-32 right-24 w-20 h-20 border-3 border-[#00D9FF] opacity-10 rounded-2xl rotate-12"></div>
      <div className="absolute bottom-40 left-32 w-16 h-16 border-3 border-[#FF6B9D] opacity-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left - Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
          className="relative"
        >
          <div className="relative group">
            {/* Main image container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white hover:border-[#00D9FF] transition-all duration-500">
              <div className="aspect-[3/4] relative bg-[#0A3D4A]">
                <Image
                  src="/image one.jpeg"
                  alt="Mental health coach in professional setting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Color overlay on hover */}
                <div className="absolute inset-0 bg-[#00D9FF]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#FFC700] rounded-3xl rotate-12 opacity-90 shadow-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00D9FF] rounded-full opacity-90 shadow-2xl -z-10"></div>

            {/* Floating credential badges – updated */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-[#FF6B9D] text-white px-6 py-4 rounded-2xl font-bold shadow-2xl shadow-[#FF6B9D]/50 border-4 border-white max-w-[280px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs opacity-90 mb-0.5">Certified</div>
                  <div className="text-sm font-bold leading-tight">Licensed Mental Health Professional</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-8 -right-8 bg-[#00FF88] text-[#0A3D4A] px-6 py-4 rounded-2xl font-bold shadow-2xl shadow-[#00FF88]/50 border-4 border-white max-w-[260px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0A3D4A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs opacity-70 mb-0.5">Background</div>
                  <div className="text-sm font-bold leading-tight">Community Psychology Specialist</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#0A3D4A] px-6 py-3 rounded-full font-bold border-2 border-[#00D9FF]/20 shadow-lg shadow-[#00D9FF]/10">
            <Sparkles className="w-5 h-5 text-[#00D9FF]" />
            MEET ABIGAIL AJAYI
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] leading-[1.1]">
            Guiding You from{" "}
            <span className="relative inline-block text-[#FF6B9D]">
              Stuck
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C60 2 140 2 198 6" stroke="#FF6B9D" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            to{" "}
            <span className="relative inline-block text-[#00FF88]">
              Strong
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C60 2 140 2 198 6" stroke="#00FF88" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Description – updated to remove doctorate implication */}
          <div className="space-y-5">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Abigail Ajayi is a{" "}
              <span className="font-bold text-[#0A3D4A]">
                licensed mental health professional
              </span>{" "}
              with extensive experience in{" "}
              <span className="font-bold text-[#0A3D4A]">
                community psychology
              </span>{" "}
              and client-centered practice. I combines evidence-based methods with genuine empathy, supporting individuals and groups to move from survival to thriving through compassionate, ethical care including thoughtful integration of AI-informed insights.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              With hundreds of clients supported, dozens of workshops delivered, and collaborations across organizations, I brings proven experience and heartfelt dedication to personal coaching, workplace wellbeing, and community mental health initiatives.
            </p>
          </div>

          {/* Highlights – updated */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-2 gap-3"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border-2 border-gray-200 shadow-sm hover:border-[#00D9FF] hover:shadow-lg transition-all duration-300 group"
              >
                <CheckCircle className="w-5 h-5 text-[#00FF88] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0A3D4A] transition-colors">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <a href="/about">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-[#0A3D4A] text-white px-8 py-5 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 group shadow-2xl shadow-[#0A3D4A]/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Learn More About Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-[#00D9FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="absolute inset-0 bg-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#0A3D4A] font-bold gap-3">
                Learn More About Me
                <ArrowRight className="w-5 h-5 translate-x-2" />
              </span>
            </motion.button>
          </a>

          {/* Stats Grid – updated values */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={statVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center group cursor-pointer bg-white rounded-2xl p-5 border-2 border-transparent hover:border-current transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{
                  borderColor: `${stat.color}00`,
                  boxShadow: `0 4px 20px ${stat.color}15`
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                  style={{
                    backgroundColor: stat.color,
                    boxShadow: `0 10px 30px ${stat.color}40`,
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-600 group-hover:text-[#0A3D4A] transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border-2 border-[#00FF88]/30 shadow-md hover:shadow-lg hover:border-[#00FF88] transition-all duration-300 group">
              <div className="w-2.5 h-2.5 bg-[#00FF88] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0A3D4A] transition-colors">
                Available for Consultation
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border-2 border-[#FF6B9D]/30 shadow-md hover:shadow-lg hover:border-[#FF6B9D] transition-all duration-300 group">
              <Award className="w-4 h-4 text-[#FF6B9D] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0A3D4A] transition-colors">
                Experienced Facilitator
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}