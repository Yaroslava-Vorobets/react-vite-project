import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter basename='/react-vite-project/'>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
