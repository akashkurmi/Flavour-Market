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
                                <Navbar.Brand href="#home" className="LinkEle">Flavor=Market</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            </div>
                            <div class="col-sm-6 center" >

                                
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
                                            <Button variant="outline-info" onClick={this.props.Login}>Login</Button>
                                            <Button variant="outline-danger" onClick={this.props.SignUp}>SignUp</Button>
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