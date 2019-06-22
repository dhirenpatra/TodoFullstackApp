import React , {Component} from 'react';
import '../../bootstrap.css';
import { Redirect} from 'react-router-dom';

class Logout extends Component {
    render() {
        return(
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
                <Redirect to="/login" />
            </div>
        );
    }
}

export default Logout;