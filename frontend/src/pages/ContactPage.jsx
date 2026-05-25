import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './ContactPage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

const ContactField = ({ id, label, type = 'text', multiline = false }) => (
  <div className={`contact-field ${multiline ? 'is-textarea' : ''}`}>
    {multiline ? (
      <textarea
        id={id}
        name={id}
        rows={5}
        placeholder={label}
        className="contact-input contact-textarea"
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        className="contact-input"
      />
    )}
    <label htmlFor={id} className="contact-label">
      {label}
    </label>
  </div>
);

export default function ContactPage() {
  return (
    <div className="contact-page">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="contact-shell"
      >
        <form className="contact-card">
          <ContactField id="name" label="Your Name *" />
          <ContactField id="email" type="email" label="Email *" />
          <ContactField id="phone" type="tel" label="Phone" />
          <ContactField id="message" label="Your Message *" multiline />

          <div className="contact-actions">
            <button type="button" className="contact-submit">
              <Send size={15} strokeWidth={1.8} />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
