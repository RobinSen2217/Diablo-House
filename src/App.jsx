import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import SubFooter from './Components/SubFooter'
import Pricing from './Components/Pricing'
// import Testimonials from './Components/Testimonials'
import Emote from './Components/Emote'
import Highlights from './Components/Highlights'
import Schedule from './Components/Schedule'

function App() {
  document.body.style.backgroundColor='rgba(0, 0, 0, 0.9)'
  document.body.style.backgroundImage="url('https://cdn.wallpapersafari.com/1/92/LprfHb.jpg')"
  document.body.style.backgroundPosition='center'
  document.body.style.backgroundRepeat='no-repeat'
  document.body.style.backgroundSize='cover'
  document.body.style.touchAction='pan-y'
  return (
    <>
    <Navbar/>
    <Emote/>
    <Hero/>
    <Highlights/>
<Schedule/>
<Pricing/>
    {/* <Testimonials/> */}
    <SubFooter/>
    <Footer/>
    </> 
  )
}

export default App
