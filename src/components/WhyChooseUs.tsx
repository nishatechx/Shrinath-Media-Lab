
import { motion } from 'motion/react';
import { Target, Shield, Zap, Building2 } from 'lucide-react';

import { Reveal } from './Reveal';

const features = [
  {
    title: 'Result-Focused Execution',
    description: 'Every project is aligned with measurable business outcomes.',
    icon: Target,
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems designed to grow with your organization.',
    icon: Zap,
  },
  {
    title: 'Multi-Sector Expertise',
    description: 'Experience across business, education, and government sectors.',
    icon: Building2,
  },
  {
    title: 'Transparent & Reliable',
    description: 'Clear communication, consistent delivery, long-term partnership.',
    icon: Shield,
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <div className="space-y-4">
              <Reveal y={20}>
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-orange-500"></div>
                  <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">Why Us</span>
                </div>
              </Reveal>
              
              <Reveal delay={0.1} y={30}>
                <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
                  Built for Performance.<br/>
                  <span className="text-orange-500">Designed for Scale.</span>
                </h2>
              </Reveal>
              
              <Reveal delay={0.2} y={30}>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
                  We don’t deliver “services.”<br/>
                  <span className="text-white font-medium">We deliver solutions that perform in real-world conditions.</span>
                </p>
              </Reveal>
              
              <Reveal delay={0.3} y={10}>
                <div className="pt-8 border-t border-white/10">
                  <blockquote className="text-gray-400 italic font-sans text-sm border-l-2 border-orange-500 pl-4 py-1">
                    "Our goal is to build digital ecosystems that don't just work—they excel."
                  </blockquote>
                </div>
              </Reveal>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0 }
                  }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A2540] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                    <Icon className="text-white" size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-display tracking-tight">{feature.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
