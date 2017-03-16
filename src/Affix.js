import React, { Component } from 'react';
import Affix from '../../lib/Affix.js';

const navStyle = {
    height: 80,
    width: '100%',
    background: '#f5f5f5',
    border: '1px solid #999',
}


const AffixHeader = props => {
    return (
        <Affix offsetTop={0} horizontal={true}>
            <div style={navStyle}>
                            <h1>react-affix live demo.</h1>
                <a href="https://github.com/importcjj/react-affix">github</a>
            </div>
        </Affix>
    )
}

export default AffixHeader;
