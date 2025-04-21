import { useState } from 'react';
import './Investors.css';
import InvestorCard from './InvestorCard';
import InvestorModal from './InvestorModal';

const investors = [
  {
    name: 'Nebras Power',
    logo: '/images/1.jpg',
    description: 'Qatarning Nebras Power kompaniyasi – energetika bozorining yetakchi vakili.',
  },
  {
    name: 'EDF',
    logo: '/images/2.jpg',
    description: 'Fransiyaning yirik energiya kompaniyasi – Électricité de France (EDF).',
  },
  {
    name: 'SIEMENS',
    logo: '/images/3.webp',
    description: 'Germaniyaning SIEMENS kompaniyasi – texnologik innovatsiyalar yetakchisi.',
  },
  {
    name: 'Stone City Energy BV',
    logo: '/images/4.jpg',
    description: 'Gollandiya kompaniyasi, O‘zbekistonda yirik loyihalarni amalga oshirgan.',
  },
];

const Investors = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', description: '' });

  const openModal = (title: string, description: string) => {
    setModalInfo({ isOpen: true, title, description });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, isOpen: false });
  };

  return (
    <section id="investors" className="investors-section">
      <h2>Инвесторы</h2>
      <div className="investors-grid">
        {investors.map((inv, idx) => (
          <div key={idx} style={{ animationDelay: `${idx * 0.3}s` }} className="fade-in">
            <InvestorCard
              name={inv.name}
              logo={inv.logo}
              onClick={() => openModal(inv.name, inv.description)}
            />
          </div>
        ))}
      </div>
      <InvestorModal
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        title={modalInfo.title}
        description={modalInfo.description}
      />
    </section>
  );
};

export default Investors;
