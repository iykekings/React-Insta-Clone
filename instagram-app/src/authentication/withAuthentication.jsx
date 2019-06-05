import React, { Component } from 'react';

const withAuthentication = App =>
  class extends Component {
    render() {
      return <App />;
    }
  };
export default withAuthentication;
