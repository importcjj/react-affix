import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

class ContainerAffix extends Component {
    constructor(props) {
        super(props);
        this.calculate = this.calculate.bind(this);
    }

    calculate() {
        return {
            position: "fixed",
            top: 0,
            left: 0,
        }
    }

    render() {
        const style = this.calculate()
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}


export default ContainerAffix;
