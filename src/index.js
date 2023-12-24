import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
    domain="dev-ql4c7gsfhpd4e7fv.us.auth0.com"
    clientId="3fVewHjyhGsvVkW1IJ9hrNhisTjIYOD9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);