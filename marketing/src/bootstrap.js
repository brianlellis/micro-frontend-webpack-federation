import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const ENV_ISOLATE = () => 'development' === process.env.NODE_ENV && 'development' === document.body.id;

const mount = ele => {
  const ELE = ENV_ISOLATE ? document.getElementById( 'app' ) : ele;
  ReactDOM.render( <App /> , ELE );
};
if ( ENV_ISOLATE ) mount();

export { mount }