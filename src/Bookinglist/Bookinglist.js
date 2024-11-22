import React, { useState, useEffect } from 'react';
import './Bookinglist.css';

function Bookinglist() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const bookingsData = [
      { code: "P001", firstName: "Ahmed", lastName: "Ali", date: "2024-11-01", time: "10:00am" },
      { code: "P002", firstName: "Ali", lastName: "Sabah", date: "2024-11-01", time: "11:00am" },
      { code: "P003", firstName: "Alaa", lastName: "Ahmed", date: "2024-11-02", time: "12:00pm" },
      { code: "P004", firstName: "Tebaa", lastName: "Qusay", date: "2024-11-02", time: "1:00pm" },
      { code: "P005", firstName: "Zahraa", lastName: "Ali", date: "2024-11-03", time: "2:00pm" },
      { code: "P006", firstName: "Rania", lastName: "Raed", date: "2024-11-03", time: "3:00pm" },
      { code: "P007", firstName: "Noor", lastName: "Ali", date: "2024-11-04", time: "4:00pm" },
      { code: "P008", firstName: "Rusal", lastName: "Mustafa", date: "2024-11-04", time: "5:00pm" },
    ];
    setBookings(bookingsData);
  }, []);

  return (
    <div className="bookinglist-container">
      <h2 className="title">Booking List</h2>
      <div className="booking-list">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.code} id={booking.code}>
                <td className="booking-code">{booking.code}</td>
                <td className="booking-name">{booking.firstName}</td>
                <td className="booking-name">{booking.lastName}</td>
                <td className="booking-date">{booking.date}</td>
                <td className="booking-time">{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookinglist;
