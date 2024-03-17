import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar />
      <Header />
      <Footer />
      </div>
    </>
  )
}

export default App
