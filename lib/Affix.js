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

var Affix = function (_Component) {
    _inherits(Affix, _Component);

    function Affix(props) {
        _classCallCheck(this, Affix);

        var _this = _possibleConstructorReturn(this, (Affix.__proto__ || Object.getPrototypeOf(Affix)).call(this, props));

        _this.state = {
            affixed: false,
            initTop: 0,
            initLeft: 0,
            marginTop: 0,
            marginLeft: 0,
            height: 0,
            width: 0,
            containerHeight: 0,
            containerWidth: 0
        };

        _this.calculate = _this.calculate.bind(_this);
        _this.getInitPosition = _this.getInitPosition.bind(_this);
        _this.getContainerDOM = _this.getContainerDOM.bind(_this);
        _this.lisntenWindowChange = _this.lisntenWindowChange.bind(_this);
        return _this;
    }

    _createClass(Affix, [{
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
        key: 'getContainerDOM',
        value: function getContainerDOM() {
            var container = this.props.container;
            if (container != document.body) {
                return _reactDom2.default.findDOMNode(container);
            }
            return container;
        }
    }, {
        key: 'getInitPosition',
        value: function getInitPosition() {
            var container = this.getContainerDOM();
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

            this.setState({
                top: top,
                left: left,
                initTop: top,
                initLeft: left,
                marginTop: marginTop,
                marginLeft: marginLeft
            });
        }
    }, {
        key: 'lisntenWindowChange',
        value: function lisntenWindowChange(evt) {
            var container = this.getContainerDOM();

            var _container$getBoundin = container.getBoundingClientRect(),
                top = _container$getBoundin.top,
                left = _container$getBoundin.left;

            this.setState({
                top: top + this.state.marginTop,
                left: left + this.state.marginLeft
            });

            if (this.state.top <= this.props.offsetTop) {
                if (this.state.affixed == false) {
                    this.props.onChange({ affixed: true, event: evt });
                }
                this.setState({ affixed: true });
            }

            if (this.state.top > this.props.offsetTop) {
                if (this.state.affixed == true) {
                    this.props.onChange({ affixed: false, event: evt });
                }
                this.setState({ affixed: false });
            }
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            var h = this.state.top - this.state.marginTop + this.state.containerHeight - this.state.height;
            if (this.state.top < this.props.offsetTop) {
                return {
                    position: "fixed",
                    top: h < 0 ? h : Math.min(h, this.props.offsetTop),
                    left: this.props.horizontal ? this.state.initLeft : this.state.left,
                    height: this.state.height,
                    width: this.state.width
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

    return Affix;
}(_react.Component);

Affix.propTypes = {
    container: _react.PropTypes.object,
    offsetTop: _react.PropTypes.number,
    horizontal: _react.PropTypes.bool,
    target: _react.PropTypes.func,
    onChange: _react.PropTypes.func
};

Affix.defaultProps = {
    offsetTop: 0,
    horizontal: false,
    container: document.body,
    target: function target() {
        return window;
    },
    onChange: function onChange(affixed) {
        return {};
    }
};

exports.default = Affix;