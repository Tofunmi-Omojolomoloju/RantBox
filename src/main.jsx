import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"; 
import { store } from "./utilities/Store";    
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
