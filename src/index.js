import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import axios from 'axios';

// Set up axios defaults
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

const root = createRoot(document.getElementById('root')); // Create root with createRoot

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals(); // Measure performance if needed
