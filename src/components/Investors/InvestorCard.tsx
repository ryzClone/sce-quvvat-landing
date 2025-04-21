
interface Props {
  name: string;
  logo: string;
  onClick: () => void;
}

const InvestorCard = ({ name, logo, onClick }: Props) => {
  return (
    <div className="investor-card" onClick={onClick}>
      <img src={logo} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default InvestorCard;
