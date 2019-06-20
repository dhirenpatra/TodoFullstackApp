import React , {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import Welcome from "./Welcome";
import TodoList from "./TodoList";
import ErrorRoute from "./ErrorRoute";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
class Todo extends Component {
    render() {
        return(
            <div>
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/welcome/:name" exact component={Welcome}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/todos" exact component={TodoList}/>
                        <Route component={ErrorRoute} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        );
    }
}

export default Todo;