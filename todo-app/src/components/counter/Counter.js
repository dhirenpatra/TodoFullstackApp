import React, {Component} from 'react';
import CounterButton from './CounterButton';
import ResetButton from "./ResetButton";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        };
        this.incrementState = this.incrementState.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton addBy={1} incrementMethod={this.incrementState}/>
                <CounterButton addBy={5} incrementMethod={this.incrementState}/>
                <CounterButton addBy={10} incrementMethod={this.incrementState}/>
                <CounterButton addBy={100} incrementMethod={this.incrementState}/>
                <span className="count">{this.state.counter}</span>
                <ResetButton resetCounter={this.resetState}/>
            </div>
        );
    }

    incrementState(addBy) {
        this.setState((prevState) => {
            return { counter : prevState.counter + addBy }
        });
    }

    resetState() {
        this.setState((prevState) => {
            return { counter : prevState.counter - prevState.counter }
        });
    }
}

export default Counter;