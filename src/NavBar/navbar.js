import React, { Component } from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'
import { connect } from 'react-redux';
class NavigationBar extends Component {
  state = {
    UserName: null,
    PassWord: null
  }

  render() {
    console.log(this.props.cart + "-------------")
    return (

      <html>
        <head>
          <title>

          </title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
const StateHandler = (state) => {
  // console.log("SteteHandler"+state.UserName)
  return {
    UserName: state.UserName,
    cart: state.cart
    // Password:state.PassWord
  }
}


const ActionHandler = (action) => {
  return {
    User: (event) => {
      action({ type: event })
    }

  }
}
export default connect(StateHandler, ActionHandler)(NavigationBar);