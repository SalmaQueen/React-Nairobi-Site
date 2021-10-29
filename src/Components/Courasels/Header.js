import React, { Component } from 'react'
import './header.css'
import {Carousel, Caption,Item} from 'react-bootstrap'
import Footer from '../Footer/Footer'

export default class Header extends Component {
    render() {
        return (
          <>
            <div className="wrappers" style={{marginBottom:"10rem"}}>
              <Carousel className="carousel-inner">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={"https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="}      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
    src={"https://media.istockphoto.com/photos/portrait-of-young-latina-marketing-specialist-working-on-laptop-in-picture-id1298861980?b=1&k=20&m=1298861980&s=170667a&w=0&h=n0PtWzYOSDg1XU5S2nNUdM6C8SlFcj0o-Ayc7TsPKPc="}
    alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://media.istockphoto.com/photos/male-programmer-working-on-new-project-picture-id1274948583?b=1&k=20&m=1274948583&s=170667a&w=0&h=TYb8QHIT9JT1hHmIh9oB5ClUuxenJ51b8OlSbHcXvqA="} className="d-block w-100" 
           alt="Third slide"
    />
  
  </Carousel.Item>

  
</Carousel> 
            </div>
            <Footer/>         

          
            </>
        )
    }
}
