import './App.css'
import EmailRegister from './components/EmailRegister/EmailRegister'
import { Auth } from './components/auth'

function App() {

  return (
    <>
      <Auth />
      <EmailRegister userType='candidate' />
      <EmailRegister userType='employer' />
    </>
  )
}

export default App
