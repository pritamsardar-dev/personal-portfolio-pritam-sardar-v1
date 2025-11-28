import Logo from './components/atoms/logo/Logo.jsx'
import Button from './components/atoms/button/Button.jsx'
import { Github } from './testIcon/Github.jsx'
import { Cross } from './testIcon/Cross.jsx'
import { Heart } from './testIcon/Heart.jsx'
import ThemeToggle from './components/atoms/toggle/ThemeToggle.jsx'




function App() {

  return (
    <div className="inline-flex items-center justify-center gap-10">
    
      {/* <Logo theme="dark" /> */}
      
      <Button label="+917908137571" isDisabled={false} variant="link" iconLeft={<Github/>}  />
      
      <ThemeToggle />
     
     
    </div>
  
  )
}


export default App


