import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import { FaTelegramPlane, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Kontaktlar</h2>

      <div className="contact-info">
        <p><strong>Telefon:</strong> +998 90 123 45 67</p>
        <p><strong>Email:</strong> info@sce-quvvat.uz</p>
        <p><strong>Manzil:</strong> Toshkent shahri, Yakkasaroy tumani, XYZ ko‘chasi, 10-uy</p>

        <div className="social-icons">
          <a href="https://t.me/sce_quvvat" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://linkedin.com/company/sce-quvvat" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://youtube.com/sce-quvvat" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="contact-form-container">
        <h3>Biz bilan bog‘laning</h3>
        <ContactForm />
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          loading="lazy"
          title="SCE-QUVVAT map"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
