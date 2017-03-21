import React, { Component } from 'react';

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


export default Banner;