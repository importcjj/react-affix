import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class ContainerAffix extends Component {
    constructor(props) {
        super(props);
        this.calculate = this.calculate.bind(this);
        this.getInitPosition = this.getInitPosition.bind(this);
        this.lisntenWindowChange = this.lisntenWindowChange.bind(this);
    }

    state = {
        top: 0,
        left: 0,
        marginTop: 0,
        marginLeft: 0,
        height: 0,
        width: 0,
        containerHeight: 0,
        containerWidth: 0,
    }

    componentDidMount() {
        this.getInitPosition();
        const listenTarget = this.props.target();
        if (listenTarget) {
            listenTarget.addEventListener('resize', this.lisntenWindowChange)
            listenTarget.addEventListener('scroll', this.lisntenWindowChange)
        }
    }

    componentWillUnmount() {
        const listenTarget = this.props.target();
        if (listenTarget) {
            listenTarget.removeEventListener('resize', this.lisntenWindowChange)
            listenTarget.addEventListener('scroll', this.lisntenWindowChange)
        }
    }

    getInitPosition() {
        const container = ReactDOM.findDOMNode(this.props.container)
        const thisElm = ReactDOM.findDOMNode(this);

        this.setState({
            height: thisElm.offsetHeight,
            width: thisElm.offsetWidth,
            containerHeight: container.offsetHeight,
            containerWidth: container.offsetWidth,
        })

        const containerRect = container.getBoundingClientRect();
        const thisElemRect = thisElm.getBoundingClientRect();

        let { top, left } = thisElemRect;
        const marginTop = top - containerRect.top;
        const marginLeft = left - containerRect.left;

        this.setState({ top: top, left: left, marginTop: marginTop, marginLeft: marginLeft});
    }

    lisntenWindowChange() {
        const container = ReactDOM.findDOMNode(this.props.container)
        const { top, left } = container.getBoundingClientRect()

        this.setState({
            top: top + this.state.marginTop,
            left: left + this.state.marginLeft
        })
    }

    calculate() {
        let h = (this.state.containerHeight + this.state.top - this.state.marginTop) - this.state.height;

        if (this.state.top < this.props.offsetTop) {
            return {
                position: "fixed",
                top: h < 0 ? h : this.props.offsetTop,
                left: this.state.left,
                height: this.state.height,
                width: this.state.width,
                marginTop: '0 !important',
            }
        }
        return {}
    }

    render() {
        const style = this.calculate()
        return (
            <div style={style}>
                <div></div>
                {this.props.children}
            </div>
        )
    }
}

ContainerAffix.propTypes = {
    container: PropTypes.object,
    offsetTop: PropTypes.number,
    target: PropTypes.func
}

ContainerAffix.defaultProps = {
    offsetTop: 0,
    target: () => window
}


export default ContainerAffix;
