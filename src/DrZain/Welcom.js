import React, { useEffect, useState } from 'react';
import Pic from './Image/Pic.png';
// import Book from '../Book/Book';

const Card = ({ count, title, icon, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="icon">{icon}</div>
      <div className="count">{count}</div>
      <div className="title">{title}</div>
    </div>
  );
};



const Book = () => {
  const [day, setDay] = useState("today");

  const data = {
    yesterday: { oldPatients: 70, newPatients: 30, oldPercentage: 70, newPercentage: 30 },
    today: { oldPatients: 55, newPatients: 45, oldPercentage: 55, newPercentage: 45 },
    tomorrow: { oldPatients: 20, newPatients: 80, oldPercentage: 20, newPercentage: 80 }
  };

  const { oldPatients, newPatients, oldPercentage, newPercentage } = data[day];

  const handleNextDay = () => {
    if (day === "yesterday") setDay("today");
    else if (day === "today") setDay("tomorrow");
  };

  const handlePreviousDay = () => {
    if (day === "tomorrow") setDay("today");
    else if (day === "today") setDay("yesterday");
  };

  return (
    <div className="card-analysis">
      <div className="arrows left-arrow" onClick={handlePreviousDay}>&#9664;</div>
      <div className="day-label">
        <h2>{day === "today" ? "Today" : day === "yesterday" ? "Yesterday" : "Tomorrow"}</h2>
      </div>
      <div className="arrows right-arrow" onClick={handleNextDay}>&#9654;</div>

      <div className="pie-chart"
        style={{
          background: `conic-gradient(
            #3b82f6 0% ${oldPercentage}%, 
            #ef4444 ${oldPercentage}% 100%
          )`
        }}
      >
        <div className="inner-circle">
          <span>{oldPercentage}%</span>
        </div>
      </div>

      <div className="details">
        <div>
          <span className="old"></span>
          <p>Old Patient</p>
          <p>{oldPatients}</p>
        </div>
        <div>
          <span className="new"></span>
          <p>New Patient</p>
          <p>{newPatients}</p>
        </div>
      </div>
    </div>
  );
};
// export default Book;


// كود الكلاس AppointmentItem
const AppointmentItem = ({ name, type, time, status }) => {
  return (
    <div className="appointment-item">
      <img src={require('./Image/image.png')} alt="profile" className="profile-pic" />

      <div className="appointment-details">
        <p className="name">{name}</p>
        <p className="type">{type}</p>
      </div>
      <div className="appointment-status">
        {status ? <span className="status ongoing">Ongoing</span> : <span className="status time">{time}</span>}
      </div>
    </div>
  );
};

// كود الكلاس PatientDetails
const PatientDetails = ({ name, age, sex, diagnosis, symptoms }) => {
  return (
    <div className="patient-details">
      <div className="patient-header">
      <img src={require('./Image/image.png')} alt="profile" className="profile-pic" />

        <div className="patient-info">
          <p className="name">{name}</p>
          <p className="diagnosis">{diagnosis}</p>
        </div>
        <div className="patient-meta">
          <p>Sex: {sex}</p>
          <p>Age: {age}</p>
        </div>
      </div>
      <div className="symptoms">
        {symptoms.map((symptom, index) => (
          <span key={index} className={`symptom ${symptom.color}`}>{symptom.name}</span>
        ))}
      </div>
      <div className="last-prescription">
        <p>Last prescription</p>
        <a href="#see-all" className="see-all">See all</a>
      </div>
    </div>
  );
};

const Welcom = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // تحديث كل دقيقة

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const addNewTask = () => {
    if (taskInput.trim()) {
      if (tasks.length < 4) {
        setTasks([{ text: taskInput, completed: false }, ...tasks]);
        setTaskInput('');
      } else {
        alert("You can only add up to 4 tasks.");
      }
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className="container">
      <div className="greeting-container">
        <p className="date">{`${formattedDate} - ${formattedTime}`}</p>
        <div className="greeting-card">
          <div className="doctor-image">
            <img src={Pic} alt="Doctor" />
          </div>
          <div className="greeting-text">
            <h2>Welcome, <span>Dr. Zain</span></h2>
            <p>Have a nice day at work</p>
          </div>
          <div className="iconcircul">
            <div className="phone-icon"></div>
          </div>
        </div>
      </div>

      {/* قسم الكارتات أسفل الكارت الترحيبي */}
      <div className="cards-container">
        <Card count="50" title="Appointments" icon="📅" color="#3CBDAA" />
        <Card count="40" title="Consultancy" icon="🎥" color="#7A5FC8" />
        <Card count="20" title="Pending" icon="👤" color="#4E9BE4" />
        <Card count="10" title="Request" icon="➕" color="#767A8A" />
      </div>

      {/* إضافة كارتات المواعيد والتفاصيل المرضية هنا */}
      <div className="main-content">
  <div className="appointments-section">
    <h2>Today's Appointment <a href="#see-all" className="see-all">See all</a></h2>
    <AppointmentItem name="Prince Gila" type="Health checkup" status="Ongoing" />
    <AppointmentItem name="Habibur Rahman" type="Health checkup" time="12:30pm" />
  </div>
  <div className="patient-details-section">
    <h2>Patient Details</h2>
    <PatientDetails
      name="Kumar Shano"
      diagnosis="Common cold"
      age="32"
      sex="M"
      symptoms={[
        { name: 'Running Nose', color: 'yellow' },
        { name: 'Cough', color: 'green' },
      ]}
    />
  </div>
  <Book /> {/* إضافة كارت Book هنا */}
</div>


      <div className="task-container">
        <div className="task-header">
          <h1>Todo List</h1>
          <div className="task-status">
            <div className="task-progress-bar">
              <div className="task-progress" style={{ width: tasks.length ? `${(completedTasksCount / tasks.length) * 100}%` : '0%' }} />
            </div>
            <span className="task-count">{completedTasksCount} / {tasks.length}</span>
          </div>
        </div>

        <div className="task-input-area">
          <input 
            type="text" 
            value={taskInput} 
            onChange={(e) => setTaskInput(e.target.value)} 
            placeholder="Write your task..." 
          />
          <button onClick={addNewTask}>+</button>
        </div>
        
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.completed ? 'task-completed' : ''}`}>
              <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
              <div className="task-actions">
                <button onClick={() => toggleTaskCompletion(index)}>&#10004;</button>
                <button onClick={() => deleteTask(index)}>&#128465;</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* إضافة كارت المرضى هنا */}
      {/* <Book /> */}
    </div>
  );
};

export default Welcom;
