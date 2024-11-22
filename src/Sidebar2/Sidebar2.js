import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar2.css';

// استيراد الأيقونات من المسارات المحلية
import heartIcon from './image/image1.png'; // استبدل بالمسار الصحيح
import Drzain from './image/pic.jpeg'; // استبدل بالمسار الصحيح
import calendarIcon from './image/image2.png'; // استبدل بالمسار الصحيح
import newspaperIcon from './image/image3.png'; // استبدل بالمسار الصحيح
import personIcon from './image/image5.png'; // استبدل بالمسار الصحيح
import documentIcon from './image/image4.png'; // استبدل بالمسار الصحيح
import calendarNumberIcon from './image/image6.png'; // استبدل بالمسار الصحيح
import listIcon from './image/image7.png'; // استبدل بالمسار الصحيح
import logoutIcon from './image/image8.png'; // استبدل بالمسار الصحيح

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const [activeLink, setActiveLink] = useState('Dr. Zain Alabdeen');

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const menuItems = [
        { name: 'Dr. Zain Alabdeen', icon: Drzain, path: '/' },
        { name: 'Appointment', icon: calendarIcon, path: '/appointment' },
        { name: 'Patients Data', icon: newspaperIcon, path: '/patients' },
        { name: 'Patients Info', icon: personIcon, path: '/patient-info' },
        { name: 'Patients Card', icon: documentIcon, path: '/patient-card' },
        { name: 'Booking List', icon: calendarNumberIcon, path: '/booking-list' },
        { name: 'To Do', icon: listIcon, path: '/todo' },
        { name: 'Log Out', icon: logoutIcon, path: '/logout' }
    ];

    return (
        <div>
            <div className={`sidebar ${isActive ? 'active' : ''}`}>
                <ul>
                    <li className="logo" style={{ '--bg': '#911414' }}>
                        <Link to="/">
                            <div className="icon">
                                <img src={heartIcon} alt="Dr. Zain Alabdeen" />
                            </div>
                        </Link>
                    </li>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={activeLink === item.name ? 'active' : ''}
                        >
                            <Link to={item.path} onClick={() => handleLinkClick(item.name)}>
                                <div className="icon">
                                    <img src={item.icon} alt={item.name} className="menu-icon" />
                                </div>
                                <div className="text">{item.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`menuToggle ${isActive ? 'active' : ''}`} onClick={toggleSidebar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
};

export default Sidebar;
