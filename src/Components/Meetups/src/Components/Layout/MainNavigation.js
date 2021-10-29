import React from "react";
import { Link} from 'react-router-dom'
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return(
        <header className={classes.header}>
           {/* <div className={classes.logo}>React Meetups</div> */}
           <nav>
               <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/motivation'>Motivation</Link></li>
                   <li><Link to='/meetup'>Meetups</Link></li>
                   <li><Link to='/new-meetup'>Add-New</Link></li>
                   <li><Link to='/favourites'>Favourites</Link></li>
                   <li><Link to='/contact'>Contact</Link></li>

               </ul>
           </nav>
        </header>
    );

}

export default MainNavigation;