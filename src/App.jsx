import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {

  const hello = "안녕하세요";
  
  const style ={
    fontSize:30
  }

  return (
    <>
      <div style={style}>{hello}</div>
      <div>{hello}</div>
    </>
  )
}

export default App
