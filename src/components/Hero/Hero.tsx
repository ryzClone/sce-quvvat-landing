import React from 'react';
import './Hero.css';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>
            <TypeAnimation
              sequence={[
                'SCE-QUVVAT — энергия келажаги', 
                2000,
                'Инновации. Инвесторы. Импульс.', 
                2000,
                'Биз барқарор ривожланиш тарафдоримиз.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p>Миллий ва халқаро ҳамкорлар билан энергетикада янги босқич.</p>
          <a href="#company" className="hero-button">Подробнее</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
