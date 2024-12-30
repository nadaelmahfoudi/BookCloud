// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'; 
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import DashboardPage from './pages/Dashboard';
import CreateBook from './pages/Books/AddBook';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-book" element={<CreateBook />} />
      </Routes>
      <Footer /> {/* Add Footer at the bottom */}
    </Router>
  );
}

export default App;
