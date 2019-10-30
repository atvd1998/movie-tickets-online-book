import React, { Component } from 'react';

const UserContext = React.createContext();

export default class UserProvider extends Component {
  state = {
    isLogin: false,
    user: '',
    name: ''
  };
  signin = () => {
    this.setState({
      isLogin: true
    });
  };

  signout = () => {
    this.setState({
      isLogin: false
    });
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };
  setName = name => {
    this.setState({
      name: name
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          signin: this.signin,
          signout: this.signout,
          setUser: this.setUser,
          setName: this.setName
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserContext, UserConsumer };
