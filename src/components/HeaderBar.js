import React, { useEffect, useState } from 'react';
import './HeaderBar.css';

function HeaderBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(intervalId); // تنظيف التوقيت عند تفكيك المكون
  }, []);

  return (
    <div className="input-container">
      <div className="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="icon-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.44 1.292a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
        </svg>
        <input type="text" className="input-field" placeholder=" Search..." />
      </div>
      <div className="greeting">
        Welcome! : {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} {currentTime.toLocaleDateString()}
      </div>
      {/* إضافة أيقونة صورة الملف الشخصي */}
      <div className="profile-icon">
        <img src={require('./image/image3.png')} alt="Profile" className="profile-image" />

      </div>
    </div>
  );
}

export default HeaderBar;
