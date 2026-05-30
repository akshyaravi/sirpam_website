import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import GodImage1 from '../assets/1.jpg';
import GodImage2 from '../assets/buddha1.png';
import GodImage3 from '../assets/saraswathi1.png';
import GodImage4 from '../assets/sai1.png';
import GodImage5 from '../assets/ganesha1.png';
import GodImage6 from '../assets/ganesha1.png';
import AnimalImage1 from '../assets/7.jpg';
import DetailImage1 from '../assets/8.jpg';
import DetailImage2 from '../assets/9.jpg';
import AnimalImage2 from '../assets/10.jpg';
import AnimalImage3 from '../assets/11.jpg';
import DetailImage3 from '../assets/12.jpg';
import DetailImage4 from '../assets/14.jpg';
import DetailImage5 from '../assets/14.jpg';
import BuddhaImage from '../assets/Buddha.jpeg';
import Paint from '../assets/Paint.jpg';
import Pic2 from '../assets/pic2.png';
import Pic3 from '../assets/pic3.png';
import Paint2 from '../assets/paint2.jpeg';
import Paint3 from '../assets/paint3.jpeg';
import Paint4 from '../assets/paint4.jpeg';
import Paint5 from '../assets/paint5.jpeg';
import Paint6 from '../assets/paint6.jpeg';
import Paint7 from '../assets/paint7.jpeg';
import './CollectionPage.css';

const sculptureGalleryPool = [
  GodImage1,
  GodImage2,
  GodImage3,
  GodImage4,
  GodImage5,
  GodImage6,
  AnimalImage1,
  AnimalImage2,
  AnimalImage3,
  DetailImage1,
  DetailImage2,
  DetailImage3,
  DetailImage4,
  DetailImage5,
  BuddhaImage
];

const buildSculptureGallery = (name, leadImage) =>
  [leadImage, ...sculptureGalleryPool.filter((image) => image !== leadImage)]
    .slice(0, 6)
    .map((src, index) => ({
      src,
      alt: `${name} gallery view ${index + 1}`,
      fit: 'contain'
    }));

const buildPaintingGallery = (name, leadImage = Paint) => [
  { src: leadImage, alt: `${name} detail view 1`, fit: 'cover', position: '50% 8%' },
  { src: leadImage, alt: `${name} detail view 2`, fit: 'cover', position: '50% 24%' },
  { src: leadImage, alt: `${name} detail view 3`, fit: 'cover', position: '50% 38%' },
  { src: leadImage, alt: `${name} detail view 4`, fit: 'cover', position: '50% 52%' },
  { src: leadImage, alt: `${name} detail view 5`, fit: 'cover', position: '50% 68%' },
  { src: leadImage, alt: `${name} detail view 6`, fit: 'cover', position: '50% 84%' }
];

