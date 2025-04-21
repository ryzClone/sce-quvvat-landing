import React from 'react';

interface Props {
  title: string;
  image: string;
  date: string;
  onClick: () => void;
}

const NewsCard = ({ title, image, date, onClick }: Props) => {
  return (
    <div className="news-card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="news-content">
        <h3>{title}</h3>
        <span>{date}</span>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default NewsCard;
