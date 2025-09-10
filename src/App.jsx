import React from 'react'
import searchIcon from '../src/assets/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Task from './Task'
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'
import Abt from './Abouttask'
import Fin from './FindUs'
import Spe from './SpecialityCakes'

const App = () => {
  return (
    <div>
      {/* <First></First> */}
      {/* {<Second></Second>} */}
      {/* <Boot></Boot> */}
      {/* <Car></Car> */}
      {/* <Acc></Acc> */}
      {/* <Task></Task> */}
      {/* <Usestate></Usestate> */}
      {/* <Useeffect></Useeffect> */}
      {/* <Pros Name={"Apple"}></Pros> */}
      {/* <Slice></Slice> */}
      {/* <Splice></Splice> */}
      {/* <Email></Email> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}

      <div>
        {/* <Router>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/About' element={<About/>}></Route>
            <Route exact path='/Contact' element={<Contact/>}></Route>
          </Routes>
        </Router> */}
        </div>
        <div>
        <Router>
          <Navbar expand="lg" className="bg-body-tertiary">
        <Container>


          <Navbar.Brand className='name' href="#home">AYRA BAKERS</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/Abouttask">ABOUT US</Nav.Link>
              <Nav.Link href="/SpecialityCakes">SPECIALITY CAKES</Nav.Link>
              <Nav.Link href="/FindUs">OUR PRODUCT</Nav.Link>
              <nav>
                <button>Search
                  <img className='img' src={searchIcon} alt="search icon" />
                </button>
              </nav>
            </Nav>
          </Navbar.Collapse>
  
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/' element={<Task/>}></Route>
        <Route exact path='/Abouttask' element={<Abt/>}></Route>
        <Route exact path='/SpecialityCakes' element={<Spe/>}></Route>
        <Route exact path='/FindUs' element={<Fin/>}></Route>
      </Routes>
      {/* <Footer/> */}
        </Router>
      </div>
    </div>
  )
}

export default App
