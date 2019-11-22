import React from 'react';

function typeWriter(elementId, txt) {
  let i = 0;
  if (i < txt.length) {
    document.getElementById(elementId).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push('/'));
  }

  handleDemoLogin(e){
      event.preventDefault();
      const demo = Object.assign({}, {
          username: 'admin',
          password: '123456'
      });
      this.props.login(demo).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="container">
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
          <div className="form-group">
            <button onClick={this.handleDemoLogin} type="button" className="btn btn-warning btn-block">Demo</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
