import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'1 
// import MyName from './myname'
import "./MyName.css"
import Header from './Header'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'
import Section_4 from './Section_4'
import Section_5 from './Section_5'
import Section_6 from './Section_6'
import Section_7 from './Section_7'
import Footerr from './Footerr'

function App() {
      return (
        <div className='main'>
        <Header/>
        <Section_1/>
        <Section_2/>
         <Section_3/>
        {/* <Section_4/> */}
        {/* <Section_5/>
        <Section_6/>
        <Section_7/>
        <Footerr/>   */}
        </div>
        )

  }

export default App
