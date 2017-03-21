import React, { Component, PropTypes } from 'react';

import Banner from './Banner';
import AffixHeader from './AffixHeader';
import AffixWithContainer from './Container';


const AppStyle = {
    height: 2000,
    width: 1600,
    margin: 0,
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

export default App;