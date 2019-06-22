import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from "./authentication/AuthenticationService";

class HeaderComponent extends Component {

    render() {
    
        const isUserLoggedIn = AuthenticationService.isAuthorized();
        return(

            <header>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div>
                        <a href="http://www.google.com" className="navbar-brand" >DhomePage</a> 
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li>
                                <Link className="nav-link" to="/welcome/dhiren">Home</Link></li>
                        }
                        {isUserLoggedIn && <li>
                                <Link className="nav-link"  to="/todos">Todos</Link></li>
                        }
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li className="nav-item"><Link className="nav-link"
                             to="/login" >Login</Link></li>}
                        {isUserLoggedIn && <li className="nav-item">
                                    <Link className="nav-link" to="/logout"
                                        onClick={AuthenticationService.deregisterUser}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;