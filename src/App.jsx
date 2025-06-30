import React from 'react'
import Header from './Componentes/Header'
import Hero from './Componentes/Hero'
import Packages from './Componentes/Packages'
import Companies from './Componentes/companies'
import Success from './Componentes/Success'
import ThreeStep from './Componentes/ThreeStep'
import Prices from './Componentes/Prices'
import Reivew from './Componentes/Reivew'
import Faq from "./Componentes/Faq"
import PhotoSection from './Componentes/PhotoSection'
import Footer from './Componentes/Footer'
import Company from "./Company"
import { Route, Routes } from 'react-router-dom'

const Home = () => (
  <>
    <Header />
    <Hero />
    <Packages />
    <Companies />
    <Success />
    <ThreeStep />
    <Prices />
    <Reivew />
    <Faq />
    <PhotoSection />
    <Footer />
  </>
)

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
    </Routes>
  )
}

export default App;


