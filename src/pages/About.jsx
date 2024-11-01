import React from 'react'
//import { skills } from '../constants';

const About = () => {
  return (
    <section className="max-container bg">
      <h1 className="head-text">HELLO!!, I'm <span className="blue-gradient_text font-bold drop-shadow">VEDANT</span> </h1>
    
    <div className="mt-5 flex flex-col gap-3 text-slate-800">
     <p>
      Software Engineer from INDIA , graduating in B-Tech. 
     <br /> I believe, the only way to learn a New programming language is by writing programs in it.
     <br /> Software Engineering is not just about writing code; it's about solving problems and making lives better.
     <br />Write it. Run it. Fix it. It's not just code; it's a Lesson in persistence.
     <br />
     <br />
     Implementing and excelling my Technical Skills through Hands-on Learning and building Applications.
     </p>
    </div>

    <div className="py-12 flex flex-col">
     <h3 className="subhead-text">My Skills</h3>
     <div className='wrapper'>
      <div className='card'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.QQUTcBAmVvxoiZ0CRJy5rwAAAA&pid=Api&P=0&h=180" alt="Html" />
        <div className='info'>
          <a href="https://devdocs.io/html/" className='btn'>Read more</a>
        </div>
      </div>
     
      <div className='card'>
        <img src="https://tse4.mm.bing.net/th?id=OIP.18qAw13CJ-5oGcb4LWLvUwAAAA&pid=Api&P=0&h=180" alt="CSS" />
        <div className='info'>
          <a href="https://devdocs.io/css/" className='btn'>Read more</a>
        </div>
      </div>
     
      <div className='card'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.ZZaV8f0-sI1l6dcdApuE6gHaEK&pid=Api&P=0&h=180" alt="Javascript" />
        <div className='info'>
          <a href="https://devdocs.io/javascript/" className='btn'>Read more</a>
        </div>
      </div>
    
      <div className='card'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.ZFa7EkHKD0_doQ1E9jZUCgAAAA&pid=Api&P=0&h=180" alt="MongoDB" />
        <div className='info'>
          <a href="https://www.mongodb.com/" className='btn'>Read more</a>
        </div>
      </div>
     
      <div className='card'>
        <img src="https://tse2.mm.bing.net/th?id=OIP._yfjgiojxtfaezQcjuGtcwAAAA&pid=Api&P=0&h=180" alt="Express & NodeJs" />
        <div className='info'>
          <a href="https://expressjs.com/" className='btn'>Read more</a>
        </div>
      </div>
    
      <div className='card'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.TIx31Rjgp7e4G_HwSxTxkAAAAA&pid=Api&P=0&h=180" alt="React" />
        <div className='info'>
          <a href="https://react.dev/" className='btn'>Read more</a>
        </div>
      </div>

      <div className='card'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.bAlUwmmvWIIvSxL5yyNmiwHaE7&pid=Api&P=0&h=180" alt="ThreeJs" />
        <div className='info'>
          <a href="https://threejs.org/" className='btn'>Read more</a>
        </div>
      </div>

      <div className='card'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.AHrU3Ll7PbRUiOnttDLGTQHaDt&pid=Api&P=0&h=180" alt="Figma" />
        <div className='info'>
          <a href="https://www.figma.com/" className='btn'>Read more</a>
        </div>
      </div>

      <div className='card'>
        <img src="https://tse4.mm.bing.net/th?id=OIP.OqQOERFICQZpoe8D8WvPpgHaFT&pid=Api&P=0&h=180" alt="Blender" />
        <div className='info'>
          <a href="https://www.blender.org/" className='btn'>Read more</a>
        </div>
      </div>

      </div>
    </div>
    <div className="py-16">
      <h3 className="subhead-text">My Work Experience</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-800">
        <p>
          
        </p>
      </div>
    </div>
    
    </section>
  )
}

export default About