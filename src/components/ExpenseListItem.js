import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ExpenseListItem extends Component {
    constructor(props){
        super(props)
    }
    

  render() {
    return (
      <div>
        <Link to={`/edit/${this.props.expense.id}`}>
          <h2>{this.props.expense.description}</h2>
        </Link>
        <p>{this.props.expense.amount}</p>
        <p>{this.props.expense.createdAt}</p>
        
      </div>
    )
  }
}

