import { useEffect, useState } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return showButton ? (
    <button className="scroll-to-top" onClick={scrollToTop}>
      ↑
    </button>
  ) : null;
};

export default ScrollToTopButton;
