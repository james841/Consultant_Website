'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Building2,
  CheckCircle,
  Lightbulb,
  Brain,
  Award, 
  Users, 
  TrendingUp,
  FileText,
  ExternalLink,
  Target,
  BarChart3,
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

export default function ResearchPage() {
  const researchAreas = [
    {
      icon: Brain,
      title: 'AI Ethics in Mental Health',
      description: 'Investigating responsible AI applications in mental health contexts',
      color: '#00D9FF'
    },
    {
      icon: Users,
      title: 'Community Psychology',
      description: 'Understanding mental health at community and systems levels',
      color: '#FF6B9D'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Early identification of mental health risks in populations',
      color: '#00FF88'
    },
    {
      icon: Target,
      title: 'Intervention Effectiveness',
      description: 'Evaluating community-based mental health programs',
      color: '#FFC700'
    }
  ];

  const publications = [
    {
      title: 'Ethical AI for Community Mental Health: A Framework for Responsible Innovation',
      journal: 'Journal of Community Psychology',
      year: '2025',
      authors: 'Dr. [Client Name], et al.',
      link: '#',
      type: 'Peer-Reviewed Article',
      color: '#00D9FF'
    },
    {
      title: 'Predictive Models for Mental Health Risk: Balancing Accuracy and Ethics',
      journal: 'AI & Ethics in Healthcare',
      year: '2024',
      authors: 'Dr. [Client Name], Co-authors',
      link: '#',
      type: 'Research Paper',
      color: '#FF6B9D'
    },
    {
      title: 'Community-Centered Approaches to Mental Health AI',
      journal: 'Mental Health Innovation Review',
      year: '2024',
      authors: 'Dr. [Client Name]',
      link: '#',
      type: 'Commentary',
      color: '#00FF88'
    }
  ];

  const caseStudies = [
    {
      title: 'University Mental Health Initiative',
      organization: 'Major State University',
      challenge: 'Rising student mental health crises with limited counseling resources',
      approach: 'Implemented AI-driven early warning system to identify at-risk student populations',
      outcomes: [
        '35% reduction in crisis interventions',
        '60% increase in students seeking preventive support',
        '89% student satisfaction with new proactive approach'
      ],
      color: '#00D9FF'
    },
    {
      title: 'Corporate Burnout Prevention',
      organization: 'Tech Company (500+ employees)',
      challenge: 'High burnout rates affecting productivity and retention',
      approach: 'Designed comprehensive workplace mental health strategy with AI monitoring',
      outcomes: [
        '42% decrease in reported burnout symptoms',
        '25% improvement in employee engagement scores',
        '$2M savings in reduced turnover costs'
      ],
      color: '#FF6B9D'
    },
    {
      title: 'Community Health Collaborative',
      organization: 'Regional Health Network',
      challenge: 'Mental health disparities in underserved communities',
      approach: 'Co-designed community-level mental health surveillance system',
      outcomes: [
        '50+ community leaders trained',
        '3 new mental health programs launched',
        '1,200+ residents reached in first year'
      ],
      color: '#00FF88'
    }
  ];

  const impactMetrics = [
    { number: '5,000+', label: 'Lives Impacted', icon: Users, color: '#00D9FF' },
    { number: '30+', label: 'Organizations Served', icon: Building2, color: '#FF6B9D' },
    { number: '15+', label: 'Research Publications', icon: BookOpen, color: '#00FF88' },
    { number: '120+', label: 'Workshops Delivered', icon: Award, color: '#FFC700' }
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
          <div className="inline-flex items-center gap-2 bg-[#00D9FF] text-[#0A3D4A] px-6 py-3 rounded-full mb-8 font-bold shadow-xl shadow-[#00D9FF]/30">
            <Sparkles className="w-5 h-5" />
            RESEARCH & IMPACT
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
            Evidence-Based{' '}
            <span className="relative inline-block text-[#00D9FF]">
              Innovation
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C60 2 140 2 198 10" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Rigorous research driving real-world mental health outcomes
          </p>
        </motion.div>
      </section>

      {/* Research Areas */}
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
              <Brain className="w-5 h-5 text-[#00D9FF]" />
              OUR FOCUS
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
              Research Focus Areas
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {researchAreas.map((area, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[1.5rem] p-8 shadow-xl border-2 hover:shadow-2xl transition-all relative overflow-hidden group"
                style={{ 
                  borderColor: `${area.color}40`,
                  boxShadow: `0 10px 40px ${area.color}15`
                }}
              >
                {/* Top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: area.color }}
                />

                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative"
                  style={{ 
                    backgroundColor: area.color,
                    boxShadow: `0 10px 40px ${area.color}40`
                  }}
                >
                  <area.icon className="w-8 h-8 text-white" />
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-40"
                    style={{ backgroundColor: area.color }}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-[#0A3D4A] mb-4 group-hover:scale-105 transition-transform origin-left">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {area.description}
                </p>

                {/* Bottom accent */}
                <div 
                  className="h-1 w-0 group-hover:w-full transition-all duration-300 mt-6 rounded-full"
                  style={{ backgroundColor: area.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications */}
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
              <FileText className="w-5 h-5" />
              PUBLICATIONS
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
              Recent Publications
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Peer-reviewed research contributing to the field
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-[1.5rem] p-8 shadow-lg border-2 hover:shadow-2xl transition-all group relative overflow-hidden"
                style={{ 
                  borderColor: `${pub.color}40`,
                  boxShadow: `0 8px 30px ${pub.color}15`
                }}
              >
                {/* Top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: pub.color }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div 
                      className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 border-2"
                      style={{ 
                        color: pub.color,
                        backgroundColor: `${pub.color}15`,
                        borderColor: `${pub.color}30`
                      }}
                    >
                      {pub.type}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0A3D4A] mb-4 group-hover:scale-[1.02] transition-transform origin-left">
                      {pub.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span className="font-semibold">{pub.journal}</span> • {pub.year}
                    </p>
                    
                    <p className="text-gray-500 text-sm">{pub.authors}</p>
                  </div>
                  
                  <a 
                    href={pub.link}
                    className="flex items-center gap-2 font-bold hover:gap-3 transition-all whitespace-nowrap group/link px-6 py-3 rounded-xl border-2"
                    style={{
                      color: pub.color,
                      borderColor: `${pub.color}40`,
                      backgroundColor: `${pub.color}10`
                    }}
                  >
                    Read More
                    <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 text-[#00FF88] px-6 py-3 rounded-full mb-8 font-bold border-2 border-[#00FF88]/20">
              <BarChart3 className="w-5 h-5" />
              CASE STUDIES
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0A3D4A] mb-6">
              Impact Case Studies
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real outcomes from community partnerships
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[2rem] p-10 shadow-2xl border-2 hover:shadow-3xl transition-all relative overflow-hidden"
                style={{ 
                  borderColor: `${study.color}40`,
                  boxShadow: `0 15px 50px ${study.color}20`
                }}
              >
                {/* Top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: study.color }}
                />

                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0A3D4A] mb-3">
                      {study.title}
                    </h3>
                    <p className="text-xl font-semibold" style={{ color: study.color }}>
                      {study.organization}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-lg text-[#0A3D4A] mb-3 flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ 
                          backgroundColor: `${study.color}20`,
                          color: study.color
                        }}
                      >
                        <Target className="w-5 h-5" />
                      </div>
                      Challenge
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-[#0A3D4A] mb-3 flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ 
                          backgroundColor: `${study.color}20`,
                          color: study.color
                        }}
                      >
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      Approach
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{study.approach}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-[#0A3D4A] mb-3 flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ 
                          backgroundColor: `${study.color}20`,
                          color: study.color
                        }}
                      >
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                          <CheckCircle 
                            className="w-5 h-5 flex-shrink-0 mt-0.5" 
                            style={{ color: study.color }}
                          />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative element */}
                <div 
                  className="absolute -bottom-12 -right-12 w-48 h-48 opacity-5 rounded-full"
                  style={{ backgroundColor: study.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-28 px-5 md:px-8 bg-[#0A3D4A] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#00D9FF] opacity-[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6B9D] opacity-[0.05] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#00D9FF]/20 text-[#00D9FF] px-6 py-3 rounded-full mb-8 font-bold border-2 border-[#00D9FF]/30">
              <TrendingUp className="w-5 h-5" />
              IMPACT METRICS
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Measured Impact
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ rotate: -5 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-2xl relative"
                  style={{ 
                    backgroundColor: metric.color,
                    boxShadow: `0 20px 60px ${metric.color}60`
                  }}
                >
                  <metric.icon className="w-12 h-12 text-white" />
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-50"
                    style={{ backgroundColor: metric.color }}
                  />
                </motion.div>

                <div 
                  className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform"
                  style={{ color: metric.color }}
                >
                  {metric.number}
                </div>
                
                <div className="text-gray-300 text-lg font-semibold">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
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
            Collaborate on Research
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            Interested in partnering on mental health research or exploring our findings?
          </p>
          <a href='/contact'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#00D9FF] text-white px-12 py-6 rounded-2xl font-bold hover:bg-[#00B8DD] transition-all shadow-2xl shadow-[#00D9FF]/40 text-lg"
            >
              Get in Touch
            </motion.button>
          </a>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}