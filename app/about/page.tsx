'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Heart, 
  Users, 
  Brain,
  GraduationCap,
  Sparkles,
  Target,
  Lightbulb
} from 'lucide-react';
import Image from 'next/image';
import Navigation from '../components/navigation';
import Footer from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function AboutHero() {
  return (
    <section 
      className="pt-36 pb-24 px-5 md:px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/abstract-d-brain-model-composed-glowing-cyan-lines-neural-connections-symbolizing-intelligence-neuroscience-abstract-d-400875868.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-[#0A3D4A] opacity-75" /> {/* Slightly lighter overlay for readability */}

      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#00D9FF] opacity-[0.08] rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#FF6B9D] opacity-[0.08] rounded-full blur-3xl"></div>

      <div className="absolute top-32 right-32 w-24 h-24 border-3 border-[#00D9FF] opacity-20 rounded-3xl rotate-12"></div>
      <div className="absolute bottom-20 left-24 w-20 h-20 border-3 border-[#FF6B9D] opacity-20 rounded-full"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 bg-[#00D9FF] text-[#0A3D4A] px-6 py-3 rounded-full mb-8 font-bold shadow-xl shadow-[#00D9FF]/30">
          <Sparkles className="w-5 h-5" />
          ABOUT ME
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]">
          Bridging{' '}
          <span className="relative inline-block text-[#00D9FF]">
            Science
            <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path d="M2 10C60 2 140 2 198 10" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span>
          ,{' '}
          <span className="relative inline-block text-[#FF6B9D]">
            Technology
            <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path d="M2 10C60 2 140 2 198 10" stroke="#FF6B9D" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span>
          , and{' '}
          <span className="relative inline-block text-[#00FF88]">
            Human Care
            <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path d="M2 10C60 2 140 2 198 10" stroke="#00FF88" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          I am Abigail Ajayi, a licensed mental health professional and community psychology specialist 
          dedicated to making mental health support accessible, ethical, and truly effective.
        </p>
      </motion.div>
    </section>
  );
}

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: 'Ethical AI',
      description: 'Transparency, privacy, and fairness in every algorithm',
      color: '#00D9FF'
    },
    {
      icon: Heart,
      title: 'Human-Centered Care',
      description: 'Technology supports, never replaces, people',
      color: '#FF6B9D'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Co-designed solutions with those we serve',
      color: '#00FF88'
    },
    {
      icon: BookOpen,
      title: 'Evidence-Based',
      description: 'Research-driven decisions and practices',
      color: '#FFC700'
    },
  ];

  const credentials = [
    { icon: GraduationCap, text: "Master's-Level Training in Community Psychology", color: '#00D9FF' },
    { icon: Award, text: 'Licensed Mental Health Professional', color: '#FF6B9D' },
    { icon: Brain, text: 'AI Ethics & Innovation Focus', color: '#00FF88' },
    { icon: Users, text: 'Extensive Clinical & Community Experience', color: '#FFC700' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <AboutHero />

      <section className="py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white hover:border-[#00D9FF] transition-all duration-500">
                <div className="aspect-[4/5] relative bg-[#0A3D4A]">
                  <Image
                    src="/image five.jpeg"
                    alt="Abigail Ajayi professional photo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#FFC700] rounded-3xl rotate-12 opacity-90 shadow-2xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00D9FF] rounded-full opacity-90 shadow-2xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#00D9FF] px-6 py-3 rounded-full font-bold border-2 border-[#00D9FF]/20 mb-4">
              <Heart className="w-5 h-5" />
              MY STORY
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A]">
              My Story
            </h2>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                My journey into mental health began with a simple observation: too many people 
                suffer in silence, not because help does not exist, but because it is not accessible, 
                affordable, or culturally responsive.
              </p>

              <p>
                Through years of direct work with underserved communities, I witnessed firsthand the systemic barriers 
                to mental health care and how traditional approaches often failed to reach those who needed them most.
              </p>

              <p>
                This experience led me to explore how <span className="font-bold text-[#00D9FF]">artificial intelligence</span> could help identify 
                at-risk individuals and communities <span className="font-bold text-[#FF6B9D]">before crises occur</span>. But I quickly 
                realized that AI alone is not the answer—it must be <span className="font-bold text-[#00FF88]">ethical, transparent, 
                and always human-centered</span>.
              </p>

              <p>
                Today, I combine my clinical expertise and community insights with thoughtful AI integration 
                to help individuals and organizations build resilient, accessible mental health support systems.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {credentials.map((cred, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 transition-all shadow-md hover:shadow-lg"
                  style={{ 
                    borderColor: `${cred.color}40`,
                    boxShadow: `0 4px 15px ${cred.color}15`
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: `${cred.color}20`,
                      color: cred.color
                    }}
                  >
                    <cred.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 leading-tight">{cred.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - unchanged as it doesn't mention PhD */}

      {/* Core Values - unchanged */}

      {/* CTA Section */}
      <section className="py-24 px-5 md:px-8 bg-[#0A3D4A] relative overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#00D9FF] opacity-[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6B9D] opacity-[0.05] rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Let us Work Together
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Ready to explore how we can support your mental health journey or organizational needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6B9D] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#FF4D85] transition-all shadow-2xl shadow-[#FF6B9D]/40 block text-center text-lg"
            >
              Book Consultation
            </motion.a>

            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#00D9FF] text-[#00D9FF] px-12 py-5 rounded-2xl font-bold hover:bg-[#00D9FF] hover:text-[#0A3D4A] transition-all block text-center text-lg"
            >
              View Services
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}