import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navibar from './components/Navibar';
import LandingPage from "./pages/LandingPage"
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
