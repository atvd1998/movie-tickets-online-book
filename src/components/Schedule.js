import React from 'react';


export default function Schedule({ id, date, day, month, hour, chair }) {
  const handleClick = e => {
    window.location.href = "localhost://3000"
  };
  return (
    <>
      <div className="container-time">
        <button onClick={handleClick}>
          <div className="container-button">
            <div className="container-day">
              <h6>{date}</h6>
              <h6>{day}</h6>
            </div>
            <h2>{month}</h2>
            <div className="container-seat">
              <h4>{hour}</h4>
              <h6>{`${chair} ghế trống`}</h6>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