const sculptureCollections = {
  gods: {
    id: 'gods',
    title: 'Gods',
    description:
      'Sacred marble sculptures created for pooja spaces, sanctums, and devotional interiors.',
    imageVariant: 'god',
    items: [
      {
        name: 'Buddha',
        background: 'from-white via-white to-white',
        image: GodImage2,
        rating: 4.9,
        material: 'Hand-carved white marble',
        description:
          'A serene Buddha form shaped for meditation corners, temple rooms, and calm hospitality interiors.',
        gallery: buildSculptureGallery('Buddha', GodImage2)
      },
      // {
      //   name: 'Krishna',
      //   background: 'from-white via-white to-white',
      //   image: GodImage2,
      //   rating: 4.8,
      //   material: 'Polished marble stone',
      //   description:
      //     'An expressive Krishna sculpture with refined ornament work for altar settings and statement devotional displays.',
      //   gallery: buildSculptureGallery('Krishna', GodImage2)
      // },
      {
        name: 'Saraswati',
        background: 'from-white via-white to-white',
        image: GodImage3,
        rating: 4.9,
        material: 'Premium hand-finished marble',
        description:
          'A graceful Saraswati piece designed to bring warmth, detail, and sacred character into prayer-led interiors.',
        gallery: buildSculptureGallery('Saraswati', GodImage3)
      },
      {
        name: 'Sai Baba',
        background: 'from-white via-white to-white',
        image: GodImage4,
        imageStyle: { transform: 'translateY(-2%)' },
        rating: 4.9,
        material: 'Solid white marble',
        description:
          'A gracefully crafted Sai Baba marble sculpture designed for peaceful and devotional spaces.',
        gallery: buildSculptureGallery('Sai Baba', GodImage4)
      },
      // {
      //   name: 'Natraj',
      //   background: 'from-white via-white to-white',
      //   image: GodImage5,
      //   rating: 4.7,
      //   material: 'Artisan carved marble',
      //   description:
      //     'A dramatic Natraj composition crafted to anchor foyers, sanctums, and high-visibility feature walls.',
      //   gallery: buildSculptureGallery('Natraj', GodImage5)
      // },
      {
        name: 'Ganesha',
        background: 'from-white via-white to-white',
        image: GodImage6,
        rating: 4.9,
        material: 'Museum-grade marble finish',
        description:
          'A richly detailed Ganesha sculpture suited for welcoming entrances, pooja rooms, and gifting collections.',
        gallery: buildSculptureGallery('Ganesha', GodImage6)
      }
    ]
  },
  animals: {
    id: 'animals',
    title: 'Animals',
    description:
      'Statement animal sculptures crafted for gardens, entrances, estates, and feature corners.',
    imageVariant: 'animal',
    items: [
      {
        name: 'Elephant',
        background: 'from-white via-white to-white',
        image: AnimalImage1,
        rating: 4.8,
        material: 'Weather-ready sculpted stone',
        description:
          'A dignified elephant sculpture created to frame thresholds, landscape paths, and grand exterior settings.',
        gallery: buildSculptureGallery('Elephant', AnimalImage1)
      },
      {
        name: 'Horse',
       background: 'from-white via-white to-white',
        image: AnimalImage2,
        rating: 4.7,
        material: 'Natural stone composite',
        description:
          'A strong horse form with flowing posture that works beautifully in courtyards, lawns, and luxury entrances.',
        gallery: buildSculptureGallery('Horse', AnimalImage2)
      },
      // {
      //   name: 'Royal Horse',
      //   background: 'from-white via-white to-white',
      //   image: AnimalImage3,
      //   rating: 4.8,
      //   material: 'Hand-finished premium stone',
      //   description:
      //     'A regal horse sculpture designed to create movement and scale in outdoor estates and formal reception zones.',
      //   gallery: buildSculptureGallery('Royal Horse', AnimalImage3)
      // }
    ]
  }
};

