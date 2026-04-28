import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative large shapes */}
      <div className="absolute -top-64 -right-64 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-[800px] h-[800px] bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em]">Connect With Us</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-8 tracking-tight leading-[1.1]">
                Let's Build <br />
                Something <span className="text-orange-500">Legendary.</span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-light">
                Ready to take your digital experience to the next level? Our engineering-first approach ensures growth, scale, and performance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Mail className="text-orange-500 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Us</p>
                    <a href="mailto:medishrinath@gmail.com" className="text-white hover:text-orange-500 transition-colors font-semibold">medishrinath@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <MapPin className="text-blue-500 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Our HQ</p>
                    <p className="text-white font-semibold">Washim, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-3xl rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
              <ContactForm />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
