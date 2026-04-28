import React from 'react';
import { motion } from 'motion/react';
import { Shield, Globe, Award } from 'lucide-react';

export const PositioningStrip = () => {
  return (
    <section className="relative py-14 bg-white/5 backdrop-blur-md overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-shrink-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-white/10 rounded-xl shadow-xl shadow-black/20 border border-white/10">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-2xl leading-tight">Digital Solutions.</h3>
                <p className="text-orange-500 font-display font-bold text-2xl leading-tight">Real Impact.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 max-w-2xl"
          >
            <p className="text-slate-400 font-sans text-xl leading-relaxed text-center md:text-left font-medium">
              Trusted by <span className="text-white">growing businesses</span>, 
              <span className="text-white"> educational institutions</span>, and 
              <span className="text-white"> public sector organizations</span> across India.
            </p>
          </motion.div>

          <div className="flex items-center gap-10 opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-col items-center">
              <Globe className="w-10 h-10 text-white mb-1" />
              <span className="text-[11px] text-white uppercase tracking-widest font-black">Public</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-white mb-1" />
              <span className="text-[11px] text-white uppercase tracking-widest font-black">Edu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
