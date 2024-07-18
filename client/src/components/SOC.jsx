import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SOC.css'; // Import your CSS file

const SOC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="soc-container bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
        <button 
          onClick={handleBackClick} 
          className="back-btn bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >Back to Home</button>
        <h1 className="text-3xl font-bold mb-6">SOC Services</h1>

        {/* SOC Services Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">SOC Overview</h2>
          <p className="mb-4">
            In the ever-evolving landscape of cybersecurity, our SOC services, fueled by cutting-edge Security Information and Event Management (SIEM) tools, stand as your organization's shield against potential threats.
          </p>

          {/* SIEM Tools Implementation */}
          <h3 className="text-xl font-bold mb-2">SIEM Tools Implementation:</h3>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Log Management:</strong> Efficiently collect and store logs from various sources, creating a comprehensive repository for forensic analysis.</li>
            <li><strong>Real-time Event Correlation:</strong> Identify patterns and correlations in real-time, ensuring swift detection of potential security incidents.</li>
            <li><strong>Threat Intelligence Integration:</strong> Integrate threat intelligence feeds to enhance detection capabilities, keeping you ahead of the latest threats.</li>
            <li><strong>Compliance Reporting:</strong> Generate detailed reports demonstrating compliance with industry regulations and internal policies, simplifying audits.</li>
          </ul>

          {/* 24/7 Monitoring Services */}
          <h3 className="text-xl font-bold mb-2">24/7 Monitoring Services:</h3>
          <p className="mb-4">
            Our SOC operates around the clock, offering continuous monitoring that goes beyond just surveillance.
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Early Threat Detection:</strong> Proactively detect and respond to potential threats before they can escalate, minimizing their impact.</li>
            <li><strong>Incident Response Readiness:</strong> Ensure a rapid and coordinated response to security incidents through predefined incident response plans.</li>
            <li><strong>Continuous Vulnerability Management:</strong> Monitor your IT environment continuously for vulnerabilities, implementing timely patches and updates.</li>
            <li><strong>Customized Alerting and Reporting:</strong> Tailor alerting mechanisms to your organization's specific needs, keeping you informed with regular reports.</li>
          </ul>
        </section>

        {/* SOC as a Service Concept */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">SOC as a Service Concept</h2>
          <p className="mb-4">
            Our SOC services go beyond mere surveillance; we offer a comprehensive security partnership. Think of it as having a dedicated team safeguarding your digital assets 24/7.
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Proactive Security Measures:</strong> We don’t just react to incidents; we proactively implement measures to prevent them.</li>
            <li><strong>Peace of Mind:</strong> Focus on your core business activities while we ensure the security and integrity of your digital environment.</li>
            <li><strong>Strategic Guidance:</strong> Benefit from our expert insights and recommendations to stay ahead of emerging threats.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SOC;
