import './App.css';
import Home from './pages/Home';
import Ingredients from './pages/Ingredients';
import Ingredient from './pages/Ingredient';
import Recepie from './pages/Recepie';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';

function App() {
  return (
    <div >
      <BrowserRouter >
        <Navbar className="justify-content-center navbar-custom ">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/" >Recepies</Nav.Link>
            <Nav.Link as={Link} to="/Ingredients">Ingredients</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle as={Nav.Link}>Add</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/Add-Ingredient">Ingredient</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Add-Recepie" >Recepie</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>
        {/* Routes */}
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/Ingredients" element={< Ingredients />} />
          <Route path="/Add-Ingredient" element={< Ingredient />} />
          <Route path="/Add-Recepie" element={< Recepie />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
