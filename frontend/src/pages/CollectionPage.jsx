import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import GodImage1 from '../assets/1.jpg';
import GodImage2 from '../assets/2.png';
import GodImage3 from '../assets/3.jpg';
import GodImage4 from '../assets/4.jpg';
import GodImage5 from '../assets/5.png';
import GodImage6 from '../assets/6.jpg';
import AnimalImage1 from '../assets/7.jpg';
import AnimalImage2 from '../assets/10.jpg';
import AnimalImage3 from '../assets/11.jpg';
import Paint from '../assets/Paint.jpg';
import './CollectionPage.css';

const sculptureCollections = {
  gods: {
    id: 'gods',
    title: 'Gods',
    description:
      'Sacred marble sculptures created for pooja spaces, sanctums, and devotional interiors.',
    imageVariant: 'god',
    items: [
      { name: 'Buddha', background: 'from-[#e7dfd0] via-[#f6f1e8] to-[#a58a66]', image: GodImage1 },
      { name: 'Krishna', background: 'from-[#eadfce] via-[#f8f3eb] to-[#8d7a62]', image: GodImage2 },
      { name: 'Lakshmi', background: 'from-[#efe3d6] via-[#faf6ee] to-[#b89173]', image: GodImage3 },
      { name: 'Shiva', background: 'from-[#d9ddd9] via-[#f4f1ea] to-[#82867c]', image: GodImage4 },
      { name: 'Natraj', background: 'from-[#eadfce] via-[#faf4ec] to-[#97684a]', image: GodImage5 },
      { name: 'Ganesha', background: 'from-[#ece5d8] via-[#faf7f0] to-[#9f8c72]', image: GodImage6 }
    ]
  },
  animals: {
    id: 'animals',
    title: 'Animals',
    description:
      'Statement animal sculptures crafted for gardens, entrances, estates, and feature corners.',
    imageVariant: 'animal',
    items: [
      { name: 'Elephant', background: 'from-[#dfe1da] via-[#f5f2eb] to-[#868780]', image: AnimalImage1 },
      { name: 'Horse', background: 'from-[#efe3d6] via-[#f9f4ec] to-[#93694c]', image: AnimalImage2 },
      { name: 'Royal Horse', background: 'from-[#e8e0d7] via-[#f7f3ec] to-[#7a7d80]', image: AnimalImage3 }
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
      { name: 'Royal Portrait', background: 'from-[#6b3249] via-[#a34c5f] to-[#d98969]', image: Paint },
      { name: 'Heritage Muse', background: 'from-[#7a2f47] via-[#b15363] to-[#f1a26a]', image: Paint },
      { name: 'Color Reverie', background: 'from-[#5e3456] via-[#9a4e6b] to-[#e59a70]', image: Paint }
    ]
  },
  devotional: {
    id: 'devotional',
    title: 'Devotional Art',
    description:
      'Sacred paintings composed for prayer rooms, calm interiors, and spiritually rooted spaces.',
    imageVariant: 'painting',
    items: [
      { name: 'Temple Grace', background: 'from-[#5d3a3e] via-[#8b5950] to-[#d5a16d]', image: Paint },
      { name: 'Sacred Canvas', background: 'from-[#72413f] via-[#9e6455] to-[#e0ac70]', image: Paint },
      { name: 'Divine Reflection', background: 'from-[#66344e] via-[#9d5569] to-[#e39e72]', image: Paint }
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

const ActionButton = ({ label, filled = false }) => (
  <motion.button
    type="button"
    initial="rest"
    whileHover="hover"
    className={`collection-action-button ${filled ? 'is-filled' : ''}`}
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

const ProductCard = ({ item, categoryTitle, imageVariant }) => (
  <motion.article
    variants={cardReveal}
    whileHover={{ y: -6 }}
    className="collection-card group"
  >
    <div className="collection-card-media">
      <div className={`collection-card-gradient absolute inset-0 bg-gradient-to-br ${item.background}`}>
        <div className="marble-texture absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(0,0,0,0.08))]" />
        <img
          src={item.image}
          alt={`${item.name} showcase`}
          className={`collection-card-image collection-card-image--${imageVariant}`}
          loading="lazy"
        />
      </div>

      <div className="collection-card-copy">
        <p className="collection-card-kicker">{categoryTitle}</p>
        <h3 className="collection-card-title">{item.name}</h3>
      </div>
    </div>

    <div className="collection-card-body">
      <div className="collection-card-actions">
        <ActionButton label="Add to Cart" />
        <ActionButton label="Buy Now" filled />
      </div>
    </div>
  </motion.article>
);

const CollectionSection = ({
  id,
  eyebrow,
  title,
  collections,
  selectedCategory,
  onCategoryChange
}) => {
  const activeCollection = collections[selectedCategory];

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

      <motion.div
        key={selectedCategory}
        initial="hidden"
        animate="visible"
        variants={staggerCards}
        className="collection-grid"
      >
        {activeCollection.items.map((item) => (
          <ProductCard
            key={`${selectedCategory}-${item.name}`}
            item={item}
            categoryTitle={activeCollection.title}
            imageVariant={activeCollection.imageVariant}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const [selectedCollectionType, setSelectedCollectionType] = useState(
    searchParams.get('section') === 'paintings' ? 'paintings' : 'sculptures'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedSculptureCategory, setSelectedSculptureCategory] = useState('gods');
  const [selectedPaintingCategory, setSelectedPaintingCategory] = useState('portraits');

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
              <div className="collection-split-texture marble-texture" />
              <div className="collection-split-copy">
                <p className="collection-kicker">Collection One</p>
                <h1 className="collection-panel-title">Sculptures</h1>
                <p className="collection-panel-text">
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

      <div id="collection-listing" className="collection-content">
        {selectedCollectionType === 'sculptures' ? (
          <CollectionSection
            id="sculpture-listing"
            eyebrow="Sculptures Collection"
            title="Sculptures"
            collections={sculptureCollections}
            selectedCategory={selectedSculptureCategory}
            onCategoryChange={setSelectedSculptureCategory}
          />
        ) : (
          <CollectionSection
            id="painting-listing"
            eyebrow="Paintings Collection"
            title="Our Paintings"
            collections={paintingCollections}
            selectedCategory={selectedPaintingCategory}
            onCategoryChange={setSelectedPaintingCategory}
          />
        )}
      </div>
    </div>
  );
}
