import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mwvadjkr');

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl text-center"
      >
        <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="text-orange-500" size={32} />
        </div>
        <h3 className="text-2xl font-display font-black text-white mb-2">Message Received!</h3>
        <p className="text-slate-400">Thanks for reaching out. We'll get back to you shortly.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 text-orange-500 hover:text-orange-400 font-semibold transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Full Name
          </label>
          <input
            id="name"
            type="text" 
            name="name"
            required
            placeholder="John Doe"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            required
            placeholder="john@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-400 text-xs mt-1"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="solution" className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Solution Interested In
        </label>
        <select
          id="solution"
          name="solution"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all appearance-none"
        >
          <option value="web-dev" className="bg-[#0A2540]">Web Development</option>
          <option value="marketing" className="bg-[#0A2540]">Digital Marketing</option>
          <option value="content" className="bg-[#0A2540]">Content Creation</option>
          <option value="ads" className="bg-[#0A2540]">Meta/Google Ads</option>
          <option value="other" className="bg-[#0A2540]">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-400 text-xs mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-800 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-3 overflow-hidden group relative"
      >
        <span className="relative z-10">{state.submitting ? 'Sending...' : 'Send Message'}</span>
        {!state.submitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />}
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </form>
  );
}
