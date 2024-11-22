import React from 'react';
import './Patientcard.css';

const PatientCard = () => {
  return (
    <div className="unique-patient-card-container">
      <div className="unique-patient-header">
        <img 
          src={require('./image card/image.png')} 
          alt="Patient" 
          className="unique-patient-image" 
        />
        
        <div className="unique-patient-info">
          <h2>Ahmed Ali Hasan</h2>
          <p>07870101998</p>
        </div>
        <p className="unique-previous-operations">
          Previous operations: <span className="unique-no">NO</span>
        </p>
      </div>

      <div className="unique-patient-details">
        <div className="unique-detail-box">
          <h3>Chronic diseases</h3>
          <p className="unique-highlighted-text">He has chronic asthma</p>
        </div>
        <div className="unique-detail-box">
          <h3>Blood type</h3>
          <p>O+</p>
          <p>Weight: 80</p>
          <p>Height: 175cm</p>
        </div>
        <div className="unique-detail-box">
          <h3>Medication</h3>
          <div className="unique-medication">
            <img 
              src={require('./image card/image2.png')} 
              alt="Ventolin" 
              className="unique-medication-img" 
            />
            <img 
              src={require('./image card/image3.png')} 
              alt="Fish Oil" 
              className="unique-medication-img" 
            />
            <p>Ventolin & Fish Oil</p>
          </div>
        </div>
        <div className="unique-detail-box">
          <h3>Note</h3>
          <p>15.oct.2024</p>
          <p>Lung examinations and allergy tests</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
