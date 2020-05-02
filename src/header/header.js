import React, { Component } from 'react'
import { Navbar,  Button, Form, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';


class Header extends Component {
    state = {
        UserName: null,
        PassWord: null
    }
    render() {
        console.log(this.props.cart + "-------------")
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </head>
                <body>
                    <div bg="light" class="header">
                        <div class="row">
                            <div class="col-sm-3 center" >
                                <Navbar.Brand href="#home" className="LinkEle"><img src='./images/LOGO.png' alt="" height="60%" width="60%" ></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            </div>
                            <div class="col-sm-6 center" >

                                <Form inline>
                                    <pre>   </pre>
                                   
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control as="select" id="selectionbar">
                                        <option>SPICE</option>
                                        <option>HARBS</option>
                                        <option>GRAINS</option>
                                        <option>OTHERS</option>
                                    </Form.Control>
                                        <FormControl type="text" id="searchbox" placeholder="Search" style={{ width: "300px" }} />
                                        <Button type="submit"><i class="fa fa-search"></i></Button>
                                    </Form.Group>
                                </Form>
                            </div>
                            <div class="col-sm-3 center">
                                <div class="statusbar">
                                    <Link to="/Checkout">
                                        <img src="images/cart.png" alt="6758011_preview.png" width="40px" height="40px"></img>
                                        <span id="numberofitem">{this.props.cart}</span>
                                    </Link>


                                    {this.props.UserName ?
                                        <span>
                                            {this.props.UserName}
                                            <Button variant="outline-danger" onClick={() => this.props.User(this.state)}>LogOut</Button>
                                        </span>
                                        :
                                        <span>
                                            <Button id="Loginbutton" variant="outline-info" onClick={this.props.Login}>Login</Button>
                                            <Button id="Signupbutton" variant="outline-danger" onClick={this.props.SignUp}>SignUp</Button>
                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        )
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

export default connect(StateHandler, ActionHandler)(Header);