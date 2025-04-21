import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // framer-motion importi

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo uchun animatsiya */}
        <motion.div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: -20 }} // boshlang‘ich holat: yuqoriga qarab
          animate={{ opacity: 1, y: 0 }} // oxirgi holat: ko‘rinadigan va normal holat
          transition={{ duration: 1 }} // animatsiya davomiyligi
        >
          SCE-QUVVAT
        </motion.div>

        {/* Nav uchun animatsiya */}
        <motion.nav
          className="nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a href="#company">{t('company')}</a>
          <a href="#investors">{t('investors')}</a>
          <a href="#news">{t('news')}</a>
          <a href="#jobs">{t('vacancies')}</a>
          <a href="#contacts">{t('contacts')}</a>
        </motion.nav>

        {/* Language switcher va phone uchun animatsiya */}
        <div className="right">
          <motion.div
            className="lang-switcher"
            initial={{ opacity: 0, x: 20 }} // o'ngga siljish
            animate={{ opacity: 1, x: 0 }} // boshlang‘ich va oxirgi holat
            transition={{ delay: 1, duration: 1 }}
          >
            <button onClick={() => changeLanguage('ru')} aria-label="Русский язык">RU</button>
            <button onClick={() => changeLanguage('en')} aria-label="English language">EN</button>
            <button onClick={() => changeLanguage('uz')} aria-label="O‘zbek tili">UZ</button>
          </motion.div>

          <motion.a
            href="tel:+998901234567"
            className="phone"
            initial={{ opacity: 0, x: 20 }} // o'ngga siljish
            animate={{ opacity: 1, x: 0 }} // boshlang‘ich va oxirgi holat
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
