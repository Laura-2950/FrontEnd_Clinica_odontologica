import { useState } from "react";
import Select from "./select";



export default function FormActualizacion({ turno }) {
    const [form, setForm] = useState(turno);
    const [odontologo, setOdontologo] = useState(null);
    const [paciente, setPaciente] = useState(null);

    let url = "http://localhost:8080/turnos";

    const updateData = (turno) => {
        let endpoint = `${url}`;
        
        let options = {
            method: "PUT",
            body: JSON.stringify(form),
            headers: { "content-type": "application/json" },
        };
        fetch(endpoint, options)
            .then((res) =>
                res.ok
                    ? res.json()
                    : Promise.reject({
                        err: true,
                        status: res.status || "00",
                        statusText: res.statusText || "Ocurrió un error",
                    })
            )
            .catch((err) => err);
    };

    const handleChange = (e) => {
            setForm({
                id: turno.id,
                paciente: {
                  id : paciente.id,
                  nombre : "",
                  apellido : "",
                  fechaIngreso : "",
                  domicilio : {
                    id : paciente,
                    calle : "",
                    numero : "",
                    localidad : "",
                    provincia : ""
                  }
                },
                odontologo: {
                  id : odontologo,
                  nombre : "",
                  apellido : "",
                  matricula : ""
                },
                fechaIngreso: e.target.value
            })    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(form);
    }

    return (
        <>
            <p>Modifique solo los campos del formulario que desea actualizar del paciente.</p>
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
                        Modificar
                    </button>
                </div>
            </form>
        </>
    )
}