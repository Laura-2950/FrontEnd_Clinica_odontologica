import React from "react";
import { useState } from "react";
import Select from "./select";

const initailForm={
    paciente: null,
    odontologo:null,
    fechaIngreso:""
}
/*const initailForm = {
  paciente: {
    id: 0,
    nombre: "",
    apellido: "",
    dni: "",
    fechaIngreso: "",
    domicilio: {
      id: 0,
      calle: "",
      numero: "",
      localidad: "",
      provincia: "",
    },
  },
  odontologo: {
    id: 0,
    nombre: "",
    apellido: "",
    matricula: "",
  },
  fechaIngreso: "",
};*/

function TurnoAlta() {
  const [form, setForm] = useState(initailForm);
  const [paciente, setPaciente] = useState(null);
  const [odontologo, setOdontologo] = useState(null);

console.log( paciente );
console.log(odontologo);

  const createData = () => {

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

    console.log(form);
    let url = "http://localhost:8080/turnos";

    const post = async (url, options) => {
      let res = await fetch(url, options);
      await res.json()

    post(url, options);
  };
}

  const handleChange=(e)=>{
      console.log(e.target.value);
    setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
  }
  /*const handleChange = (e) => {
    if (e.target.name in form.paciente.domicilio) {
      setForm({
        ...form,
        domicilio: {
          ...form.paciente.domicilio,
          [e.target.name]: e.target.value,
        },
      });
    }
    if (e.target.name in form.paciente) {
      setForm({
        ...form,
        paciente: {
          [e.target.name]: e.target.value,
        },
      });
    }
    if (e.target.name in form.odontologo) {
      setForm({
        ...form,
        odontologo: {
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };*/

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
        <pre>
            <code>
                {paciente} - {odontologo}
            </code>
        </pre>
        
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
            value={form.fechaIngreso}
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
