import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContainerAffix from '../../lib/ContainerAffix';


const containerStyle = {
    border: 'solid #ccc',
    borderWidth: '1 1 1 1',

    width: 900,
    height: 400,
    padding: 10,
}

const contentStyle = {
    background: "#000",
    color: "#FFF",
}


class ExampleContainerAffix extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={containerStyle} >
                <h2>container</h2>
                <ContainerAffix container={this}>
                    <div style={contentStyle}>
                        <p>This is a affixed element!</p>
                        <p>当窗口向上滚动使元素触顶时， 元素自动固定在顶部</p>
                        <p>但是元素此时能可以随窗口左右滑动, 这一特性也是与其他类似组件不同的地方:</p>
                        <ul>
                            <li><a href="https://ant.design/components/affix-cn/">antd affix</a></li>
                            <li><a href="https://react-bootstrap.github.io/react-overlays/#affixes">react-overlays</a></li>
                        </ul>
                        <p>另外, 当容器组件向上滚出页面时，本元素也将随之滚出.</p>
                    </div>
                </ContainerAffix>
            </div>
        )
    }
}


class App extends Component {
    render() {
        return (
            <div style={{height: 1200, width: 2000, padding: 10}}>
                <h1>react-affix live demo</h1>
                <ExampleContainerAffix></ExampleContainerAffix>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById("root"))
