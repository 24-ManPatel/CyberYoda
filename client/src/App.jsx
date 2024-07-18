import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import ContactUs from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Iotsecurity from './components/Iotsecurity';
import CyberYoda from './components/CyberYodha';
import ConsultingServices from './components/ConsultingServices';
import SOC from './components/SOC';
import RiskManagement from './components/RiskManagement';
import PAM from './components/PAM';
import RedTeaming from './components/RedTeaming';
import CloudSecurity from './components/CloudSecurity';
import NetworkSecurity from './components/NetworkSecurity';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <CyberYoda />
              <Services />
              <Team />
              <Blogs />
              <ContactUs />
              <Footer />
            </>
          } />
          <Route path="/service-detail/iot-security" element={<Iotsecurity />} />
          <Route path="/service-detail/consulting-services" element={<ConsultingServices />} />
          <Route path="/service-detail/risk-management" element={<RiskManagement />} />
          <Route path="/service-detail/soc" element={<SOC />} />
          <Route path="/service-detail/pam" element={<PAM />} />
          <Route path="/service-detail/red-teaming" element={<RedTeaming />} />
          <Route path="/service-detail/cloud-security" element={<CloudSecurity />} />
          <Route path="/service-detail/network-security" element={<NetworkSecurity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
