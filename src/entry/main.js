import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/scss/index.scss';
import App from '../component/Main';
import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
