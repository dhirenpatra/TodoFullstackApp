import React , {Component} from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : [
                {id:1, description: "Learn React", finished:false, targetDate: new Date()},
                {id:2, description: "Learn Spring Boot", finished:false, targetDate: new Date()},
                {id:3, description: "Learn Redux", finished:false, targetDate: new Date()},
                {id:4, description: "Learn Spring Webflux", finished:false, targetDate: new Date()},
                {id:5, description: "Learn Spring Cloud", finished:false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return(
            <div className="container table-responsive">
                <h1>Here is your list of Todos...</h1>
                <table className="table table-secondary table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>isCompleted</th>
                            <th>targetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                (todo) => 
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.finished.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;