import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Pagenotfound from './Pagenotfound'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/our-services" element={<Services />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="*" element={<Pagenotfound />} />
    </Routes>
  </Router>
  </React.StrictMode>
)