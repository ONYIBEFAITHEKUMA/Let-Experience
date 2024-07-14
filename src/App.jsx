
import './App.css'
import FeactureSection from './components/FeactureSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SponsorSection from './components/SponsorSection'

import Testimonial from './components/Testimonial'

function App() {
 

  return (
    <>
  <Navbar />
  {/* <div '> */}

    <HeroSection />
    
    <FeactureSection className='max-w-7xl mx-auto pt-20 px-6' />
   
    <Testimonial />
    <SponsorSection />
    <FooterSection />
   
  {/* </div> */}
    </>
  )
}

export default App
