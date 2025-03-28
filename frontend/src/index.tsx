import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'

// Get the root element from the HTML where the React app will be mounted
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>
)

// Call reportWebVitals to log performance data (optional, useful for measuring performance)
reportWebVitals()