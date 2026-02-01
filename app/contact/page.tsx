'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Calendar, Sparkles, MessageSquare } from 'lucide-react';

import { Toaster } from 'react-hot-toast';
import BookingForm from '../components/bookingForm';
import ContactForm from '../components/contactForm';
import Navigation from '../components/navigation';
import Footer from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
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

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'booking'>('booking');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@mindcare.com',
      link: 'mailto:hello@mindcare.com',
      color: '#00D9FF',
      description: 'For detailed inquiries',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#FF6B9D',
      description: 'Mon-Fri, 9AM-5PM PST',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Chat with us',
      link: 'https://wa.me/15551234567?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20mental%20health%20services',
      color: '#25D366',
      description: 'Quick responses',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null,
      color: '#FFC700',
      description: 'Available virtually worldwide',
    },
  ];

  return (
    <>
      <Navigation />
      <Toaster position="top-right" />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-36 pb-24 px-5 md:px-8 bg-[#0A3D4A] relative overflow-hidden">
          {/* Background elements - solid colors only */}
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#00D9FF] opacity-[0.06] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF6B9D] opacity-[0.06] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#FFC700] opacity-[0.04] rounded-full blur-3xl" />

          {/* Geometric accents */}
          <div className="absolute top-32 right-32 w-24 h-24 border-3 border-[#00D9FF] opacity-15 rounded-3xl rotate-12" />
          <div className="absolute bottom-20 left-24 w-20 h-20 border-3 border-[#FF6B9D] opacity-15 rounded-full" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-[#00D9FF] text-[#0A3D4A] px-6 py-3 rounded-full mb-8 font-bold shadow-xl shadow-[#00D9FF]/30">
              <Sparkles className="w-5 h-5" />
              GET IN TOUCH
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
              Let is Start a{' '}
              <span className="relative inline-block text-[#00D9FF]">
                Conversation
                <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C60 2 140 2 198 10" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Whether you are seeking support, exploring collaboration, or have questions—
              I am here to help.
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-5 md:px-8 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-[1.5rem] p-6 shadow-xl text-center border-2 hover:shadow-2xl transition-all duration-300 group"
                  style={{
                    borderColor: `${info.color}40`,
                    boxShadow: `0 10px 40px ${info.color}15`,
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-lg relative"
                    style={{
                      backgroundColor: info.color,
                      boxShadow: `0 10px 40px ${info.color}40`,
                    }}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                    
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-40"
                      style={{ backgroundColor: info.color }}
                    />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-lg font-bold text-[#0A3D4A] mb-2">{info.label}</h3>

                  {/* Value/Link */}
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.label === 'WhatsApp' ? '_blank' : undefined}
                      rel={info.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                      className="text-gray-700 hover:font-bold font-medium transition-all block mb-2 group-hover:scale-105"
                      style={{ color: info.color }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium mb-2">{info.value}</p>
                  )}

                  {/* Description */}
                  <p className="text-xs text-gray-500">{info.description}</p>

                  {/* Bottom accent */}
                  <div 
                    className="h-1 w-0 group-hover:w-full transition-all duration-300 mt-4 mx-auto rounded-full"
                    style={{ backgroundColor: info.color }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Quick WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-8 py-6 rounded-2xl shadow-lg border-2 border-[#25D366]/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#0A3D4A]">Need immediate assistance?</p>
                    <p className="text-sm text-gray-600">Message us on WhatsApp for quick responses</p>
                  </div>
                </div>
                <motion.a
                  href="https://wa.me/15551234567?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20mental%20health%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1FAD55] transition-all shadow-lg shadow-[#25D366]/30 flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-28 px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Tab Switcher */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-[#F8FAFC] p-2 rounded-2xl shadow-lg border-2 border-gray-200">
                <button
                  onClick={() => setActiveTab('booking')}
                  className={`px-6 md:px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 ${
                    activeTab === 'booking'
                      ? 'bg-[#FF6B9D] text-white shadow-xl shadow-[#FF6B9D]/40'
                      : 'text-gray-600 hover:text-[#FF6B9D] hover:bg-white/60'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span className="hidden sm:inline">Book Consultation</span>
                  <span className="sm:hidden">Book</span>
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 md:px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 ${
                    activeTab === 'contact'
                      ? 'bg-[#00D9FF] text-white shadow-xl shadow-[#00D9FF]/40'
                      : 'text-gray-600 hover:text-[#00D9FF] hover:bg-white/60'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="hidden sm:inline">General Inquiry</span>
                  <span className="sm:hidden">Inquiry</span>
                </button>
              </div>
            </div>

            {/* Form Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border-2"
              style={{
                borderColor: activeTab === 'booking' ? '#FF6B9D40' : '#00D9FF40',
                boxShadow: activeTab === 'booking' 
                  ? '0 20px 60px #FF6B9D20' 
                  : '0 20px 60px #00D9FF20',
              }}
            >
              {/* Top accent bar */}
              <div 
                className="h-1.5 w-24 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: activeTab === 'booking' ? '#FF6B9D' : '#00D9FF' }}
              />

              <div className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A3D4A] mb-3">
                  {activeTab === 'booking' ? 'Book a Free Consultation' : 'Send Me a Message'}
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  {activeTab === 'booking'
                    ? 'Schedule a free 30-minute consultation to discuss your needs and how I can help.'
                    : "Have a question or want to learn more? Drop me a message and I'll respond within 24 hours."}
                </p>
              </div>

              {activeTab === 'booking' ? <BookingForm /> : <ContactForm />}
            </motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 px-5 md:px-8 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-[#00D9FF]/10 text-[#0A3D4A] px-6 py-3 rounded-full mb-6 border-2 border-[#00D9FF]/20">
                <Sparkles className="w-5 h-5 text-[#00D9FF]" />
                THE PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A3D4A] mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A simple, transparent process designed with your comfort in mind
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Quick Response',
                  desc: "I'll respond to all inquiries within 24 hours",
                  color: '#00D9FF',
                },
                {
                  step: '02',
                  title: 'Free Consultation',
                  desc: '30-minute call to discuss your needs and fit',
                  color: '#FF6B9D',
                },
                {
                  step: '03',
                  title: 'Personalized Plan',
                  desc: 'Custom approach tailored to your goals',
                  color: '#00FF88',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[1.5rem] p-8 shadow-xl text-center relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-300"
                  style={{
                    borderColor: `${item.color}40`,
                    boxShadow: `0 10px 40px ${item.color}15`,
                  }}
                >
                  {/* Top accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Step number */}
                  <div
                    className="text-6xl font-serif font-bold mb-4 opacity-90"
                    style={{ color: item.color }}
                  >
                    {item.step}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0A3D4A] mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>

                  {/* Decorative circle */}
                  <div 
                    className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section className="py-20 px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#00FF88]/10 border-2 border-[#00FF88]/30 rounded-[1.5rem] p-8 md:p-10 text-center relative overflow-hidden"
            >
              {/* Icon – FIXED TYPO HERE */}
              <div className="w-16 h-16 bg-[#00FF88] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#00FF88]/40">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round"  
                    strokeWidth={2} 
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[#0A3D4A] mb-4">Your Privacy Matters</h3>
              <p className="text-gray-700 leading-relaxed text-lg max-w-2xl mx-auto">
                All communications are <strong className="text-[#0A3D4A]">confidential and HIPAA-compliant</strong>. 
                I will never share your information with third parties without your explicit consent.
              </p>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#00FF88] opacity-5 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00FF88] opacity-5 rounded-full" />
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}