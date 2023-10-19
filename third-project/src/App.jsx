import MobileMenu from "./MobileMenu"
import NavBar from "./Nav"
import { Routes,Route } from "react-router-dom"
import Services from "./pages/Services"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"


function App() {

  return (
    <>
        <div className="w-full h-screen bg-slate  mx-auto dark:text-white">
          <div className="sm:w-full sm:h-12"><NavBar/></div>
          <div className="p-5"><MobileMenu/></div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Routes>



        </div>
    </>
  )
}

export default App
