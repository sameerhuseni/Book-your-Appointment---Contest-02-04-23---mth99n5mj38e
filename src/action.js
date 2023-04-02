export const addAppointment = (name, time, description) => ({
  type: 'ADD_APPOINTMENT',
  payload: {
    name,
    time,
    description
  }
});
