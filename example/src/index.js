import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AffixHeader from './Affix';
import AffixWithContainer from './AffixWithContainer';

class App extends Component {
    render() {
        return (
            <div style={{height: 1500, margin: '50px 0'}}>

                <AffixWithContainer></AffixWithContainer>
                                <AffixHeader></AffixHeader>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById("root"))
