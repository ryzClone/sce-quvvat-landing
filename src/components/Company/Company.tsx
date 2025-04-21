import './Company.css';
import CompanyCard from './CompanyCard';

const data = [
  {
    title: 'О компании',
    description: 'SCE-QUVVAT — энергетикani rivojlantirishga qaratilgan zamonaviy kompaniya.',
  },
  {
    title: 'Наш проект',
    description: 'Yirik energiya ishlab chiqarish loyihalari, jumladan zamonaviy elektr stansiyalar.',
  },
  {
    title: 'Наши ценности',
    description: 'Barqarorlik, innovatsiya, shaffoflik va sodiqlik — bizning tamoyillarimiz.',
  },
  {
    title: 'Руководство',
    description: 'Kompaniyamiz tajribali va professional rahbariyat tomonidan boshqariladi.',
  },
];

const Company = () => {
  return (
    <section id="company" className="company-section">
      <h2>Компания</h2>
      <div className="company-grid">
        {data.map((item, index) => (
          <CompanyCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Company;
