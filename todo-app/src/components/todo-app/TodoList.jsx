import React , {Component} from 'react';
import TodoService from '../../api/todos/TodoService';
import AuthenticationService from './authentication/AuthenticationService';
import moment from 'moment';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.refreshState = this.refreshState.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.createTodo = this.createTodo.bind(this);
    }

    refreshState() {
        TodoService.getTodos(AuthenticationService.getUserLoggedIn())
        .then(response => {
            this.setState({
                todos : response.data,
                message : ''
            })
        });
    }

    componentDidMount() {
        this.refreshState();
    }

    updateTodo(id) {
        console.log("Clicked");
        this.props.history.push(`/todos/${id}`);
    }

    deleteTodo(id) {
        const username = AuthenticationService.getUserLoggedIn();
        console.log(username + "<===========>" +id)
        TodoService.deleteTodo(username,id)
                    .then(response => {
                        this.setState({
                            message : `Todo with id ${id} of ${username} has been successfully deleted`
                        });
                        this.refreshState();
                    })
    }

    createTodo() {
        this.props.history.push(`/todos/create`);
    }

    render() {
        return(
                <div className="container table-responsive">
                    
                    <h1>Here is your list of Todos...</h1>
                        
                    {this.state.message && <div className="alert alert-success">  {this.state.message} </div>}
                    <table className="table table-secondary table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>isCompleted</th>
                                <th>targetDate</th>
                                <th>delete</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    (todo) => 
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.isCompleted.toString()}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-danger" 
                                                    onClick={() => this.deleteTodo(todo.id)}>DELETE</button></td>
                                            <td><button className="btn btn-warning" 
                                                    onClick={() => this.updateTodo(todo.id)}>UPDATE</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                        
                    </table>
                    <div>
                        <button className="btn btn-block btn-success" 
                        onClick={() => this.createTodo()}>INSERT</button>
                    </div>
                </div>
        );
    }
}

export default TodoList;