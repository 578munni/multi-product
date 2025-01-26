
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber/Navber'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div>
      
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
