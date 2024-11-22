import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar2 from './Sidebar2/Sidebar2';
import HeaderBar from './components/HeaderBar';
import Login from './Loggout/Login/Login';
import PatientForm from './components/PatientForm';
import Medications from './Shop/Medication';
import PatientTable from './Patientlist/PatientTable';
import Patientcard from './Patientcard/Patientcard';
import Appointment from './Appointment/Appointment';
import Book from './Book/Book';
import Bookinglist from './Bookinglist/Bookinglist';
import Welcom from './DrZain/Welcom';


function App() {
  return (
    <Router>
      <div className="app">
        <HeaderBar />
        <Sidebar2 />
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcom />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/patients" element={<PatientTable />} />
            <Route path="/patient-info" element={<PatientForm />} />
            <Route path="/patient-card" element={<Patientcard />} />
            <Route path="/booking-list" element={<Bookinglist />} />
            <Route path="/todo" element={<Book />} />
            <Route path="/logout" element={<Login />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
