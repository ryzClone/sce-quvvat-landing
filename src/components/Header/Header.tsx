import './Header.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <motion.div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SCE-QUVVAT
        </motion.div>

        <div className="burger" onClick={toggleMenu}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </div>

        <AnimatePresence>
          {(menuOpen || !isMobile) && (
            <motion.nav
              className={`nav ${menuOpen ? 'open' : ''}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {isMobile && (
                <button
                  onClick={() => setMenuOpen(false)}
                  className="close-button"
                >
                  &times;
                </button>
              )}

              <a href="#hero" onClick={() => setMenuOpen(false)}>{t('main')}</a>
              <a href="#company" onClick={() => setMenuOpen(false)}>{t('company')}</a>
              <a href="#investors" onClick={() => setMenuOpen(false)}>{t('investors')}</a>
              <a href="#news" onClick={() => setMenuOpen(false)}>{t('news')}</a>
              <a href="#jobs" onClick={() => setMenuOpen(false)}>{t('vacancies')}</a>
              <a href="#contacts" onClick={() => setMenuOpen(false)}>{t('contacts')}</a>
            </motion.nav>
          )}
        </AnimatePresence>

        <div className="right">
          <motion.div
            className="lang-switcher"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button onClick={() => changeLanguage('ru')}>RU</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('uz')}>UZ</button>
          </motion.div>

          <motion.a
            href="tel:+998901234567"
            className="phone"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            +998 90 123 45 67
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
