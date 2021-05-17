import React, { Component } from 'react';
import { Nav, NavDropdown,Form, FormControl,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'
import { connect } from 'react-redux';
class NavigationBar extends Component {
  state = {
    UserName: null,
    PassWord: null,
    srch:false
  }
  searchBar=()=>{
    this.setState({
      srch:!this.state.srch
    })
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
              <Nav.Link ><Link className="LinkEle" onClick={this.searchBar}>Search</Link></Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            {this.state.srch&&<Form inline>
                                    <pre>       </pre>
                                   
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <FormControl type="text" id="searchbox" placeholder="Search" style={{ width: "300px" }} />
                                        <Button type="submit"><i class="fa fa-search"></i></Button>
                                    </Form.Group>
                                </Form>}
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