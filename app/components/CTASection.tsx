'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section 
      className="py-24 px-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/business-upward-arrow-backdrop-tech-presentation_1017-60142.jpg')`,
        // Alternative strong options you can swap in:
        // 'https://t4.ftcdn.net/jpg/08/57/35/53/360_F_857355379_BrixmFYcTXcVNOiyAPJBIg0Jn5286X4x.jpg'
        // 'https://thumbs.dreamstime.com/b/deep-blue-to-turquoise-corporate-gradient-background-professional-corporate-gradient-background-smooth-diagonal-transition-426547406.jpg'
      }}
    >
      {/* Optional: subtle dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

      {/* Keep your decorative blurred orbs — they now layer nicely on the image */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00D9FF] opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#FF6B9D] opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFC700] opacity-5 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#FFC700] text-[#0A3D4A] px-6 py-3 rounded-full mb-8 font-bold shadow-xl shadow-[#FFC700]/30"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-sm tracking-wide">START YOUR JOURNEY TODAY</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Ready to Take the{' '}
          <span className="text-[#00D9FF]">First Step?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
          Whether you are seeking personal support or organizational transformation, 
          we are here to help you move from{' '}
          <span className="text-[#FF6B9D] font-bold">stuck</span> to{' '}
          <span className="text-[#00FF88] font-bold">strong</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6B9D] text-white px-10 py-5 rounded-xl font-bold hover:bg-[#FF4D85] transition-all duration-300 shadow-2xl shadow-[#FF6B9D]/40 hover:shadow-[#FF6B9D]/60 flex items-center gap-3 text-lg group"
          >
            Book Free Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-3 border-[#00D9FF] bg-transparent text-[#00D9FF] px-10 py-5 rounded-xl font-bold hover:bg-[#00D9FF] hover:text-[#0A3D4A] transition-all duration-300 shadow-lg shadow-[#00D9FF]/20 text-lg"
          >
            Explore Resources
          </motion.button>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-16 text-gray-300 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse"></div>
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse"></div>
            <span>HIPAA compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF6B9D] rounded-full animate-pulse"></div>
            <span>100% confidential</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}