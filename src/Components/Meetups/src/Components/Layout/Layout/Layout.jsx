import React from "react";
// import classes from '../Layout/Layout.module.css';
import MainNavigation from '../MainNavigation';
// import Footer from "../../../../../Footer/Footer";

function Layout(props){
    return(
        <div>
            <MainNavigation />
          {/* <div  className={classes.main}>  {props.children} </div> */}
         

        </div>
    );
}

export default Layout;