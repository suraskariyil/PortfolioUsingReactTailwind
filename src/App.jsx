import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import './App.css'
import { useState } from 'react'

function App() {
  const [isLoaded ,setIsLoaded]= useState(false)

  return (
    <>
   {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>} 
 </>
  )
}

export default App
