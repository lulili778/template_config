import {BrowserRouter,Route, Switch,Link,NavLink} from 'react-router-dom';
import React from 'react';
import ExpenseDashBoardPage from './../components/ExpenseDashBoardPage'
import AddExpensePage from './../components/AddExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import EditExpensePage from './../components/EditExpensePage';
import Header from './../components/Header'


const AppRoute=()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)
export default AppRoute;
