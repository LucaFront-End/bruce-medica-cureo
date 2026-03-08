import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhatIsCureo from './components/WhatIsCureo';
import WhyChoose from './components/WhyChoose';
import Modules from './components/Modules';
import Comparison from './components/Comparison';
import Applications from './components/Applications';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatIsCureo />
        <WhyChoose />
        <Modules />
        <Comparison />
        <Applications />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
