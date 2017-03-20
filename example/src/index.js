import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AffixHeader from './Affix';
import AffixWithContainer from './AffixWithContainer';

const AppStyle = {
    height: 2000,
    width: 1600,
    margin: 0,
}

const Banner = props => {
    const style = {
        height: 180,
        width: "100%",
        background: "#6495ED",
        position: "relative",
    }

    const h1Style = {
        color: "#FFF",
        fontSize: 35,
        position: "absolute",
        top: 50,
        left: 20
    }

    return (
        <div style={style}>
            <h1 style={h1Style}>React-Affixed</h1>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div style={AppStyle}>
                <Banner></Banner>
                <AffixHeader></AffixHeader>
                <AffixWithContainer></AffixWithContainer>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById("root"))
