import './App.css'

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import OfficialStore from './components/OfficialStore/OfficialStore';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ItemListContainer greeting={'CATÁLOGO'}/>
      <ItemCount initial = {1} stock = {10} onAdd = {(quantity) => console.log('Cantidad agregada', quantity)}/>
      <OfficialStore />
      <Footer />
    </>
  )
}

export default App
