// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  import HomePage from './HomePage2.jsx'; 
// //import ProductDetail from './ProductDetail.jsx'; 
//  import './HomePage2.css'; 
// // import './ProductDetail.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         {/* Route untuk halaman utama */}
//         <Route path="/" element={<HomePage />} />

//         {/* Route untuk detail produk berdasarkan ID */}
//         <Route path="/products/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './LandingPage.jsx';
import LandingPage from './LandingPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage/>  
  </React.StrictMode>
);