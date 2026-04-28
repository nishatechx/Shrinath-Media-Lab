import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Decorative large shapes */}
      <div className="absolute -top-64 -right-64 w-[800px] h-[800px] bg-gradient-to-br from-[#0055FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-[800px] h-[800px] bg-gradient-to-tr from-[#FF6A00]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[3rem] p-12 md:p-20 shadow-[0_20px_50px_-20px_rgba(10,37,64,0.1)] border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full opacity-50 z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-[#0A2540] mb-8 tracking-tight leading-[1.1]">
              Ready to redefine <br className="hidden md:block"/>
              your <span className="text-gradient">digital presence?</span>
            </h2>
            
            <p className="text-xl text-[#1F2937] mb-12 max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Join the forward-thinking organizations that trust Shrinath Media Labs to build their future. Let's architect your next big leap.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0055FF] text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_15px_30px_-10px_rgba(0,85,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <a href="mailto:hello@shrinathmedialabs.com" className="text-[#0A2540] font-semibold hover:text-[#FF6A00] transition-colors underline-offset-4 hover:underline">
                or email us directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
