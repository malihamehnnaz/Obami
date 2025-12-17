"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bg = bgRef.current;
    const container = containerRef.current;
    if (!bg || !container) return;

    let raf = 0;

    const handle = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        // Move background slower than the page scroll for parallax
        const translate = Math.round(rect.top * 0.2);
        // Apply translate and a subtle scale so image fills edges during movement
        bg.style.transform = `translateY(${translate}px) scale(1.05)`;
      });
    };

    // initial
    handle();

    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1974&auto=format&fit=crop')",
          transform: "translateY(0px) scale(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 
          className="text-6xl md:text-8xl text-white mb-4 animate-fade-in-up"
          style={{ fontFamily: 'var(--font-dancing-script)' }}
        >
          OBA'MI
        </h1>
        <p className="text-lg md:text-2xl text-white font-medium max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-1">
          Discover the taste of traditional Vietnamese cuisine <br className="hidden md:block" />
          with a modern twist in Sydney.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up-delay-2 mb-12">
          <a 
            href="/menu" 
            className="px-8 py-3 bg-[#C5A059] text-white font-bold hover:bg-[#b08d4b] transition-all uppercase tracking-wider text-sm min-w-[140px]"
          >
            Menu
          </a>
          <a 
            href="/menu" 
            className="px-8 py-3 bg-[#C5A059] text-white font-bold hover:bg-[#b08d4b] transition-all uppercase tracking-wider text-sm min-w-[140px]"
          >
            Take Away
          </a>
          <a 
            href="https://www.ubereats.com/au/store/obami/UXcrBC3PSjmUGlCklwod9Q?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#C5A059] text-white font-bold hover:bg-[#b08d4b] transition-all uppercase tracking-wider text-sm min-w-[140px]"
          >
            Uber Eats
          </a>
          <a 
            href="https://www.doordash.com/store/oba'mi-surry-hills-33848257/62964349/?rwg_token=ACgRB3fKecSG8Fx_GEltRhpOjLto1b6UM9XuIpEMIzh5tOrvZb0ogCUP3kDzFj0tYo2Xss3TA3ZRPLdQAUVoA9woJW6sT93CM7AW0aQXYlRb72IDCggGPDA=&utm_campaign=gpa" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#C5A059] text-white font-bold hover:bg-[#b08d4b] transition-all uppercase tracking-wider text-sm min-w-[140px]"
          >
            DoorDash
          </a>
        </div>

        <div className="text-white animate-fade-in-up-delay-3 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-sm md:text-base font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#C5A059]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>318 Elizabeth St, Surry Hills NSW 2010, Australia</span>
          </div>
          <p className="text-sm md:text-base font-light tracking-wide">
            Eat In | Take Away | Delivery
          </p>
        </div>
      </div>
    </section>
  );
}
