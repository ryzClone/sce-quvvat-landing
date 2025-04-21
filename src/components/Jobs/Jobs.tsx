import { useState } from 'react';
import './Jobs.css';
import JobCard from './JobCard';
import JobModal from './JobModal';

const jobList = [
  {
    title: 'Frontend Developer',
    department: 'IT bo‘limi',
    location: 'Toshkent',
    date: '15 Aprel 2025',
  },
  {
    title: 'Energetika muhandisi',
    department: 'Texnik bo‘lim',
    location: 'Navoiy',
    date: '12 Aprel 2025',
  },
  {
    title: 'HR Manager',
    department: 'Kadrlar bo‘limi',
    location: 'Samarqand',
    date: '10 Aprel 2025',
  },
];

const Jobs = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, position: '' });

  const openModal = (position: string) => {
    setModalInfo({ isOpen: true, position });
  };

  const closeModal = () => {
    setModalInfo({ ...modalInfo, isOpen: false });
  };

  return (
    <section id="jobs" className="jobs-section">
      <h2>Vakansiyalar</h2>
      <div className="jobs-grid">
        {jobList.map((job, idx) => (
          <JobCard
            key={idx}
            title={job.title}
            department={job.department}
            location={job.location}
            date={job.date}
            onClick={() => openModal(job.title)}
          />
        ))}
      </div>
      <JobModal
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        position={modalInfo.position}
      />
    </section>
  );
};

export default Jobs;
