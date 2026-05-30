import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const sculptureSteps = [
  {
    number: '01',
    title: 'Concept & Consultation',
    description: 'Understanding your space, preferences, and artistic vision.',
  },
  {
    number: '02',
    title: 'Design & Sketch Approval',
    description: 'Detailed sketches and proportions are finalized for approval.',
  },
  {
    number: '03',
    title: 'Material Selection',
    description: 'Carefully chosen marble selected for beauty, durability, and character.',
  },
  {
    number: '04',
    title: 'Handcrafted Sculpting',
    description: 'Skilled artisans shape every detail with precision and care.',
  },
  {
    number: '05',
    title: 'Finishing & Refinement',
    description: 'Surface polishing, detailing, and quality inspection.',
  },
  {
    number: '06',
    title: 'Safe Delivery & Installation',
    description: 'The completed sculpture is securely delivered and installed.',
  },
];

const canvasSteps = [
  {
    number: '01',
    title: 'Consultation & Creative Vision',
    description:
      'Every artwork begins with understanding the client’s imagination, emotions, and artistic expectations. We carefully discuss the subject, preferred style, color mood, inspiration, and overall visual direction to create a strong creative foundation.',
  },
  {
    number: '02',
    title: 'Composition & Canvas Preparation',
    description:
      'Detailed composition planning shapes balance, proportions, perspective, and focal points while the canvas is professionally prepared for durability, texture quality, and long-lasting color depth.',
  },
  {
    number: '03',
    title: 'Color Development & Artistic Foundation',
    description:
      'The color palette is thoughtfully selected to match the desired mood. Shades, tones, and contrasts are developed before initial paint layers establish the artistic foundation.',
  },
  {
    number: '04',
    title: 'Hand-Painted Creation',
    description:
      'Skilled brushwork and layered techniques bring the artwork to life, adding movement, expression, texture, and artistic character to the original concept.',
  },
  {
    number: '05',
    title: 'Detailing, Refinement & Final Review',
    description:
      'Highlights, textures, shadows, and intricate elements are refined before a complete quality review ensures a polished professional finish.',
  },
  {
    number: '06',
    title: 'Framing & Safe Delivery',
    description:
      'The completed artwork is protected, framed, carefully packaged, and delivered ready to bring lasting artistic beauty to its destination.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const processes = [
  {
    key: 'sculpture',
    eyebrow: 'Custom creation journey',
    title: 'From Vision to Sculpture',
    steps: sculptureSteps,
    tone: 'sculpture',
  },
  {
    key: 'canvas',
    eyebrow: 'Painted with intention',
    title: 'From Concept to Canvas',
    steps: canvasSteps,
    tone: 'canvas',
  },
];

const ProcessGrid = ({ steps, tone = 'sculpture' }) => {
  const isCanvas = tone === 'canvas';

  return (
    <motion.div
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -24, transition: { duration: 0.35, ease: 'easeInOut' } }}
    >
      {steps.map((step) => (
        <motion.article
          key={`${tone}-${step.number}`}
          className={`group relative h-full min-h-[220px] overflow-hidden rounded-[6px] border p-6 md:p-7 transition-all duration-500 ${
            isCanvas
              ? 'border-warm-beige/45 bg-[#F4EFE5] hover:border-warm-beige hover:bg-warm-beige/30'
              : 'border-taupe-brown/10 bg-coconut-milk hover:border-sage/70 hover:bg-sage/15'
          }`}
          variants={stepVariants}
        >
          <div
            className={`absolute left-0 top-0 h-full w-1 transition-all duration-500 group-hover:w-1.5 ${
              isCanvas ? 'bg-warm-beige' : 'bg-sage'
            }`}
          />

          <div className="flex h-full items-start gap-5 md:gap-6">
            <div className="flex shrink-0 flex-col items-center">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full border font-serif text-xl font-light leading-none transition-colors duration-500 ${
                  isCanvas
                    ? 'border-warm-beige/70 bg-coconut-milk/50 text-taupe-brown'
                    : 'border-sage/70 bg-white/35 text-emerald-dark'
                }`}
              >
                {step.number}
              </span>
              <span
                className={`mt-4 h-16 w-px flex-1 transition-colors duration-500 ${
                  isCanvas ? 'bg-warm-beige/50' : 'bg-sage/50'
                }`}
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col pt-1">
              <h3 className="font-serif text-2xl md:text-[27px] leading-tight text-neutral-900 tracking-[1px] mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-7 text-neutral-600">
                {step.description}
              </p>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
};

const ProcessSection = () => {
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const [manualSelectionToken, setManualSelectionToken] = useState(0);
  const activeProcess = processes[activeProcessIndex];
  const isCanvas = activeProcess.tone === 'canvas';

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setManualSelectionToken(0);
      setActiveProcessIndex((currentIndex) => (currentIndex + 1) % processes.length);
    }, manualSelectionToken ? 10000 : 7000);

    return () => window.clearTimeout(timer);
  }, [activeProcessIndex, manualSelectionToken]);

  const handleProcessSelect = (processIndex) => {
    setActiveProcessIndex(processIndex);
    setManualSelectionToken((currentToken) => currentToken + 1);
  };

  return (
    <section className="bg-coconut-milk border-t border-taupe-brown/10 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 md:py-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProcess.key}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -34 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-end mb-12 md:mb-16">
              <div>
                <p
                  className={`font-sans text-[10px] md:text-xs tracking-[0.24em] uppercase mb-5 ${
                    isCanvas ? 'text-taupe-brown/60' : 'text-sage'
                  }`}
                >
                  {activeProcess.eyebrow}
                </p>
                <h2 className="font-serif text-4xl md:text-6xl font-light text-neutral-900 tracking-[1.5px] leading-tight">
                  {activeProcess.title}
                </h2>
              </div>
              <div className="flex flex-col gap-6 lg:items-end">
                <div className="flex w-full max-w-sm border border-taupe-brown/15 bg-coconut-milk/60">
                  {processes.map((process, index) => {
                    const isActive = index === activeProcessIndex;

                    return (
                      <button
                        key={process.key}
                        type="button"
                        onClick={() => handleProcessSelect(index)}
                        className={`flex-1 px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                          isActive
                            ? 'bg-emerald-dark text-white'
                            : 'text-taupe-brown hover:bg-taupe-brown/5'
                        }`}
                      >
                        {process.key}
                      </button>
                    );
                  })}
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-taupe-brown/30 via-sage/50 to-transparent" />
              </div>
            </div>

            <ProcessGrid steps={activeProcess.steps} tone={activeProcess.tone} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
