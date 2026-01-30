'use client';

import React from 'react';
import { CheckCircle, User, Building2, FlaskConical, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function ServicesOverviewSection() {
  const services = [
    {
      icon: User,
      title: 'For Individuals',
      items: ['One-on-one therapy', 'Mental health coaching', 'Preventive support', 'Crisis intervention'],
      cta: 'Book Session',
      color: '#00D9FF',
      accentColor: '#FF6B9D'
    },
    {
      icon: Building2,
      title: 'For Organizations',
      items: ['Team training workshops', 'Burnout prevention', 'Mental health strategy', 'Program evaluation'],
      cta: 'Schedule Consultation',
      color: '#FF6B9D',
      accentColor: '#FFC700'
    },
    {
      icon: FlaskConical,
      title: 'For Researchers',
      items: ['Research collaboration', 'Data partnerships', 'Ethical AI advisory', 'Publication support'],
      cta: 'Partner With Us',
      color: '#00FF88',
      accentColor: '#00D9FF'
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00D9FF] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FF6B9D] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#0A3D4A] px-5 py-2.5 rounded-full mb-6 border border-[#00D9FF]/20">
            <Sparkles className="w-4 h-4 text-[#00D9FF]" />
            <span className="font-bold text-sm tracking-wide">WHAT WE OFFER</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
            Services for{' '}
            <span className="text-[#FF6B9D]">Every Need</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            From individual support to organizational transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2 border-transparent hover:border-opacity-50"
              style={{ '--hover-border': service.color } as React.CSSProperties}
            >
              {/* Top accent bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ backgroundColor: service.color }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all"
                style={{ 
                  backgroundColor: service.color,
                  boxShadow: `0 10px 40px ${service.color}40`
                }}
              >
                <service.icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#0A3D4A] mb-8 group-hover:scale-105 transition-transform origin-left">
                {service.title}
              </h3>

              {/* Items */}
              <ul className="space-y-4 mb-10">
                {service.items.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle 
                      className="w-6 h-6 mt-0.5 flex-shrink-0" 
                      style={{ color: service.color }}
                    />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                style={{ backgroundColor: service.color }}
              >
                <span className="relative z-10">{service.cta}</span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                  style={{ backgroundColor: service.accentColor }}
                />
              </motion.button>

              {/* Decorative corner */}
              <div 
                className="absolute bottom-0 right-0 w-32 h-32 opacity-5 rounded-tl-full"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}