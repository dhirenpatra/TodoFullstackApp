import React , {Component} from 'react';
import './footer.css';

class FooterComponent extends Component {
    render() {
        return(
            <div>
                <footer className="page-footer footer fixed-bottom">
                <div className="container">
                    <span className="text-muted">Copy right reserved by @DhirenKumarPatra.</span>
                </div>
                </footer>   
            </div>
        );
    }
}

export default FooterComponent;