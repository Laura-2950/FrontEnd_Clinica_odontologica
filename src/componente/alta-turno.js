import React from "react";
import { useState } from "react";
import Select from "./select";

const initailForm = {
  paciente: {
    id : "",
    nombre : "",
    apellido : "",
    fechaIngreso : "",
    domicilio : {
      id : "",
      calle : "",
      numero : "",
      localidad : "",
      provincia : ""
    }
  },
  odontologo: {
    id : "",
    nombre : "",
    apellido : "",
    matricula : ""
  },
  fechaIngreso: "",
}


function TurnoAlta() {
  const [form, setForm] = useState(initailForm);
  const [paciente, setPaciente] = useState(null);
  const [odontologo, setOdontologo] = useState(null);

  const createData = () => {

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

    let url = "http://localhost:8080/turnos";

    const post = async (url, options) => {
      let res = await fetch(url, options);
      await res.json()
    };
    post(url, options);
  }

  const handleChange = (e) => {
    setForm({
      paciente: {
        id: paciente.id,
        nombre: "",
        apellido: "",
        dni: "",
        domicilio:{
          id: paciente.domicilio,
          calle:"",
          numero:"",
          localidad:"",
          Provincia: ""
        },
      },
      odontologo: {
        id: odontologo.id,
        nombre: "",
        apellido: "",
        matricula: ""
      },
      fechaIngreso: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createData(form);
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
  };

  return (
    <div>
      <h1>Alta Turno</h1>
      <p>
        Complete los siguientes campos del formulario para generar un nuevo
        turno.
      </p>
      <form
        className="row justify-content-center g-5 m-5"
        onSubmit={handleSubmit}
      >
        <Select
          label="Paciente"
          url={"http://localhost:8080/pacientes"}
          handleChange={(e) => {
            setPaciente(e.target.value);
          }}
        />
        <Select
          label="Odontólogo"
          url={"http://localhost:8080/odontologos"}
          handleChange={(e) => {
            setOdontologo(e.target.value);
          }}
        />

        <div className="col-md-3 m-2">
          <label htmlFor="validationDefault04" className="form-label">
            Fecha de Ingreso
          </label>
          <input
            type="text"
            className="form-control"
            id="#validationDefault04"
            name="fechaIngreso"
            placeholder="2022-04-02"
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 m-2">
          <button
            className="btn btn-outline-primary m-5"
            type="submit"
            value="Enviar"
          >
            Registrar
          </button>
          <button
            className="btn btn-outline-primary m-5"
            type="reset"
            value="Limpiar"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default TurnoAlta;
