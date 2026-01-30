'use client';

import React from 'react';
import { Users, Brain, TrendingUp, Heart, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    } as const,
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function HowItWorksSection() {
  const steps = [
    { 
      icon: Users, 
      title: 'Data Collection', 
      desc: 'Communities share anonymized wellbeing data with full consent and transparency', 
      num: '01',
      color: '#00D9FF',
      accent: 'bg-[#00D9FF]'
    },
    { 
      icon: Brain, 
      title: 'AI Analysis', 
      desc: 'Ethical algorithms identify risk patterns and trends—not diagnoses', 
      num: '02',
      color: '#FF6B9D',
      accent: 'bg-[#FF6B9D]'
    },
    { 
      icon: TrendingUp, 
      title: 'Early Prediction', 
      desc: 'Insights reveal where support is needed before crises emerge', 
      num: '03',
      color: '#FFC700',
      accent: 'bg-[#FFC700]'
    },
    { 
      icon: Heart, 
      title: 'Human Action', 
      desc: 'Trained professionals deliver personalized care and interventions', 
      num: '04',
      color: '#00FF88',
      accent: 'bg-[#00FF88]'
    }
  ];

  return (
    <section className="py-28 px-5 md:px-8 bg-white relative overflow-hidden">
      {/* Background elements - solid colors only */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#00D9FF] opacity-[0.04] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FF6B9D] opacity-[0.04] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#FFC700] opacity-[0.03] rounded-full blur-3xl"></div>

      {/* Geometric accents */}
      <div className="absolute top-40 right-32 w-24 h-24 border-3 border-[#00D9FF] opacity-8 rounded-3xl rotate-12"></div>
      <div className="absolute bottom-32 left-24 w-20 h-20 border-3 border-[#FF6B9D] opacity-8 rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#0A3D4A] px-6 py-3 rounded-full mb-6 border-2 border-[#00D9FF]/20 shadow-lg shadow-[#00D9FF]/10">
            <Zap className="w-5 h-5 text-[#00D9FF]" />
            <span className="font-bold tracking-wide">OUR PROCESS</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#0A3D4A] mb-6 leading-tight">
            How Our Platform{' '}
            <span className="relative inline-block text-[#00D9FF]">
              Works
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                <path d="M2 8C60 2 140 2 198 8" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AI supports, humans decide. Here is our ethical approach to community mental health.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stepVariants}
              className="relative group"
            >
              {/* Card */}
              <motion.div 
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-[2rem] p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full flex flex-col"
                style={{ 
                  borderColor: `${step.color}40`,
                  boxShadow: `0 10px 40px ${step.color}15`
                }}
              >
                {/* Top accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[2rem]"
                  style={{ backgroundColor: step.color }}
                />

                {/* Number badge */}
                <div 
                  className="absolute top-6 right-6 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-lg opacity-90"
                  style={{ 
                    backgroundColor: step.color,
                    boxShadow: `0 8px 24px ${step.color}50`
                  }}
                >
                  {step.num}
                </div>

                {/* Icon container */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative shadow-2xl"
                  style={{ 
                    backgroundColor: step.color,
                    boxShadow: `0 12px 40px ${step.color}40`
                  }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                    style={{ backgroundColor: step.color }}
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#0A3D4A] mb-4 group-hover:text-opacity-90 transition-all">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-base mb-6 flex-1">
                    {step.desc}
                  </p>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.5, duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-400">Step {idx + 1}/4</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div 
                  className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
                <div 
                  className="absolute -top-4 -left-4 w-24 h-24 opacity-5 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
              </motion.div>

              {/* Arrow connector (desktop only) */}
              {idx < 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.4, duration: 0.5 }}
                  className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                    style={{ 
                      backgroundColor: step.color,
                      boxShadow: `0 8px 24px ${step.color}40`
                    }}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              )}

              {/* Mobile connector */}
              {idx < 3 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: '2rem' }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.4, duration: 0.5 }}
                  className="lg:hidden mx-auto my-4 w-1 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 bg-[#0A3D4A]/5 text-[#0A3D4A] px-8 py-4 rounded-2xl border-2 border-[#0A3D4A]/10">
            <Sparkles className="w-5 h-5 text-[#00D9FF]" />
            <span className="font-semibold text-lg">
              Every step designed with ethics, transparency, and human dignity at the core
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}