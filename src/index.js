import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './components/App';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);