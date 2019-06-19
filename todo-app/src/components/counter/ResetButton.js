import React , {Component} from 'react';
import './ResetButton.css';

class ResetButton extends Component {

    constructor() {
        super();
        this.resetCounter = this.resetCounter.bind(this);
    }

    render() {
        return (
            <div >
                <button className="resetButton" onClick={this.resetCounter} > RESET </button>
            </div>
        );
    }

    resetCounter() {
        this.props.resetCounter();
    }
}

export default ResetButton;
