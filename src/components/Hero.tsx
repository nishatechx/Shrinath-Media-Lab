import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [progress, setProgress] = useState(0);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-transparent">
      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-end pt-20">
        
        {/* Left Side: Image */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="absolute bottom-0 left-0 md:left-0 lg:left-8 w-full md:w-[50%] h-[55vh] md:h-[80vh] lg:h-[88vh] flex justify-center md:justify-center items-end pointer-events-none opacity-40 md:opacity-100 z-0"
        >
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYE6dPXKTvjuyXO8jbVOEsQOQeZpogrfjyxEJRZQuq-JEPyYWHAevQ0Q6rhE1jY4DruYffdS5ZT5UnlVZC5amRjeSyroVQNXy87mQXiM7jFA18HHYQVMURoCyThd4vzOwI2vHHRH-smvzQ2aOduFeER9SGYIW04dPx9ThmuY27Tio1-Yoe9HWM9h-JK88/s16000/Shrinath%20Pointing.png" 
            alt="Shrinath pointing" 
            className="h-full w-auto object-contain object-bottom drop-shadow-2xl" 
          />
        </motion.div>

        {/* Right Side: Text */}
        <div className="w-full md:w-[55%] lg:w-1/2 max-w-2xl pointer-events-none pb-20 md:pb-0 relative z-10 md:pl-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] text-white mb-6 tracking-tight"
          >
            Where Ideas<br />Become<br />
            <span className="text-orange-500 drop-shadow-md">Digital Impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-sans font-light drop-shadow-sm"
          >
            We design, build, and scale digital systems for businesses, institutions, and government organizations—driving measurable growth through technology and strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 pointer-events-auto"
          >
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-orange-500 text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>
              <span className="relative z-10 text-lg">Start Your Project</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md rounded-xl font-semibold transition-all shadow-sm hover:shadow-md group"
            >
              <div className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Play size={14} className="ml-0.5" fill="currentColor" />
              </div>
              <span className="text-lg">View Showreel</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        inherit={false}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex flex-row items-center gap-4 z-10"
      >
        <div className="text-xs text-white/70 font-semibold tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</div>
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-orange-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
