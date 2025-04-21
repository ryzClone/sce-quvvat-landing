import React from 'react';
import './News.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const NewsModal = ({ isOpen, onClose, title, content }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default NewsModal;
