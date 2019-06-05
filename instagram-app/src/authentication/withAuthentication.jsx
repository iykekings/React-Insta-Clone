import React from 'react';

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

export default withAuthentication;

