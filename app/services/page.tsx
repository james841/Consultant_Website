'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Building2, 
  FlaskConical, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Users,
  TrendingUp,
  BookOpen,
  Target,
  Award,
  Lightbulb,
  Shield,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
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

export default function ServicesPage() {
  const mainServices = [
    {
      icon: User,
      title: 'For Individuals',
      tagline: 'Personal Support & Therapy',
      description: 'One-on-one care tailored to your unique mental health journey',
      services: [
        { icon: Heart, name: 'Individual Therapy', desc: 'Evidence-based therapeutic approaches for anxiety, depression, trauma, and more' },
        { icon: Users, name: 'Mental Health Coaching', desc: 'Goal-oriented support for personal growth and wellbeing' },
        { icon: Shield, name: 'Preventive Care', desc: 'Early intervention strategies before challenges become crises' },
        { icon: TrendingUp, name: 'Crisis Support', desc: 'Immediate assistance during mental health emergencies' },
      ],
      color: '#00D9FF',
      link: '/services/individuals'
    },
    {
      icon: Building2,
      title: 'For Organizations',
      tagline: 'Workplace Mental Health Solutions',
      description: 'Transform your organization into a mentally healthy workplace',
      services: [
        { icon: Users, name: 'Team Workshops', desc: 'Interactive training on stress management, resilience, and communication' },
        { icon: Shield, name: 'Burnout Prevention', desc: 'Organizational strategies to reduce workplace stress and improve wellbeing' },
        { icon: Target, name: 'Mental Health Strategy', desc: 'Comprehensive assessment and strategic planning for workplace mental health' },
        { icon: Award, name: 'Program Evaluation', desc: 'Data-driven analysis of your mental health initiatives' },
      ],
      color: '#FF6B9D',
      link: '/services/organizations'
    },
    {
      icon: FlaskConical,
      title: 'For Researchers',
      tagline: 'Collaborative Research & Innovation',
      description: 'Partner in advancing mental health research and ethical AI',
      services: [
        { icon: BookOpen, name: 'Research Collaboration', desc: 'Joint studies on community mental health and AI applications' },
        { icon: Users, name: 'Data Partnerships', desc: 'Ethical data sharing for mental health research advancement' },
        { icon: Lightbulb, name: 'AI Ethics Advisory', desc: 'Consultation on responsible AI in mental health contexts' },
        { icon: Award, name: 'Publication Support', desc: 'Guidance on research dissemination and academic publishing' },
      ],
      color: '#00FF88',
      link: '/services/researchers'
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-36 pb-24 px-5 md:px-8 bg-[#0A3D4A] relative overflow-hidden">
        {/* Background elements - solid colors only */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#00D9FF] opacity-[0.06] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF6B9D] opacity-[0.06] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#FFC700] opacity-[0.04] rounded-full blur-3xl"></div>

        {/* Geometric accents */}
        <div className="absolute top-32 right-32 w-24 h-24 border-3 border-[#00D9FF] opacity-15 rounded-3xl rotate-12"></div>
        <div className="absolute bottom-20 left-24 w-20 h-20 border-3 border-[#FF6B9D] opacity-15 rounded-full"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#00D9FF] text-[#0A3D4A] px-6 py-3 rounded-full mb-8 font-bold shadow-xl shadow-[#00D9FF]/30">
            <Sparkles className="w-5 h-5" />
            COMPREHENSIVE SERVICES
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
            Mental Health Support for{' '}
            <span className="relative inline-block text-[#00D9FF]">
              Everyone
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C60 2 140 2 198 10" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            From individual therapy to organizational transformation and research collaboration—
            tailored solutions for your unique needs.
          </p>
        </motion.div>
      </section>

      {/* Main Services Sections */}
      {mainServices.map((service, idx) => (
        <section 
          key={idx} 
          className={`py-28 px-5 md:px-8 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={idx % 2 === 1 ? 'lg:order-2' : ''}
              >
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-2xl relative"
                  style={{ 
                    backgroundColor: service.color,
                    boxShadow: `0 15px 50px ${service.color}50`
                  }}
                >
                  <service.icon className="w-12 h-12 text-white" />
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                    style={{ backgroundColor: service.color }}
                  />
                </motion.div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-4 leading-tight">
                  {service.title}
                </h2>
                
                <p className="text-2xl font-semibold mb-6" style={{ color: service.color }}>
                  {service.tagline}
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                <Link href={service.link}>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-2xl flex items-center gap-3 group overflow-hidden"
                    style={{ 
                      backgroundColor: service.color,
                      boxShadow: `0 10px 40px ${service.color}40`
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Service Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className={idx % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="grid gap-6">
                  {service.services.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={cardVariants}
                      transition={{ duration: 0.5 }}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                      className="bg-white rounded-2xl p-6 shadow-xl border-2 hover:shadow-2xl transition-all group"
                      style={{ 
                        borderColor: `${service.color}40`,
                        boxShadow: `0 8px 30px ${service.color}15`
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg"
                          style={{ 
                            backgroundColor: `${service.color}20`,
                            color: service.color
                          }}
                        >
                          <item.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#0A3D4A] mb-2 group-hover:scale-105 transition-transform origin-left">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Bottom accent */}
                      <div 
                        className="h-1 w-0 group-hover:w-full transition-all duration-300 mt-4 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-28 px-5 md:px-8 bg-[#0A3D4A] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#00D9FF] opacity-[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6B9D] opacity-[0.05] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#00D9FF]/20 text-[#00D9FF] px-6 py-3 rounded-full mb-8 font-bold border-2 border-[#00D9FF]/30">
              <Sparkles className="w-5 h-5" />
              OUR PROCESS
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              How We Work Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A collaborative, transparent process designed for your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Initial Consultation', desc: 'Free 30-minute discovery call to understand your needs', color: '#00D9FF' },
              { num: '02', title: 'Personalized Plan', desc: 'Customized approach based on your goals and context', color: '#FF6B9D' },
              { num: '03', title: 'Active Engagement', desc: 'Regular sessions, workshops, or collaboration as needed', color: '#FFC700' },
              { num: '04', title: 'Ongoing Support', desc: 'Continuous refinement and long-term partnership', color: '#00FF88' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-sm rounded-[1.5rem] p-8 border-2 hover:bg-white/10 transition-all relative overflow-hidden group"
                style={{ 
                  borderColor: `${step.color}30`,
                  boxShadow: `0 10px 40px ${step.color}15`
                }}
              >
                {/* Top accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: step.color }}
                />

                {/* Number badge */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg"
                  style={{ 
                    backgroundColor: step.color,
                    boxShadow: `0 8px 24px ${step.color}50`
                  }}
                >
                  {step.num}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:scale-105 transition-transform origin-left">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {step.desc}
                </p>

                {/* Decorative element */}
                <div 
                  className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-5 md:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            Schedule a free consultation to discuss how we can support your journey
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6B9D] text-white px-12 py-6 rounded-2xl font-bold hover:bg-[#FF4D85] transition-all shadow-2xl shadow-[#FF6B9D]/40 text-lg"
            >
              Book Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}