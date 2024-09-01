import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Bird = ({ isRotating, ...props }) => {
 
  const { scene, animations } =useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001'].play();
  }
  , []);

  useFrame(({ clock, camera }) => {
    //Update the Y oosition to Simulate bird like motion using a Sine Wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    //Check if the bird reached a certain endpoint relative to camera 
    if(birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if(birdRef.current.position.x , camera.position.x - 10) {
      //Change direction to forward and reset the bird's rotation 
      birdRef.current.rotation.y = 0;
    }

    //Update the X and Z positions based on Direction 
    if( birdRef.current.rotation.y === 0){
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.x -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.x += 0.01;
    }
  }
  )
return (
   <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref = {birdRef} {...props}>
    <primitive object={scene} />
   </mesh>
  )
}

export default Bird