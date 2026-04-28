import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Code, 
  Building2, 
  GraduationCap, 
  Palette, 
  Megaphone, 
  ArrowUpRight, 
  Video, 
  Zap, 
  ChevronDown,
  BarChart3,
  Share2
} from 'lucide-react';

import { Reveal } from './Reveal';

const solutions = [
  {
    title: 'Digital Marketing',
    description: 'Performance-driven strategies designed to increase visibility, generate leads, and scale your business.',
    icon: Megaphone,
    color: '#f97316',
    items: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Paid Advertising (Google Ads, Meta Ads)',
      'Lead Generation Campaigns'
    ]
  },
  {
    title: 'Content Creation',
    description: 'Creative content that captures attention, builds trust, and drives engagement across platforms.',
    icon: Video,
    color: '#3b82f6',
    items: [
      'Social Media Content (Posts, Reels, Shorts)',
      'Video Production & Editing',
      'Graphic Design & Creatives',
      'Ad Creatives & Campaign Content'
    ]
  },
  {
    title: 'Website & App Development',
    description: 'Modern, fast, and scalable digital platforms built for performance and user experience.',
    icon: Code,
    color: '#f97316',
    items: [
      'Business Websites',
      'Custom Web Applications',
      'Mobile Applications',
      'UI/UX Design'
    ]
  },
  {
    title: 'Analytics & Automation',
    description: 'Data-driven systems that help you track performance, optimize campaigns, and automate business processes for better efficiency.',
    positioning: 'We don’t just run campaigns—we help you measure, optimize, and scale with data.',
    icon: BarChart3,
    color: '#3b82f6',
    items: [
      'Website & Campaign Analytics (Google Analytics, Meta Insights)',
      'Conversion Tracking & Event Setup',
      'CRM Integration & Lead Management',
      'Marketing Automation Workflows',
      'Custom Reporting Dashboards'
    ]
  },
  {
    title: 'Social Media Management',
    description: 'End-to-end management of your social presence to build brand awareness, engage your audience, and drive consistent growth.',
    positioning: 'We turn your social media into a consistent growth engine, not just posting activity.',
    icon: Share2,
    color: '#f97316',
    items: [
      'Content Planning & Strategy',
      'Post Design & Content Publishing',
      'Reels, Shorts & Video Content',
      'Community Engagement & Response Management',
      'Performance Tracking & Optimization'
    ]
  },
  {
    title: 'Branding & Identity',
    description: 'Strategic brand building that creates strong market presence and long-term recognition.',
    icon: Palette,
    color: '#0A2540',
    items: [
      'Logo Design',
      'Brand Identity Systems',
      'Visual Guidelines',
      'Marketing Collateral'
    ]
  },
  {
    title: 'Government Digital Solutions',
    description: 'Secure, scalable systems designed for public sector efficiency and digital transformation.',
    icon: Building2,
    color: '#3b82f6',
    items: [
      'Government Portals',
      'Data Management Systems',
      'Workflow Automation',
      'Citizen Service Platforms'
    ]
  },
  {
    title: 'Education Technology Solutions',
    description: 'Smart digital systems for schools and colleges to improve learning and administration.',
    icon: GraduationCap,
    color: '#10B981',
    items: [
      'School / College Websites',
      'Student Management Systems',
      'Learning Platforms (LMS)',
      'Online Admission Systems'
    ]
  },
  {
    title: 'Digital Transformation',
    description: 'Upgrade your business with modern tools, automation, and integrated digital systems.',
    icon: Zap,
    color: '#8B5CF6',
    items: [
      'Process Automation',
      'CRM Integration',
      'System Modernization',
      'Data-Driven Decision Systems'
    ]
  }
];

const SolutionPanel = ({ solution, index }: { solution: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = solution.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-[#0A2540]/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-orange-500/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'text-orange-500 rotate-180' : 'text-gray-500 hover:text-white'}`}
        >
          <ChevronDown size={16} />
        </button>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-display font-semibold text-white mb-2 tracking-tight">{solution.title}</h3>
        <p className="text-gray-400 font-sans text-sm leading-relaxed mb-4">{solution.description}</p>
        
        {solution.positioning && (
           <div className="text-[9px] text-orange-500/80 font-bold tracking-widest uppercase mb-4 py-1 inline-block border-b border-orange-500/20">
             {solution.positioning}
           </div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 pt-4 mt-2 border-t border-white/5">
                {solution.items.map((item: string, i: number) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 text-xs text-gray-500"
                  >
                    <div className="w-1 h-1 mt-1.5 rounded-full bg-orange-500/50 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Solutions() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="solutions" ref={containerRef} className="py-24 bg-transparent relative z-10 overflow-hidden">
      {/* Decorative large shapes */}
      <motion.div style={{ y }} className="absolute -right-64 top-1/4 w-[500px] h-[500px] rounded-full border-[1px] border-white/5 opacity-50 z-0 pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }} className="absolute -left-64 bottom-1/4 w-[600px] h-[600px] rounded-full border-[1px] border-white/5 opacity-50 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <Reveal y={20}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 text-gray-300 mb-6 font-semibold text-sm tracking-wider uppercase backdrop-blur-md border border-white/10">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Core Capabilities
              </div>
            </Reveal>
            
            <Reveal delay={0.1} y={30}>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
                Engineering <span className="text-orange-500">Digital Growth.</span>
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <div className="md:max-w-sm">
              <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-orange-500 pl-6">
                We deliver end-to-end digital solutions that help organizations grow, communicate, and operate efficiently.
              </p>
            </div>
          </Reveal>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {solutions.map((solution, idx) => (
            <SolutionPanel key={idx} solution={solution} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
