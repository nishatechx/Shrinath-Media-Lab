import { Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent pt-10 pb-12 relative z-10 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0055FF] via-[#FF6A00] to-[#0055FF]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 relative z-10">
          
          <div className="lg:col-span-5">
            <div className="mb-6">
              <span className="text-2xl font-display font-black text-white tracking-tight">
                SHRINATH<span className="text-orange-500">MEDIA</span>
              </span>
            </div>
            <p className="text-slate-300 max-w-sm mb-8 leading-relaxed font-light">
              Digital Solutions. Real Impact.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all duration-300">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-display font-bold text-lg mb-6 tracking-wide">Solutions</h4>
            <ul className="space-y-4">
              {['Digital Marketing', 'Web & App Development', 'Branding & Creative', 'Government Solutions', 'Education Solutions'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium inline-block hover:translate-x-1 duration-300 transform">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF6A00]/50 transition-colors group">
                <MapPin className="text-[#FF6A00]" size={20} />
                <span className="text-slate-300 text-sm leading-relaxed font-light group-hover:text-white transition-colors">Shrinath Media Labs, Civil Line, Washim</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF6A00]/50 transition-colors group">
                <Phone className="text-[#0055FF]" size={20} />
                <span className="text-slate-300 text-sm font-light group-hover:text-white transition-colors">+91 9699658462</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF6A00]/50 transition-colors group">
                <Mail className="text-white" size={20} />
                <span className="text-slate-300 text-sm font-light group-hover:text-white transition-colors">shrinathmedia@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-slate-500 font-light text-sm">
            © {currentYear} Shrinath Media Labs. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Abstract large background logo / text */}
      <div className="absolute bottom-[-10%] right-[-5%] text-[15rem] font-display font-black text-white/[0.02] pointer-events-none select-none z-0 tracking-tighter">
        SHRINATH
      </div>
    </footer>
  );
}
