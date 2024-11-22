import React, { useState } from 'react';
import './Appointment.css';

const AppointmentScheduler = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [notes, setNotes] = useState({});
    const [selectedDay, setSelectedDay] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [noteText, setNoteText] = useState('');
    const [noteColor, setNoteColor] = useState('#3498db');

    const handleOpenModal = (day) => {
        setSelectedDay(day);
        const key = generateNoteKey(day);
        if (notes[key]) {
            setNoteText(notes[key].text);
            setNoteColor(notes[key].color);
        } else {
            setNoteText('');
            setNoteColor('#3498db');
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDay(null);
    };

    const handleSaveNote = () => {
        const key = generateNoteKey(selectedDay);
        if (noteText.trim()) {
            setNotes({ ...notes, [key]: { text: noteText, color: noteColor } });
        } else {
            const updatedNotes = { ...notes };
            delete updatedNotes[key];
            setNotes(updatedNotes);
        }
        handleCloseModal();
    };

    const handleDeleteNote = () => {
        const key = generateNoteKey(selectedDay);
        const updatedNotes = { ...notes };
        delete updatedNotes[key];
        setNotes(updatedNotes);
        handleCloseModal(); // أغلق النافذة المنبثقة بعد الحذف
    };

    const generateNoteKey = (day) => {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const createCalendar = () => {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const calendarDays = [];
        for (let i = 0; i < firstDay; i++) {
            calendarDays.push(<div className="calendar-day empty-day" key={`empty-${i}`}></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const noteKey = generateNoteKey(i);
            calendarDays.push(
                <div className="calendar-day" key={i} onClick={() => handleOpenModal(i)}>
                    {i}
                    {notes[noteKey] && (
                        <div className="note-indicator" style={{ backgroundColor: notes[noteKey].color }}>
                            {notes[noteKey].text}
                        </div>
                    )}
                </div>
            );
        }

        return calendarDays;
    };

    return (
        <div className="appointment-scheduler">
            <div className="scheduler-content">
                <div className="calendar-wrapper">
                    <div className="calendar-header">
                        <button className='prev-month-btn' onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
                            Previous
                        </button>
                        <div className="current-month-year">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
                        <button className='next-month-btn' onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
                            Next
                        </button>
                    </div>
                    <div className="weekdays-header">
                        {['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                            <div className="weekday" key={day}>{day}</div>
                        ))}
                    </div>
                    <div className="calendar-grid">{createCalendar()}</div>
                </div>
            </div>
            {isModalOpen && (
                <div className="note-modal">
                    <h3 className="modal-title">Add/Edit Note</h3>
                    <textarea className="note-textarea" value={noteText} onChange={(e) => setNoteText(e.target.value)} rows="4"></textarea>
                    <input type="color" className="note-color-picker" value={noteColor} onChange={(e) => setNoteColor(e.target.value)} />
                    <button className="save-note-btn" onClick={handleSaveNote}>Save</button>
                    <button className="cancel-note-btn" onClick={handleCloseModal}>Cancel</button>
                    <button className="delete-note-btn" onClick={handleDeleteNote}>Delete</button> {/* زر الحذف */}
                </div>
            )}
        </div>
    );
};

export default AppointmentScheduler;
