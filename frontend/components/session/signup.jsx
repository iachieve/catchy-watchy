import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }

  render() {      
    let {errors} = this.props ;
    if(errors && errors.length > 0){
      errors.map(error=>(window.showAlert(error, 'alert-danger')))
    }
    return (   
      <div className="container">
      <div className="login-form bg-dark">
      <form onSubmit={this.handleSubmit}>
            <h2 className="text-center">Sign up</h2>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" required="required" onChange={this.handleInput('username')}/>
            </div>
            <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required" onChange={this.handleInput('password')}/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </div>
                  
      </form>
    </div>
    </div>

    );
  }
}

export default Signup;
