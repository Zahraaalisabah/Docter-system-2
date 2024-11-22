import React from "react";
import './Medication.css';


function Medications() {
  return (
    <div className="medications-wrapper">
      <div className="product-container">
        <div className="product-card">
           <img src={require('./image MED/image1.png')} alt="Advil Cold & Sinus" className="product-image" />

          <h3>Vitamin D3&K-2</h3>
          <p>Exp: 20.10.24</p>
          <p>10pc</p>
        </div>
        <div className="product-card">
        <img src={require('./image MED/image2.png')} alt="Advil Cold & Sinus" className="product-image" />
        <h3>Advil Cold & Sinus</h3>
          <p>Exp: 20.10.24</p>
          <p>10pc</p>
        </div>
        <div className="product-card">
        <img src={require('./image MED/image3.png')}alt="Atacand" className="product-image" />
          <h3>Atacand</h3>
          <p>Exp: 20.10.24</p>
          <p>10pc</p>
        </div>
        <div className="product-card">
        <img src={require('./image MED/image4.png')} alt="Fucidin" className="product-image" />
          <h3>Fucidin</h3>
          <p>Exp: 20.10.24</p>
          <p>10pc</p>
        </div>
        <div className="product-card">
        <img src={require('./image MED/image5.png')} alt="Augmentin" className="product-image" />
          <h3>Augmentin</h3>
          <p>Exp: 20.10.24</p>
          <p>10pc</p>
        </div>
        <div className="product-card empty-card"></div>
        <div className="product-card empty-card"></div>
      </div>

      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Medications;
