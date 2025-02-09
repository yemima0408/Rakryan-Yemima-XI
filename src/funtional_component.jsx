import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

function TodoApp() {
  const [tugasBaru, setTugasBaru] = useState("");
  const [daftarTugas, setDaftarTugas] = useState([]);
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const handleChange = (e) => {
    setTugasBaru(e.target.value);
  };

  const handleTambahTugas = () => {
    const updateTugasBaru = [
      ...daftarTugas,
      { id: Date.now(), namaTugas: tugasBaru, checked: false },
    ];
    if (tugasBaru.length > 0) {
      setDaftarTugas(updateTugasBaru);
      setTugasBaru("");
    } else {
      alert("Tugas Harus Diisi");
    }
  };

  const handleHapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  const handleHideDoneTasks = () => {
    setHideDoneTasks(!hideDoneTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleTambahTugas();
    }
  };

  return (
    <div className="container">
      <section id="judul">
        <p className="judul text-center fs-3 fwbold mt-3">My To Do List</p>
      </section>

      <section id="input">
        <div className="row justify-content-center align-item-center mb-3">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan Tugas Baru"
              value={tugasBaru}
              onChange={handleChange}
              onKeyDown={handleKeyPress} 
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-tambah" onClick={handleTambahTugas}>
              Tambah
            </button>
          </div>
        </div>
      </section>

      <section id="list">
        {daftarTugas
          .filter((tugas) => !hideDoneTasks || !tugas.checked)
          .map((tugas) => (
            <div className="row" key={tugas.id}>
              <div className="col-8 d-flex align-items-center ms-5">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={tugas.checked}
                  onChange={() => {
                    setDaftarTugas(
                      daftarTugas.map((item) =>
                        tugas.id === item.id
                          ? { ...item, checked: !item.checked }
                          : item
                      )
                    );
                  }}
                />
                <label
                  className={`${tugas.checked ? "done" : ""} ms-2`}
                >
                  {tugas.namaTugas}
                </label>
              </div>
              <div className="col-2 text-center p-0">
                <button
                  className="btn"
                  onClick={() => handleHapusTugas(tugas.id)}
                >
                  <FaTrashCan />
                </button>
              </div>
            </div>
          ))}
      </section>

      <section id="hide">
        {daftarTugas.length > 0 && (
          <div className="mb-3 ms-5">
            <input
              type="checkbox"
              className="form-check-input"
              checked={hideDoneTasks}
              onChange={handleHideDoneTasks}
            />
            <label className="ms-2">Sembunyikan Tugas Selesai</label>
          </div>
        )}
      </section>
    </div>
  );
}

export default TodoApp;
