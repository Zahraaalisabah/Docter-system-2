import React from 'react';
import './Sidebar.css';
import logoImage from '../components/image/logo.png';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logoImage} alt="We Care Logo" className="logo-image" />
        <div className="logo-text">
          <h2>We Care</h2>
          <p>Medical Dashboard</p>
        </div>
      </div>
      
      <nav>
        <ul>
          <li><a href="#">Appointment</a></li>
          <li><a href="#">Patients Data</a></li>
          <li><a href="#">Patients Info</a></li>
          <li><a href="#">Patients Card</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Book</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
