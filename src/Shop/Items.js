import React, { Component } from 'react';
import axios from 'axios';
import ItemDiv from './ItemDiv';
import {Row,Pagination} from 'react-bootstrap';
class Items extends Component {
    state={
        posts:[],
        // post:[],
        filterPost:[]
    }
    componentDidMount(){
        // console.log("once")
        fetch('../../db.json').then(response => response.json())
        .then(data => {console.log(data)
            this.setState({
              posts:data.posts
            })
        });
        // console.log();
    //     axios.get("http://localhost:3001/posts").then(res=>{
    //     this.setState({
    //         posts:res.data,
           
    //     })    
    // })  
    }
    
    // componentDidUpdate=()=>{
    //   var fp
    //     if(this.props.match.params.id){
    //      fp= this.state.posts.filter((post)=>{return post.Type===this.props.match.params.id}) 
    //       this.setState({
    //           filterPost:fp
    //       })
    //     }
    // }
    render() {
        // console.log(this.props.match.params.id);
        let post;
        post=this.state.posts.slice(0,18);
        return (
            <div>
                <br></br>
                {/* <h1>shop element :{this.props.match.params.id } </h1> */}
                {/* {this.state.posts.map(p=>{
                    return(
                        <div>
                            <h3>{p.id}</h3>
                            <h3>{p.title}</h3>
                            <h3>{p.mrp}</h3>
                            <img src={'src/Images/'+p.src}></img> 
                        </div>
                    )
                })} */}
                <Row>
                <ItemDiv itemsdetail={this.props.match.params.id ?
                     post.filter((post)=>
                     {return post[this.props.match.params.Sid]===this.props.match.params.id}):
                     post}></ItemDiv>
                </Row>
                <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item active>{1}</Pagination.Item>
  {/* <Pagination.Ellipsis /> */}

  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item >{4}</Pagination.Item>
  {/* <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item> */}
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
            </div>

        )
    }
}

export default Items