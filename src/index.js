import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/layout.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();
