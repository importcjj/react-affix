import React, { Component } from 'react';
import Affix from '../../lib/Affix.js';


const navStyle = {
    height: 60,
    width: '100%',
    background: '#6495ED',
    borderBottom: '1px solid #999',
}

const itemStyle = {
    lineHeight: "60px",
    color: "#FFF",
    textDecoration: "none",
    marginLeft: 20
}


const AffixHeader = props => {
    return (
        <Affix offsetTop={0} horizontal={true}>
            <div style={navStyle}>
                <a style={itemStyle} href="https://github.com/importcjj/react-affix">github</a>
            </div>
        </Affix>
    )
}

export default AffixHeader;
