import { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as genId } from 'uuid';
import authOperations from '../../redux/auth/auth-operations';

class LoginPage extends Component {
  state = { email: '', password: '' };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const currentState = this.state;
    const updateState = { [name]: value };
    this.setState({ ...currentState, ...updateState });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.reset();
  };
  render() {
    const emailInputId = genId();
    const passwordInputId = genId();
    return (
      <>
        <h2>Login page</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={emailInputId}>
            Email
            <input
              type="emal"
              name="email"
              id={emailInputId}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor={passwordInputId}>
            Password
            <input
              type="password"
              name="password"
              id={passwordInputId}
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
