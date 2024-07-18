import React from 'react';
import { useNavigate } from 'react-router-dom';

const CloudSecurity = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="cloud-security-container bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded shadow-lg">
        <button
          onClick={handleBackClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          Back to Home
        </button>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Cloud Security</h1>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          The cloud is no longer a distant horizon, it's your new home. But just like scaling Mount
          Everest needs the right gear, soaring in the cloud demands unparalleled security. At
          CyberYoda Solutions & Services, we're not just Sherpas – we're cloud security paragons,
          helping you navigate the digital peaks with confidence and resilience.
        </p>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Forget flimsy cloud blankets. We weave an impenetrable sky-vault, safeguarding your data,
          applications, and infrastructure with industry-leading expertise and cutting-edge
          solutions.
        </p>
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
          Here's why our cloud security solutions keep you soaring high:
        </h2>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Threat Radar for the Digital Skies:</h3>
          <p className="text-base md:text-lg">
            Our constant vigilance scans the ever-evolving threat landscape, pinpointing potential
            dangers before they cast a shadow over your cloud. Think advanced malware detection,
            real-time threat intelligence, and proactive vulnerability assessments, ensuring your
            cloud fortress stays vigilant against even the most elusive storms.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Fortress in the Clouds:</h3>
          <p className="text-base md:text-lg">
            We go beyond basic cloud controls, erecting a multilayered defense system. Imagine
            robust data encryption, granular access controls, and comprehensive security policies,
            building an impregnable citadel around your sensitive information and critical systems.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Compliance is Your Compass:</h3>
          <p className="text-base md:text-lg">
            The regulatory landscape can be tricky terrain. We guide you through it with cloud
            security solutions that align with strict industry regulations like GDPR and HIPAA,
            acting as your compass towards compliance and avoiding costly pitfalls.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Resilience for Every Gust:</h3>
          <p className="text-base md:text-lg">
            Your cloud journey won't always be smooth sailing. We provide continuous monitoring
            and automated incident response, ensuring your cloud infrastructure weathers any digital
            storms, from data breaches to ransomware attacks.
          </p>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">The Benefits of Your Sky-High Security Solutions:</h2>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Untarnished Reputation:</h3>
          <p className="text-base md:text-lg">
            With your data and systems safeguarded, you can soar with confidence, knowing your brand
            and reputation are protected from the harsh winds of cyberattacks.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Operational Agility:</h3>
          <p className="text-base md:text-lg">
            Unburdened by security concerns, your teams can focus on innovation and growth, reaching
            new heights of operational efficiency and agility in the cloud.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Reduced Costs:</h3>
          <p className="text-base md:text-lg">
            Proactive security measures prevent costly data breaches and compliance fines, allowing
            you to invest your resources in scaling your cloud journey, not mitigating cyber disasters.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Unending Peace of Mind:</h3>
          <p className="text-base md:text-lg">
            With our paragons guiding you, you can navigate the cloud with unparalleled confidence,
            knowing your digital journey is protected by an ever-watchful eye.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurity;
