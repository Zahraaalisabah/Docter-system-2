import React from 'react';
import './PatientForm.css';

function PatientForm() {
  return (
    <section className="patient-form-section">
      <div className="header-image-section">
        <img src={require('./image/image3.png')} alt="Patient photo" className="patient-photo" />
        <h1>Patient Information</h1>
      </div>
      <form>
        <div className="info-form-row">
          <div className="info-form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="info-form-group">
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" />
          </div>
        </div>

        <div className="info-form-row">
          <div className="info-form-group">
            <label htmlFor="blood-type">Blood Type:</label>
            <select id="blood-type" name="blood-type">
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="info-form-group">
            <label htmlFor="height">Height:</label>
            <input type="text" id="height" name="height" />
          </div>
        </div>

        <div className="info-form-row">
          <div className="info-form-group">
            <label htmlFor="weight">Weight:</label>
            <input type="text" id="weight" name="weight" />
          </div>
          <div className="info-form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </div>

        <div className="chronic-diseases-group">
          <label htmlFor="chronic-diseases">Chronic diseases:</label>
          <textarea id="chronic-diseases" name="chronic-diseases"></textarea>
        </div>

        <div className="operations-sex-row">
          <div className="operations-group">
            <p>Previous operations:</p>
            <div>
              <label htmlFor="yes">
                <input type="radio" id="yes" name="operations" value="yes" />
                YES
              </label>
            </div>
            <div>
              <label htmlFor="no">
                <input type="radio" id="no" name="operations" value="no" />
                NO
              </label>
            </div>
          </div>

          <div className="gender-group">
            <p>Sex:</p>
            <div>
              <label htmlFor="male">
                <input type="radio" id="male" name="sex" value="male" />
                Man
              </label>
            </div>
            <div>
              <label htmlFor="female">
                <input type="radio" id="female" name="sex" value="female" />
                Female
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">Enter</button>
      </form>
    </section>
  );
}

export default PatientForm;
