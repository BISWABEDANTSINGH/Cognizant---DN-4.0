import React from 'react';
import './OfficeList.css'; // We'll create this file for styling

const OfficeList = () => {
  const heading = <h1>Office Space, at Affordable Range</h1>;

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", // sample image
    },
    {
      Name: "WeWork",
      Rent: 75000,
      Address: "Bangalore",
      src: "https://images.unsplash.com/photo-1558002038-1055907df827", // sample image
    },
    {
      Name: "Regus",
      Rent: 58000,
      Address: "Hyderabad",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // sample image
    },
  ];

  return (
    <div className="container">
      {heading}
      {officeList.map((office, index) => {
        const rentClass = office.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div className="office-card" key={index}>
            <img src={office.src} width="25%" height="25%" alt="Office Space" />
            <h2>Name: {office.Name}</h2>
            <h3 className={rentClass}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
