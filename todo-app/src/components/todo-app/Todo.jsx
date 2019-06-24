import React , {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import Welcome from "./Welcome";
import TodoList from "./TodoList";
import ErrorRoute from "./ErrorRoute";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import Logout from './Logout';
import AuthenticatedRoute from "./AuthenticatedRoute";
import AddTodoComponent from "./AddTodoComponent";

class Todo extends Component {
    render() {
        return(
            <div className="todo">
                    <Router>
                    <HeaderComponent/>
                            <Switch>
                                <Route path="/" exact component={Login}/>
                                <Route path="/login" component={Login}/>
                                <AuthenticatedRoute path="/welcome/:name" exact component={Welcome}/>
                                <AuthenticatedRoute path="/todos" exact component={TodoList}/>
                                <AuthenticatedRoute path="/logout" component={Logout}/>
                                <AuthenticatedRoute path="/todos/:id" component={AddTodoComponent}/>
                                <Route component={ErrorRoute} />
                            </Switch>
                            <FooterComponent />
                    </Router>
            </div>
        );
    }
}

export default Todo;