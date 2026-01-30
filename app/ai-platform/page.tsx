'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Users, 
  TrendingUp, 
  Eye,
  Lock,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Database,
  BarChart3,
  Heart,
  Zap
} from 'lucide-react';
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

export default function AIPlatformPage() {
  const howItWorks = [
    {
      step: '01',
      icon: Database,
      title: 'Community Data Collection',
      description: 'Communities voluntarily share anonymized wellbeing data through secure, consent-based systems. No individual tracking—only aggregated community trends.',
      color: '#00D9FF',
      points: [
        'Fully anonymized and encrypted',
        'Community-level consent protocols',
        'Transparent data governance',
        'No personally identifiable information'
      ]
    },
    {
      step: '02',
      icon: Brain,
      title: 'Ethical AI Analysis',
      description: 'Our algorithms analyze patterns to identify potential mental health risks at the community level—never diagnosing individuals.',
      color: '#FF6B9D',
      points: [
        'Pattern recognition, not diagnosis',
        'Bias monitoring and mitigation',
        'Explainable AI outputs',
        'Regular algorithm audits'
      ]
    },
    {
      step: '03',
      icon: TrendingUp,
      title: 'Early Risk Prediction',
      description: 'The platform identifies areas where mental health support may be needed before crises emerge, enabling proactive intervention.',
      color: '#FFC700',
      points: [
        'Community-level risk indicators',
        'Trend analysis over time',
        'Early warning systems',
        'Contextual interpretation'
      ]
    },
    {
      step: '04',
      icon: Heart,
      title: 'Human-Centered Action',
      description: 'Licensed professionals review all insights and design appropriate interventions. AI supports, but humans always decide.',
      color: '#00FF88',
      points: [
        'Professional oversight required',
        'Personalized care strategies',
        'Community-informed responses',
        'Continuous feedback loops'
      ]
    }
  ];

  const aiCapabilities = [
    {
      icon: BarChart3,
      title: 'Community Risk Dashboards',
      description: 'Visual representations of mental health trends across your community, identifying areas that need support.',
      color: '#00D9FF'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Early warning indicators for stress, burnout, isolation, and other mental health challenges.',
      color: '#FF6B9D'
    },
    {
      icon: Eye,
      title: 'Transparent Insights',
      description: 'Plain-language explanations of what the data means and how conclusions were reached.',
      color: '#00FF88'
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Military-grade encryption, GDPR-compliant practices, and zero data sharing with third parties.',
      color: '#FFC700'
    }
  ];

  const whatAIDoesNot = [
    'Does NOT diagnose mental illness',
    'Does NOT track individuals without consent',
    'Does NOT make automated treatment decisions',
    'Does NOT replace therapists or clinicians',
    'Does NOT sell or share your data',
    'Does NOT operate without human oversight'
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
            <Zap className="w-5 h-5" />
            AI-POWERED PLATFORM
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
            Ethical AI for{' '}
            <span className="relative inline-block text-[#00D9FF]">
              Community
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C60 2 140 2 198 10" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            Mental Health
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
            Technology that predicts mental health risks early while respecting privacy, 
            dignity, and human judgment.
          </p>

          <div className="inline-flex items-center gap-3 bg-[#00FF88]/20 text-[#00FF88] px-8 py-4 rounded-full font-bold border-2 border-[#00FF88]/30 backdrop-blur-sm">
            <Lock className="w-5 h-5" />
            Privacy-First • Human-Centered • Transparent
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-5 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#0A3D4A] px-6 py-3 rounded-full mb-8 font-bold border-2 border-[#00D9FF]/20">
              <Brain className="w-5 h-5 text-[#00D9FF]" />
              THE PROCESS
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
              How Our Platform Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A four-step process that prioritizes ethics, transparency, and human expertise
            </p>
          </motion.div>

          <div className="space-y-24">
            {howItWorks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl relative"
                      style={{ 
                        backgroundColor: item.color,
                        boxShadow: `0 15px 50px ${item.color}50`
                      }}
                    >
                      <item.icon className="w-12 h-12 text-white" />
                      
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                        style={{ backgroundColor: item.color }}
                      />
                    </motion.div>

                    <div 
                      className="text-7xl font-serif font-bold opacity-20"
                      style={{ color: item.color }}
                    >
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0A3D4A] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <ul className="space-y-4">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle 
                          className="w-6 h-6 flex-shrink-0 mt-0.5" 
                          style={{ color: item.color }}
                        />
                        <span className="text-gray-700 text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div 
                    className="aspect-square rounded-[2rem] flex items-center justify-center border-4 shadow-2xl relative overflow-hidden"
                    style={{ 
                      backgroundColor: `${item.color}10`,
                      borderColor: item.color,
                      boxShadow: `0 20px 60px ${item.color}30`
                    }}
                  >
                    <item.icon 
                      className="w-64 h-64 opacity-20" 
                      style={{ color: item.color }}
                    />
                    
                    {/* Decorative circles */}
                    <div 
                      className="absolute -top-12 -left-12 w-48 h-48 opacity-10 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div 
                      className="absolute -bottom-12 -right-12 w-56 h-56 opacity-10 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-28 px-5 md:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#FF6B9D]/10 text-[#FF6B9D] px-6 py-3 rounded-full mb-8 font-bold border-2 border-[#FF6B9D]/20">
              <Sparkles className="w-5 h-5" />
              CAPABILITIES
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              What our AI-powered platform can do for your community
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {aiCapabilities.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[1.5rem] p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                style={{ 
                  borderColor: `${item.color}40`,
                  boxShadow: `0 10px 40px ${item.color}15`
                }}
              >
                {/* Top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: item.color }}
                />

                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative"
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: `0 10px 40px ${item.color}40`
                  }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-40"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-[#0A3D4A] mb-4 group-hover:scale-105 transition-transform origin-left">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div 
                  className="h-1 w-0 group-hover:w-full transition-all duration-300 mt-6 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What AI Does NOT Do */}
      <section className="py-28 px-5 md:px-8 bg-[#0A3D4A] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#FF6B9D] opacity-[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00D9FF] opacity-[0.05] rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#FF6B9D] text-white px-6 py-3 rounded-full mb-8 font-bold shadow-xl shadow-[#FF6B9D]/40">
              <AlertCircle className="w-5 h-5" />
              CLEAR BOUNDARIES
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              What Our AI Does{' '}
              <span className="text-[#FF6B9D]">NOT</span> Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Clear ethical boundaries that protect your wellbeing and privacy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whatAIDoesNot.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#FF6B9D]/30 flex items-start gap-4 hover:bg-white/10 transition-all"
              >
                <AlertCircle className="w-6 h-6 text-[#FF6B9D] flex-shrink-0 mt-1" />
                <span className="text-white text-lg font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 bg-[#00FF88]/10 border-2 border-[#00FF88]/30 rounded-[1.5rem] p-8 md:p-10 text-center backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-[#00FF88] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#00FF88]/40">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              <strong className="text-[#00FF88]">Our commitment:</strong> AI is a tool that 
              supports human expertise, never a replacement for compassionate, professional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 md:px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            Explore our ethics framework or schedule a consultation to discuss how
            AI can support your community is mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/ethics'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#00D9FF] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#00B8DD] transition-all shadow-2xl shadow-[#00D9FF]/40"
              >
                Read Ethics Framework
              </motion.button>
            </a>
            <a href='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#FF6B9D] text-[#FF6B9D] px-10 py-5 rounded-2xl font-bold hover:bg-[#FF6B9D] hover:text-white transition-all"
              >
                Book Consultation
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}