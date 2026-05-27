import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const ContactField = ({ id, label, type = 'text', multiline = false }) => (
  <div className="flex flex-col relative group">
    <label htmlFor={id} className="font-sans text-sm text-neutral-600 mb-1 font-medium tracking-[2px]">{label}</label>
    {multiline ? (
      <textarea
        id={id}
        name={id}
        rows={4}
        placeholder={label}
        className="font-sans w-full px-4 py-3 bg-white/30 border border-neutral-300 rounded-lg focus:outline-none focus:border-sage transition-all placeholder:text-transparent focus:placeholder:text-neutral-400 resize-y tracking-[2px] mt-2"
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        className="font-sans w-full py-2 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-sage transition-all placeholder:text-transparent focus:placeholder:text-neutral-400 tracking-[2px]"
      />
    )}
  </div>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-coconut-milk text-taupe-brown font-sans tracking-[2px] luxury-gradient relative overflow-hidden">
      <div className="absolute inset-0 marble-texture pointer-events-none opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:pl-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] gap-10 xl:gap-20 items-start"
        >
          {/* Left Column: Info */}
          <div className="pt-16">
            <motion.h1 variants={FADE_UP} className="text-4xl md:text-5xl font-serif mb-6 text-neutral-900 tracking-[2px]">
              Let's Create<br />Something Beautiful
            </motion.h1>
            <motion.p variants={FADE_UP} className="font-serif text-lg text-neutral-600 mb-12 max-w-md font-light leading-relaxed tracking-[2px]">
             Whether you seek something already admired or something never created before, we are here to shape it with care.
            </motion.p>
            
            <motion.div variants={STAGGER} className="space-y-8">
              <motion.div variants={FADE_UP} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center shrink-0 text-taupe-brown">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-neutral-900 tracking-[2px]">Our Office</h4>
                  <p className="font-sans text-neutral-500 font-light text-sm tracking-[2px]">Chennai,Tamil Nadu<br /></p>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center shrink-0 text-taupe-brown">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-neutral-900 tracking-[2px]">Call Us</h4>
                  <p className="font-sans text-neutral-500 font-light text-sm tracking-[2px]">+91 75388 70577<br />Mon-Sat, 9am - 6pm IST</p>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center shrink-0 text-taupe-brown">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-neutral-900 tracking-[2px]">Email</h4>
                  <p className="font-sans text-neutral-500 font-light text-sm tracking-[2px]">hello@sirpam.com<br />commissions@sirpam.com</p>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column: Form */}
          <motion.div 
            variants={FADE_UP}
            className="mt-12 p-6 md:p-10 xl:ml-6 rounded-[2rem] glass-card border border-white/40 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-serif tracking-[2px] text-neutral-900 mb-6 text-center">Send a Message</h2>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <ContactField id="name" label="Your Name " />
                <ContactField id="email" type="email" label="Email Address " />
                <ContactField id="phone" type="tel" label="Phone Number" />
                <ContactField id="message" label="Your Message " multiline />

                <div className="mt-6 flex justify-center">
                <button 
                  type="submit" 
                  className="font-sans w-fit group relative overflow-hidden bg-emerald-dark px-6 py-3 text-xs font-medium uppercase tracking-[2px] text-white transition-colors duration-300 hover:text-emerald-dark border border-emerald-dark flex justify-center items-center rounded-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                    <Send size={15} strokeWidth={1.8} />
                    SEND MESSAGE
                  </span>
                  <div className="absolute inset-0 bg-coconut-milk -translate-x-[101%] transition-transform duration-300 ease-out group-hover:translate-x-0" />
                </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
