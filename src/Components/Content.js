import React, { Component } from 'react'
import './Content.scss'
import './Motivations/motivation.css'
import designer from '../images/designer.svg'
// import Card from './Card'
export default class Content extends Component {
    render() {
        return (
                    <div className="hero ">


                        <div className="hero-left">
                            <img src={designer} alt=""/>

                        </div>

                        <div className="hero-right ">
                            <div className="content1">
                            <h1 style={{paddingTop:"20px"}}>React Nairobi</h1>
                            <p>It was established in 2020 back in the days when REactjs was a hot technology in the market</p>
                            <p>It was established in 2020 back in the days when REactjs was a hot technology in the market</p>
                            <button>Join the group</button>
                            </div>
                           
                        </div>
                


            </div>
        )
    }
}
