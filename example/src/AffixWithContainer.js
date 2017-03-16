import React, { Component } from 'react';
import Affix from '../../lib/Affix.js';


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

const onChange = affixed => {
    console.log(affixed)
}


class AffixWithContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ width: 1500, margin: 10 }}>
            <h1>## a simple affix demo </h1>
            <div style={containerStyle} >
                <Affix container={this} offsetTop={0} onChange={onChange}>
                    <div style={contentStyle}>
                        <p>This is a affixed element in a container!</p>
                        <p>当窗口向上滚动使元素触顶时， 元素自动固定在顶部</p>
                        <p>但是元素此时能可以随窗口左右滑动, 这一特性也是与其他类似组件不同的地方:</p>
                        <ul>
                            <li><a href="https://ant.design/components/affix-cn/">antd affix</a></li>
                            <li><a href="https://react-bootstrap.github.io/react-overlays/#affixes">react-overlays</a></li>
                        </ul>
                        <p>另外, 当容器组件向上滚出页面时，本元素也将随之滚出.</p>
                    </div>
                </Affix>
                <h2>container</h2>
            </div>
            </div>
        )
    }
}


export default AffixWithContainer;
