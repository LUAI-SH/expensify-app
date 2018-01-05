import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NotFound404 extends Component {
  render() {
    return (
      <div>
        404! 
        <Link to="/">Go home</Link>
      </div>
    )
  }
}
