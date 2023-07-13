import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/App';
import { SpotifyContextProvider } from './store/SpotifyContext';
import { AppsContextProvider } from './store/AppsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppsContextProvider>
      <SpotifyContextProvider>
        <App />
      </SpotifyContextProvider>
    </AppsContextProvider>
  </React.StrictMode>
);