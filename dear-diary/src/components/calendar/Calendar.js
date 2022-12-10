import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
const axios = require('axios');

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

    

  var CalendarComponentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 10px"
};

  return (
    <div className='app'>
      <div className='calendar-container' style={CalendarComponentStyle}>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default CalendarComponent;
