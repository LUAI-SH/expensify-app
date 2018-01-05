import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </div>
    )
  }
}
