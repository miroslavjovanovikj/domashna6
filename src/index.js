
    import React from 'react';
    import {BrowserRouter, Route} from 'react-router-dom';
    import ReactDOM from 'react-dom';
    import App from  './components/App'
    import "./assets/css/styles.css";


    ReactDOM.render(
      <BrowserRouter>
        <Route  path="/" component={App} />
      </BrowserRouter>
        ,document.getElementById('root'))
      ;
