import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RiskManagement.css'; // Import your CSS file

const RiskManagement = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="risk-management-container bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
        <button 
          onClick={handleBackClick} 
          className="back-btn bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >Back to Home</button>
        <h1 className="text-3xl font-bold mb-6">Risk Management and Compliance</h1>
        
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Risk Management and Compliance Overview</h2>
          <p className="mb-4">
            In an era where digital landscapes are constantly evolving, ensuring the security of your organization's sensitive information is paramount. Cybersecurity audits and compliance reviews play a crucial role in fortifying your defenses against ever-growing cyber threats.
          </p>
          <p className="mb-4">
            At CyberYoda Solutions & Services Pvt Ltd, we understand the significance of safeguarding your digital assets and maintaining compliance with industry standards. Our comprehensive approach to cybersecurity audits and compliance reviews is designed to empower your business with resilience and confidence.
          </p>
        </section>

        {/* Cybersecurity Audits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cybersecurity Audits</h2>
          <p className="mb-4">
            Our cybersecurity audit services are tailored to assess the effectiveness of your existing security measures, identify vulnerabilities, and recommend strategic enhancements.
          </p>

          {/* List of Services */}
          <ul className="list-disc ml-8 mb-4">
            <li>
              <h3 className="font-semibold">Risk Assessment:</h3>
              <ul className="list-disc ml-8">
                <li>Evaluate potential risks and threats specific to your industry and organization.</li>
                <li>Identify vulnerabilities in your systems and networks.</li>
                <li>Prioritize risks based on their potential impact on your business.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Infrastructure Security Review:</h3>
              <ul className="list-disc ml-8">
                <li>Assess the strength of your network infrastructure, firewalls, and intrusion detection systems.</li>
                <li>Evaluate the effectiveness of access controls and authentication mechanisms.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Data Protection Analysis:</h3>
              <ul className="list-disc ml-8">
                <li>Review the storage, transmission, and handling of sensitive data.</li>
                <li>Ensure compliance with data protection regulations and industry standards.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Incident Response Preparedness:</h3>
              <ul className="list-disc ml-8">
                <li>Evaluate the efficiency of your incident response plan.</li>
                <li>Provide recommendations for improving response times and minimizing potential damage.</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RiskManagement;
