// RedTeaming.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedTeaming = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="red-teaming-container bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded shadow-lg">
        <button
          onClick={handleBackClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          Back to Home
        </button>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Red Teaming</h1>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          In the digital phoenix's nest, fire isn't a threat, it's a rebirth. That's the philosophy
          behind At CyberYoda Solutions & Services Pvt. Ltd's red teaming – we don't just expose
          your vulnerabilities, we help you rise from their ashes, stronger and more secure than
          ever before.
        </p>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Forget tired penetration tests. Our red team exercises are a phoenix dive into the heart
          of your defenses, mimicking the relentless cunning and adaptability of real-world
          adversaries.
        </p>
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Here's why the Red Phoenix reigns supreme:</h2>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Unleash the AI Infernos:</h3>
          <p className="text-base md:text-lg">
            Our red teamers are augmented by blazing-fast AI algorithms, predicting your
            adversaries' next move and uncovering hidden vulnerabilities through vast data
            analysis. Imagine AI-powered social engineering bots subtly manipulating your
            employees, or malware mutating to bypass even the most advanced security controls.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Tailored for Your Ashes:</h3>
          <p className="text-base md:text-lg">
            We don't believe in one-size-fits-all attacks. We build bespoke campaigns,
            meticulously crafted to exploit your unique industry, technology stack, and even
            employee psychology. Think zero-day exploits specific to your software, or
            sophisticated phishing scams targeting your organizational structure.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Actionable Insights for Transformation:</h3>
          <p className="text-base md:text-lg">
            We don't just leave you with charred remains. We provide actionable recommendations,
            prioritized based on exploitability and potential impact, guiding you to patch critical
            weaknesses and rebuild your defenses with newfound resilience.
          </p>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">The Benefits of the Red Phoenix Take Flight:</h2>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Uncover Hidden Vulnerabilities:</h3>
          <p className="text-base md:text-lg">
            Our relentless assault exposes dormant threats your existing defenses might miss,
            giving you a clear picture of your true security posture before real flames engulf you.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Forge Impregnable Defenses:</h3>
          <p className="text-base md:text-lg">
            We put your security controls through the ultimate baptism by fire, revealing weaknesses
            in incident response, access controls, and threat detection, empowering you to build
            firewalls impervious to future attacks.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Ignite a Culture of Security:</h3>
          <p className="text-base md:text-lg">
            Beyond technical assessments, our red teaming exercises spark awareness among your
            employees, igniting a culture of vigilance and proactiveness against cyber threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedTeaming;
