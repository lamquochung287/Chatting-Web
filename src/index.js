import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext';
import { store } from './store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProvider>
      <App />
    </AppProvider> */}

    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
);