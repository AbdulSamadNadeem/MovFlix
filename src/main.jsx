import { MovieContext } from './Context/MoviesContext/MovieContext.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <MovieContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MovieContext>
    
)
