/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { PositioningStrip } from './components/PositioningStrip';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-white min-h-screen relative overflow-x-hidden bg-[#0A2540]">
      {/* Subtle Static Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <PositioningStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
