/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-[#1F2937] bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
