import React, { Component, PropTypes } from 'react';

import Banner from './Banner';
import AffixHeader from './AffixHeader';
import AffixWithContainer from './Container';

import styles from './App.css';


class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Banner></Banner>
                <AffixHeader></AffixHeader>
                <AffixWithContainer></AffixWithContainer>
            </div>
        )
    }
}

export default App;