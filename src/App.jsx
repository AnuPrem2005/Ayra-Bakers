import React from 'react'
import searchIcon from '../src/assets/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Task from './Task'
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Abt from './Abouttask'
import Fin from './FindUs'
import Spe from './SpecialityCakes'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className='name' href="#/">AYRA BAKERS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* Use #/ paths so HashRouter handles navigation */}
                <Nav.Link href="#/">HOME</Nav.Link>
                <Nav.Link href="#/Abouttask">ABOUT US</Nav.Link>
                <Nav.Link href="#/SpecialityCakes">SPECIALITY CAKES</Nav.Link>
                <Nav.Link href="#/FindUs">OUR PRODUCT</Nav.Link>
                <nav>
                  <button>
                    Search
                    <img className='img' src={searchIcon} alt="search icon" />
                  </button>
                </nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Task />} />
          <Route path='/Abouttask' element={<Abt />} />
          <Route path='/SpecialityCakes' element={<Spe />} />
          <Route path='/FindUs' element={<Fin />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
