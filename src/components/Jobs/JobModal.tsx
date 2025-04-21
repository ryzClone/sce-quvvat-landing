import React, { useState } from 'react';
import './Jobs.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  position: string;
}

const JobModal = ({ isOpen, onClose, position }: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, file });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{position} — ariza</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Telefon raqam"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
          />
          <button type="submit">Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
