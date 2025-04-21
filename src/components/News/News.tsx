import { useState } from 'react';
import './News.css';
import NewsCard from './NewsCard';
import NewsModal from './NewModal';

const newsList = [
  {
    title: 'SCE-QUVVAT yangi loyiha boshladi',
    image: '/images/news1.jpg',
    date: '10 Aprel 2025',
    content: 'SCE-QUVVAT kompaniyasi yangi elektr stansiya qurilishini boshladi...',
  },
  {
    title: 'Nebras Power bilan hamkorlik',
    image: '/images/news2.jpg',
    date: '5 Aprel 2025',
    content: 'Nebras Power bilan strategik kelishuv imzolandi...',
  },
  {
    title: 'Energetika sohasidagi yangi texnologiyalar',
    image: '/images/news3.jpg',
    date: '25 Mart 2025',
    content: 'SCE-QUVVAT yangi energiya tejovchi texnologiyalarni joriy qilmoqda...',
  },
];

const News = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', content: '' });

  const openModal = (title: string, content: string) => {
    setModalInfo({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, isOpen: false });
  };

  return (
    <section id="news" className="news-section">
      <h2>Новости</h2>
      <div className="news-grid">
        {newsList.map((item, idx) => (
          <div key={idx} style={{ animationDelay: `${idx * 0.3}s` }} className="fade-in">
            <NewsCard
              title={item.title}
              image={item.image}
              date={item.date}
              onClick={() => openModal(item.title, item.content)}
            />
          </div>
        ))}
      </div>
      <NewsModal
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        title={modalInfo.title}
        content={modalInfo.content}
      />
    </section>
  );
};

export default News;
