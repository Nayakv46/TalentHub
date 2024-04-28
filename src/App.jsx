import './App.css'
import EmailRegister from './components/EmailRegister/EmailRegister'
import GoogleAuth from './components/GoogleAuth/GoogleAuth'
import Logout from './components/Logout/Logout'

function App() {

  return (
    <>
      <EmailRegister userType='candidate' />
      <EmailRegister userType='employer' />
      <GoogleAuth userType='candidate' />
      <GoogleAuth userType='employer' />
      <br/><br/>
      <Logout />
    </>
  )
}

export default App
