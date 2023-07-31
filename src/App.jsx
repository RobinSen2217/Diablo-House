import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import SubFooter from './Components/SubFooter'
import PricingDay from './Components/PricingDay'
import Testimonials from './Components/Testimonials'
import Emote from './Components/Emote'
import PricingEnd from './Components/PricingEnd'
import Highlights from './Components/Highlights'
import Schedule from './Components/Schedule'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  document.body.style.backgroundColor='rgba(0, 0, 0, 0.9)'
  document.body.style.backgroundImage="url('https://cdn.wallpapersafari.com/1/92/LprfHb.jpg')"
  document.body.style.backgroundPosition='center'
  document.body.style.backgroundRepeat='no-repeat'
  document.body.style.backgroundSize='cover'
  return (
    <Router>
    <>
    <Navbar/>
    <Emote/>
    <Hero/>
    <Highlights/>
<Schedule/>
    <Routes>
      <Route exact path='/' element={<PricingDay/>}/>
      <Route exact path='/end' element={<PricingEnd/>}/>
    </Routes>
    <Testimonials/>
    <SubFooter/>
    <Footer/>
    </> 
    </Router>
  )
}

export default App
