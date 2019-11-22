import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NaveBar extends React.Component{
  constructor(props){
    super(props)
    this.logUserOut = this.logUserOut.bind(this);
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.goHomePage = this.goHomePage.bind(this);
    this.state = { searchQuery: '' }
  }

  componentDidMount(){
    if(this.props.currentUser){
      this.props.fetchCartItems();
      this.props.fetchFavorites();
    }
  }

  logUserOut() {
    this.props.logout().then(this.goHomePage());
  }

  updateSearchQuery(e){
    this.setState({searchQuery: e.currentTarget.value});
  }
  
  goHomePage(){
    // should i use then here ???
    this.props.history.push(`/`);
    this.props.fetchItems();
  }
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      let val = $('.search_input').val();     
      this.props.history.push(`/?searchQuery=${val}`);
      this.props.fetchItems(val);
    }
  }

  render(){
    // debugger
    const display = this.props.currentUser ? (
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item searchbar">
          <input className="search_input" type="text" name="" placeholder="Search by keyword, color, brand ..."
          onKeyDown={this.handleKeyDown} onChange={this.updateSearchQuery}/>
          <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </li>

        <li className="nav-item">
          <Link className="nav-link numberCircle" to={`/favorites`}>
            <span className="fas fa-heart">&nbsp;</span>{this.props.favoritesCount}
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link numberCircle" to={`/cartItems`}>
            <span className="fas fa-shopping-cart">&nbsp;</span>{this.props.cartCount}
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link numberCircle" to={`/createItem`}>
            <span className="fab fa-sellcast">&nbsp;sell item</span>
          </Link>
        </li>

        <li className="nav-item">
          <label className="nav-link">
           <span className="fas fa-user-friends">&nbsp;</span>{this.props.currentUser.username}
          </label>
        </li>


        {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="fas fa-user-friends">&nbsp;</span>{this.props.currentUser.username}
        </a>
        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
        <Link className="nav-link numberCircle" to={`/createItem`}>
            <span className="fab fa-sellcast">&nbsp;sell item</span>
          </Link>
          <div className="dropdown-divider"></div>
          <Link className="nav-link numberCircle" to={`/cartItems`}>
            <span className="fas fa-shopping-cart">&nbsp;{this.props.cartCount}</span>
          </Link>
        </div>
      </li> */}






        <li className="nav-item" to="/">
          <a onClick={this.logUserOut} className="nav-link">
            <span className="fas fa-sign-out-alt"></span>Logout
          </a>
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
        <a onClick={this.goHomePage} className="navbar-brand cursor-pointer"><span className="fas fa-home">
          </span> Catchy Watchy</a>
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
}

// export default ({ currentUser, logout, fetchCartItems }) => {


// }

export default NaveBar;