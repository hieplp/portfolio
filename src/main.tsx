import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import './index.css'

// Render
const root = document.getElementById('root')

createRoot(root!).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
