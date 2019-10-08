import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Container({ children }) {
  return (
    <div className="outer">
      <div className="container-fluid">{children}</div>
    </div>
  );
}
