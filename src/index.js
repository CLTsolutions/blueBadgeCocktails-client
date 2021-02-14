import React from 'react'; // The import needed to build a react app, needed for the React.StrictMode> component
import ReactDOM from 'react-dom'; // The import needed for appending the React component to the DOM

 /* we added a dependency react-router-dom,
    this allows for use to define routes in our app easier, it was also renamed from BrowserRouter -> Router
*/
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css'; // It is common to import css with the same name as the component, it is just normal css
import App from './App'; // We import a component

// render(jsx, node) <-- takes a jsx element and a location to mount to. id root in the index.html
ReactDOM.render(
  <React.StrictMode> {/* A component used to wrap the app it notes that mounting to root is not a guaranteed action */}
    <Router> {/* Enables Different Routes on our app ie '/about' or w/e with a nice api */}
      <App /> {/* The first component to be mounted in the app, I think of this as the wrapper of all of our work */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);