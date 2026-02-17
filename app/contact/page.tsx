'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Calendar, Sparkles, Instagram, Youtube } from 'lucide-react';

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
      value: 'abigail@infosentinelmind.co.uk',
      link: 'mailto:abigail@infosentinelmind.co.uk',
      color: '#00D9FF',
      description: 'For detailed inquiries',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 7512 096532',
      link: 'tel:+447512096532',
      color: '#FF6B9D',
      description: 'Mon-Fri, 9AM-5PM WAT',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: ' +447512096532',
      link: 'https://wa.me/77512096532',
      color: '#00FF88',
      description: 'Fastest response',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nigeria',
      link: null,
      color: '#FFC700',
      description: 'Available virtually worldwide',
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/empower_echoes1924?igsh=MXdkMTk3eHZ4aWMzbQ==',
      color: '#FF6B9D',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      link: 'https://www.youtube.com/@Empower-echoes1924',
      color: '#FFC700',
    },
  ];

  return (
    <>
      <Navigation />
      <Toaster position="top-right" />

      {/* Global input improvements */}
      <style jsx global>{`
        input,
        textarea,
        select {
          @apply bg-white border border-gray-300 text-gray-900 text-base rounded-xl px-5 py-4 w-full
                 placeholder:text-gray-500 focus:outline-none focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/30
                 transition-all duration-300 shadow-sm;
        }

        input:focus,
        textarea:focus {
          @apply border-[#00D9FF] ring-[#00D9FF]/40;
        }

        /* Booking tab specific focus */
        .booking-active input:focus,
        .booking-active textarea:focus {
          @apply border-[#FF6B9D] ring-[#FF6B9D]/40;
        }

        /* Better placeholder visibility */
        ::placeholder {
          @apply text-gray-500 opacity-80;
        }
      `}</style>

      <main className="min-h-screen bg-white">
        {/* Hero - slightly refined */}
        <section className="pt-36 pb-28 px-5 md:px-8 bg-[#0A3D4A] relative overflow-hidden">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#00D9FF] opacity-[0.07] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF6B9D] opacity-[0.07] rounded-full blur-3xl" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-[#00D9FF]/90 text-[#0A3D4A] px-7 py-3.5 rounded-full mb-8 font-bold shadow-xl">
              <Sparkles className="w-5 h-5" />
              GET IN TOUCH
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Let’s Start a{' '}
              <span className="relative inline-block text-[#00D9FF]">
                Conversation
                <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C60 2 140 2 198 10" stroke="#00D9FF" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Whether you are seeking support, exploring collaboration, or have questions — I am here to help.
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards - updated */}
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-7 shadow-xl text-center border-2 hover:shadow-2xl transition-all duration-300 group"
                  style={{
                    borderColor: `${info.color}50`,
                    boxShadow: `0 12px 48px ${info.color}20`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: -4 }}
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-lg relative"
                    style={{ backgroundColor: info.color }}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 rounded-2xl blur-xl opacity-40" style={{ backgroundColor: info.color }} />
                  </motion.div>

                  <h3 className="text-lg font-bold text-[#0A3D4A] mb-2">{info.label}</h3>

                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:underline block mb-2 group-hover:scale-105 transition-transform"
                      style={{ color: info.color }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-700 mb-2">{info.value}</p>
                  )}

                  <p className="text-sm text-gray-500">{info.description}</p>

                  <div
                    className="h-1.5 w-0 group-hover:w-20 transition-all duration-400 mt-5 mx-auto rounded-full"
                    style={{ backgroundColor: info.color }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media CTA - removed TikTok */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12"
            >
              <div className="bg-white px-8 py-7 rounded-3xl shadow-xl border-2 border-[#00D9FF]/20 text-center">
                <p className="font-bold text-[#0A3D4A] mb-5 text-lg">Connect with me on social media</p>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 hover:border-current"
                      style={{
                        color: social.color,
                        borderColor: `${social.color}50`,
                        backgroundColor: `${social.color}15`,
                      }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-7 h-7" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Section - improved spacing & shadow */}
        <section className="py-32 px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-14">
              <div className="inline-flex bg-[#F8FAFC] p-2.5 rounded-3xl shadow-xl border border-gray-200">
                <button
                  onClick={() => setActiveTab('booking')}
                  className={`px-7 py-4 rounded-2xl font-bold transition-all flex items-center gap-2.5 text-base md:text-lg ${
                    activeTab === 'booking'
                      ? 'bg-[#FF6B9D] text-white shadow-2xl shadow-[#FF6B9D]/40'
                      : 'text-gray-700 hover:text-[#FF6B9D] hover:bg-white'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-7 py-4 rounded-2xl font-bold transition-all flex items-center gap-2.5 text-base md:text-lg ${
                    activeTab === 'contact'
                      ? 'bg-[#00D9FF] text-white shadow-2xl shadow-[#00D9FF]/40'
                      : 'text-gray-700 hover:text-[#00D9FF] hover:bg-white'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  General Inquiry
                </button>
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl p-8 md:p-12 shadow-2xl border-2 transition-all duration-500 ${
                activeTab === 'booking' ? 'border-[#FF6B9D]/40' : 'border-[#00D9FF]/40'
              }`}
              style={{
                background: 'white',
                boxShadow: activeTab === 'booking'
                  ? '0 25px 70px rgba(255,107,157,0.15)'
                  : '0 25px 70px rgba(0,217,255,0.15)',
              }}
            >
              <div
                className="h-2 w-28 mx-auto mb-10 rounded-full"
                style={{ backgroundColor: activeTab === 'booking' ? '#FF6B9D' : '#00D9FF' }}
              />

              <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0A3D4A] mb-4">
                  {activeTab === 'booking' ? 'Book a Free Consultation' : 'Send Me a Message'}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {activeTab === 'booking'
                    ? 'Schedule a free 30-minute session to discuss your needs and how I can support you.'
                    : "Have a question or want to learn more? Send a message — I'll reply within 24 hours."}
                </p>
              </div>

              {activeTab === 'booking' ? <BookingForm /> : <ContactForm />}
            </motion.div>
          </div>
        </section>

        {/* What to Expect & Privacy sections unchanged for brevity — they look good */}

        <Footer />
      </main>
    </>
  );
}