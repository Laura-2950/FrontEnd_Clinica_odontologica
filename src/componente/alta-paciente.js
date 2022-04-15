import React from "react";
import { useState } from "react";

const initailForm = {
  nombre: "",
  apellido: "",
  dni: "",
  fechaIngreso: "",
  domicilio: {
    calle: "",
    numero: "",
    localidad: "",
    provincia: ""
  }
};

function PacienteAlta() {
  const [form,setForm] = useState(initailForm);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createData = () => {
    setLoading(true);
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };
    let url = "http://localhost:8080/pacientes";

    const post = async (url, options) => {
      let res = await fetch(url, options);
      await res.json().then((res) => {
        if (res.err) {
          setError(res);
        }
        setLoading(false);
      });
    };
    post(url, options);
  };
  const handleChange = (e) => {
    if (e.target.name in form.domicilio) {
      setForm({
        ...form,
        domicilio:{
          ...form.domicilio,
          [e.target.name]: e.target.value,
        }
      })
    }else{
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

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
      <h1>Alta Paciente</h1>
      <p>
        Complete los siguientes campos del formulario para dar de alta a nuevo
        paciente.
      </p>
      <form
        className="row justify-content-center g-5 m-5"
        onSubmit={handleSubmit}
      >
        <div className="col-md-5 m-2">
          <label htmlFor="validationDefault01" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="#validationDefault01"
            name="nombre"
            placeholder="Juan"
            onChange={handleChange}
            value={form.nombre}
            required
          />
        </div>
        <div className="col-md-5 m-2">
          <label htmlFor="validationDefault02" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="#validationDefault02"
            name="apellido"
            placeholder="Perez"
            onChange={handleChange}
            value={form.apellido}
            required
          />
        </div>
        <div className="col-md-3 m-2">
          <label htmlFor="validationDefault03" className="form-label">
            D.N.I. N°
          </label>
          <input
            type="text"
            className="form-control"
            id="#validationDefault03"
            name="dni"
            placeholder="34.222.689"
            onChange={handleChange}
            value={form.dni}
            required
          />
        </div>
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
        <div className="col-md-5 m-2">
          <label htmlFor="validationDefault05" className="form-label">
            Domicilio
          </label>
          <input
            type="text"
            className="form-control"
            id="#validationDefault05"
            name="calle"
            placeholder="San Martín"
            onChange={handleChange}
            value={form.domicilio.calle}
            required
          />
        </div>
        <div className="col-md-3 m-2">
          <label htmlFor="validationDefault06" className="form-label">
            Calle Número
          </label>
          <input
            type="text"
            className="form-control"
            id="#validationDefault06"
            name="numero"
            placeholder="202"
            onChange={handleChange}
            value={form.domicilio.numero}
            required
          />
        </div>
        <div className="col-md-3 m-2">
          <label htmlFor="validationDefault07" className="form-label">
            Localidad
          </label>
          <input
            type="text"
            className="form-control"
            id="#validationDefault07"
            name="localidad"
            placeholder="Santa Rosa"
            onChange={handleChange}
            value={form.domicilio.localidad}
            required
          />
        </div>
        <div className="col-md-3 m-2">
          <label htmlFor="validationDefault08" className="form-label">
            Provincia
          </label>
          <input
            type="text"
            className="form-control"
            id="#validationDefault08"
            name="provincia"
            placeholder="La Pampa"
            onChange={handleChange}
            value={form.domicilio.provincia}
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

export default PacienteAlta;
