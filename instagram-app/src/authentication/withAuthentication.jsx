import React from 'react';
import PropTypes from 'prop-types';

const withAuthentication = PostsPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { loggedIn: false };
    }
    componentDidMount() {
      const localUser = localStorage.getItem('user');
      const loginState =
        localUser === null ? '' : JSON.parse(localUser)['user'];
      this.setState({ loggedIn: !!loginState });
    }
    render() {
      return this.state.loggedIn ? <PostsPage /> : <LoginPage />;
    }
  };

withAuthentication.PropTypes = {
  LoginPage: PropTypes.element.isRequired,
  PostsPage: PropTypes.element.isRequired
};
export default withAuthentication;
