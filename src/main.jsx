import { createRoot } from 'react-dom/client'
import './index.css'

import AppContextProvider from './context/Context.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(

  <AppContextProvider>

    <App />
  </AppContextProvider>


)
