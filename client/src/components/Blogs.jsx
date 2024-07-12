import React, { useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const blogs = [
        {
            image: '/blog1.png',
            title: 'State-Sponsored Cyber Attacks',
            content: 'In a time when digital infrastructure serves as the foundation of contemporary society, the risk of cyberattacks has increased to previously unheard-of proportions. State-sponsored cyberattacks are particularly notable among them because of their potential impact, complexity, and resources. Nation-states coordinate these attacks, which pose serious hazards to public safety, economic stability, and national security because they frequently target government institutions, crucial infrastructure, and important industries.',
            pdfPath: '/b1.pdf'
        },
        {
            image: '/blog2.png',
            title: 'The Cybersecurity Risks of Remote Working: LAW AS A COMPREHENSIVE GUIDE',
            content: 'Telecommuting is now a traditional trend with increased popularity seen especially after the COVID-19 outbreak. While it is a useful tool and provides opportunities for extending process automation and, consequently, increasing productivity, it also poses a number of threats associated with the protection of confidential information and may lead to business risks. These threats and their management are vital issues for organizations, as security measures must always be considered in order to avoid critical losses for business.',
            pdfPath: '/b2.pdf'
        },
        {
            image: '/blog3.png',
            title: 'Increase in cloud services and cloud security threats',
            content: 'Over the recent past, cloud computing has moved from being a relatively new and experimental solution to being a fundamental tool for many users. This transformation is driven by the benefits cloud services offer: There are three key factors, which are considered to be important on the choice, namely scalability, cost and flexibility. Leveraging these benefits, organizations of all sizes are transitory to the cloud the storage of data and operations. However, they are valid especially when the adoption of the cloud increases as the security issues will also increase.',
            pdfPath: '/b3.pdf'
        },
        {
            image: '/blog4.png',
            title: 'Embracing Zero Trust Cyber Security: Where and How Business is Done in the Emergent New World of Work',
            content: 'Today, qualitative and quantity threats in the cyber threats are growing and diversifying, and the previous approach to structural levels of security is inadequate to protect important information, along with critical facilities and structures.  It is seen that the changes such as the shift to the cloud and using cloud technologies and resources, mobility, working from home presume the new approach to protecting computing systems.  Born of such is Zero Trust Cyber Security which is a model that actually goes against the notion of trust; So in essence any request for permission has to justify why they should be allowed at every given time. ',
            pdfPath: '/b4.pdf'
        }
    ];

    const next = () => {
        setCurrentIndex((currentIndex + 1) % blogs.length);
    };

    const previous = () => {
        setCurrentIndex((currentIndex - 1 + blogs.length) % blogs.length);
    };

    const openPDF = (pdfPath) => {
        window.open(pdfPath, '_blank');
    };

    return (
        <div id="blog" className="blogs-container">
            <h2 className="title">Blogs</h2>
            <hr className="w-40 h-0.5 mx-auto my-4 bg-gray-700 border-0 rounded" />
            <p className="subtitle">Explore our blogs for the latest insights and trends in cybersecurity.</p>
            <div className="blog-card">
                <button onClick={previous} className="nav-button left">&#8249;</button>
                <div className="blog-content">
                    <img src={blogs[currentIndex].image} alt="Blog" className="blog-image" />
                    <div className="blog-text">
                        <h3 className="blog-title">{blogs[currentIndex].title}</h3>
                        <p className="blog-description">{blogs[currentIndex].content}</p>
                        <button onClick={() => openPDF(blogs[currentIndex].pdfPath)} className="read-more">Read More!</button>
                    </div>
                </div>
                <button onClick={next} className="nav-button right">&#8250;</button>
            </div>
        </div>
    );
};

export default Blogs;
