import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConsultingServices.css'; // Create and import the CSS file

const ConsultingServices = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="consulting-container bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
        <button 
          onClick={handleBackClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          Back to Home
        </button>
        <h1 className="text-3xl font-bold mb-6">Cybersecurity Consulting Services</h1>
        <p className="optional-text font-bold mb-4">
          The digital landscape is no longer a playground; it's a battlefield.
        </p>
        <p className="mb-4">
          Every byte of data and every connected device represents a potential vulnerability, lurking in the shadows like a digital predator. For businesses of all sizes, the consequences of cybercrime are nothing short of devastating. Data breaches, ransomware attacks, and phishing scams can cripple operations, shatter reputations, and inflict crippling financial losses.
        </p>
        <p className="optional-text font-bold mb-4">
          In this treacherous terrain, a robust cybersecurity posture is not a luxury, it's a lifeline.
        </p>
        <p className="mb-6">
          This means building an impenetrable fortress around your critical assets, safeguarding your reputation like a precious jewel, and ensuring business continuity even when the digital skies darken.
        </p>
        <p className="mb-4">
          At CyberYoda Solutions & Services Pvt. Ltd, we're not just cybersecurity consultants; we're your digital architects. Our team of seasoned veterans, armed with industry-recognized expertise and unwavering dedication, will stand shoulder-to-shoulder with you in the face of digital threats. We'll work tirelessly to understand your unique vulnerabilities, craft a tailor-made security strategy aligned with your goals and regulations, and implement best-in-class solutions to neutralize every cyber risk.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Services are your Shield and Sword:</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Cybersecurity Assessments:</strong> Gain laser-sharp clarity on your current security posture through comprehensive vulnerability assessments, penetration testing, and security audits.</li>
          <li><strong>Security Strategy & Architecture:</strong> Forge a customized security strategy, a blueprint for digital resilience, encompassing robust network security, endpoint protection, watertight data safeguards, and a lightning-fast incident response plan.</li>
          <li><strong>Identity & Access Management:</strong> Implement impregnable identity and access controls, ensuring only authorized personnel cross the threshold to your sensitive data and systems.</li>
          <li><strong>Threat Intelligence & Monitoring:</strong> Stay ahead of the curve with constant threat intelligence monitoring and analysis, anticipating and neutralizing emerging threats before they can even think of breaching your defenses.</li>
          <li><strong>Security Awareness & Training:</strong> Empower your employees with the knowledge and skills to become the first line of defense. Our comprehensive security awareness training programs will turn them into digital sentries, vigilant and prepared to repel cyberattacks.</li>
          <li><strong>Incident Response & Recovery:</strong> Be prepared for the worst with a well-oiled incident response plan. We'll be your digital firefighters, ready to extinguish any cyberattack and help you recover seamlessly, with minimal damage.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Why Choose Us? Your Untapped Advantage:</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Experienced & Certified:</strong> Our team is a force to be reckoned with, boasting extensive experience and industry-recognized certifications. We've seen it all in the digital battlefield, and we know how to win.</li>
          <li><strong>Customized Solutions:</strong> We don't believe in one-size-fits-all solutions. Your business is unique, and so are your cybersecurity needs. We'll tailor our services to your specific industry and challenges, ensuring a holistic approach to digital defense.</li>
          <li><strong>Proactive Approach:</strong> We don't wait for the sirens to blare. We identify and neutralize vulnerabilities before they can be exploited, keeping your digital borders secure and your business safe.</li>
          <li><strong>Improved Security Posture:</strong> With our guidance, you'll build a robust and resilient security posture, a digital fortress that can withstand even the most potent cyber assaults.</li>
          <li><strong>Reduced Risk of Cyberattacks:</strong> We'll help you mitigate your cyber risks, turning them from looming threats into mere whispers in the digital wind.</li>
          <li><strong>Peace of Mind:</strong> Knowing your cybersecurity is in capable hands allows you to focus on what matters most: steering your business to success.</li>
        </ul>
        <p className="mb-4">
          Don't let your business become the next statistic in the cybersecurity chronicles. Take the first step towards digital resilience today. Contact us for a free consultation and let us help you build your comprehensive cybersecurity strategy, a shield against the ever-evolving digital threats and a guarantor of your business continuity.
        </p>
        <p>
          Remember, in the digital battlefield, the best defense is a multi-layered one. Let us be your trusted partner in forging an impenetrable digital fortress.
        </p>
      </div>
    </div>
  );
};

export default ConsultingServices;
