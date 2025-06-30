import React from 'react'
import Hero_company from './Componentes/Hero_company'
import Header from './Componentes/Header'
import Companies from "./Componentes/Companies"
import Success from "./Componentes/Success"
import ThreeStep from "./Componentes/ThreeStep"
import Faq from "./Componentes/Faq"
import GroupMe from "./Componentes/PhotoSection"
import Footer from "./Componentes/Footer"
const Company = () => {
  return (
    <div>
        <Header />
      <Hero_company />
      <Companies />
      <Success />
      <ThreeStep />
      <Faq />
      <GroupMe />
      <Footer />
    </div>
  )
}

export default Company
