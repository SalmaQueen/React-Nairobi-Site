import React, { Component } from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            
<footer className="page-footer font-small cyan darken-3 bg-display ">

  <div className="container">

    <div className="row">

      <div className="col-md-12 py-5 ">
        <div className="mb-0 flex-center">

        <ul className="social-icon pt-5">
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/SalmaMohamedKenyan">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://twitter.com/SalmaKe_mohamed">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/salma-mohamed-kenyan/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/salma_mohamed_ke/">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>

    <ul className="menu">
      <li className="menu__item"><Link className="menu__link" href="/">Home</Link></li>
      <li className="menu__item"><Link className="menu__link" href="#about">About</Link></li>
      <li className="menu__item"><Link className="menu__link" href="#motivation">Motivation</Link></li>
      <li className="menu__item"><Link className="menu__link" href="/meetup">Meetup</Link></li>
      <li className="menu__item"><Link className="menu__link" href="#contact">Contact</Link></li>

    </ul>
       
        </div>
      </div>

    </div>

  </div>


</footer>
               
                
               
        )
    }
}


//  {/* <div className="contact" id="contact">
//                 <ul className="social-icon">
//                     <li><a href="https://www.facebook.com/profile.php?id=100007706285441 "><i className="fa fa-facebook"></i></a></li>
//                     <li><a href="https://twitter.com/salma12221348 "><i className="fa fa-twitter"></i></a></li>
//                     <li><a href="https://github.com/SalmaQueen"><i className="fa fa-github"></i></a></li>
//                     <li><a href="https://www.linkedin.com/in/salma-mohamed-4b991115a/"><i className="fa fa-linkedin"></i></a></li>
//                 </ul>
//                 <p>&copy;Salma-Mohamed@2021</p>
//              </div> */}