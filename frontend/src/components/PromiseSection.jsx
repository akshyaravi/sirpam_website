import React from 'react';
import { motion } from 'framer-motion';

const PromiseSection = () => {
  return (
    <section className="py-32 px-6 bg-[#EFECE3] flex items-center justify-center text-center border-t border-taupe-brown/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
       
          
          <div className="mb-12 w-48 h-[1px] bg-gradient-to-r from-transparent via-neutral-900/20 to-transparent"></div>
          <h2 className="text-lg md:text-2xl font-serif text-neutral-900 leading-relaxed font-light tracking-[2px] px-4">
            “Every sculpture begins as a harmony between stone, soul, and the artistry that transforms marble into masterpieces.”
          </h2>
          
          <div className="mt-12 w-48 h-[1px] bg-gradient-to-r from-transparent via-neutral-900/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseSection;
