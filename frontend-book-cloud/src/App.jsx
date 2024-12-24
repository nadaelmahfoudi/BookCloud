// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'; // Import the Navbar component
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
