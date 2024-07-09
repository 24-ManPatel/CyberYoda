import React, { useState } from 'react';

const services = [
  { name: "IOT Security", icon: '/path/to/iot-security.png', description: 'IoT security focuses on safeguarding connected devices from cyber threats through measures like authentication, encryption, and secure updates. Challenges include the vast number of devices and inconsistent security standards, requiring a multi-layered and vigilant approach.' },
  { name: "Consulting Services", icon: '/path/to/consulting-services.png', description: 'Consulting Services description.' },
  { name: "Risk Management", icon: '/path/to/risk-management.png', description: 'Risk Management description.' },
  { name: "SOC", icon: '/path/to/soc.png', description: 'SOC description.' },
  { name: "PAM", icon: '/path/to/pam.png', description: 'PAM description.' },
  { name: "Red Teaming", icon: '/path/to/red-teaming.png', description: 'Red Teaming description.' },
  { name: "Cloud Security", icon: '/path/to/cloud-security.png', description: 'Cloud Security description.' },
  { name: "Network Security", icon: '/path/to/network-security.png', description: 'Network Security description.' },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <br></br>
        <hr className="w-40 h-0.5 mx-auto my-4 bg-gray-700 border-0 rounded"/>
        <br />
        <p className="text-gray-600">We protect your digital assets.</p>
      </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="relative flex flex-col items-center p-6 bg-blue-200 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden h-48"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index ? (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-300 text-white p-4 rounded-lg">
                  <p className="mb-4 text-center text-sm">{service.description}</p>
                  <button className="bg-white text-blue-500 px-4 py-2 rounded-lg">Explore</button>
                </div>
              ) : (
                <>
                  <img className="w-16 h-16 mb-2" src={service.icon} alt={service.name} />
                  <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
