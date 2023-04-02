import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment } from './action';

const App = () => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const appointments = useSelector(state => state.appointments);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addAppointment(name, time, description));
    setName('');
    setTime('');
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="time">Time:</label>
        <input type="text" id="time" value={time} onChange={e => setTime(e.target.value)} />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} />
        <button type="submit">Add Appointment</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.name}</td>
              <td>{appointment.time}</td>
              <td>{appointment.description}</td>
            </tr>
          ))}
