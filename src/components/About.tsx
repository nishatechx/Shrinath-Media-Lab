import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 bg-[#F3F4F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#FF6A00]"></div>
              <span className="text-[#0A2540] font-bold tracking-widest uppercase text-xs">Pioneering Progress</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-[#0A2540] tracking-tight">
              We engineer<br /> ecosystems,<br />
              <span className="text-gradient">not just software.</span>
            </h2>
            
            <p className="text-xl text-[#1F2937] font-sans leading-relaxed font-light max-w-lg">
              Shrinath Media Labs blends cutting-edge technology with strategic design to transform the way modern businesses and governments operate.
            </p>
            
            <div className="pt-8 border-t border-gray-200 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#F3F4F6] bg-white flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=f3f4f6`} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-[#0A2540]">Trusted by 50+</div>
                <div className="text-xs text-gray-500 font-medium">Enterprise Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Abstract geometric graphics representing 3D elements in 2D space for performance */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Background blur circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0055FF] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

            {/* Floating Elements */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-20 right-10 w-72 h-80 glass-panel rounded-3xl flex flex-col justify-between p-8 border border-white shadow-2xl backdrop-blur-xl"
            >
               <div className="w-12 h-12 rounded-full bg-[#0A2540] flex items-center justify-center mb-6">
                <Cpu size={20} className="text-white" />
               </div>
               <div>
                 <div className="text-[#FF6A00] font-bold text-4xl mb-2 font-display">99.9%</div>
                 <div className="text-[#0A2540] font-medium text-sm">System Reliability</div>
               </div>
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-20 left-0 w-80 h-64 bg-[#0A2540] rounded-3xl p-8 border border-gray-800 shadow-2xl flex flex-col justify-end overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0055FF] rounded-full blur-[50px] opacity-50"></div>
              <h4 className="text-white font-display font-bold text-2xl mb-2 relative z-10">Scalable Arch</h4>
              <p className="text-gray-400 text-sm font-light relative z-10">Built to handle millions of requests with zero friction.</p>
              
              {/* Decorative progress bars */}
              <div className="flex flex-col gap-3 w-full mt-6 relative z-10">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-[#0055FF]"
                  ></motion.div>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-full bg-[#FF6A00]"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
