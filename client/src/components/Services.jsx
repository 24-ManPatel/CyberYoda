import React, { useState } from 'react';
import './Services.css'; // Import the CSS file

const services = [
  { name: "IOT Security", icon: '/7c.png', description: 'IoT security focuses on safeguarding connected devices from cyber threats through measures like authentication, encryption, and secure updates. Challenges include the vast number of devices and inconsistent security standards, requiring a multi-layered and vigilant approach.' },
  { name: "Consulting Services", icon: '/5c.png', description: 'Consulting services provide expert advice and solutions to organizations, enhancing their efficiency, performance, and profitability. They encompass a wide range of specializations including strategy, management, IT, HR, and financial consulting.' },
  { name: "Risk Management", icon: '/2c.png', description: 'Risk management involves identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize, monitor, and control the probability or impact of adverse events. It aims to ensure that an organizations objectives are achieved despite uncertainties.' },
  { name: "SOC", icon: '/9c.png', description: 'A System on Chip (SOC) integrates all necessary electronic circuits and components of a computer or other electronic systems onto a single chip. It typically includes a central processing unit (CPU), memory, input/output ports, and secondary storage, providing a compact, efficient, and high-performance solution for various applications.' },
  { name: "PAM", icon: '/6c.png', description: 'Your critical accounts and data, like priceless jewels, secured within a multi-layered digital fortress. Thats the power of our PAM solutions. We go beyond basic access control, building a robust defense against cyber threats targeting your most privileged users.' },
  { name: "Red Teaming", icon: '/3c.png', description: 'Red Teaming involves a group of experts who simulate potential attacks or challenges to an organization’s security systems, strategies, or operations. Their goal is to identify vulnerabilities, test defenses, and improve overall resilience by thinking like adversaries.' },
  { name: "Cloud Security", icon: '/8c.png', description: 'Cloud security involves the strategies, practices, and technologies used to protect data, applications, and infrastructure associated with cloud computing. It encompasses measures to safeguard against threats like data breaches, cyber-attacks, and unauthorized access, ensuring compliance, privacy, and data integrity in a cloud environment.' },
  { name: "Network Security", icon: '/1c.png', description: 'Network security involves protecting computer networks from unauthorized access, misuse, or theft. It encompasses measures like firewalls, encryption, and intrusion detection systems to safeguard data integrity, confidentiality, and availability.' },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const renderService = (service, index) => (
    <div
      key={service.name}
      className="relative flex flex-col items-center p-6 bg-blue-400 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden h-48 w-full"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {hoveredIndex === index ? (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-500 text-white p-4 rounded-lg">
          <p className="mb-4 text-center text-sm">{service.description}</p>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg">Explore</button>
        </div>
      ) : (
        <>
          <img className="service-icon w-24 h-24 mb-4" src={service.icon} alt={service.name} />
          <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
        </>
      )}
    </div>
  );

  const firstServices = services.slice(0, -2);
  const lastServices = services.slice(-2);

  return (
    <div id="service" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <br />
          <hr className="w-40 h-0.5 mx-auto my-4 bg-gray-700 border-0 rounded"/>
          <br />
          <p className="text-gray-600">We protect your digital assets.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstServices.map((service, index) => renderService(service, index))}
        </div>
        {lastServices.length === 2 && (
          <div className="mt-6 flex justify-center gap-6">
            {lastServices.map((service, index) => (
              <div className="w-full sm:w-1/2 lg:w-1/3" key={service.name}>
                {renderService(service, firstServices.length + index)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
