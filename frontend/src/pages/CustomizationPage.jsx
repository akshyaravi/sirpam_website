import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronRight, 
  Image as ImageIcon, 
  Upload, 
  Palette, 
  Hammer, 
  MessageCircle,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function CustomizationPage() {
  const [category, setCategory] = useState(null); // 'sculpture' | 'painting'

  return (
    <div className="min-h-screen bg-coconut-milk text-taupe-brown font-sans selection:bg-sage/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden luxury-gradient marble-texture px-6">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >

          
         <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-neutral-900 tracking-[2px]"
>
  Where Dreams Are Carved<br/>In Marble
</motion.h1>
          <motion.p variants={FADE_UP} className="font-serif text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto font-light">
            Turning your dreams into handcrafted sculptures and paintings with refined artistic craftsmanship.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <button 
              onClick={() => {
                document.getElementById('selection-section').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-emerald-dark border border-emerald-dark text-white uppercase tracking-widest text-xs font-medium hover:bg-emerald-dark/90 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center rounded-none"
            >
              Start Customization <ArrowRight size={16} />
            </button>
            <button className="px-8 py-3 bg-transparent border border-emerald-dark text-emerald-dark uppercase tracking-widest text-xs font-medium hover:bg-emerald-dark hover:text-white transition-all duration-300 w-full sm:w-auto rounded-none">
              Talk to Artisan
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Category Selection */}
      <section id="selection-section" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-[2px] text-neutral-900">Choose Your Canvas</h2>
            <div className="w-16 h-[1px] bg-taupe-brown mx-auto mb-4" />
            <p className="text-lg md:text-xl text-neutral-500 font-serif">Select the type of masterpiece you wish to commission.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sculpture Option */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCategory('sculpture')}
              className={`cursor-pointer group relative overflow-hidden p-10 rounded-2xl transition-all duration-500 border
                ${category === 'sculpture' 
                  ? 'border-sage bg-white shadow-2xl shadow-sage/10' 
                  : 'border-transparent glass-card hover:bg-white/60'
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors
                ${category === 'sculpture' ? 'bg-sage text-white' : 'bg-warm-beige/30 text-taupe-brown'}
              `}>
                <Hammer size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-neutral-900 tracking-[2px]">Sculpture Customization</h3>
              <p className="text-neutral-500 font-serif font-light leading-relaxed">
                Carved from premium marble and stone. Ideal for homes, temples, and luxury spaces.
              </p>
              {category === 'sculpture' && (
                <motion.div layoutId="indicator" className="absolute top-6 right-6 text-sage">
                  <CheckCircle2 size={24} />
                </motion.div>
              )}
            </motion.div>

            {/* Painting Option */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCategory('painting')}
              className={`cursor-pointer group relative overflow-hidden p-10 rounded-2xl transition-all duration-500 border
                ${category === 'painting' 
                  ? 'border-warm-beige bg-white shadow-2xl shadow-warm-beige/10' 
                  : 'border-transparent glass-card hover:bg-white/60'
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-warm-beige/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors
                ${category === 'painting' ? 'bg-warm-beige text-white' : 'bg-warm-beige/30 text-taupe-brown'}
              `}>
                <Palette size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-neutral-900 tracking-[2px]">Painting Customization</h3>
              <p className="text-neutral-500 font-serif font-light leading-relaxed">
                Bespoke canvas art, portraits, and murals tailored to your interior palette.
              </p>
              {category === 'painting' && (
                <motion.div layoutId="indicator" className="absolute top-6 right-6 text-warm-beige">
                  <CheckCircle2 size={24} />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Form Section */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {category === 'sculpture' && (
              <motion.div 
                key="sculpture-form"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif tracking-[2px] text-neutral-900">Sculpture Details</h2>
                  <p className="text-lg md:text-xl text-neutral-500 font-serif mt-2">Fill in your requirements below.</p>
                </div>
                <SculptureForm />
              </motion.div>
            )}

            {category === 'painting' && (
              <motion.div 
                key="painting-form"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif tracking-[2px] text-neutral-900">Painting Details</h2>
                  <p className="text-lg md:text-xl text-neutral-500 font-serif mt-2">Tell us about your artistic vision.</p>
                </div>
                <PaintingForm />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Final CTA (Appears when a category is selected) */}
          <AnimatePresence>
            {category && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-20 p-10 md:p-16 rounded-3xl marble-texture border border-white/40 bg-white/20 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-warm-beige/20 to-transparent pointer-events-none" />
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl font-serif mb-4 text-neutral-900 tracking-[2px]">Bring Your Artistic Vision to Life</h2>
                  <p className="text-neutral-600 mb-8 font-light">
                    Our master artisans are ready to collaborate. Submit your details for a custom quote or book a free consultation call.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-3 bg-emerald-dark border border-emerald-dark text-white uppercase tracking-widest text-xs font-medium hover:bg-emerald-dark/90 transition-all duration-300 w-full sm:w-auto rounded-none">
                      Request Custom Quote
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-emerald-dark text-emerald-dark uppercase tracking-widest text-xs font-medium hover:bg-emerald-dark hover:text-white transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto rounded-none group">
                      <MessageCircle size={16} className="text-green-600 group-hover:text-white transition-colors" /> WhatsApp Artisan
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// REUSABLE UI COMPONENTS
// ==========================================

const FormSection = ({ title, children, index }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={FADE_UP}
    className="glass-card rounded-2xl p-8 md:p-10 relative"
  >
    <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-[#012E2A] text-white flex items-center justify-center text-sm font-medium">
      {index}
    </div>
    <h3 className="text-xl font-serif mb-6 text-neutral-900 tracking-[2px] pb-4 border-b border-neutral-200/50">{title}</h3>
    {children}
  </motion.div>
);

const InputField = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col">
    <label className="text-sm text-neutral-600 mb-2 font-medium">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="px-4 py-3 bg-white/50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-transparent transition-all placeholder:text-neutral-400"
    />
  </div>
);

const SelectionGrid = ({ options, type = "radio" }) => {
  const [selected, setSelected] = useState(type === 'radio' ? null : []);

  const handleSelect = (opt) => {
    if (type === 'radio') {
      setSelected(opt);
    } else {
      setSelected(prev => prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {options.map((opt) => {
        const isSelected = type === 'radio' ? selected === opt : selected.includes(opt);
        return (
          <div 
            key={opt}
            onClick={() => handleSelect(opt)}
            className={`cursor-pointer p-4 rounded-xl border text-center transition-all duration-300 flex items-center justify-center h-20
              ${isSelected 
                ? 'border-taupe-brown bg-taupe-brown/5 text-taupe-brown shadow-sm' 
                : 'border-neutral-200 bg-white/50 text-neutral-600 hover:border-neutral-300 hover:bg-white'
              }`}
          >
            <span className="text-sm font-medium">{opt}</span>
          </div>
        );
      })}
    </div>
  );
};

const ImageUpload = () => (
  <label className="border-2 border-dashed border-neutral-300 rounded-2xl p-10 text-center hover:bg-white/40 hover:border-sage transition-all cursor-pointer group block">
    <input type="file" className="hidden" multiple accept="image/*" />
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
      <Upload size={24} className="text-neutral-400 group-hover:text-sage" />
    </div>
    <h4 className="text-neutral-700 font-medium mb-2">Upload Reference Images</h4>
    <p className="text-sm text-neutral-500 max-w-sm mx-auto">
      Drag & drop inspiration images, face photos, room references, or existing art references here.
    </p>
  </label>
);

// ==========================================
// LUXURY BUDGET SLIDER
// ==========================================

const LuxuryBudgetSlider = ({ min = 30000, max = 1000000, labelMin = '₹30k', labelMax = 'Premium / Custom' }) => {
  const [value, setValue] = useState(min);
  const [isDragging, setIsDragging] = useState(false);

  const formatPrice = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative py-6 px-4 md:px-8 bg-[#F5F2EA]/80 backdrop-blur-md rounded-2xl border border-[#012E2A]/10 shadow-sm marble-texture overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-2xl" />
      
      <div className="relative z-10 text-center mb-8">
        <h4 className="text-[#012E2A] font-serif text-lg font-semibold tracking-wide mb-2">Estimated Budget Starting From</h4>
        <motion.div 
          key={value}
          initial={{ opacity: 0.8, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-serif text-[#012E2A]"
        >
          {formatPrice(value)}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-2">
        {/* Floating Indicator */}
        <AnimatePresence>
          {isDragging && (
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: -25, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              className="absolute -top-10 left-0 w-full pointer-events-none"
            >
              <div 
                className="absolute transform -translate-x-1/2 bg-white text-[#012E2A] px-3 py-1.5 rounded-full font-serif shadow-md border border-[#012E2A]/10 text-sm font-medium"
                style={{ left: `calc(${percentage}% + ${14 - percentage * 0.28}px)` }}
              >
                {formatPrice(value)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <input 
          type="range" 
          min={min} 
          max={max} 
          value={value}
          step={5000}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 rounded-full luxury-slider relative z-20"
          style={{ backgroundSize: `${percentage}% 100%` }}
        />
        <div className="flex justify-between text-[#8B8175] text-xs md:text-sm font-medium mt-4">
          <span>{labelMin}</span>
          <span>{labelMax}</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// SCULPTURE FORM
// ==========================================

const SculptureForm = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="space-y-8">
      <FormSection index={1} title="Customer Details">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField label="Full Name" placeholder="John Doe" />
          <InputField label="Phone Number" placeholder="+91 98765 43210" />
          <InputField label="Email Address" type="email" placeholder="john@example.com" />
          <InputField label="City / Country" placeholder="New York, USA" />
        </div>
        <div className="mt-6">
          <label className="text-sm text-neutral-600 mb-3 block font-medium">Preferred Contact Method</label>
          <div className="flex gap-4">
            {['Call', 'WhatsApp', 'Email'].map(method => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="contact" className="w-4 h-4 text-sage border-neutral-300 focus:ring-sage" />
                <span className="text-sm text-neutral-700">{method}</span>
              </label>
            ))}
          </div>
        </div>
      </FormSection>

      <FormSection index={2} title="Sculpture Type">
        <SelectionGrid options={[
          'Buddha Sculpture', 'God Statue', 'Family Sculpture', 
          'Portrait Sculpture', 'Animal Sculpture', 'Abstract Sculpture', 
          'Temple Sculpture', 'Modern Luxury', 'Garden', 'Memorial', 'Others'
        ]} />
      </FormSection>

      <FormSection index={3} title="Purpose of Sculpture">
        <SelectionGrid options={[
          'Home Interior', 'Pooja Room', 'Outdoor Garden', 
          'Hotel / Resort', 'Temple', 'Corporate Space', 
          'Gift', 'Memorial', 'Luxury Decor'
        ]} />
      </FormSection>

      <FormSection index={4} title="Reference Images">
        <ImageUpload />
      </FormSection>

      <FormSection index={5} title="Preferred Material">
        <div className="grid md:grid-cols-2 gap-6">
          <div 
            onClick={() => setSelectedMaterial('white')}
            className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group ${
              selectedMaterial === 'white' 
                ? 'border-taupe-brown bg-taupe-brown/5 shadow-md ring-1 ring-taupe-brown/30' 
                : 'border-neutral-200 bg-white hover:border-neutral-900 hover:shadow-xl'
            }`}
          >
            <div className="w-full h-32 rounded-lg mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-neutral-100 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598375822607-425fbaf30b2f?q=80&w=600&auto=format&fit=crop')" }}></div>
            </div>
            <h4 className="font-serif text-lg">White Marble</h4>
            <p className="text-sm text-neutral-500 mt-1">Pristine Makarana or Italian White</p>
          </div>
          <div 
            onClick={() => setSelectedMaterial('black')}
            className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group ${
              selectedMaterial === 'black' 
                ? 'border-taupe-brown bg-taupe-brown/5 shadow-md ring-1 ring-taupe-brown/30' 
                : 'border-neutral-200 bg-white hover:border-neutral-900 hover:shadow-xl'
            }`}
          >
            <div className="w-full h-32 rounded-lg mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-neutral-900 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596489370830-22c6080345ea?q=80&w=600&auto=format&fit=crop')" }}></div>
            </div>
            <h4 className="font-serif text-lg">Black Marble</h4>
            <p className="text-sm text-neutral-500 mt-1">Deep, rich black stone</p>
          </div>
        </div>
      </FormSection>

      <FormSection index={6} title="Sculpture Size">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <InputField label="Height" placeholder="e.g. 24" />
          <InputField label="Width" placeholder="e.g. 12" />
          <InputField label="Depth" placeholder="e.g. 10" />
        </div>
        <div className="flex gap-4 mb-6">
          {['Inches', 'Feet', 'CM'].map(unit => (
            <label key={unit} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="unit" className="text-sage" />
              <span className="text-sm">{unit}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-neutral-500 mb-3 font-medium">Quick Options:</p>
        <div className="flex flex-wrap gap-3">
          {['Small', 'Medium', 'Large', 'Monumental'].map(size => (
            <span 
              key={size} 
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition-all duration-300 ${
                selectedSize === size 
                  ? 'border-taupe-brown bg-taupe-brown/5 text-taupe-brown shadow-sm' 
                  : 'border-neutral-200 bg-white/50 text-neutral-600 hover:border-neutral-300 hover:bg-white'
              }`}
            >
              {size}
            </span>
          ))}
        </div>
      </FormSection>

      <FormSection index={7} title="Style Preference">
        <SelectionGrid options={[
          'Traditional South Indian', 'Temple Style', 'Minimal Modern', 
          'Hyper Realistic', 'Abstract', 'Luxury Contemporary', 
          'Antique Finish', 'Hand-Carved Classical'
        ]} />
      </FormSection>

      <FormSection index={8} title="Finish & Texture">
        <SelectionGrid options={[
          'Matte Finish', 'High Polish', 'Rough Stone Finish', 
          'Antique Finish', 'Gold Detailing', 'Natural Texture'
        ]} />
      </FormSection>

      <FormSection index={9} title="Installation Details">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-neutral-600 block mb-2">Location</label>
            <select className="w-full px-4 py-3 bg-white/50 border border-neutral-200 rounded-lg outline-none">
              <option>Indoor</option>
              <option>Outdoor</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-neutral-600 block mb-2">Mounting</label>
            <select className="w-full px-4 py-3 bg-white/50 border border-neutral-200 rounded-lg outline-none">
              <option>Floor-mounted</option>
              <option>Wall-mounted</option>
              <option>Pedestal Base</option>
            </select>
          </div>
        </div>
      </FormSection>

      <FormSection index={10} title="Budget Range">
        <LuxuryBudgetSlider 
          min={30000} 
          max={1000000} 
          labelMin="₹30k" 
          labelMax="Premium / Custom" 
        />
      </FormSection>

      <FormSection index={11} title="Expected Delivery">
        <SelectionGrid options={['Urgent', '2–4 Weeks', '1–2 Months', 'Flexible']} />
      </FormSection>

      <FormSection index={12} title="Additional Notes">
        <textarea 
          rows={5}
          className="w-full px-4 py-3 bg-white/50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none"
          placeholder="Describe pose requirements, expressions, engravings, spiritual elements, lighting requirements, or custom details..."
        ></textarea>
      </FormSection>
    </div>
  );
};

// ==========================================
// PAINTING FORM
// ==========================================

const PaintingForm = () => {
  const [selectedOrientation, setSelectedOrientation] = useState(null);

  return (
    <div className="space-y-8">
      <FormSection index={1} title="Customer Details">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField label="Full Name" placeholder="Jane Doe" />
          <InputField label="Phone Number" placeholder="+91 98765 43210" />
          <InputField label="Email Address" type="email" placeholder="jane@example.com" />
          <InputField label="City / Country" placeholder="London, UK" />
        </div>
      </FormSection>

      <FormSection index={2} title="Painting Type">
        <SelectionGrid options={[
          'Portrait Painting', 'Abstract Art', 'Spiritual Painting', 
          'Traditional Indian Art', 'Landscape', 'Modern Luxury Canvas', 
          'Wall Mural', 'Tanjore Style', 'Contemporary Art'
        ]} />
      </FormSection>

      <FormSection index={3} title="Medium Preference">
        <SelectionGrid options={[
          'Oil Painting', 'Acrylic', 'Watercolor', 'Charcoal', 
          'Pencil Sketch', 'Digital Art', 'Mixed Media'
        ]} />
      </FormSection>

      <FormSection index={4} title="Canvas / Surface Type">
        <SelectionGrid options={['Canvas', 'Wood Panel', 'Handmade Paper', 'Wall Surface', 'Fabric']} />
      </FormSection>

      <FormSection index={5} title="Preferred Color Palette">
        <SelectionGrid options={['Warm tones', 'Neutral luxury', 'Black & white', 'Gold accents', 'Earthy tones', 'Vibrant colors']} />
        <div className="mt-6 pt-6 border-t border-neutral-200">
          <p className="text-sm text-neutral-600 mb-3 flex items-center gap-2"><ImageIcon size={16}/> Upload room image for color matching (Optional)</p>
          <label className="block border border-dashed border-neutral-300 rounded-xl p-4 text-center text-sm text-neutral-500 hover:bg-white cursor-pointer transition-colors">
            <input type="file" className="hidden" accept="image/*" />
            Click to upload room reference
          </label>
        </div>
      </FormSection>

      <FormSection index={6} title="Room Placement">
        <SelectionGrid options={['Living Room', 'Bedroom', 'Hallway', 'Office', 'Hotel Lobby', 'Pooja Area']} />
      </FormSection>

      <FormSection index={7} title="Painting Orientation">
        <div className="flex gap-4">
          {['Portrait', 'Landscape', 'Square'].map(ori => (
            <div 
              key={ori} 
              onClick={() => setSelectedOrientation(ori)}
              className={`flex-1 py-4 border rounded-xl text-center cursor-pointer transition-all duration-300 ${
                selectedOrientation === ori 
                  ? 'border-taupe-brown bg-taupe-brown/5 shadow-sm text-taupe-brown' 
                  : 'border-neutral-200 bg-white/50 hover:border-warm-beige hover:bg-white text-neutral-900'
              }`}
            >
              <div className={`mx-auto border-2 mb-2 transition-colors duration-300 ${
                selectedOrientation === ori ? 'border-taupe-brown' : 'border-neutral-300'
              } ${
                ori === 'Portrait' ? 'w-8 h-12' : 
                ori === 'Landscape' ? 'w-12 h-8' : 'w-10 h-10'
              }`} />
              <span className="text-sm font-medium">{ori}</span>
            </div>
          ))}
        </div>
      </FormSection>

      <FormSection index={8} title="Framing Preference">
        <SelectionGrid options={['No Frame', 'Wooden Frame', 'Premium Gold Frame', 'Floating Frame', 'Antique Frame']} />
      </FormSection>

      <FormSection index={9} title="Emotional / Theme Direction">
        <SelectionGrid options={['Calm & Spiritual', 'Royal & Luxury', 'Minimal Modern', 'Traditional', 'Powerful Statement Art', 'Peaceful Meditation']} />
      </FormSection>

      <FormSection index={10} title="Budget Range">
        <LuxuryBudgetSlider 
          min={10000} 
          max={500000} 
          labelMin="₹10k" 
          labelMax="Premium Canvas" 
        />
      </FormSection>
    </div>
  );
};
