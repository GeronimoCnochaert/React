
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Contador/Contador'

function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a TiendaNT"} />
      <Contador inicial={1} stock={10}/>
    </>
  )
}

export default App
