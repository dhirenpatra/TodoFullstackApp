import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import google from '../images/google.jpg';
import iphone from '../images/iphone1.jpg';
import oneplus from '../images/oneplus.jpg';
import StudentApi from "../../api/student/StudentApi";

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students : [],
            student : {},
            errorMessage : ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    render() {
        let styles = {
            width: '100%',
            height: '450px'
          };

        return(
            <div className="container-fluid">
                <div className="jumbotron">
                    <h1> WELCOME </h1>
                    <div>
                        {this.props.match.params.name}. You can manage your <Link to="/todos"> todos here </Link>.
                        <button onClick={this.handleClick}> StudentApi </button>
                            <ul>
                            {this.state.students.map((student) => {
                                return <li key={student.id}> student.age | student.name </li>
                            })}
                            {this.state.errorMessage}
                            </ul>
                    </div>
                </div>
                <div className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" ></li>
                        <li data-target="#demo" data-slide-to="1" ></li>
                        <li data-target="#demo" data-slide-to="2" ></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src={oneplus} className="img-fluid" alt="Iphone" style={styles}/>
                        </div>
                        <div className="carousel-item active">
                            <img src={iphone} className="img-fluid" alt="OnePlus" style={styles}/>
                        </div>
                        <div className="carousel-item">
                            <img src={google} className="img-fluid" alt="Google" style={styles}/>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        );
    }

    handleClick() {
        // StudentApi.handleGetOneStudent()
        //         .then(response => {this.handleSuccess(response)});

        StudentApi.handleGetAllStudents()
                .then(response => {this.handleSuccess(response)})
                .catch(error => {this.handleError(error)});
    }

    handleSuccess(response) {
        this.setState({
            students : response.data
        })
    }

    handleError(error) {
        let errorMessage = '';
        if(error.message) {
            errorMessage += error.message;
        }
        if(error.response && error.response.data.message) {
            errorMessage += error.response.data.message;
        }
        this.setState({
            errorMessage
        });
    }
}

export default Welcome;