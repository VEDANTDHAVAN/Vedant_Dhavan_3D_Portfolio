import React from 'react'

const Projects = () => {
  return (
    <section className="max-container bg">
      <h1 className="head-text">My <span className="blue-gradient_text font-bold drop-shadow">Projects</span> </h1>
      <div className='flex-col p-1 font-bold'><img src="https://img.icons8.com/?size=48&id=23291&format=png" alt="" />Therapy Website
      <div className='project p-4'>
      <div className='card'>
        <img src="https://i.ibb.co/p39615D/Admin-Homepage.png" alt="Therapy Website" />
        <div className='info'>
          <a href="https://github.com/VEDANTDHAVAN/Therapy_Website" className='btn'>Github Link</a>
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Projects