import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Sky from '../models/Sky'
import Island from '../models/Island'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
const [isRotating, setIsRotating] = useState(false);
const [currentStage, setCurrentStage] = useState(1);
const adjustPlaneForScreenSize = () => {
  let screenScale, screenPosition, rotation = [0.1, 4.7, 0];  ;

  if(window.innerWidth < 768){
    screenScale = [1.5, 1.5, 1.5];
    screenPosition= [0, -1.5, 0];
  }else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }

  return [screenScale, screenPosition, rotation];
}

const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition =  [0, -6.5 , -43];
    let rotation= [0.1, 4.7, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    }else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
 
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
     <div className="absolute top-32 left-0 right-0 z-10 flex items-center justify-center">
      { currentStage && <HomeInfo currentStage={currentStage} />}
     </div>
     <Canvas
     className= {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
     camera ={{ near: 0.1, far: 1000}} >
      <Suspense fallback={<Loader />}> 
       <directionalLight position={[5, 1, 1]} 
         intensity={2}
         //Simulates the light coming from a distant Source like Sun
       />
       
       <ambientLight intensity={0.3}
        //Illuminates all objects in the scene equally without casting Shadows, hence position declaration is not needed.
        />
       
       <hemisphereLight skyColor= "#b1e1ff" groundColor="#000000" 
          intensity={1.5}//it illuminates the Scene with a gradient
        />
       <Sky isRotating={isRotating}/>
       <Bird />
       <Island 
       position={islandPosition}
       scale={islandScale}
       rotation={islandRotation}
       isRotating={isRotating}
       setIsRotating={setIsRotating}
       setCurrentStage={setCurrentStage}
       />
       <Plane 
        isRotating={isRotating}
        scale={planeScale}
        position={planePosition}
        rotation={[0, 30, 0]}
        />
        
      </Suspense>
     </Canvas>
     
     <div className="py-2 flex flex-wrap bg-blue-500">
     <h3 className="subhead-text text-teal-300">use Button on your keypad or cursor to rotate the Island, U will be able to go to other pages. </h3>
     </div>
    </section>
  )
}
export default Home