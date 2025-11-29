import Logo from './components/atoms/logo/Logo.jsx'
import Button from './components/atoms/button/Button.jsx'
import ThemeToggle from './components/atoms/toggle/ThemeToggle.jsx'
import {HeartReactIcon, ContactLinkPhoneIcon, ContactLinkEmailIcon, ContactLinkWhatsappIcon} from './assets/icons/system'




function App() {

  return (
    <div className="inline-flex items-center justify-center gap-10">
    
      {/* <Logo theme="light" /> */}
      
      <Button label="+917908137571" isDisabled={false} variant="link" iconLeft={<ContactLinkPhoneIcon/>}  />
      
      <ThemeToggle />

     
     
    </div>
  
  )
}


export default App


