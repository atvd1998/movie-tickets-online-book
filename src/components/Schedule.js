import React from 'react';

export default function Schedule() {
  return (
    <>
      <div className="container-time">
        <button>
          <div className="container-button">
            <div>
              <h6>10</h6>
              <h6>WED</h6>
            </div>
            <h4>27</h4>
          </div>
        </button>
        <button>
          <div className="container-button">
            <div>
              <h6>10</h6>
              <h6>WED</h6>
            </div>
            <h4>27</h4>
          </div>
        </button>
      </div>

      <div className="container-seat">
        <button>
          <h4>20:00</h4>
          <h6>120 ghế trống</h6>
        </button>
        <button>
          <h4>21:00</h4>
          <h6>120 ghế trống</h6>
        </button>
      </div>
    </>
  );
}
