import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden luxury-gradient">
      
      {/* Background Marble Texture */}
      <div className="absolute inset-0 marble-texture pointer-events-none opacity-40 z-0"></div>

      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-beige/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-sage/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Text Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >

          
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl font-serif text-neutral-900 leading-tight mb-6 tracking-[2px]"
          >
           Creating Sculptures Meant  <br /> To Endure Eternity
          </motion.h1>
          
          <motion.p 
  variants={fadeUp}
  className="font-serif text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto font-light tracking-[2px]"
>
  Handcrafted premium sculptures and customized masterpieces created by skilled South Indian artisans.
</motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              to="/customize"
              className="group relative w-full sm:w-auto overflow-hidden rounded-none border border-emerald-dark bg-emerald-dark px-6 py-3 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:text-emerald-dark"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                CUSTOMIZE YOUR SCULPTURE
                <ArrowRight size={14} strokeWidth={1.5} />
              </span>
              <div className="absolute inset-0 bg-coconut-milk -translate-x-[101%] transition-transform duration-150 ease-out group-hover:translate-x-0" />
            </Link>
            <button className="group relative overflow-hidden border border-emerald-dark bg-transparent px-6 py-2.5 font-sans text-xs uppercase tracking-[1.5px] text-emerald-dark transition-colors duration-300 hover:text-white">
              <span className="relative z-10 font-medium">EXPLORE COLLECTION</span>
              <div className="absolute inset-0 bg-emerald-dark -translate-x-[101%] transition-transform duration-150 ease-out group-hover:translate-x-0" />
            </button>
          </motion.div>
        </motion.div>



      </div>
    </div>
  );
};

export default HeroSection;
