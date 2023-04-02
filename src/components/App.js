import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment } from '../action';
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" className="name-input"/>
        <br />
        <label>Time:</label>
        <input type="text" className="time-input"/>
        <br />
        <label>Description:</label>
        <textarea className="description-input"/>
        <br />
        <button type="submit">Add Appointment</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
            {/* Appointment HTML */}
            <tr>
              <td>appointmentName</td>
              <td>appointmentTime</td>
              <td>appointmentDescription</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}


export default App;
