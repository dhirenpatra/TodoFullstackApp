import React , {Component} from 'react';

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
        console.log("handleSubmit called");
        console.log(this.state.username + '<<<<:--:--:>>>>' + this.state.password);
        if(this.state.username === "dhiren" && this.state.password === "pooja") {
            this.setState({
                invalidCredential : false,
                showSuccessMessage : true
            });
            console.log(this.state);
            this.props.history.push(`/welcome/${this.state.username}`);
        } else {
            this.setState({
                invalidCredential : true,
                showSuccessMessage : false
            });
        }
    }

    render() {
        return(
            <div className="login">
                {this.state.invalidCredential && <div>  Login Failed  </div>}
                User Name : <input onChange={this.handleChangeEvent} type="text"
                        name="username" placeholder="username goes here" 
                        value={this.state.username} ></input>
                Password : <input onChange={this.handleChangeEvent} type="password"
                        name="password"  placeholder="password goes here" 
                        value={this.state.password}></input>
                <br />
                <button onClick={this.handleSubmit}> Login </button>
            </div>
        );
    }
}

export default Login;
