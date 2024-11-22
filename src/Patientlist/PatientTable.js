import React from 'react';
import './patientTable.css';

const PatientTable = () => {
    const patients = [
        { id: 'P001', firstName: 'Ahmed', lastName: 'Ali', sex: 'Male', status: 'heart disease' },
        { id: 'P002', firstName: 'Ali', lastName: 'Sabah', sex: 'Male', status: 'Chronic asthma' },
        { id: 'P003', firstName: 'Alaa', lastName: 'Ahmed', sex: 'Famle', status: 'drunken' },
        { id: 'P004', firstName: 'Tebaa', lastName: 'Qusay', sex: 'Famle', status: 'heart disease' },
        { id: 'P005', firstName: 'Zahraa', lastName: 'Ali', sex: 'Fmale', status: 'anemia' },
        { id: 'P006', firstName: 'Rania', lastName: 'Raed', sex: 'Fmale', status: 'anemia' },
        { id: 'P007', firstName: 'Noor', lastName: 'Ali', sex: 'Fmale', status: 'anemia' },
        { id: 'P008', firstName: 'Rusal', lastName: 'Mustafa', sex: 'Fmale', status: 'anemia' },
        { id: 'P010', firstName: 'Mohmed', lastName: 'Salam', sex: 'Male', status: 'enteritis' },
        { id: 'P011', firstName: 'Roaa', lastName: 'Ahmed', sex: 'Fmale', status: 'heart disease' }
    ];

    return (
        <div className="custom-table-container">
            <table className="patient-data-table">
                <thead className="table-header">
                    <tr>
                        <th className="header-id">ID</th>
                        <th className="header-first-name">First Name</th>
                        <th className="header-last-name">Last Name</th>
                        <th className="header-sex">Sex</th>
                        <th className="header-status">Status</th>
                        <th className="header-action">Action</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {patients.map((patient) => (
                        <tr key={patient.id} className="table-row">
                            <td className="cell-id">{patient.id}</td>
                            <td className="cell-first-name">{patient.firstName}</td>
                            <td className="cell-last-name">{patient.lastName}</td>
                            <td className="cell-sex">{patient.sex}</td>
                            <td className="cell-status">{patient.status}</td>
                            <td className="cell-action">
                                <div className="action-button-group">
                                    <button className="view-button">Show</button>
                                    <button className="remove-button">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientTable;
