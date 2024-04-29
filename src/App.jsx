import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Navbar from './containers/Navbar/Navbar';

function App() {

  return (
    <>

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
