import React from "react";
import { useEffect, useState } from "react";

function OdontologoList() {
  const [arrayOdonto, setArrayOdonto] =useState([]);

  useEffect(() => {
    let url = "http://localhost:8080/odontologos";
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setArrayOdonto(data);
    } catch (err) {
      setArrayOdonto(null);
      }
    };
    getData(url);
  }, []);


 
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
          {arrayOdonto.map((odontologo, i) => (
                <tr key={i}>
                  <th scope="row">{odontologo.apellido}</th>
                  <td>{odontologo.nombre}</td>
                  <td>{odontologo.matricula}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-warning" 
                            type="button"
                            id={odontologo.id}
                            
                            >Modificar</button>
                    <button className="btn btn-sm btn-outline-danger m-2" type="button">Eliminar</button>
                  </td>
                </tr>
                
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default OdontologoList;
