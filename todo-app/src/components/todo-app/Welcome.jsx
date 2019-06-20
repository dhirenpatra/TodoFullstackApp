import React , {Component} from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return(
            <div>
                Welcome Back {this.props.match.params.name}. You can manage your <Link to="/todos"> todos here </Link>.
            </div>
        );
    }
}

export default Welcome;