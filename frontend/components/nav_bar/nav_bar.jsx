import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
   



    <ul className="nav navbar-nav ml-auto">

    <li className="nav-item">
      <Link className="nav-link numberCircle" to={`/items`}>
        <span className="fas fa-shopping-cart">&nbsp;</span>2
      </Link>
    </li>


      <li className="nav-item">
      <a onClick={logout} className="nav-link">
        <span className="fas fa-user-friends">&nbsp;</span>{currentUser.username}
        </a>
      </li>
      <li className="nav-item" to="/login">
        <a onClick={logout} className="nav-link">
          <span className="fas fa-sign-out-alt"></span>Logout</a>
      </li>
    </ul>


  ) : (

    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/signup" className="nav-link" ><span className="fas fa-user"></span> Sign Up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login"><span className="fas fa-sign-in-alt"></span> Login</Link>
      </li>
    </ul>
  );
  return (      
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <Link className="navbar-brand" to={`/items`}><span className="fas fa-home"></span> Catchy Watchy</Link>
      <button className="navbar-toggler navbar-toggler-right" 
      type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navb" className="navbar-collapse collapse hide">
        {/* <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Page 2</a>
          </li>
        </ul> */}
        { display }
    
      </div>
    </nav>

    
  )
}
