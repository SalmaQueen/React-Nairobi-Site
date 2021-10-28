
import React, {useState,useEffect} from 'react'
import Header from './Components/Courasels/Header'
import Content from './Components/Content';
import Spinner from './Components/Spinner'
import Motivation from './Components/Motivations/Motivation';
import Main from './Components/Meetups/src/Main'
import Navbarr from './Components/Navbar/Navbar';
import Contact from './Components/Contact Us/Contact'
export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
    {loading === false ? (
      <>
      {/* <Main/> */}
      <Navbarr/>
       <Header/>
    <Content/>
    <Motivation/>
    <Contact/>
      </>
   
      ): (
        <Spinner />
      )}
      
    </>
  )
}
