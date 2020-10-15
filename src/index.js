import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);



// steps to setting up redux
// 1- import Provider from react-redux. Then wrap around the <App /> with Provider component. Provider is the parent of every component.
// 2- create folder named redux in src directory. create root-reducer.js. what it is, is that it is a base reducer that represents
// all the state in our application. It will be the actual code that combines all of our states together. A reducer is just a funtion
// that intakes two properties. A state object (initial state) and then receives an action. An action just an object that has a type and
// an object.
// 3- create folders for whatever state there is, ie user, user.reducer.js. write the reducer function that intakes initial state 
// and action. 
// 4- in root-reducer.js import combineReducers and import user.reducer.js. export default combineReducers with user: userReducer
// 5- create store.js file in redux root directory and add following code:
// import { createStore, applyMiddlware } from 'redux';
// import logger from 'redux-logger';

// import rootReducer from './root-reducer';

// const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddlware(...middlewares))

// export default store;
// Then in index.js, in the provider tag add store={store}. First make sure to import store from redux folder.