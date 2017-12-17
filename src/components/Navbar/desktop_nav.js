import React from 'react';

import './navbar.scss';

import {Link} from 'react-router';

class Navbar extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container nav_abs">
        <div className="container navbar ">

          <div className="flex flex_center max-1200">

            <Link  to="/" className="logo_width">
              <img src="https://ul-a.akamaihd.net/media/ul/logo/new-logo.gif" alt=""/>
            </Link>

            <div className="navLinks">

              <Link className="navLinks_active" to="/" >Questionnaire</Link>
              <Link to="account" >My Account</Link>
              <Link to="track_order" >Track Order</Link>
              <Link to="pricing" >Pricing</Link>
              <Link to="contact" >Contact us</Link>
              <Link to="about_us" >About us</Link>

            </div>

          </div>


        </div>

      </div>


    );
  }

}



export default Navbar;


