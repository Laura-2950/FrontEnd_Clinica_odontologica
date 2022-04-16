import React from "react";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import FormActualizacion from "./form-actualizacion-turno.js";
import { useModal } from "../hooks/useModal";

function TurnoList() {
  const [arrayTurnos, setArrayTurnos] = useState([]);
  const [error, setError] = useState(null);
  const [turno, setTurno] = useState(null);
  const [isOpenForm, openModalForm, closeModalForm] = useModal(false);

  let url = "http://localhost:8080/turnos";

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setArrayTurnos(data);
      } catch (err) {
        setArrayTurnos(null);
      }
    };
    getData(url);
  }, []);

  const deleteData = (turno) => {
    let isDelete = window.confirm(
      `¿Estás seguro de querer eliminar el Turno para el paciente ${turno.paciente.apellido} con el odontologo ${turno.odontologo.apellido}?`
    );

    if (isDelete) {
      let id = turno.id;
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

      let newData = arrayTurnos.filter((turno) => turno.id !== id);
      setArrayTurnos(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h1>Listado de Turnos</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Fecha del turno</th>
            <th scope="col">Paciente</th>
            <th scope="col">DNI</th>
            <th scope="col">Odontologo</th>
            <th scope="col">Matrícula</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {arrayTurnos.map((turno, i) => (
            <tr key={i}>
              <th scope="row">{turno.fechaIngreso}</th>
              <td>
                {turno.paciente.nombre} {turno.paciente.apellido}
              </td>
              <td>{turno.paciente.dni}</td>
              <td>
                {turno.odontologo.nombre} {turno.odontologo.apellido}
              </td>
              <td>{turno.odontologo.matricula}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-warning"
                  type="button"
                  id={turno.id}
                >
                  Modificar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger m-2"
                  type="button"
                  onClick={() => deleteData(turno)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isOpenForm} closeModal={closeModalForm}>
        {isOpenForm && <FormActualizacion turno={turno} />}
      </Modal>
    </div>
  );
}

export default TurnoList;
