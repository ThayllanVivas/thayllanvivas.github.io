import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Navbar from './components/navbar/Navbar'
import Projects from './pages/projects'
import Container from './components/Container/Container'
import Experience from './pages/experience'


export default function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Experience />} path='/experience' />
          <Route element={<Projects />} path='/projects' />
        </Routes>
      </Container>
    </Router>
  )
}


