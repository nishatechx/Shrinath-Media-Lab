import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const CountUp = ({ to, suffix = '', prefix = '', duration = 2 }: { to: number; suffix?: string; prefix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <span ref={ref} className="font-display font-bold">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration }}
        >
          {prefix}{to}{suffix}
        </motion.span>
      ) : (
        prefix + "0" + suffix
      )}
    </span>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-b border-gray-100">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-stats" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-stats)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-y border-gray-100 py-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-5xl md:text-6xl text-[#0A2540] mb-2 font-display font-bold">
                <CountUp to={150} suffix="+" />
              </div>
              <p className="text-[#0055FF] font-semibold tracking-wide uppercase text-sm">Enterprise Clients</p>
              <div className="w-full h-1 bg-gray-100 rounded-full mt-4 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-[#0A2540]"></motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-5xl md:text-6xl text-[#0A2540] mb-2 font-display font-bold">
                <CountUp to={99} suffix="%" />
              </div>
              <p className="text-[#FF6A00] font-semibold tracking-wide uppercase text-sm">Client Retention</p>
              <div className="w-full h-1 bg-gray-100 rounded-full mt-4 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '99%' }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-[#FF6A00]"></motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-5xl md:text-6xl text-[#0A2540] mb-2 font-display font-bold">
                <CountUp to={12} suffix="+" />
              </div>
              <p className="text-[#10B981] font-semibold tracking-wide uppercase text-sm">Global Partners</p>
               <div className="w-full h-1 bg-gray-100 rounded-full mt-4 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-[#10B981]"></motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-5xl md:text-6xl text-[#0A2540] mb-2 font-display font-bold">
                <CountUp prefix="$" to={50} suffix="M+" />
              </div>
              <p className="text-[#8B5CF6] font-semibold tracking-wide uppercase text-sm">Revenue Generated</p>
               <div className="w-full h-1 bg-gray-100 rounded-full mt-4 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-[#8B5CF6]"></motion.div>
              </div>
            </motion.div>

          </div>
      </div>
    </section>
  );
}
