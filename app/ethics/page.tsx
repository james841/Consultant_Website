'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  FileCheck,
  AlertCircle,
  CheckCircle,
  Brain,
  Heart,
  Scale,
  UserCheck,
  Database,
  Sparkles
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

export default function EthicsPage() {
  const ethicalPrinciples = [
    {
      icon: UserCheck,
      title: 'Human-in-the-Loop Care',
      description: 'AI insights never operate independently. All interpretations, recommendations, and interventions involve qualified human professionals.',
      color: '#00D9FF',
      details: [
        'Licensed professionals review all AI outputs',
        'Clinical judgment always supersedes algorithms',
        'Collaborative decision-making with clients',
        'Continuous professional oversight'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Non-Diagnostic Use of AI',
      description: 'Predictive models identify risk patterns, not clinical diagnoses. Final clinical decisions remain with licensed practitioners.',
      color: '#FF6B9D',
      details: [
        'Risk indicators, never diagnoses',
        'Supports clinical assessment, doesn\'t replace it',
        'Context-aware interpretation required',
        'Professional evaluation is mandatory'
      ]
    },
    {
      icon: Users,
      title: 'Community-Centered Design',
      description: 'Communities are engaged as partners, not data sources. Tools are co-designed with cultural, social, and contextual sensitivity.',
      color: '#00FF88',
      details: [
        'Community consent at every level',
        'Co-creation with affected populations',
        'Cultural responsiveness built-in',
        'Ongoing community feedback loops'
      ]
    },
    {
      icon: Scale,
      title: 'Equity & Bias Mitigation',
      description: 'We actively monitor and audit AI models to reduce bias related to race, gender, socioeconomic status, and cultural background.',
      color: '#FFC700',
      details: [
        'Regular bias audits and testing',
        'Diverse dataset representation',
        'Fairness metrics tracking',
        'Transparent bias mitigation strategies'
      ]
    },
    {
      icon: Eye,
      title: 'Transparency & Explainability',
      description: 'AI outputs are explained in plain language so individuals and organizations understand what the data means—and what it does not mean.',
      color: '#9D4EDD',
      details: [
        'No black box algorithms',
        'Plain-language explanations',
        'Open methodology documentation',
        'Accessible reporting formats'
      ]
    }
  ];

  const dataGovernance = [
    {
      phase: 'Data Collection',
      icon: Database,
      practices: [
        'Minimal and purpose-driven data collection',
        'No passive surveillance or tracking',
        'Explicit informed consent at every level',
        'Community-level aggregation only'
      ],
      color: '#00D9FF'
    },
    {
      phase: 'Data Storage & Security',
      icon: Lock,
      practices: [
        'Military-grade encryption (AES-256)',
        'Role-based access control',
        'Secure cloud infrastructure (SOC 2 compliant)',
        'Regular security audits'
      ],
      color: '#FF6B9D'
    },
    {
      phase: 'Data Use',
      icon: FileCheck,
      practices: [
        'Used solely for prevention and support',
        'Never sold or shared with third parties',
        'Research use requires separate consent',
        'Purpose limitation strictly enforced'
      ],
      color: '#00FF88'
    },
    {
      phase: 'Data Rights',
      icon: UserCheck,
      practices: [
        'Right to access your data',
        'Right to correct inaccuracies',
        'Right to delete (right to be forgotten)',
        'Right to withdraw consent anytime'
      ],
      color: '#FFC700'
    }
  ];

  const complianceStandards = [
    { name: 'GDPR-Informed Practices', icon: Shield, color: '#00D9FF' },
    { name: 'HIPAA Compliance', icon: Lock, color: '#FF6B9D' },
    { name: 'APA Ethical Principles', icon: Heart, color: '#00FF88' },
    { name: 'Community Psychology Ethics', icon: Users, color: '#FFC700' },
    { name: 'IEEE AI Ethics Standards', icon: Brain, color: '#9D4EDD' },
    { name: 'Trauma-Informed Care Framework', icon: Heart, color: '#FF006E' }
  ];

  const whatAIDoesNot = [
    'Does NOT diagnose mental illness',
    'Does NOT track individuals without consent',
    'Does NOT make automated treatment decisions',
    'Does NOT replace therapists or clinicians',
    'Does NOT sell or share data with third parties',
    'Does NOT operate without human oversight',
    'Does NOT use facial recognition or biometrics',
    'Does NOT discriminate based on protected characteristics'
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
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
          <div className="inline-flex items-center gap-2 bg-[#00FF88] text-[#0A3D4A] px-6 py-3 rounded-full mb-8 font-bold shadow-xl shadow-[#00FF88]/30">
            <Shield className="w-5 h-5" />
            ETHICS & PRIVACY
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
            Our{' '}
            <span className="relative inline-block text-[#00D9FF]">
              Ethical
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C60 2 140 2 198 10" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            Commitment
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Transparency, dignity, and your rights are at the foundation of everything we do
          </p>
        </motion.div>
      </section>

      {/* Intro Statement */}
      <section className="py-20 px-5 md:px-8 bg-[#F8FAFC]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[2rem] p-10 shadow-xl border-2 relative overflow-hidden"
               style={{ 
                 borderColor: '#00D9FF40',
                 boxShadow: '0 10px 40px #00D9FF15'
               }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00D9FF]" />

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A3D4A] mb-6">
              Our Ethical Commitment
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We believe artificial intelligence must <strong>serve human wellbeing</strong>, not replace human judgment. 
              All AI tools on this platform are designed to <strong>support prevention, insight, and early intervention</strong>, 
              while safeguarding dignity, autonomy, and privacy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This page outlines our ethical framework, data governance practices, and your rights as a participant 
              in our platform. If you have questions, we encourage you to{' '}
              <a href="/contact" className="text-[#00D9FF] font-bold hover:underline">reach out</a>.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Ethical Principles */}
      <section className="py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#0A3D4A] px-6 py-3 rounded-full mb-8 font-bold border-2 border-[#00D9FF]/20">
              <Sparkles className="w-5 h-5 text-[#00D9FF]" />
              GUIDING PRINCIPLES
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
              Five Core Principles
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              That guide every decision we make
            </p>
          </motion.div>

          <div className="space-y-12">
            {ethicalPrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[2rem] p-10 shadow-xl border-2 hover:shadow-2xl transition-all relative overflow-hidden"
                style={{ 
                  borderColor: `${principle.color}40`,
                  boxShadow: `0 10px 40px ${principle.color}15`
                }}
              >
                {/* Top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: principle.color }}
                />

                <div className="flex flex-col md:flex-row gap-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl relative"
                    style={{ 
                      backgroundColor: principle.color,
                      boxShadow: `0 10px 40px ${principle.color}40`
                    }}
                  >
                    <principle.icon className="w-10 h-10 text-white" />
                    
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-40"
                      style={{ backgroundColor: principle.color }}
                    />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-serif font-bold text-[#0A3D4A] mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {principle.description}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {principle.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle 
                            className="w-5 h-5 flex-shrink-0 mt-0.5" 
                            style={{ color: principle.color }}
                          />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Governance Framework */}
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
              <Database className="w-5 h-5" />
              DATA GOVERNANCE
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
              Data Governance Framework
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              How we protect, use, and manage your data at every stage
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {dataGovernance.map((phase, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[1.5rem] p-8 shadow-xl border-2 hover:shadow-2xl transition-all relative overflow-hidden"
                style={{ 
                  borderColor: `${phase.color}40`,
                  boxShadow: `0 10px 40px ${phase.color}15`
                }}
              >
                {/* Top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: phase.color }}
                />

                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative"
                  style={{ 
                    backgroundColor: phase.color,
                    boxShadow: `0 10px 40px ${phase.color}40`
                  }}
                >
                  <phase.icon className="w-8 h-8 text-white" />
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-40"
                    style={{ backgroundColor: phase.color }}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-[#0A3D4A] mb-6">
                  {phase.phase}
                </h3>

                <ul className="space-y-3">
                  {phase.practices.map((practice, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle 
                        className="w-5 h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: phase.color }}
                      />
                      <span className="text-gray-700">{practice}</span>
                    </li>
                  ))}
                </ul>
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
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-28 px-5 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 text-[#00FF88] px-6 py-3 rounded-full mb-8 font-bold border-2 border-[#00FF88]/20">
              <Shield className="w-5 h-5" />
              COMPLIANCE
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
              Standards & Frameworks
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our practices align with global ethical and regulatory standards
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {complianceStandards.map((standard, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-[#F8FAFC] rounded-2xl p-6 border-2 hover:shadow-xl transition-all text-center"
                style={{ 
                  borderColor: `${standard.color}20`,
                  boxShadow: `0 4px 20px ${standard.color}10`
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-lg relative"
                  style={{ 
                    backgroundColor: standard.color,
                    boxShadow: `0 10px 40px ${standard.color}40`
                  }}
                >
                  <standard.icon className="w-8 h-8 text-white" />
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-40"
                    style={{ backgroundColor: standard.color }}
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-[#0A3D4A]">
                  {standard.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accountability */}
      <section className="py-28 px-5 md:px-8 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-[2rem] p-10 shadow-xl border-2 relative overflow-hidden"
            style={{ 
              borderColor: '#00D9FF40',
              boxShadow: '0 10px 40px #00D9FF15'
            }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00D9FF]" />

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A3D4A] mb-6">
              Accountability & Oversight
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We maintain rigorous accountability through:
              </p>
              <ul className="space-y-3">
                {[
                  'Ethical review process aligned with IRB principles',
                  'Regular internal audits of AI models and outputs',
                  'Ongoing evaluation of unintended impacts',
                  'Community feedback mechanisms',
                  'Third-party security assessments',
                  'Transparent incident reporting'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-28 px-5 md:px-8 bg-[#0A3D4A] relative overflow-hidden">
        {/* Background elements */}
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
            Commitment to Continuous Improvement
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Ethics is not static. Our governance framework evolves through ongoing research, 
            community feedback, policy updates, and academic peer engagement.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[#00D9FF] italic">
            Ethical AI is not a feature it is a responsibility we uphold every day.
          </p>
        </motion.div>
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
            Questions About Our Ethics?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            We are committed to transparency. Reach out with any concerns or questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#00D9FF] text-white px-12 py-6 rounded-2xl font-bold hover:bg-[#00B8DD] transition-all shadow-2xl shadow-[#00D9FF]/40 text-lg"
              >
                Contact Us
              </motion.button>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#0A3D4A] text-[#0A3D4A] px-12 py-6 rounded-2xl font-bold hover:bg-[#0A3D4A] hover:text-white transition-all text-lg"
            >
              Download Privacy Policy
            </motion.button>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}