import React from 'react'
import Logo from './components/atoms/logo/Logo.jsx'
import Button from './components/atoms/button/Button.jsx'
import ThemeToggle from './components/atoms/toggle/ThemeToggle.jsx'
import {HeartReactIcon, ContactLinkPhoneIcon, ContactLinkEmailIcon, ContactLinkWhatsappIcon, FullscreenIcon, SunIcon, MoonIcon} from './assets/icons/system'
import Text from './components/atoms/text/Text.jsx'
import aboutHeading from './assets/icons-raw/content/about-heading.svg?raw'
import NavigationItem from './components/atoms/navigationitem/NavigationItem.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";


function App() {

  return (
    <div className="inline-flex items-center justify-center gap-10">
      <ThemeToggle />
    
      {/* <Logo theme="light" /> */}
      
      {/* <Button label="+917908137571" isDisabled={false} variant="link" iconLeft={<ContactLinkPhoneIcon/>}  /> */}
    
      {/* <Text variant="heading3"  text="Hello world !"
        icon={MoonIcon}/> */}

{/*        
        <div className="inline-flex items-center justify-center gap-10">
          <NavigationItem variant="footer" isButtonStyle={true} label="Home"  to="/" />
          <NavigationItem variant="footer" isButtonStyle={true} label="About"  to="/about" />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes> */}
  
     
    </div>
  )
}


export default App

// textParts={[
//     { text: "Hello ", color: "primary" },
//     { text: "World", color: "heading" },
//     { text: "!", color: "heading" },
//   ]}

