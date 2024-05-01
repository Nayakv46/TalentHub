import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './containers/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AuthCandidate from './pages/Auth/Candidate/AuthCandidate';
import AuthEmployer from './pages/Auth/Employer/AuthEmployer';
import { AuthContextProvider } from './context/AuthContext';
import Candidate from './pages/Candidate/Candidate';
import Employer from './pages/Employer/Employer';

function App() {

  return (
    <>

      <AuthContextProvider>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/candidate" element={<Candidate />} />
            <Route path="/employer" element={<Employer />} />

            <Route path="/auth">
              <Route path="/auth/employer" element={<AuthEmployer />} />
              <Route path="/auth/candidate" element={<AuthCandidate />} />
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  )
}

export default App
