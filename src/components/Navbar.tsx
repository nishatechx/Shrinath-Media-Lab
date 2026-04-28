import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A2540]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <div className="bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 flex items-center justify-center">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEio9baJm4hJx1nKsQCo4rxm6dJBJVpRI4N7026wS7HtRxsrwwzJzdxkA3WQmF3eJAIFsekbLX_DPxjM1quXYBXK9W_WkLwXLlz8fhrTbIrj6IKmUEDLSuKQkhpQ85i0rjWCHyaYZO7Sv60CndOAjkM8yvGwr0Gsjs_fMmAzjdn-WAeS__D7Q4PkCjEYPLI/s16000/Shrinath%20Media%20LABS.png" 
              alt="Shrinath Media Labs" 
              className="h-8 md:h-10 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group text-white hover:text-orange-400`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden transition-colors text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A2540] border-b border-white/10 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white hover:text-orange-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 w-full text-center px-6 py-4 rounded-xl bg-orange-500 text-white text-base font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
