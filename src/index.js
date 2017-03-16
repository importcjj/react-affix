import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContainerAffix from '../../lib/ContainerAffix';


const App = props => {
    return (
        <div>
            <ContainerAffix>
                <p>This is a affixed element.</p>
            </ContainerAffix>
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById("root"))
