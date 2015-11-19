'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Me from './containers/app';

window.onload = () =>  {
  gapi.load('auth2', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Me />
      </Provider>,
      document.getElementById('app')
    );
  });
};
