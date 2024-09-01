import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox.jsx';

import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef(null);

  const [form, setform] = useState({ name:'', email:'', message:''})
  const [isloading, setIsLoading] = useState(false);
  const [currentAnimation, setcurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  };
  const handleFocus = () => setcurrentAnimation('walk');
  const handleBlur = () => setcurrentAnimation('idle');
  const handleSubmit = () => {
    e.preventDefault();
    setIsLoading(true);
    setcurrentAnimation('hit');
    
    emailjs.sendForm(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      to_name: "Vedant",
      from_email: form.email,
      to_email: 'vedantartistic@gmail.com',
      message: form.message,
    },[3000],
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //TODO: Show Success message
      //TODO: Hide an alert
      showAlert({ show: true, text: 'Message Sent Successfully!!', type: 'success'})
      setTimeout(() => {
        hideAlert();

        setcurrentAnimation('idle')
        setform({ name:'', email: '', message: ''});
      })
    }).catch((error) => {
      setIsLoading(false);
      setcurrentAnimation('idle')
      console.log(error);
      //TODO: Show Error message
      showAlert({ show: true, text: 'I didnt receive your message', type: 'danger'})
    }

    )
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
     {alert.show && <Alert {...alert} />}
     
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch!</h1>
      
      <form className="w-full flex flex-col gap-6 mt-15" autoComplete="on" onSubmit={handleSubmit}>
        <label className="text-purple-950 font-semibold">
          Name 
          <input type="text" name="name" className="input"
           placeholder="Vedant" required value={form.name}
           onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>
        <label className="text-purple-950 font-semibold">
         E-mail
          <input type="email" name="email" className="input"
           placeholder="vedant@gmail.com" required value={form.email}
           onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>
        <label className="text-purple-950 font-semibold">
         Type your Message or Query. 
          <textarea name="message" rows={4} className="textarea"
           placeholder="Let me know how I can Help You!" required value={form.message}
           onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>
        <button type="submit" className="btn" disabled={isloading}
                onFocus={handleFocus} onBlur={handleBlur}
        >
          {isloading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
       <Canvas camera={{
        position: [0, 0, 6],
        //field of View
        fov:75,
        near: 0.1,
        far: 1000
       }}>
         <directionalLight intensity={3} position={[0, 0, 2]}/>
         <ambientLight intensity={0.5}/>
         <Suspense fallback={<Loader />}>
          <Fox 
            currentAnimation={currentAnimation}
            position={[0.5, 0.4, 0]}
            rotation={[12.5, 0.8, 0]}
            scale={[0.7, 0.7, 0.7]}
          />
         </Suspense>
       </Canvas>
      </div>
    </section>
  )
}

export default Contact