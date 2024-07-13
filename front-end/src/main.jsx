import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Sale from '../sale-page/sale.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/sale' element={<Sale />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
