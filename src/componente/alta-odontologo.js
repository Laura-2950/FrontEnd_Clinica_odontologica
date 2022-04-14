import React from "react";
import { useEffect, useState } from "react";

function OdontologoAlta() {
    const [odontologo, setOdontologo] =useState({});
    

  useEffect(() => {
    let url = "http://localhost:8080/odontologos";
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setOdontologo(data);
    } catch (err) {
        setOdontologo(null);
      }
    };
    getData(url);
  }, []);

    return (
        <div>
            <h1>Alta Odontólogo</h1>
            <p>Complete los siguientes campos del formulario para dar de alta a nuevo odontólogo.</p>
            <form className="row g-3 m-5">
                <div className="col-md-4 m-1">
                    <label htmlFor="validationDefault01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationDefault01" name="nombre" placeholder="Juan" required />
                </div>
                <div className="col-md-4 m-1">
                    <label htmlFor="validationDefault02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationDefault02" name="apellido" placeholder="Perez" required />
                </div>
                <div className="col-md-3 m-1">
                    <label htmlFor="validationDefault03" className="form-label">Matrícula N°</label>
                    <input type="text" className="form-control" id="validationDefault03" name="matrícula" placeholder="AB1584" required />
                </div>
                <div className="col-12">
                    <button className="btn btn-outline-primary m-5" type="submit">Registrar</button>
                </div>
            </form>
        </div>
    );
}

export default OdontologoAlta;
