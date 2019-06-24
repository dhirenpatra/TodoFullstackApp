import axios from "axios";

class Student {

    handleGetAllStudents() {
        console.log("Getting all students");
        return axios.get('http://localhost:8080/students');
    }

    handleGetOneStudent() {
        console.log("Getting all students");
        return axios.get('http://localhost:8080/students/asde');
    }

}

export default new Student();