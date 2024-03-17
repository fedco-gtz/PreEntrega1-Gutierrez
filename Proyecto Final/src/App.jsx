import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalogue from './components/ItemListContainer/ItemListContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar />
      <Header />
      <Catalogue greeting={'¡Bienvenido a nuestra tienda!'}/>
      <Footer />
      </div>
    </>
  )
}

export default App
