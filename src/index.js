import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/site.css';
import 'react-toastify/dist/ReactToastify.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
