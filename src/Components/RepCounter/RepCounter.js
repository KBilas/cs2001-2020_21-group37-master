import React, { Component } from 'react';
import './Styles/RepCounter.css';


class RepCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
        if (this.state.clicks <= 0) {
            this.setState({ clicks: this.state.numDisplay = 0 });
        }
    }

    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    ResetClick = () => {
        this.setState({ clicks: this.state.numDisplay = 0 })
    }

    render() {
        return (
            <div className='row'>
                <button className='button-all' onClick={(e) => this.IncrementItem(e)}>Increase</button>
                <button className='button-all' onClick={(e) => this.DecreaseItem(e)}>Decrease</button>
                <button className='button-all' onClick={(e) => this.ToggleClick(e)}>Toggle</button>
                <button className='button-all' onClick={(e) => this.ResetClick(e)}>Reset</button>
                <div className='row2'>
                    <h1>Current Count: {this.state.show ? <h2>{this.state.clicks}</h2> : ''}</h1>
                </div>
            </div>
        );
    }
};

export default RepCounter;