import Logo from './components/atoms/logo/Logo.jsx'
import Button from './components/atoms/button/Button.jsx'
import ThemeToggle from './components/atoms/toggle/ThemeToggle.jsx'
import {HeartReactIcon, ContactLinkPhoneIcon, ContactLinkEmailIcon, ContactLinkWhatsappIcon, FullscreenIcon, SunIcon, MoonIcon} from './assets/icons/system'
import Text from './components/atoms/text/Text.jsx'
import aboutHeading from './assets/icons-raw/content/about-heading.svg?raw'




function App() {

  return (
    <div className="inline-flex items-center justify-center gap-10">
    
      {/* <Logo theme="light" /> */}
      
      {/* <Button label="+917908137571" isDisabled={false} variant="link" iconLeft={<ContactLinkPhoneIcon/>}  /> */}
      
      <ThemeToggle />

      <Text variant="heading3"  text="Hello world !"
        icon={MoonIcon}/>

     
    </div>
    
  
  )
}


export default App

// textParts={[
//     { text: "Hello ", color: "primary" },
//     { text: "World", color: "heading" },
//     { text: "!", color: "heading" },
//   ]}

