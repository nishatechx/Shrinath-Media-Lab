import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="about" ref={containerRef} className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="space-y-10 max-w-3xl text-center"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-4 justify-center"
            >
              <div className="h-[2px] w-12 bg-orange-500"></div>
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">Pioneering Progress</span>
              <div className="h-[2px] w-12 bg-orange-500"></div>
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] text-white tracking-tight"
            >
              We Build Systems<br /> 
              <span className="text-orange-500">That Drive Growth.</span>
            </motion.h2>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-6 mx-auto"
            >
              <p className="text-xl text-gray-300 font-sans leading-relaxed font-light">
                At Shrinath Media Labs, we go beyond campaigns and websites. We create integrated digital ecosystems that help organizations operate smarter, scale faster, and deliver better experiences.
              </p>
              
              <p className="text-lg text-gray-500 font-sans leading-relaxed font-light">
                From local enterprises to government initiatives, our work is built on clarity, performance, and long-term value.
              </p>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="pt-8 border-t border-white/10 flex flex-col items-center gap-4"
            >
              <div className="text-sm font-bold text-white uppercase tracking-widest italic">Trusted by 50+ Leaders</div>
              <div className="text-xs text-gray-500 font-medium">Delivering value to business, education, and public sectors.</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
