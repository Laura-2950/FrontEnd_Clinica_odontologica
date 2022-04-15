import React from "react";
import { useEffect, useState } from "react";

function OdontologoList() {
  const [arrayTurnos, setArrayTunos] = useState([]);

  useEffect(() => {
    let url = "http://localhost:8080/turnos";
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setArrayTunos(data);
      } catch (err) {
        setArrayTunos(null);
      }
    };
    getData(url);
  }, []);

  return (
    <div>
      <h1>Listado de Turnos</h1>
      <form className="d-flex p-5 container-md">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar por id"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
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
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OdontologoList;
