import React from "react";
import { useEffect, useState } from "react";

const initailForm = {
    nombre: "",
    apellido: "",
    matricula: ""
};

function OdontologoAlta() {
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
        let url = "http://localhost:8080/odontologos";
    
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
          setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
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
            <h1>Alta Odontólogo</h1>
            <p>Complete los siguientes campos del formulario para dar de alta a nuevo odontólogo.</p>
            <form className="row g-3 m-5" onSubmit={handleSubmit}>
                <div className="col-md-4 m-1">
                    <label htmlFor="validationDefault01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationDefault01" name="nombre" placeholder="Juan" onChange={handleChange} value={form.nombre} required />
                </div>
                <div className="col-md-4 m-1">
                    <label htmlFor="validationDefault02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationDefault02" name="apellido" placeholder="Perez" onChange={handleChange} value={form.apellido} required />
                </div>
                <div className="col-md-3 m-1">
                    <label htmlFor="validationDefault03" className="form-label">Matrícula N°</label>
                    <input type="text" className="form-control" id="validationDefault03" name="matricula" placeholder="AB1584" onChange={handleChange} value={form.matricula} required />
                </div>
                <div className="col-12">
                    <button className="btn btn-outline-primary m-5" type="submit">Registrar</button>
                </div>
            </form>
        </div>
    );
}

export default OdontologoAlta;
