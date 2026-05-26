import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 18, strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 18, strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const PinterestIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.406.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.782c0-1.668.967-2.915 2.171-2.915 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.064-4.882-3.473 0-5.511 2.606-5.511 5.293 0 1.033.398 2.138.894 2.738.098.119.112.224.082.34-.093.38-.306 1.246-.346 1.418-.054.223-.178.27-.406.163-1.518-.707-2.464-2.929-2.464-4.717 0-3.842 2.792-7.373 8.046-7.373 4.217 0 7.502 3.005 7.502 7.014 0 4.193-2.641 7.57-6.31 7.57-1.232 0-2.391-.64-2.786-1.396l-.76 2.901c-.275 1.052-1.023 2.366-1.526 3.167A12.012 12.012 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterXIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden luxury-gradient border-t border-taupe-brown/10 pt-24 pb-8">
      {/* Background Marble Texture */}
      <div className="absolute inset-0 marble-texture pointer-events-none opacity-40 z-0"></div>

      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-warm-beige/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-sage/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20"
        >
          {/* Column 1 - Brand Story */}
          <motion.div variants={fadeUp} className="lg:col-span-1 flex flex-col">
           <Link 
  to="/" 
  className="text-4xl font-serif text-neutral-900 uppercase font-medium tracking-[4px] mb-6"
>
  Sirppam
</Link>
            <p className="font-serif text-neutral-600 text-lg leading-relaxed font-light">
              Handcrafted marble sculptures shaped through heritage craftsmanship, artistic devotion, and timeless imagination.
            </p>
          </motion.div>

          {/* Column 2 - Navigation */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <h4 className="font-serif text-2xl text-neutral-900 mb-6 tracking-[2px]">Navigation</h4>
            <ul className="flex flex-col gap-4 font-serif text-base font-light text-neutral-600">
              <li><Link to="/" className="hover:text-neutral-900 transition-colors inline-block relative group">
                Home
                <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
              </Link></li>
              <li><Link to="/collection" className="hover:text-neutral-900 transition-colors inline-block relative group">
                Collection
                <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
              </Link></li>
              <li><Link to="/customize" className="hover:text-neutral-900 transition-colors inline-block relative group">
                Customization
                <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
              </Link></li>
              <li><Link to="/about" className="hover:text-neutral-900 transition-colors inline-block relative group">
                About Us
                <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
              </Link></li>
              <li><Link to="/contact" className="hover:text-neutral-900 transition-colors inline-block relative group">
                Contact
                <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
              </Link></li>
            </ul>
          </motion.div>

          {/* Column 3 - Contact Details */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <h4 className="font-serif text-2xl text-neutral-900 mb-6 tracking-[2px]">Contact Us</h4>
            <ul className="flex flex-col gap-5 font-serif text-base font-light text-neutral-600">
              <li className="flex items-start gap-3 hover:text-neutral-900 transition-colors group cursor-pointer">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span className="leading-relaxed relative inline-block">
                  Chennai,<br />Tamil Nadu, India
                  <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-neutral-900 transition-colors cursor-pointer group">
                <Phone size={18} strokeWidth={1.5} className="shrink-0" />
                <span className="relative inline-block">
                  +91 98765 43210
                  <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-neutral-900 transition-colors cursor-pointer group">
                <MessageCircle size={18} strokeWidth={1.5} className="shrink-0" />
                <span className="relative inline-block">
                  WhatsApp
                  <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-neutral-900 transition-colors cursor-pointer group">
                <Mail size={18} strokeWidth={1.5} className="shrink-0" />
                <span className="relative inline-block">
                  art@sirpam.com
                  <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - Social Media */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <h4 className="font-serif text-2xl text-neutral-900 mb-6 tracking-[2px]">Follow Us</h4>
            <div className="flex flex-col gap-3 ml-6">
              <a href="#" className="w-8 h-8 rounded-full border border-neutral-900/20 bg-white/20 backdrop-blur-md flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-md">
                <InstagramIcon size={15} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-neutral-900/20 bg-white/20 backdrop-blur-md flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-md">
                <PinterestIcon size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-neutral-900/20 bg-white/20 backdrop-blur-md flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-md">
                <YoutubeIcon size={15} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-neutral-900/20 bg-white/20 backdrop-blur-md flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-md">
                <LinkedInIcon size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-neutral-900/20 bg-white/20 backdrop-blur-md flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-md">
                <TwitterXIcon size={15} />
              </a>
            </div>
          </motion.div>

          {/* Column 5 - Extra Links */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <h4 className="font-serif text-2xl text-neutral-900 mb-6 tracking-[2px]">Legal</h4>
            <ul className="flex flex-col gap-4 font-serif text-base font-light text-neutral-600">
              <li><Link to="#" className="hover:text-neutral-900 transition-colors inline-block relative group">
                Privacy Policy
                <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
              </Link></li>
              <li><Link to="#" className="hover:text-neutral-900 transition-colors inline-block relative group">
                Terms & Conditions
                <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
              </Link></li>
              <li><Link to="#" className="hover:text-neutral-900 transition-colors inline-block relative group">
                FAQ
                <span className="footer-hover-line absolute -bottom-1 left-0 h-[1px] bg-[#012E2A]"></span>
              </Link></li>
            </ul>
          </motion.div>
          
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-8 border-t border-neutral-900/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-base font-serif font-light text-neutral-600">
            &copy; {new Date().getFullYear()} Sirppam. All rights reserved.
          </div>
          
          <div className="font-serif italic text-lg text-neutral-900 tracking-[2px]">
           Inspired. Sculpted. Refined.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
