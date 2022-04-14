import React from "react";
import { useEffect, useState } from "react";
import FormUpDate from "./formUpDate";

function PacientesList() {
  const [arrayPacientes, setArrayPacientes] =useState([]);
  const [error, setError] = useState(null);
  const[showFormUpDate, setShowFomUpDate]= useState(false);
  
  let url = "http://localhost:8080/pacientes";

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setArrayPacientes(data);
    } catch (err) {
      setArrayPacientes(null);
      }
    };
    getData(url);
  },[showFormUpDate]);

  const deleteData = (paciente) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el paciente ${paciente.apellido} ${paciente.nombre}?`
    );

    if (isDelete) {
      let id= paciente.id;
      let endpoint = `${url}/${id}`;
      let options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };

      fetch(endpoint, options)
      .then((res) => {
        if (res.err) {
          setError(res);
        }
      });
      
      let newData= arrayPacientes.filter((paciente=> paciente.id !== id))
      setArrayPacientes(newData)
      
    } else {
      return;
    }
  };
  const handleToggleClick = (paciente) => {
    setShowFomUpDate({
      showFormUpDate : !showFormUpDate
    })
  };
  console.log(showFormUpDate)
  return (
    <div>
      <h1>Listado de Pacientes</h1>
      <FormUpDate showFormUpDate= {showFormUpDate}/>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Apellido</th>
            <th scope="col">Nombre</th>
            <th scope="col">DNI</th>
            <th scope="col">Fecha de Ingreso</th>
            <th scope="col">Domicilio</th>
            <th scope="col">Acciones</th>
          </tr>          
        </thead>
        <tbody>
          {arrayPacientes.map((paciente, i) => (
                <tr key={i}>
                  <th scope="row">{paciente.apellido}</th>
                  <td>{paciente.nombre}</td>
                  <td>{paciente.dni}</td>
                  <td>{paciente.fechaIngreso}</td>
                  <td>{paciente.domicilio.calle} N° {paciente.domicilio.numero} - {paciente.domicilio.localidad}, {paciente.domicilio.provincia}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-warning" type="button" onClick = { ()  => handleToggleClick () }>{showFormUpDate? 'Terminar': 'Actualizar' }</button>
                    <button className="btn btn-sm btn-outline-danger m-2" type="button" onClick = { ( )  =>  deleteData ( paciente ) }>Eliminar</button>
                  </td>
                </tr>                
              ))
          }        
        </tbody>
      </table>
    </div>
  );
}

export default PacientesList;