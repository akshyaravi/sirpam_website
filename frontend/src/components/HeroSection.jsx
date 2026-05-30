import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const patternY = useTransform(scrollYProgress, [0, 1], ['-6%', '9%']);
  const patternPositionX = useTransform(scrollYProgress, [0, 1], ['0px', '-44px']);
  const patternPositionY = useTransform(scrollYProgress, [0, 1], ['0px', '88px']);
  const secondPatternY = useTransform(scrollYProgress, [0, 1], ['8%', '-4%']);
  const secondPatternPositionX = useTransform(scrollYProgress, [0, 1], ['44px', '0px']);
  const secondPatternPositionY = useTransform(scrollYProgress, [0, 1], ['88px', '0px']);

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
    <div ref={heroRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden luxury-gradient marble-texture">
      <motion.div
        className="home-hero-pattern pointer-events-none absolute inset-x-0 -top-[16%] -bottom-[16%] z-[1] opacity-45 will-change-transform"
        style={{ y: patternY, backgroundPositionX: patternPositionX, backgroundPositionY: patternPositionY }}
      />
      <motion.div
        className="home-hero-pattern home-hero-pattern-secondary pointer-events-none absolute inset-x-0 -top-[16%] -bottom-[16%] z-[1] opacity-35 will-change-transform"
        style={{
          y: secondPatternY,
          backgroundPositionX: secondPatternPositionX,
          backgroundPositionY: secondPatternPositionY,
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] z-[2]" />



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
            <Link
              to="/collection"
              className="group relative overflow-hidden border border-emerald-dark bg-transparent px-6 py-2.5 font-sans text-xs uppercase tracking-[1.5px] text-emerald-dark transition-colors duration-300 hover:text-white"
            >
              <span className="relative z-10 font-medium">EXPLORE COLLECTION</span>
              <div className="absolute inset-0 bg-emerald-dark -translate-x-[101%] transition-transform duration-150 ease-out group-hover:translate-x-0" />
            </Link>
          </motion.div>
        </motion.div>



      </div>
    </div>
  );
};

export default HeroSection;
