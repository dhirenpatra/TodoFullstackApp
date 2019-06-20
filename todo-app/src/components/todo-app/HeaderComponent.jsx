import React , {Component} from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://www.google.com" className="navbar-brand"> Google Page </a>
                    </div>
                    <ul className="navbar-nav">
                        <li className="navbar-item"><Link className="navbar-link" to="/welcome/dhiren">Home</Link></li>
                        <li className="navbar-item"><Link className="navbar-link"  to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="navbar-link" to="/login">Login</Link></li>
                        <li><Link className="navbar-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
            
        );
    }
}

export default HeaderComponent;