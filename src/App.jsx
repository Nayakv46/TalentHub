import './App.css'
import EmailRegister from './components/EmailRegister/EmailRegister'
import GoogleAuth from './components/GoogleAuth/GoogleAuth'

function App() {

  return (
    <>
      <EmailRegister userType='candidate' />
      <EmailRegister userType='employer' />
      <GoogleAuth userType='candidate' />
      <GoogleAuth userType='employer' />
    </>
  )
}

export default App
