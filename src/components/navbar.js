import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/signup'> Venue Sign Up</Link>
    </div>
  )

}

export default NavBar;
