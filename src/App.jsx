import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './containers/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AuthCandidate from './pages/Auth/Candidate/AuthCandidate';
import { AuthContextProvider } from './context/AuthContext';
import Candidate from './pages/Candidate/Candidate';

function App() {

  return (
    <>

      <AuthContextProvider>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/candidate" element={<Candidate />} />

            <Route path="/auth">
              <Route path="/auth/candidate" element={<AuthCandidate />} />
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  )
}

export default App
