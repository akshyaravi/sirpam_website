import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection' },
  { name: 'Customization', path: '/about' },
  { name: 'About Us', path: '/customize' },
  { name: 'Contact', path: '/contact' }
];

const menuVariants = {
  hidden: { 
    y: '-100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  visible: { 
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const linkContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const linkItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-2 z-50 grid grid-cols-3 items-center bg-gradient-to-r from-coconut-milk/80 via-warm-beige/60 to-sage/50 border-b border-taupe-brown/10 shadow-sm backdrop-blur-md">
        <div className="flex justify-start">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-taupe-brown hover:text-taupe-brown/70 transition-colors" 
            aria-label="Open Menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          {/* Stylized Logo Symbol */}
          <Link to="/" className="mb-1 hover:opacity-80 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top left circle */}
              <circle cx="28" cy="22" r="5" stroke="#111111" strokeWidth="4" fill="none" />
              {/* Bottom right tiny circle */}
              <circle cx="78" cy="82" r="3" stroke="#111111" strokeWidth="3" fill="none" />
              {/* Main continuous line for 'S' / 'P' shape */}
              <path d="M 28 42 C 15 42, 15 70, 50 70 C 90 70, 90 20, 60 20 C 50 20, 50 40, 55 95" stroke="#111111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </Link>
          {/* SIRPPAM Box */}
          <div className="text-base font-serif text-neutral-900 uppercase font-medium tracking-[4px] border border-neutral-900 px-4 py-1">
            <Link to="/">Sirppam</Link>
          </div>
        </div>
        
        <div className="flex justify-end items-center gap-6 text-taupe-brown">
          <button className="hover:text-taupe-brown/70 transition-colors hidden sm:block" aria-label="Wishlist">
            <Heart size={24} strokeWidth={1.5} />
          </button>
          <button className="hover:text-taupe-brown/70 transition-colors" aria-label="Cart">
            <ShoppingCart size={24} strokeWidth={1.5} />
          </button>
          <button className="hover:text-taupe-brown/70 transition-colors" aria-label="Profile">
            <User size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 z-[60] bg-coconut-milk flex flex-col justify-center items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 left-6 md:top-8 md:left-12 text-taupe-brown hover:text-taupe-brown/70 transition-colors"
              aria-label="Close Menu"
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Navigation Links */}
            <motion.nav 
              variants={linkContainerVariants}
              className="flex flex-col items-center gap-6 md:gap-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkItemVariants}>
                  <Link 
                    to={link.path}
                    className={`text-3xl md:text-4xl font-serif tracking-[2px] transition-colors ${
                      location.pathname === link.path 
                        ? 'text-neutral-900' 
                        : 'text-neutral-900/40 hover:text-neutral-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            
            {/* Footer inside menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-12 text-center text-taupe-brown/50 text-sm font-sans tracking-widest uppercase"
            >
              Handcrafted in South India
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
