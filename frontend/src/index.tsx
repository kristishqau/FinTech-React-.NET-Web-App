import React from 'react'  // Import React for JSX syntax and component rendering
import ReactDOM from 'react-dom/client'  // Import ReactDOM to render the app into the DOM
import './index.css'  // Import the global styles for the app
import reportWebVitals from './reportWebVitals'  // Import a utility to measure app performance
import { RouterProvider } from 'react-router-dom'  // Import RouterProvider from react-router-dom for routing
import { router } from './Routes/Routes'  // Import the router configuration for the app

// Get the root element from the HTML where the React app will be mounted
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Ensure that the root element is available and cast it as HTMLElement
)

// Render the React application into the DOM
root.render(
  <React.StrictMode> {/* Wrap the app in React.StrictMode for additional checks and warnings during development */}
    <RouterProvider router={router}/>  {/* Provide the router configuration to the app to enable routing */}
  </React.StrictMode>
)

// Call reportWebVitals to log performance data (optional, useful for measuring performance)
reportWebVitals()