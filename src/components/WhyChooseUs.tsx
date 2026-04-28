import { motion } from 'motion/react';
import { Target, Maximize, Layers, MapPin } from 'lucide-react';

const features = [
  {
    title: 'Result-Driven Approach',
    description: 'We focus on metrics that matter—ROI, engagement, and operational efficiency.',
    icon: Target,
  },
  {
    title: 'Scalable Solutions',
    description: 'Architecture built to grow with your organization, handling traffic spikes seamlessly.',
    icon: Maximize,
  },
  {
    title: 'Multi-Sector Expertise',
    description: 'Proven track record across corporate, education, and government verticals.',
    icon: Layers,
  },
  {
    title: 'Enterprise Understanding',
    description: 'Local insights combined with world-class enterprise delivery capabilities.',
    icon: MapPin,
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#0055FF]"></div>
                <span className="text-[#1F2937] font-bold tracking-widest uppercase text-xs">Our Advantage</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A2540] mb-8 leading-tight">
                Architects of Your <br/>
                <span className="relative">
                  <span className="relative z-10 text-gradient-orange">Unfair Advantage.</span>
                </span>
              </h2>
              
              <p className="text-[#1F2937] text-lg mb-10 leading-relaxed font-light">
                We don't settle for standard. We dig deep into your organizational challenges and deploy technologies that provide a distinct competitive advantage. Trust, transparency, and technical excellence form our foundation.
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-[#0055FF] font-semibold hover:text-[#FF6A00] transition-colors group">
                Discover our methodology 
                <span className="w-8 h-8 rounded-full bg-[#0055FF]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/10 transition-colors ml-2">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-[#F9FAFB] border border-gray-100 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-[rgba(10,37,64,0.05)] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#0055FF]/30 transition-all duration-300">
                    <Icon className="text-[#0A2540] group-hover:text-[#0055FF] transition-colors" size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3 font-display">{feature.title}</h3>
                  <p className="text-[#1F2937] text-sm leading-relaxed font-light">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
