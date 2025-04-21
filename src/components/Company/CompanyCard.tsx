
interface Props {
  title: string;
  description: string;
}

const CompanyCard = ({ title, description }: Props) => {
  return (
    <div className="company-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CompanyCard;
