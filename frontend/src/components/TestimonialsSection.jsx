import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aarav Krishnan",
    location: "Chennai, India",
    category: "White Marble Buddha",
    rating: 5,
    review: "The serenity captured in this Buddha sculpture is beyond words. It has transformed our meditation room into a sanctuary. The craftsmanship is truly museum-grade.",
    sculptureImg: "https://images.unsplash.com/photo-1517865288-927dcafec153?q=80&w=800&auto=format&fit=crop",
    profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Meera Reddy",
    location: "Hyderabad, India",
    category: "Customized Divine Statue",
    rating: 5,
    review: "Commissioning our family deity in black marble was an emotional journey. The artisans at Sirpam brought our exact vision to life with devotion in every detail.",
    sculptureImg: "https://images.unsplash.com/photo-1574069818804-03517c2f689e?q=80&w=800&auto=format&fit=crop",
    profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Vikram & Ananya",
    location: "Bengaluru, Karnataka",
    category: "Large Premium Masterpiece",
    rating: 5,
    review: "An absolute masterpiece that anchors our new home. The timeless elegance and flawless white marble make it the centerpiece of our lives.",
    sculptureImg: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    profileImg: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=200&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 px-6 bg-coconut-milk overflow-hidden luxury-gradient">
      {/* Background ambient overlays */}
      <div className="absolute inset-0 marble-texture opacity-30 pointer-events-none mix-blend-multiply z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-taupe-brown/60 mb-6 block font-medium">
            Heritage & Trust
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-tight font-light tracking-[2px] mb-6">
            Stories Carved in Marble
          </h2>
          <p className="font-serif text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            Every sculpture we create carries emotion, devotion, heritage, and timeless craftsmanship cherished for generations.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative aspect-square bg-white/40 backdrop-blur-md rounded-none overflow-hidden border border-taupe-brown/10 shadow-[0_8px_30px_rgb(118,107,93,0.06)] hover:shadow-[0_16px_40px_rgb(118,107,93,0.12)] group flex flex-col"
            >
              <div className="p-6 md:p-8 flex h-full flex-col flex-grow">
                <div className="mb-6 self-start bg-coconut-milk/90 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-taupe-brown font-medium shadow-sm">
                  {t.category}
                </div>
                <div className="flex items-center gap-1 mb-5 text-[#B8A37E]">
                  {[...Array(t.rating)].map((_, index) => <Star key={index} size={14} fill="currentColor" />)}
                </div>
                
                <p className="font-serif italic text-taupe-brown/90 leading-relaxed text-lg mb-8 flex-grow">
                  "{t.review}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-taupe-brown/10 pt-6">
                  <img src={t.profileImg} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-taupe-brown/20 p-[2px]" />
                  <div>
                    <h4 className="font-sans font-medium text-taupe-brown text-sm tracking-wide">{t.name}</h4>
                    <div className="flex items-center gap-1.5 text-taupe-brown/60 text-[11px] uppercase tracking-wider mt-1 font-medium">
                      <MapPin size={10} strokeWidth={2.5} />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-none border border-emerald-dark bg-transparent px-6 py-2.5 text-[11px] font-medium uppercase tracking-[1.5px] text-emerald-dark transition-colors duration-300 hover:text-white"
          >
            <span className="relative z-10">Add Review</span>
            <div className="absolute inset-0 bg-emerald-dark -translate-x-[101%] transition-transform duration-150 ease-out group-hover:translate-x-0" />
          </motion.button>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-32 text-center max-w-2xl mx-auto pt-16 border-t border-taupe-brown/10"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-taupe-brown mb-8 font-light">Bring Your Vision to Life</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/customize" className="px-6 py-3 bg-emerald-dark text-white uppercase tracking-[1.5px] text-xs font-medium hover:bg-emerald-dark/90 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 rounded-none">
              START CUSTOMIZATION
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <button className="group relative overflow-hidden px-6 py-3 bg-transparent border border-emerald-dark text-emerald-dark uppercase tracking-[1.5px] text-xs font-medium transition-colors duration-300 hover:text-white w-full sm:w-auto rounded-none">
              <span className="relative z-10">TALK TO ARTISAN</span>
              <div className="absolute inset-0 bg-emerald-dark -translate-x-[101%] transition-transform duration-150 ease-out group-hover:translate-x-0" />
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;
