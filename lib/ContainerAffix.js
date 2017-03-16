'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerAffix = function (_Component) {
    _inherits(ContainerAffix, _Component);

    function ContainerAffix(props) {
        _classCallCheck(this, ContainerAffix);

        var _this = _possibleConstructorReturn(this, (ContainerAffix.__proto__ || Object.getPrototypeOf(ContainerAffix)).call(this, props));

        _this.state = {
            top: 0,
            left: 0,
            marginTop: 0,
            marginLeft: 0,
            height: 0,
            width: 0,
            containerHeight: 0,
            containerWidth: 0
        };

        _this.calculate = _this.calculate.bind(_this);
        _this.getInitPosition = _this.getInitPosition.bind(_this);
        _this.lisntenWindowChange = _this.lisntenWindowChange.bind(_this);
        return _this;
    }

    _createClass(ContainerAffix, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getInitPosition();
            var listenTarget = this.props.target();
            if (listenTarget) {
                listenTarget.addEventListener('resize', this.lisntenWindowChange);
                listenTarget.addEventListener('scroll', this.lisntenWindowChange);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var listenTarget = this.props.target();
            if (listenTarget) {
                listenTarget.removeEventListener('resize', this.lisntenWindowChange);
                listenTarget.addEventListener('scroll', this.lisntenWindowChange);
            }
        }
    }, {
        key: 'getInitPosition',
        value: function getInitPosition() {
            var container = _reactDom2.default.findDOMNode(this.props.container);
            var thisElm = _reactDom2.default.findDOMNode(this);

            this.setState({
                height: thisElm.offsetHeight,
                width: thisElm.offsetWidth,
                containerHeight: container.offsetHeight,
                containerWidth: container.offsetWidth
            });

            var containerRect = container.getBoundingClientRect();
            var thisElemRect = thisElm.getBoundingClientRect();

            var top = thisElemRect.top,
                left = thisElemRect.left;

            var marginTop = top - containerRect.top;
            var marginLeft = left - containerRect.left;

            this.setState({ top: top, left: left, marginTop: marginTop, marginLeft: marginLeft });
        }
    }, {
        key: 'lisntenWindowChange',
        value: function lisntenWindowChange() {
            var container = _reactDom2.default.findDOMNode(this.props.container);

            var _container$getBoundin = container.getBoundingClientRect(),
                top = _container$getBoundin.top,
                left = _container$getBoundin.left;

            this.setState({
                top: top + this.state.marginTop,
                left: left + this.state.marginLeft
            });
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            var h = this.state.containerHeight + this.state.top - this.state.marginTop - this.state.height;

            if (this.state.top < this.props.offsetTop) {
                return {
                    position: "fixed",
                    top: h < 0 ? h : this.props.offsetTop,
                    left: this.state.left,
                    height: this.state.height,
                    width: this.state.width,
                    marginTop: '0 !important'
                };
            }
            return {};
        }
    }, {
        key: 'render',
        value: function render() {
            var style = this.calculate();
            return _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement('div', null),
                this.props.children
            );
        }
    }]);

    return ContainerAffix;
}(_react.Component);

ContainerAffix.propTypes = {
    container: _react.PropTypes.object,
    offsetTop: _react.PropTypes.number,
    target: _react.PropTypes.func
};

ContainerAffix.defaultProps = {
    offsetTop: 0,
    target: function target() {
        return window;
    }
};

exports.default = ContainerAffix;