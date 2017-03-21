import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    });
}

