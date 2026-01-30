'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().min(20, 'Please provide more details about your needs'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const services = [
    'Individual Therapy',
    'Mental Health Coaching',
    'Team Workshop',
    'Organizational Consultation',
    'Research Collaboration',
    'Other'
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          type: 'booking',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to book consultation');
      }

      setSubmitSuccess(true);
      toast.success('Booking request sent! I\'ll contact you within 24 hours to confirm.');
      reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      toast.error('Failed to send booking request. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-[#0A3D4A] mb-2">
          Full Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all ${
            errors.name
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-[#FF6B9D]'
          }`}
          placeholder="Jane Doe"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-[#0A3D4A] mb-2">
          Email Address *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all ${
            errors.email
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-[#FF6B9D]'
          }`}
          placeholder="jane@example.com"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-[#0A3D4A] mb-2">
          Phone Number *
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all ${
            errors.phone
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-[#FF6B9D]'
          }`}
          placeholder="+1 (555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-bold text-[#0A3D4A] mb-2">
          Service Interested In *
        </label>
        <select
          {...register('service')}
          id="service"
          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all ${
            errors.service
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-[#FF6B9D]'
          }`}
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Preferred Date & Time */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-bold text-[#0A3D4A] mb-2">
            Preferred Date (Optional)
          </label>
          <input
            {...register('preferredDate')}
            type="date"
            id="preferredDate"
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#FF6B9D] focus:outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-bold text-[#0A3D4A] mb-2">
            Preferred Time (Optional)
          </label>
          <select
            {...register('preferredTime')}
            id="preferredTime"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#FF6B9D] focus:outline-none transition-all"
          >
            <option value="">Select time...</option>
            <option value="morning">Morning (9am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 5pm)</option>
            <option value="evening">Evening (5pm - 8pm)</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-[#0A3D4A] mb-2">
          Tell Me About Your Needs *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all resize-none ${
            errors.message
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-[#FF6B9D]'
          }`}
          placeholder="Please share what you're looking for help with..."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || submitSuccess}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-xl flex items-center justify-center gap-2 ${
          submitSuccess
            ? 'bg-[#00FF88] shadow-[#00FF88]/40'
            : 'bg-[#FF6B9D] hover:bg-[#FF4D85] shadow-[#FF6B9D]/40'
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Submitting...
          </>
        ) : submitSuccess ? (
          <>
            <CheckCircle className="w-6 h-6" />
            Booking Sent!
          </>
        ) : (
          <>
            Book Consultation
            <Calendar className="w-5 h-5" />
          </>
        )}
      </motion.button>

      <p className="text-sm text-gray-600 text-center">
        * This is a booking request. I will contact you within 24 hours to confirm availability.
      </p>
    </form>
  );
}