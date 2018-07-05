import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/vendor.scss';
import './scss/common/fonts.scss';
import './scss/layout.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();
