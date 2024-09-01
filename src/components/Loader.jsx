import React from 'react'
import { Html } from '@react-three/drei'
const Loader = () => {
  return (
    <Html>
    <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-25 border-green-400 border-t-green-700 rounded-full animate-spin"></div>
    </div>
    </Html>
  )
}

export default Loader