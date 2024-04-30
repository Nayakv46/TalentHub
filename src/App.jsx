import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './containers/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Candidate from './pages/Candidate/Candidate';

function App() {

  return (
    <>

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidate" element={<Candidate />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
