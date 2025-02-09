// import React, { useState } from 'react';
// import TodoApp from './funtional_component';
// class App extends Component {
//   render() {
//     return (
//       <div class="container">
//         <section id="judul">
//           <p className="judul text-center fs-3 fwbold mt-3">My To Do List</p>
//         </section>

//         <section id="input">
//           <div className="row justify-content-center align-item-center mb-3">
//             <div className="col-8">
//               <input type="text" className="form-control" placeholder="Masukkan Tugas Baru"/>
//             </div>
//             <div className="col-auto">
//               <button className="btn btn-primary">Tambah</button>
//             </div>
//           </div>
//         </section>

//         <section id="list"></section>
//         <section id="hide"></section>
//     </div>
//     );
//   }
// }

// export default TodoApp;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import ProductDetail from "./ProductDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;