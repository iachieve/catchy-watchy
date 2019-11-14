import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: '123456',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/items'));
  }

  render() {
    return (
      <div className="login-form bg-dark">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Login</h2>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required" 
            value={this.state.username}
            onChange={this.handleInput('username')}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required" 
            value={this.state.password}
            onChange={this.handleInput('password')}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </div>

        </form>
      </div>
    );
  }
}

export default Login;
