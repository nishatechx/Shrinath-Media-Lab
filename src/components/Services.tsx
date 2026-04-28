import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Smartphone, Globe, Building2, GraduationCap, Layout, Megaphone, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that scale growth and dominate market share.',
    icon: Megaphone,
    metric: '+140%',
    metricLabel: 'Avg. ROI',
    color: '#0055FF',
  },
  {
    title: 'Web & App Dev',
    description: 'High-performance, scalable platforms engineered for modern enterprises.',
    icon: Smartphone,
    metric: '99.9%',
    metricLabel: 'Uptime',
    color: '#FF6A00',
  },
  {
    title: 'Branding & Identity',
    description: 'Strategic identity design that resonates and establishes authority.',
    icon: Layout,
    metric: 'Award',
    metricLabel: 'Winning',
    color: '#0A2540',
  },
  {
    title: 'Govt. Solutions',
    description: 'Secure, compliant digital infrastructure for public sector innovation.',
    icon: Building2,
    metric: 'ISO',
    metricLabel: 'Compliant',
    color: '#0055FF',
  },
  {
    title: 'Education Systems',
    description: 'Next-generation learning management and campus automation tools.',
    icon: GraduationCap,
    metric: '1M+',
    metricLabel: 'Users',
    color: '#10B981',
  },
  {
    title: 'Digital Transformation',
    description: 'End-to-end modernization of legacy systems and workflows.',
    icon: Globe,
    metric: '10x',
    metricLabel: 'Efficiency',
    color: '#8B5CF6',
  }
];

const ServicePanel = ({ service, index }: { service: any, index: number }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#F9FAFB] rounded-3xl p-8 hover:bg-white transition-all duration-500 border border-transparent hover:border-gray-200 hover:shadow-[0_20px_40px_-15px_rgba(10,37,64,0.1)] flex flex-col justify-between h-[360px] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out z-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom left, ${service.color}15, transparent)` }}></div>
      
      <div className="relative z-10 flex justify-between items-start">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-500">
          <Icon size={28} style={{ color: service.color }} strokeWidth={1.5} />
        </div>
        <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-sm">
          <ArrowUpRight size={18} className="text-[#0A2540]" />
        </div>
      </div>
      
      <div className="relative z-10 mt-auto">
        <h3 className="text-2xl font-display font-bold text-[#0A2540] mb-3 group-hover:text-[#0055FF] transition-colors">{service.title}</h3>
        <p className="text-[#1F2937] font-sans text-base leading-relaxed mb-8">{service.description}</p>
        
        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
          <div className="font-display font-bold text-2xl text-[#0A2540]">{service.metric}</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{service.metricLabel}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="services" ref={containerRef} className="py-32 bg-white relative z-10 overflow-hidden">
      {/* Decorative large shapes */}
      <motion.div style={{ y }} className="absolute -right-64 top-1/4 w-[500px] h-[500px] rounded-full border-[1px] border-gray-100 opacity-50 z-0 pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }} className="absolute -left-64 bottom-1/4 w-[600px] h-[600px] rounded-full border-[1px] border-gray-100 opacity-50 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F3F4F6] text-[#0A2540] mb-6 font-semibold text-sm tracking-wider uppercase"
            >
              <div className="w-2 h-2 rounded-full bg-[#0055FF]"></div>
              Core Capabilities
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-[#0A2540] leading-tight"
            >
              Engineering <span className="text-gradient">Advantage.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-sm"
          >
            <p className="text-[#1F2937] text-lg leading-relaxed border-l-2 border-[#0055FF] pl-6">
              We provide comprehensive digital services designed to optimize operations, engage users, and drive measurable growth across sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <ServicePanel key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
