
interface Props {
  title: string;
  department: string;
  location: string;
  date: string;
  onClick: () => void;
}

const JobCard = ({ title, department, location, date, onClick }: Props) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p><strong>Bo‘lim:</strong> {department}</p>
      <p><strong>Joylashuv:</strong> {location}</p>
      <p><strong>Sana:</strong> {date}</p>
      <button onClick={onClick}>Ariza topshirish</button>
    </div>
  );
};

export default JobCard;
