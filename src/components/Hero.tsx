import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Globe } from './Globe';

const changingWords = [
  "Digital Marketing",
  "Content Creation",
  "Video Ads",
  "Web & App Development",
  "UI/UX Design",
  "SEO",
  "Branding",
  "E-commerce",
  "CRM",
  "Automation",
  "Cloud",
  "IT Infrastructure"
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-transparent">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-end md:justify-center">
        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 md:right-[15%] lg:right-[20%] top-1/2 -translate-y-1/2 translate-x-[20%] md:translate-x-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] flex items-center justify-center opacity-25 blur-[2px] scale-75 md:scale-100 mix-blend-screen pointer-events-auto"
        >
          <Globe />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-end pt-24 md:pt-20 pb-4">
        
        {/* Left Side: Image */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="relative md:absolute md:bottom-0 left-0 md:left-0 lg:left-8 w-full md:w-[50%] h-[40vh] md:h-[80vh] lg:h-[88vh] flex justify-center md:justify-center items-end z-0 mb-8 md:mb-0"
        >
          {/* Desktop Image */}
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYE6dPXKTvjuyXO8jbVOEsQOQeZpogrfjyxEJRZQuq-JEPyYWHAevQ0Q6rhE1jY4DruYffdS5ZT5UnlVZC5amRjeSyroVQNXy87mQXiM7jFA18HHYQVMURoCyThd4vzOwI2vHHRH-smvzQ2aOduFeER9SGYIW04dPx9ThmuY27Tio1-Yoe9HWM9h-JK88/s16000/Shrinath%20Pointing.png" 
            alt="Shrinath pointing" 
            className="hidden md:block h-full w-auto object-contain object-bottom relative z-1 pointer-events-auto" 
          />
          {/* Mobile Image with Laptop Screen text */}
         <div className="md:hidden relative h-full w-[120%] -ml-[10%] flex justify-center items-end">
            <div className="relative h-full inline-block">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn5lpKICdEsnZufBbh0l9xWlrun-SSnn5c82DTsughQHeVYjt7HwjcgkXnkXMeaxOKt-La04QN0CSGpl2-MTRqinUy_UogdiwoDIQo3rll6LNy1WkBxDLQ9w62NMQHa6tcN63bGmm7vvUl4PeOEDKjEXEKu4oj6n7naiU8kBfmyn23rLXuhVLXEkJZNX0/s16000/Shrinath%20Holding%20Laptop.png" 
                alt="Shrinath holding laptop" 
                className="h-full w-auto max-w-full object-contain object-bottom relative z-1 pointer-events-auto" 
              />
              <div 
                className="absolute z-10 flex items-center justify-center pointer-events-none"
                style={{ top: '59%', left: '43%', width: '47%', height: '20%' }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWordIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-[12px] sm:text-[14px] leading-tight font-bold text-center text-slate-800 px-1"
                  >
                    {changingWords[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            {/* Strip / floor line to prevent cropped look on mobile */}
            <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
          </div>
        </motion.div>

        {/* Right Side: Text */}
        <div className="w-full md:w-[55%] lg:w-1/2 max-w-2xl pointer-events-none relative z-10 md:pl-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] text-white mb-4 tracking-tight text-center md:text-left"
          >
            Your Complete Digital & IT <br className="hidden md:block" />
            <span className="text-orange-500 drop-shadow-md">Growth Partner</span>
          </motion.h1>

          <div className="hidden md:block h-8 md:h-10 mb-6 relative z-20">
            <AnimatePresence mode="wait">
               <motion.div
                key={currentWordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-semibold text-emerald-400 absolute left-0 flex items-center gap-2"
              >
                {changingWords[currentWordIndex]}
              </motion.div>
             </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left text-sm md:text-xl text-gray-200 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-sans font-light drop-shadow-sm"
          >
            We design, develop, market, and automate your business with powerful, scalable solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center md:items-start gap-4 pointer-events-auto"
          >
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full md:rounded-xl font-semibold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] w-auto min-w-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>
              <span className="relative z-10 text-sm md:text-lg">Start Your Project</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={16} />
            </a>

            {/* Mobile Scroll Down Hint */}
            <div className="md:hidden flex flex-col items-center mt-4">
              <span className="text-gray-400 text-xs tracking-widest uppercase mb-1">Scroll Down</span>
              <motion.div 
                animate={{ y: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="text-gray-400 rotate-90" size={16} />
              </motion.div>
            </div>
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
