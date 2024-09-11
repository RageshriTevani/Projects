import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Map from './Map.jsx'
import Login from './Login_account.jsx'
import NewArrivals from './NewArrivals.jsx'
import Women from './Women.jsx'
import Men from './Men.jsx'
import Kids from './Kids.jsx'
import PersonalCare from './PersonalCare.jsx'
import Collection from './Collection.jsx'
import Services from './Services.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/map" element={<Map />} />    
    <Route path="/login" element={<Login />} />  
    <Route path="/newarrivals" element={<NewArrivals />} />
    <Route path="/women" element={<Women />} /> 
    <Route path="/men" element={<Men />} />
    <Route path="/kids" element={<Kids />} />
    <Route path="/personalcare" element={<PersonalCare />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/services" element={<Services />} />
    </Routes>
  </Router>
  
  </React.StrictMode>
)