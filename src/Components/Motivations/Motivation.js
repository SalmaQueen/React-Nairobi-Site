import React, { Component } from 'react'
import './motivation.css'
import Card from './Card'
import Footer from '../Footer/Footer'


export default class Motivation extends Component {

    render() {
        return (
            <>
            <div className="motivations" id="motivation">
                <h1 style={{textAlign:"center",color:"white",fontFamily:"  Poppins, sans-serif", fontWeight:"bold", fontSize:"3.5rem"}}>Motivations</h1>
                <div className="edit-image">
                <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAAsCAYAAADM3cU1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARXSURBVHgB7Z3redNIFIbPWPlPOkAVLE4FiAqWDmArYLeC3VSwbAULFZBUgKnATgeTCggF2GJukkaOiS/R3e/7PEaDRvY/Xn/nzElQAjAV8uWl+fMy/C1aJ2n10Dp+xu69ENlc1j9olm598NZ7HrFv/1T0E3sPIuph9/1NdH9m1usf9f0k2l/r+p74PXWlpQeUAAyBfJmGVfjHXUhkHa7qpb/Own5NEqlAm+hwjSS4Cffy+2ovCUJbP9Ted4TcEBI0TyWXtC6WIo3YBFIKpa10AcNDSyW1kORcgrs10lrYBxASHEZVDqVeMrb0SV7uEEwqAEejPor67S+EBEWisYKZ7xBN2CPFQOtcI6RzwAnHysZKxZZOth9TyiYVgGGgEdIUqCec1AtHBQEhHBgPCGks1KQjr3xJ5aQT7gOMnhVCGhq+vMp8L0e9QjpHUc3RSB6t4/tu777+nmRrnqc2m1Ow6171GerqQZqmOq3cxa/6evZLK7q/PXdl1+rF7s9QafRcKp2z+QMh9YE/sUqrtGPXeSGecyVIoxSJ9rfzH9VeUsy4xC//3jaEAJ7aGEfB9pxYKbpolENF671cm+/ffxBS25QN5fU89HYymb54YrnosL6Xx1LR7umepoKhQ2pjI44oya1vii8UhNQUZeqRzB+b55lMr9TSjyWT6CCYcI+0AqeDkE7By2fuX67Pk8m4U0+RaFbyK9GQYqADENI+piEfKxltrqvQk9G1F4kGBgJC2qY85bLNZld2zWUcaJ9wXK9Gh5dPPAgHRsJ5C6lMPxevvXzyYphwqOhKOskqlFQryimYCuclJCeg5K0MO/3E5dWdFEkH6cAZMG0hleXX5vUAez+hiRxJx/dztACcKdMSUpmABiUgEg/AgYxbSF5AmVnZHpAtxVLplyj1uB7PAvEAHM74hJQvs6gJnUl/WPkswqmWuZJ6AJ7L8IVUL8NsCurjFCzu9ywE+QC0wjCF1HsKcvL5RtkF0C3DEZKTUPK7WbyXblNQUXoZAbmTrhWDhAD90J+QyqFE9a7jUkwHAfnyS12tBAAGQbdCqgYT33U4Fa29gGbfKL8Ahk37QqqS0IcwG9S2hGwJdoOAAMZHe0LqridUnIDdmvUNAgIYL80KKV/aH1Q1Etr8Ka1KqDgFMwKiCQ0wGZ4vJF+SvQ9pKJN2CCdhs9v4110CwLQ4XUjtl2TaJK2iDFsIAEye44TUehoq54FuOI4HOD8OE5IT0cWHdnpDTkI2CX2iFAM4b54WkivL3HH9W2kUJAQAj9ktJN8f+rvZsgwJAcDT1IXUvIiMeDb/CT0hADgALyT/q17/b0hEYVI6/8zpGAAcg/Iymi3l2c1qSjIAeB4XJhn9a0RyqoxsSfZZmBUCgAYwCekul+MpekMfSUMA0BQmIbn/1/3AhOTKsmvSEAC0wcz/oOo+rIg2b0TN3yAjAGiLPU1tEhEAdI2VUr764vpJ+d13s/7qZ5IAALrjJ9ZI7Kc1FYk/AAAAAElFTkSuQmCC" alt=""/>
                </div>
                <Card/>
            
                
            </div>
            <Footer/>
            </>
        )
    }
}