const paintingCollections = {
  portraits: {
    id: 'portraits',
    title: 'Portraits',
    description:
      'Expressive portrait paintings layered with rich color, heritage character, and gallery warmth.',
    imageVariant: 'painting',
    items: [
      {
        name: 'A Beautiful Lady',
       background: 'from-white via-white to-white',
        image: Paint,
        rating: 4.8,
        material: 'Oil on canvas',
        description:
          'A collector-style portrait built with warm pigments and classic depth for refined living and display spaces.',
        gallery: buildPaintingGallery('Royal Portrait', Paint)
      },
      {
        name: 'Self Portrait',
        background: 'from-white via-white to-white',
        image: Paint4,
        rating: 4.7,
        material: 'Layered acrylic on canvas',
        description:
          'A heritage-inspired composition with soft drama, textured brushwork, and a gallery-ready presence.',
        gallery: buildPaintingGallery('Heritage Muse', Paint4)
      },
      {
        name: 'Classic Dancer',
        background: 'from-white via-white to-white',
        image: Paint5,
        rating: 4.8,
        material: 'Mixed media canvas',
        description:
          'A vibrant portrait piece that adds artistic energy and warm storytelling to curated interior palettes.',
        gallery: buildPaintingGallery('Color Reverie', Paint5)
      },
      {
        name: 'Man In Lake ',
       background: 'from-white via-white to-white',
        image: Paint6,
        rating: 4.8,
        material: 'Oil on canvas',
        description:
          'A luminous portrait draped in golden tones, crafted for elegant interiors and curated art collections.',
        gallery: buildPaintingGallery('Golden Veil', Paint6)
      },
      {
        name: 'The Ship',
        background: 'from-white via-white to-white',
        image: Paint7,
        rating: 4.7,
        material: 'Layered acrylic on canvas',
        description:
          'A bold portrait with rich crimson undertones and expressive brushwork for statement wall displays.',
        gallery: buildPaintingGallery('Crimson Grace', Paint7)
      },
      {
        name: 'Dancing Posture ',
        background: 'from-white via-white to-white',
        image: Paint2,
        rating: 4.9,
        material: 'Mixed media canvas',
        description:
          'A dreamy floral portrait layered with texture and color depth for refined living and gallery spaces.',
        gallery: buildPaintingGallery('Mystic Bloom', Paint2)
      },
      {
        name: 'Saffron Muse',
        background: 'from-white via-white to-white',
        image: Paint3,
        rating: 4.8,
        material: 'Oil on canvas',
        description:
          'A warm saffron-toned portrait that brings heritage character and artistic depth to any interior.',
        gallery: buildPaintingGallery('Saffron Muse', Paint3)
      }
    ]
  },
  devotional: {
    id: 'devotional',
    title: 'Devotional Art',
    description:
      'Sacred paintings composed for prayer rooms, calm interiors, and spiritually rooted spaces.',
    imageVariant: 'painting',
    items: [
      {
        name: 'Temple Grace',
        background: 'from-white via-white to-white',
        image: Paint,
        rating: 4.9,
        material: 'Oil and pigment on canvas',
        description:
          'A devotional artwork composed to bring calm rhythm, color depth, and spiritual focus into private spaces.',
        gallery: buildPaintingGallery('Temple Grace')
      },
      {
        name: 'Sacred Canvas',
        background: 'from-white via-white to-white',
        image: Paint,
        rating: 4.8,
        material: 'Hand-finished canvas painting',
        description:
          'A balanced sacred composition made for pooja rooms, boutique hospitality interiors, and serene home corners.',
        gallery: buildPaintingGallery('Sacred Canvas')
      },
      {
        name: 'Divine Reflection',
        background: 'from-white via-white to-white',
        image: Paint,
        rating: 4.9,
        material: 'Textured mixed media canvas',
        description:
          'A rich devotional painting with layered tones and a contemplative finish suited to elegant spiritual spaces.',
        gallery: buildPaintingGallery('Divine Reflection')
      }
    ]
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerCards = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

const CategoryButton = ({ active, label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`collection-category-button ${active ? 'is-active' : ''}`}
  >
    {label}
  </button>
);

const ActionButton = ({ label, filled = false, className = '' }) => (
  <motion.button
    type="button"
    initial="rest"
    whileHover="hover"
    className={`collection-action-button ${filled ? 'is-filled' : ''} ${className}`.trim()}
  >
    <span className="collection-action-label">{label}</span>
    <motion.span
      variants={{
        rest: { x: '-101%' },
        hover: { x: 0 }
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`collection-action-fill ${filled ? 'is-light' : ''}`}
    />
  </motion.button>
);

const ProductCard = ({
  item,
  categoryTitle,
  imageVariant,
  onOpen
}) => {
  const handleOpen = () => onOpen({ ...item, categoryTitle, imageVariant });

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <motion.article
      variants={cardReveal}
      className="collection-card group"
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      aria-label={`Open ${item.name} details`}
    >
      <div className="collection-card-media">
        <div className="collection-card-gradient absolute inset-0">
          <div className="marble-texture absolute inset-0 opacity-25" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(0,0,0,0.08))]" />
          <img
            src={item.image}
            alt={`${item.name} showcase`}
            className={`collection-card-image collection-card-image--${imageVariant}`}
            style={item.imageStyle}
            loading="lazy"
          />
        </div>
      </div>

      <div className="collection-card-copy">
        <p className="collection-card-kicker">{categoryTitle}</p>
        <h3 className="collection-card-title">{item.name}</h3>
        <p className="collection-card-price">{item.price ?? '₹25,000'}</p>
      </div>
    </motion.article>
  );
};

