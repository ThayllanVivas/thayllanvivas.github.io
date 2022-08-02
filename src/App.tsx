import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Navbar from './components/navbar/Navbar'
import Experience from './pages/experience'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/home' />
        <Route element={<About />} path='/about' />
        <Route element={<Experience />} path='/experience' />
        <Route element={<Projects />} path='/projects' />
      </Routes>
    </Router>
  )
}


