import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './CounterButton.css';

class CounterButton extends Component {

    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.addBy)}> {this.props.addBy} </button>
                <button onClick={() => this.props.incrementMethod(-this.props.addBy)}> -{this.props.addBy} </button>
            </div>
        );
    }
}

CounterButton.defaultProps = {
    addBy : 1
}

CounterButton.propTypes = {
    addBy : PropTypes.number
}

export default CounterButton;