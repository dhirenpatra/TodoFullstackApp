import React , {Component} from 'react';
import AuthenticationService from "./authentication/AuthenticationService";
import '../../bootstrap.css';

class Login extends Component {

    constructor(props) {

        super(props);
        this.state = {
            username : 'dhiren',
            password : '',
            invalidCredential : false,
            showSuccessMessage : false
        }
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeEvent(event) {
        console.log("handleChangeUsername called");
        this.setState({[event.target.name] : event.target.value});

    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.username === "dhiren" && this.state.password === "pooja") {
            AuthenticationService.registerUser(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            window.location.reload();
        } else {
            this.setState({showSuccessMessage:false})
            this.setState({invalidCredential:true})
        }
    }

    render() {
        return(
            <div className="container">
                {this.state.invalidCredential && <div className="alert alert-warning">  Login Failed  </div>}
                <form>
                    <div className="form-group">
                        <label >Username:</label>
                        <input type="text" className="form-control" onChange={this.handleChangeEvent} 
                                            name="username" value={this.state.username}/>
                    </div>
                    <div className="form-group">
                        <label >Password:</label>
                        <input type="password" className="form-control" onChange={this.handleChangeEvent} 
                                            name="password" value={this.state.password}/>
                    </div>
                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
