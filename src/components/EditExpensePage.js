import React, { Component, cloneElement } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';




class EditExpensePage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit={(expense) => {
            this.props.dispatch(editExpense(this.props.expense.id, expense));
            this.props.history.push('/');
          }}
          />
          <button onClick={() => {
            this.props.dispatch(removeExpense({ id: this.props.expense.id }));
            this.props.history.push('/');
        }}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}


export default connect(mapStateToProps)(EditExpensePage);