import React, { Component } from 'react';
import axios from 'axios';
import SideNavBar from '../UI_element/SideNavBar/SideNavBar';
class SideNav extends Component{
  state={
    Types:[]
  }

  componentDidMount(){
    // fetch('../../db.json').then(response => response.json())
    //     .then(data => {console.log(data)
    //         this.setState({
    //           posts:data.posts
    //         })
    //     });
    // axios.get("http://localhost:3001/posts").
    fetch('../../db.json').then(response => response.json()).then(res=>{
      console.log(res);
    this.setState({
      Types:[...new Set(res.posts.map(x=>x[this.props.Ele]))]
    })    
  });
  }


  render(){
return (
    <div>
      <p center>{this.props.Ele}</p>
      <SideNavBar Types={this.state.Types} Sid={this.props.Ele}></SideNavBar>     
    </div>
  );
}
}

export default SideNav;