import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Iotsecurity.css'; // Import the CSS file

const Iotsecurity = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="iotsecurity-container bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
        <button 
          onClick={handleBackClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          Back to Home
        </button>
        <h1 className="text-3xl font-bold mb-6">Our IoT Security Services</h1>
        <div className="space-y-4 text-gray-700">
          <p>In-depth analysis of your existing IoT infrastructure.</p>
          <p>Tailored recommendations for strengthening security measures.</p>
          <h3 className="text-xl font-bold">End-to-End Device Protection:</h3>
          <p>Robust security protocols for connected devices.</p>
          <p>Regular updates and patches to address emerging vulnerabilities.</p>
          <h3 className="text-xl font-bold">Secure Data Transmission:</h3>
          <p>Encryption and secure protocols for data in transit.</p>
          <p>Prevention of unauthorized access during data transfer.</p>
          <h3 className="text-xl font-bold">Identity and Access Management:</h3>
          <p>Authentication and authorization protocols for device access.</p>
          <p>Granular control over user permissions within the IoT ecosystem.</p>
          <h3 className="text-xl font-bold">Monitoring and Threat Detection:</h3>
          <p>Real-time monitoring of IoT network activities.</p>
          <p>Advanced threat detection using machine learning algorithms.</p>
          <h3 className="text-xl font-bold">Incident Response and Recovery:</h3>
          <p>Rapid response to IoT security incidents.</p>
          <p>Comprehensive recovery strategies to minimize downtime.</p>
          <h3 className="text-xl font-bold">Why Choose Us?</h3>
          <p><strong>Expertise:</strong> Our team consists of seasoned professionals with a deep understanding of IoT security.</p>
          <p><strong>Innovation:</strong> We stay ahead of emerging threats, ensuring your IoT ecosystem is fortified against the latest cyber risks.</p>
          <p><strong>Tailored Solutions:</strong> Our services are customized to meet the unique security needs of your IoT infrastructure.</p>
          <h3 className="text-xl font-bold">Transform Your IoT Security</h3>
          <p>Embrace the potential of IoT with confidence, knowing that your devices and data are protected by CyberYoda Solution & Services Pvt Ltd. Our commitment is to deliver not just security services, but peace of mind in a connected world.</p>
        </div>
      </div>
    </div>
  );
};

export default Iotsecurity;
