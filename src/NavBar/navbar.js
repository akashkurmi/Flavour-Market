import React, { Component } from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'
class NavigationBar extends Component {
  render() {
    return (

      <html>
        <head>
        </head>
        <body>
          <div>
            <Nav >
              <Nav.Link ><Link className="LinkEle" to="/">Shop</Link></Nav.Link>
              <Nav.Link ><Link className="LinkEle" to="/Recipes">Recipes</Link></Nav.Link>
              <Nav.Link ><Link className="LinkEle" to="/Blog">Blog</Link></Nav.Link>
              <Nav.Link ><Link className="LinkEle" to="/">WholeSale</Link></Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>

        </body>
      </html>)
  }
}
export default NavigationBar;