import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ---- * Components * ---- 
import Header from './Header';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';
import NotFound404 from './NotFound404';


export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
           <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true} />
                    <Route path="/add" component={AddExpensePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFound404} />
                </Switch>
           </div>
        </BrowserRouter>
      </div>
    )
  }
}
