import React from 'react'
import { FaTrashCan } from 'react-icons/fa6';

function TodoListTugas({
  daftarTodoList,
  isSembunyikanTugasChecked,
  setDaftarTodoList,
}) {

  const handleDeleteTugas = (id) =>{
    setDaftarTodoList(daftarTodoList.filter(tugas => tugas.id != id))
  };

    return (
        <div className="row">
              <div className="col-8 d-flex align-item-center ms-5">
                <input type="checkbox" className="form-check-input" />
                <label className="ms-2">Nama Tugas</label>
              </div>
              <div className="col-2 text-center p-0">
                <button 
                  className='btn'
                  onClick={() => handleDeleteTugas(tugas.id)}>
                  <FaTrashCan />
                </button>
              </div>
            </div>
          );
        }

export default TodoListTugas