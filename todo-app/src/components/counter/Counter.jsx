import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}> {this.props.addBy} </button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increment() {
        this.setState({
            counter : this.state.counter + this.props.addBy
        })
    }
}

Counter.defaultProps = {
    addBy : 1
}

Counter.propTypes = {
    addBy : PropTypes.number
}

export default Counter;