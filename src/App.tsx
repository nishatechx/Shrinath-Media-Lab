/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { PositioningStrip } from './components/PositioningStrip';
import About from './components/About';
import Solutions from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Lenis from 'lenis';
import { Particles } from './components/Particles';
import { LiveChatWidget } from './components/LiveChatWidget';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Protection against copying and inspection
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        (e.ctrlKey && e.keyCode === 85) ||
        (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 83)) // C, V, S
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      lenis.destroy();
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="font-sans text-white min-h-screen relative overflow-x-hidden bg-[#0A2540]">
      {/* Subtle Static Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Particles />
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <PositioningStrip />
        <About />
        <Solutions />
        <WhyChooseUs />
        <Stats />
        <CTA />
        <Footer />
        <LiveChatWidget />
      </div>
    </div>
  );
}
