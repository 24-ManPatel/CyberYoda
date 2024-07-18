import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PAM.css'; // Import your CSS file

const PAM = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="pam-container bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
        <button 
          onClick={handleBackClick} 
          className="back-btn bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >Back to Home</button>
        <h1 className="text-3xl font-bold mb-6">PAM (Privileged Access Management)</h1>
        
        {/* Headline */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Fortress-Grade PAM: Secure Your Digital Crown Jewels</h2>
          <p className="mb-4">
            Your critical accounts and data, like priceless jewels, secured within a multi-layered digital fortress. That's the power of our PAM solutions. We go beyond basic access control, building a robust defense against cyber threats targeting your most privileged users.
          </p>
        </section>

        {/* Solutions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Solutions</h2>

          <ul className="list-disc ml-8 mb-4">
            <li>
              <h3 className="font-semibold">Impregnable Vault:</h3>
              <p>FIDO2 MFA, granular RBAC, AES-256 encryption secure privileged accounts.</p>
            </li>
            <li>
              <h3 className="font-semibold">Unveil the Invisible:</h3>
              <p>Real-time session monitoring, user activity logs, anomaly detection with SIEM integration.</p>
            </li>
            <li>
              <h3 className="font-semibold">Automated Gatekeeper:</h3>
              <p>Just-in-time provisioning, automated password rotation, session timeouts & termination.</p>
            </li>
            <li>
              <h3 className="font-semibold">Compliance Fortress:</h3>
              <p>Pre-built compliance frameworks for PCI-DSS, HIPAA, SOC 2 & GDPR.</p>
            </li>
            <li>
              <h3 className="font-semibold">The Benefits of Securing Your Kingdom with Us:</h3>
              <ul className="list-disc ml-8">
                <li>Reduced Breaches: Minimize attack surface, eliminate lateral movement risk.</li>
                <li>Operational Efficiency: Streamline access workflows, reduce IT workload.</li>
                <li>Effortless Compliance: Automated audit trails, simplify reporting & certification.</li>
                <li>Elevate Your Security Posture: Contact us today to build your impenetrable PAM solution.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">The Benefits of Our PAM as a Service Throne:</h3>
              <ul className="list-disc ml-8">
                <li>Rapidly Deployable: Be security-ready in a flash, no long implementation cycles or hardware headaches.</li>
                <li>Expert-Managed: Focus on your business, leave PAM operations to our seasoned security professionals.</li>
                <li>Always Vigilant: Enjoy continuous monitoring and proactive threat detection, 24/7/365.</li>
                <li>Scalable and Flexible: Easily adjust your security posture as your needs evolve, without CAPEX burden.</li>
                <li>Predictable Costs: Pay only for what you use, enjoy transparent pricing and eliminate upfront investments.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* PAM Tools Implementation */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">PAM Tools Implementation</h2>
          <ul className="list-disc ml-8">
            <li>
              <h3 className="font-semibold">Seamless Integration:</h3>
              <p>Our team seamlessly integrates PAM solutions with your existing IT infrastructure and security ecosystem, ensuring a unified and effective defense.</p>
            </li>
            <li>
              <h3 className="font-semibold">Tailored Deployments:</h3>
              <p>We customize PAM implementation based on your specific needs and risk profile, ensuring optimal security without disrupting your operations.</p>
            </li>
            <li>
              <h3 className="font-semibold">Expert Guidance:</h3>
              <p>From initial scoping to ongoing optimization, our PAM specialists provide expert guidance and support throughout the entire implementation process.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PAM;
