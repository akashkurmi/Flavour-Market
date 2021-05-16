import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import { Carousel } from 'react-bootstrap'
import "./CarouselEle.css"
class CarouselEle extends Component {
  
    render() {
        return (
            <div>
<Carousel style={{height:"400px"}}>
  <Carousel.Item style={{height: "-webkit-fill-available"}}>
    <img
      className="d-block w-100" 
      src="/images/56494483_162695328065711_4267480339786358474_n.jpg" height="100%"
      alt="First slide"
    />
    <Carousel.Caption >
      <h1 className="caption">Welcome To Flavor Market</h1>
      <p>One Taste that you need to taste.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/69716081_134567607905182_7363344383150198286_n.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/1_96b63944-b272-4fe4-b6c6-cad1165ab88b_grande6683.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </div>          
        )
    }
}

export default CarouselEle