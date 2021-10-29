import React, {useState,useEffect} from 'react'
import { Route, Switch} from 'react-router-dom'
import Layout from './Components/Meetups/src/Components/Layout/Layout/Layout';
import Header from './Components/Courasels/Header'
import Content from './Components/Content';
import Contact from './Components/Contact Us/Contact';
import Footer from './Components/Footer/Footer'
// The Pages components
import AllMeetupsPage from './Components/Meetups/src/pages/AllMeetups';
import FavouritesPage from './Components/Meetups/src/pages/Favourites';
import NewMeetupsPage from './Components/Meetups/src/pages/NewMeetups';
// import Main from './Components/Main'
import Motivation from './Components/Motivations/Motivation';
import MainNavigation from './Components/Meetups/src/Components/Layout/MainNavigation';
import Spinner from './Components/Spinner'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

return(
  <>
  {loading === false ? (
    <>
   
   <MainNavigation/>
      <Switch>
        <Route path="/" exact={true}>
          <Header/>

          </Route>
          <Route path="/About" exact={true} >
          <Content/>
          </Route>
          <Route path="/motivation" >
          <Motivation/>
          </Route>

          <Route path="/contact" >
          <Contact/>
          </Route>
          <Route path='/meetup' >
              <AllMeetupsPage />
            
          </Route>

          <Route path='/new-meetup'>

              <NewMeetupsPage />

          </Route>

          <Route path='/favourites'>

              <FavouritesPage />

          </Route>
      </Switch>
      

    </>
 
    ): (
      <Spinner />
    )}
    
  </>
)
}


export default App;
