import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
const InfoBox = ({ text, link , btnText }) => (
    <div className= "info-box">
     <p className="font-medium sm:text-2xl text-center">{text}</p>
     <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-5 h-5 object-contain"/>
     </Link>
    </div>
)
const renderContent ={
     1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-5 px-10 text-white mx-5">
            HI, I am <span className="font-bold">VEDANT DHAVAN</span> 🧑‍💻👋
            <br />
            A Software Engineer from INDIA </h1>
            
     ),
     2: (
        <InfoBox 
        text="This is my 3D Portfolio to Learn and Implement React.js, Three.js and other Javascript dependencies."
        link="/about"
        btnText="Learn more About Me" 
        />
     ), 
     3: (
        <InfoBox 
        text="Learned various Programming Languages and gained Technical Knowledge"
        link="/Education"
        btnText="Checkout my Education & Certifications" 
        />
     ),
     4: (
        <InfoBox 
        text="Need a project done or looking for a Frontend Dev? I'm just a few clicks away."
        link="/contact"
        btnText="Let's Connect" 
        />
     )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;   
}

export default HomeInfo