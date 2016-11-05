import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Iceberg</a>
          </Navbar.Brand>
        </Navbar.Header>   
      </Navbar>
    );
  }
}

export default Nav;