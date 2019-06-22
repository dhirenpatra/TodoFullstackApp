import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import google from '../images/google.jpg';
import iphone from '../images/iphone1.jpg';
import oneplus from '../images/oneplus.jpg';

class Welcome extends Component {
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
}

export default Welcome;