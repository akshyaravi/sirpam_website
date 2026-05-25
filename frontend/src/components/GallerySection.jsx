import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Buddha from "../assets/Buddha.jpeg";
import Paint from "../assets/Paint.jpg";

// Helper component for the Image Wrap with Parallax Spotlight and Curtain Reveal
const GalleryImage = ({ src, alt, label }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden aspect-[4/5] w-full max-w-[480px] mx-auto group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Curtain Reveal */}
      <motion.div 
        className="absolute inset-0 bg-coconut-milk z-20 origin-left"
        initial={{ x: 0 }}
        animate={{ x: isInView ? '101%' : 0 }}
        transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
      />

      {/* Image with Parallax Transform Origin */}
      <motion.img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover block absolute inset-0 z-0"
        initial={{ scale: 1.18 }}
        animate={{
          scale: isInView ? (isHovered ? 1.08 : 1) : 1.18,
          x: isHovered ? (mousePos.x - 50) * -0.15 : 0,
          y: isInView ? (isHovered ? (mousePos.y - 50) * -0.15 : [0, -8, 0]) : 0,
        }}
        transition={{
          scale: { duration: 2.0, ease: [0.22, 1, 0.36, 1] },
          x: { duration: 3.0, ease: "easeOut" },
          y: isHovered
            ? { duration: 3.0, ease: "easeOut" }
            : { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2.0 }
        }}
      />

      {/* Spotlight */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-400 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 220px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.1) 0%, transparent 70%)`
        }}
      />

      {/* Floating Label */}
      <div className="absolute bottom-6 left-6 z-30 font-sans text-[9px] tracking-[0.2em] uppercase text-white bg-taupe-brown/75 px-4 py-2 backdrop-blur-sm transition-all duration-500 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
        {label}
      </div>

      {/* Brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 z-30 border-t-[1.5px] border-l-[1.5px] border-coconut-milk/80 opacity-0 -translate-x-1.5 -translate-y-1.5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
      <div className="absolute bottom-4 right-4 w-8 h-8 z-30 border-b-[1.5px] border-r-[1.5px] border-coconut-milk/80 opacity-0 translate-x-1.5 translate-y-1.5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
    </div>
  );
};

// Helper component for the Text Side
const GalleryText = ({ eyebrow, title, desc, link = '/collection' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <motion.div 
      ref={ref}
      className="p-10 md:p-16 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-taupe-brown/60 uppercase mb-6 font-medium">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight mb-6 tracking-[2px]" dangerouslySetInnerHTML={{ __html: title }} />
      
      <motion.div 
        className="h-[1px] bg-neutral-900/20 mb-8 mx-auto"
        initial={{ width: 0 }}
        animate={{ width: isInView ? 48 : 0 }}
        transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <p className="font-serif text-lg md:text-xl text-neutral-600 leading-relaxed max-w-[420px] mb-10 font-light mx-auto tracking-[2px]">
        {desc}
      </p>
      
      <Link to={link} className="group relative overflow-hidden font-sans text-xs tracking-[1.5px] uppercase text-emerald-dark bg-transparent border border-emerald-dark px-6 py-2.5 transition-colors duration-300 hover:text-white">
        <span className="relative z-10 font-medium">Shop Now</span>
        <div className="absolute inset-0 bg-emerald-dark -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-150 ease-out" />
      </Link>
    </motion.div>
  );
};

const GallerySection = () => {
  const middleRef = useRef(null);
  const isMiddleInView = useInView(middleRef, { once: false, margin: "-20%" });

  return (
    <section className="bg-coconut-milk overflow-hidden border-t border-taupe-brown/10">
      
      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
  <GalleryImage 
    src={Buddha}
    alt="Buddha marble sculpture"
    label="White Marble · Handcrafted"
  />
        <GalleryText 
          eyebrow="Handcrafted in Marble"
          title="Discover Artistic<br>Sculptures"
          desc="Explore our exclusive collection of handcrafted sculptures, each piece meticulously designed to bring elegance and sacred beauty into your space."
          link="/collection"
        />
      </div>

      {/* MIDDLE BAND */}
      <div ref={middleRef} className="text-center py-20 px-10 bg-[#EFECE3] overflow-hidden relative">
        <motion.p 
          className="font-sans text-[9.5px] tracking-[0.22em] text-sage uppercase mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={isMiddleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Do what you want, not what is expected
        </motion.p>
        <motion.h2 
          className="font-serif text-4xl md:text-[52px] font-light text-neutral-900 tracking-[0.04em] mb-7"
          initial={{ opacity: 0, y: 20 }}
          animate={isMiddleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          A Unique Art Gallery
        </motion.h2>
        <motion.div 
          className="h-[1px] bg-neutral-900 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: isMiddleInView ? 56 : 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* On mobile, image should probably come first, but user code had text first in DOM for flip? 
            Wait, user code: `<div class="row flip"><div class="img-wrap" id="img2">...</div><div class="text-side" id="txt2">...</div></div>`
            CSS: `.row.flip .img-wrap{ order:2; } .row.flip .text-side{ order:1; }`
            This means on desktop, text is on the left, image on the right. */}
        <div className="order-2 md:order-1">
          <GalleryText 
            eyebrow="Original Works on Canvas"
            title="Discover Artistic<br>Paintings"
            desc="Explore our exclusive collection of handcrafted paintings, each piece meticulously designed to bring elegance and creativity into your space."
            link="/collection?section=paintings"
          />
        </div>
        <div className="order-1 md:order-2">
  <GalleryImage 
    src={Paint}
    alt="Indian portrait painting"
    label="Oil on Canvas · Original"
  />
</div>
      </div>

    </section>
  );
};

export default GallerySection;
