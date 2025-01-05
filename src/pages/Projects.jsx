import React from 'react'

const Projects = () => {
  return (
    <section className="max-container bg-yellow-400">
      <h1 className="head-text">My <span className="blue-gradient_text font-bold drop-shadow">Projects</span> </h1>
      <div className='grid p-10 lg:grid-cols-2 sm:grid-cols-1'>
      <div className='flex-col p-1 font-bold'><img className='h-10' src="https://img.icons8.com/?size=100&id=SwvDja4ryubi&format=png&color=000000" alt="" />
       <div className='text-lg font-poppins'>Secure User Authentication System</div>
      <div className='project p-4'>
      <div className='card'>
        <img src="https://i.ibb.co/SRwBCxj/Screenshot-2025-01-05-154146.png" alt="Secure User Authentication System" />
        <div className='info'>
          <a href="https://github.com/VEDANTDHAVAN/PRODIGY_FS_01" className='btn'>Github Link</a>
        </div>
      </div>
      </div>
      </div>
      <div className='flex-col p-1 font-bold'><img className='h-10' src="https://img.icons8.com/?size=100&id=KlkfbDEjskb5&format=png&color=000000" alt="" />
       <div className='text-lg font-poppins'>Employee Management System(CRUD)</div>
      <div className='project p-4'>
      <div className='card'>
        <img src="https://i.ibb.co/NxNBPD4/Screenshot-2025-01-05-152722.png" alt="Therapy Website" />
        <div className='info'>
          <a href="https://github.com/VEDANTDHAVAN/PRODIGY_FS_02" className='btn'>Github Link</a>
        </div>
      </div>
      </div>
      </div>
      <div className='flex-col p-1 font-bold'><img src="https://img.icons8.com/?size=48&id=23291&format=png" alt="" />
       <div className='text-lg font-poppins'>Therapy Website (FullStack)</div>
      <div className='project p-4'>
      <div className='card'>
        <img src="https://i.ibb.co/p39615D/Admin-Homepage.png" alt="Therapy Website" />
        <div className='info'>
          <a href="https://github.com/VEDANTDHAVAN/Therapy_Website" className='btn'>Github Link</a>
        </div>
      </div>
      </div>
      </div>
      <div className='flex-col p-1 font-bold'>
      <div className='text-lg font-poppins flex gap-2'><img className='h-20' src="https://www.shutterstock.com/image-vector/men-casual-warm-clothes-on-260nw-760277992.jpg" alt="" />Clothing Brand's E-Commerce Website (FullStack)</div>
      <div className='project p-4'>
      <div className='card'>
        <img src="https://i.ibb.co/SrsRnFb/Screenshot-2025-01-05-161445.png" alt="Clothing Brand Website" />
        <div className='info'>
          <a href="https://github.com/VEDANTDHAVAN/PRODIGY_FS_03" className='btn'>Github Link</a>
        </div>
      </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Projects