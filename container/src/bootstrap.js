import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// I'm still using mount on the container in case I need to nest the system container into
// another container. The body is changed to container-development to not conflict with other
// isolated remotes being called in
const ENV_ISOLATE = 'development' === process.env.NODE_ENV && 'container-development' === document.body.id;

const mount = ele => {
  const ELE = ENV_ISOLATE ? document.getElementById( 'app' ) : ele;
  ReactDOM.render( <App /> , ELE );
};
if ( ENV_ISOLATE ) mount();

export { mount }