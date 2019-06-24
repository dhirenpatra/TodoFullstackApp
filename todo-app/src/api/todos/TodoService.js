import axios from 'axios';

class TodoService {

    getTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}` , {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:4200',
            }
        });
    }

    getOneTodoOfUser(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodoOfUser(name, id, content) {

        let requestBody = {
            description : content.description,
            targetDate : content.targetDate,
            isCompleted : false,
            username : name,
            id : id
        }
        console.log(`${content}`);
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`,requestBody,
        {headers: {"Content-Type": "application/json"}});
    }

    createTodoOfUser(name, content) {

        let requestBody = {
            description : content.description,
            targetDate : content.targetDate,
            isCompleted : false,
            username : name
        }
        console.log(`${content}`);
        return axios.post(`http://localhost:8080/users/${name}/todos/`,requestBody,
        {headers: {"Content-Type": "application/json"}});
    }

}

export default new TodoService();