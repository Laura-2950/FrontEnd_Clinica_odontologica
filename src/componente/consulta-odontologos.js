import React from "react";
import { useEffect, useState } from "react";
import FormActualizacion from "./form-actualizacion-odontologo.js";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

function OdontologoList() {
  const [arrayOdontologo, setArrayOdontologo] =useState([]);
  const [error, setError] = useState(null);
  const [odontologo, setOdontologo] = useState(null);
  const [isOpenForm, openModalForm, closeModalForm] = useModal(false);

  let url = "http://localhost:8080/odontologos";

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setArrayOdontologo(data);
    } catch (err) {
      setArrayOdontologo(null);
      }
    };
    getData(url);
  }, [isOpenForm]);

  const deleteData = (odontologo) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el odontólogolo ${odontologo.apellido} ${odontologo.nombre}?`
    );

    if (isDelete) {
      let id = odontologo.id;
      let endpoint = `${url}/${id}`;
      let options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };

      fetch(endpoint, options).then((res) => {
        if (res.err) {
          setError(res);
        }
      });

      let newData = arrayOdontologo.filter((odontologo) => odontologo.id !== id);
      setArrayOdontologo(newData);
    } else {
      return;
    }
  };
 
  return (
    <div>
      <h1>Listado de Odontólogos</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Apellido</th>
            <th scope="col">Nombre</th>
            <th scope="col">Matrícula</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {arrayOdontologo.map((odontologo, i) => (
                <tr key={i}>
                  <th scope="row">{odontologo.apellido}</th>
                  <td>{odontologo.nombre}</td>
                  <td>{odontologo.matricula}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-warning" 
                            type="button"
                            onClick={() => {
                              openModalForm()
                              setOdontologo(odontologo)
                            }}
                            >Modificar</button>
                    <button 
                    className="btn btn-sm btn-outline-danger m-2" 
                    type="button"
                    onClick={() => deleteData(odontologo)}
                    >Eliminar</button>
                  </td>
                </tr>                               
          ))
          }
        </tbody>
      </table>
      <Modal isOpen={isOpenForm} closeModal={closeModalForm}>
        {isOpenForm && <FormActualizacion odontologo={odontologo} />}
      </Modal>
    </div>
  );
}

export default OdontologoList;
