import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';

const CountUp = ({ to, suffix = '', prefix = '', duration = 2 }: { to: number; suffix?: string; prefix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { 
        duration, 
        ease: [0.2, 0.4, 0.3, 1], // Custom slow-out curve for high-end feel
      });
      return controls.stop;
    }
  }, [isInView, to, duration, count]);

  return (
    <span ref={ref} className="font-display font-bold inline-flex items-center">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section id="results" className="py-10 bg-transparent relative overflow-hidden border-t border-b border-white/10">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-stats" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-stats)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Our Impact</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight">Proven Results</h2>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 border-t border-white/10 py-16"
        >
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-4xl md:text-6xl text-white mb-2 font-display font-bold">
                <CountUp to={70} suffix="+" />
              </div>
              <p className="text-blue-400 font-bold tracking-tight text-xs md:text-sm uppercase">Projects Delivered</p>
              <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden hidden md:block">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-blue-500"></motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-4xl md:text-6xl text-white mb-2 font-display font-bold">
                <CountUp to={43} suffix="+" />
              </div>
              <p className="text-orange-500 font-bold tracking-tight text-xs md:text-sm uppercase">Active Clients</p>
              <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden hidden md:block">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-orange-500"></motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-4xl md:text-6xl text-white mb-2 font-display font-bold">
                <CountUp to={10} suffix="+" />
              </div>
              <p className="text-emerald-400 font-bold tracking-tight text-xs md:text-sm uppercase">Industries Served</p>
               <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden hidden md:block">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-emerald-500"></motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-4xl md:text-6xl text-white mb-2 font-display font-bold">
                <CountUp to={100} suffix="%" />
              </div>
              <p className="text-purple-400 font-bold tracking-tight text-xs md:text-sm uppercase">Client Satisfaction</p>
               <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden hidden md:block">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-purple-500"></motion.div>
              </div>
            </motion.div>

          </motion.div>
      </div>
    </section>
  );
}
