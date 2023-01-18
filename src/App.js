import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project.js'

import Container from './components/layouts/Container.js'
import Navbar from './components/layouts/Navbar.js'
import Footer from './components/layouts/Footer.js'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes> {/* Switch */}
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/newproject' element={<NewProject />}></Route>
          <Route path='/project/:id' element={<Project />}></Route>
        </Routes> {/* Switch */}
      </Container>
      <Footer/>
    </Router >
  )
}

export default App;