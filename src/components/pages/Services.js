
import React from 'react';
import { getServicesData } from '../../apiService';
import './Services.css';

const Services = () => {
  const services = getServicesData();

  // onClick olayı için bir işlev oluştur
  const handleButtonClick = () => {
   
  };

  return (
    <div className="service-page">
    <h1>Travel Şirketi Hizmetleri</h1>
    <ul className="service-list">
      {services.map((service) => (
        <li key={service.id} className="service-item">
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </li>
      ))}
    </ul>

    {/* Butona onClick olayını ekleyin */}
    <button onClick={handleButtonClick}>Tikla</button>
  </div>
  );
};

export default Services;





