import React from 'react';
import './CyberYoda.css'; // Import the CSS file

const CyberYoda = () => {
  return (
    <div className="background">
      <div className="overlay">
        <div className="max-w-4xl">
          <h1 className="title">IOT Security</h1>
          <p className="description">
            We understand the unprecedented opportunities that the Internet of  Things (IoT) brings to businesses. However, we also recognize the critical importance of securing your IoT ecosystem against evolving cyber threats.
          </p>
          <button className="button">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberYoda;
