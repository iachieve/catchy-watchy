import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/items'));
  }

  render() {
    return (   
   

      <div className="login-form bg-dark">
      <form>
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


    );
  }
}

export default Signup;
