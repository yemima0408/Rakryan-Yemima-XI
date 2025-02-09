import React from 'react'

const TodoApp = ()=>{
    return(
        <div class="container">
        <section id="judul">
          <p className="judul text-center fs-3 fwbold mt-3"
          style={{background: "yellow", border: "1px solid red"}}
          >My To Do List</p>
        </section>

        <section id="input">
          <div className="row justify-content-center align-item-center mb-3">
            <div className="col-8">
              <input type="text" className="form-control" placeholder="Masukkan Tugas Baru"/>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">Tambah</button>
            </div>
          </div>
        </section>

        <section id="list"></section>
        <section id="hide"></section>
    </div>
    )
}
