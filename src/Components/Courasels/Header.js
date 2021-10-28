import React, { Component } from 'react'
import './header.css'
import {Carousel, Caption,Item} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div className="wrappers">
              <Carousel className="carousel-inner">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={"https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="}      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
    src={"https://media.istockphoto.com/photos/portrait-of-young-latina-marketing-specialist-working-on-laptop-in-picture-id1298861980?b=1&k=20&m=1298861980&s=170667a&w=0&h=n0PtWzYOSDg1XU5S2nNUdM6C8SlFcj0o-Ayc7TsPKPc="}
    alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://media.istockphoto.com/photos/male-programmer-working-on-new-project-picture-id1274948583?b=1&k=20&m=1274948583&s=170667a&w=0&h=TYb8QHIT9JT1hHmIh9oB5ClUuxenJ51b8OlSbHcXvqA="} className="d-block w-100" 
           alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>




{/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={"https://media.istockphoto.com/photos/portrait-of-young-latina-marketing-specialist-working-on-laptop-in-picture-id1298861980?b=1&k=20&m=1298861980&s=170667a&w=0&h=n0PtWzYOSDg1XU5S2nNUdM6C8SlFcj0o-Ayc7TsPKPc="} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"https://media.istockphoto.com/photos/male-programmer-working-on-new-project-picture-id1274948583?b=1&k=20&m=1274948583&s=170667a&w=0&h=TYb8QHIT9JT1hHmIh9oB5ClUuxenJ51b8OlSbHcXvqA="} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"https://images.unsplash.com/photo-1573164713350-b14a82d3c15b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlciUyMG1lZXR1cHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src={"https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXglMjBkZXNpZ25lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src={"https://media.istockphoto.com/photos/close-up-ux-developer-and-ui-designer-use-augmented-reality-app-picture-id1302423375?b=1&k=20&m=1302423375&s=170667a&w=0&h=mUHANZb3OVBVJpNjdX1LgiC0doJIyzegSrQoprVyuy4="} className="d-block w-100" alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
{/* </div> */}
                
            </div>
        )
    }
}
