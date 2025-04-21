import './Investors.css'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const InvestorModal = ({ isOpen, onClose, title, description }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default InvestorModal;
