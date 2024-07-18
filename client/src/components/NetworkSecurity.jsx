import React from 'react';
import { useNavigate } from 'react-router-dom';

const NetworkSecurity = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="network-security-container bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded shadow-lg">
        <button
          onClick={handleBackClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          Back to Home
        </button>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Network Security</h1>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          Forget flimsy filters and pixelated firewalls. We build a robust exoskeleton for your
          network, woven from advanced technologies and vigilant monitoring, leaving no chink for
          threats to exploit.
        </p>
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
          Here's how our network security solutions untangle the web of vulnerabilities:
        </h2>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Threat Hunters on the Prowl:</h3>
          <p className="text-base md:text-lg">
            Our advanced threat detection systems tirelessly scan the depths of your network,
            sniffing out malware, suspicious activity, and even zero-day exploits before they can
            ensnare your data. Think AI-powered anomaly detection, real-time intrusion prevention,
            and in-depth vulnerability assessments, leaving no stone unturned in your digital domain.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Impregnable Walls of Defense:</h3>
          <p className="text-base md:text-lg">
            We build a multi-layered perimeter defense, erecting firewalls and access controls that
            act as impenetrable barriers against unwanted access. Imagine robust endpoint protection,
            network segmentation, and granular user authentication, creating a fortress around your
            core assets.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Constant Vigilance, Unwavering Response:</h3>
          <p className="text-base md:text-lg">
            Our proactive approach ensures we're not just patching holes after the rain. We
            continuously monitor your network, and our rapid incident response teams are always on
            standby, ready to neutralize threats with lightning-fast precision before they cause
            critical damage.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">The Weaver's Wisdom:</h3>
          <p className="text-base md:text-lg">
            We understand your network is unique, just like your business. We tailor our solutions
            to your specific needs, weaving a bespoke security blanket that fits your infrastructure
            and data flow with seamless integration.
          </p>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">The Benefits of Untangling Your Threats with Us:</h2>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Unimpeded Data Flow:</h3>
          <p className="text-base md:text-lg">
            With your network shielded from disruption, your information flows freely and securely,
            fueling productivity and ensuring the smooth operation of your critical processes.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Enhanced Data Protection:</h3>
          <p className="text-base md:text-lg">
            Your sensitive data rests safe from prying eyes and malicious actors, safeguarding your
            brand reputation and compliance with industry regulations.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Reduced Costs and Downtime:</h3>
          <p className="text-base md:text-lg">
            Proactive security measures prevent costly data breaches and network outages, allowing
            you to focus on your core business, not mitigating cyber disasters.
          </p>
        </div>
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-2">Peace of Mind Woven in Every Byte:</h3>
          <p className="text-base md:text-lg">
            Knowing your network is protected by a vigilant web of security solutions allows you to
            operate with confidence and focus on what matters most, driving your business forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkSecurity;