const ProductModal = ({ product, activeImageIndex, onImageChange, onClose }) => {
  const activeImage = product.gallery[activeImageIndex] ?? product.gallery[0];

  return (
    <motion.div
      className="collection-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        key={`${product.categoryTitle}-${product.name}`}
        className="collection-modal"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="collection-product-title"
      >
        <button
          type="button"
          className="collection-modal-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X size={18} strokeWidth={1.75} />
        </button>

        <div className="collection-modal-media">
          <div className="collection-modal-image-wrap marble-texture">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className={`collection-modal-image ${
                activeImage.fit === 'cover' ? 'collection-modal-image--cover' : 'collection-modal-image--contain'
              }`}
              style={activeImage.position ? { objectPosition: activeImage.position } : undefined}
            />
          </div>

          <div className="collection-modal-bullets" aria-label={`${product.name} image gallery`}>
            {product.gallery.map((image, index) => (
              <button
                key={`${product.name}-${image.alt}-${index}`}
                type="button"
                className={`collection-modal-bullet ${activeImageIndex === index ? 'is-active' : ''}`}
                onClick={() => onImageChange(index)}
                aria-label={`Show image ${index + 1} for ${product.name}`}
              >
                <span className="collection-modal-bullet-core" />
              </button>
            ))}
          </div>
        </div>

        <div className="collection-modal-content">
          <div className="collection-modal-rating" aria-label={`Rated ${product.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={`${product.name}-star-${index}`}
                size={14}
                strokeWidth={1.6}
                fill={index < Math.round(product.rating) ? 'currentColor' : 'transparent'}
              />
            ))}
            <span>{product.rating.toFixed(1)}</span>
          </div>

          <h2 id="collection-product-title" className="collection-modal-title">
            {product.name}
          </h2>

          <div className="collection-modal-material">
            <span>Material</span>
            <p>{product.material}</p>
          </div>

          <p className="collection-modal-description">{product.description}</p>

          <div className="collection-modal-actions">
            <ActionButton label="Add to Cart" className="collection-modal-action" />
            <ActionButton label="Buy Now" filled className="collection-modal-action" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CollectionSection = ({
  id,
  eyebrow,
  title,
  collections,
  selectedCategory,
  onCategoryChange,
  onProductOpen
}) => {
  const activeCollection = collections[selectedCategory];
  const [activeProductIndexes, setActiveProductIndexes] = useState({});
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const activeProductIndex = activeProductIndexes[selectedCategory] ?? 0;
  const setCategoryProductIndex = (index) => {
    setActiveProductIndexes((currentIndexes) => ({
      ...currentIndexes,
      [selectedCategory]: index
    }));
  };
  const productCount = activeCollection.items.length;
  const productOffsets = productCount >= 3
    ? [-1, 0, 1]
    : activeCollection.items.map((_, index) => index - activeProductIndex);
  const visibleProducts = productCount > 0
    ? productOffsets.map((offset) => {
        const index = (activeProductIndex + offset + productCount) % productCount;

        return {
          item: activeCollection.items[index],
          index,
          featured: offset === 0
        };
      })
    : [];

  useEffect(() => {
    if (productCount <= 1 || isCarouselPaused) {
      return undefined;
    }

    const autoSlideInterval = window.setInterval(() => {
      setActiveProductIndexes((currentIndexes) => {
        const currentIndex = currentIndexes[selectedCategory] ?? 0;

        return {
          ...currentIndexes,
          [selectedCategory]: (currentIndex + 1) % productCount
        };
      });
    }, 3000);

    return () => window.clearInterval(autoSlideInterval);
  }, [isCarouselPaused, productCount, selectedCategory]);

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className="collection-section"
    >
      <div className="collection-section-head">
        <div className="collection-section-row">
          <div>
            <p className="collection-kicker">{eyebrow}</p>
            <h2 className="collection-section-title">{title}</h2>
          </div>

          <div className="collection-category-description">
            <p>{activeCollection.description}</p>
          </div>
        </div>

        <div className="collection-category-buttons">
          {Object.values(collections).map((collection) => (
            <CategoryButton
              key={collection.id}
              label={collection.title}
              active={selectedCategory === collection.id}
              onClick={() => onCategoryChange(collection.id)}
            />
          ))}
        </div>
      </div>

      <div
        className="collection-grid"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
      >
        {visibleProducts.map(({ item, index, featured }) => (
          <ProductCard
            key={`${selectedCategory}-${item.name}-${index}`}
            item={item}
            categoryTitle={activeCollection.title}
            imageVariant={activeCollection.imageVariant}
            onOpen={onProductOpen}
            featured={featured}
          />
        ))}
      </div>

      <div className="collection-product-bullets" aria-label={`${activeCollection.title} products`}>
        {activeCollection.items.map((item, index) => (
          <button
            key={`${selectedCategory}-${item.name}-bullet`}
            type="button"
            className={`collection-product-bullet ${activeProductIndex === index ? 'is-active' : ''}`}
            onClick={() => setCategoryProductIndex(index)}
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            aria-label={`Show ${item.name}`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const [selectedCollectionType, setSelectedCollectionType] = useState(
    searchParams.get('section') === 'paintings' ? 'paintings' : 'sculptures'
  );
  const [selectedSculptureCategory, setSelectedSculptureCategory] = useState('gods');
  const [selectedPaintingCategory, setSelectedPaintingCategory] = useState('portraits');
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!activeProduct) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProduct(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProduct]);

  const openProduct = (product) => {
    setActiveProduct(product);
    setActiveImageIndex(0);
  };

  const closeProduct = () => {
    setActiveProduct(null);
    setActiveImageIndex(0);
  };

  const showCollectionSection = (type) => {
    setSelectedCollectionType(type);

    requestAnimationFrame(() => {
      document.getElementById('collection-listing')?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  return (
    <div className="collection-page">
      <section className="collection-hero">
        <div className="collection-shell collection-shell--split">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="collection-split-grid"
          >
            <div className="collection-split-panel collection-split-panel--sculptures">
              <img
                className="collection-split-video"
                src={Pic3}
                alt="Sculptures Collection"
                aria-hidden="true"
              />
              <div className="collection-split-texture marble-texture" />
              <div className="collection-split-copy">
                <p className="collection-kicker">Collection One</p>
                <h1 className="collection-panel-title" style={{ color: 'var(--color-emerald-dark)' }}>Sculptures</h1>
                <p className="collection-panel-text" style={{ color: 'var(--color-emerald-dark)' }}>
                  Explore sacred marble gods and handcrafted statement sculptures.
                </p>
                <button
                  type="button"
                  className="collection-scroll-button"
                  onClick={() => showCollectionSection('sculptures')}
                >
                  View Collections
                </button>
              </div>
            </div>

            <div className="collection-split-panel collection-split-panel--paintings">
              <img
                className="collection-split-video"
                src={Pic2}
                alt="Paintings Collection"
                aria-hidden="true"
              />
              <div className="collection-split-texture marble-texture" />
              <div className="collection-split-copy">
                <p className="collection-kicker">Collection Two</p>
                <h1 className="collection-panel-title">Our Paintings</h1>
                <p className="collection-panel-text">
                  Discover expressive portrait and devotional paintings for refined interiors.
                </p>
                <button
                  type="button"
                  className="collection-scroll-button"
                  onClick={() => showCollectionSection('paintings')}
                >
                  View Collections
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="collection-listing" className="collection-content collection-content--green">
        {selectedCollectionType === 'sculptures' ? (
          <CollectionSection
            id="sculpture-listing"
            eyebrow="Sculptures Collection"
            title="Sculptures"
            collections={sculptureCollections}
            selectedCategory={selectedSculptureCategory}
            onCategoryChange={setSelectedSculptureCategory}
            onProductOpen={openProduct}
          />
        ) : (
          <CollectionSection
            id="painting-listing"
            eyebrow="Paintings Collection"
            title="Our Paintings"
            collections={paintingCollections}
            selectedCategory={selectedPaintingCategory}
            onCategoryChange={setSelectedPaintingCategory}
            onProductOpen={openProduct}
          />
        )}
      </div>

      <AnimatePresence>
        {activeProduct ? (
          <ProductModal
            product={activeProduct}
            activeImageIndex={activeImageIndex}
            onImageChange={setActiveImageIndex}
            onClose={closeProduct}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}