import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'

import Container from './components/layouts/Container.js'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes> {/* Switch */}
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/newproject' element={<NewProject />}></Route>
        </Routes> {/* Switch */}
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App;