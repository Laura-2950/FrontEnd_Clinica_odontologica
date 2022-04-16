import { useState } from "react";

export default function FormActualizacion({ odontologo }) {

    const [form, setForm] = useState(odontologo);


    console.log(odontologo);

    let url = "http://localhost:8080/odontologos";

    const updateData = (odontologo) => {
        let endpoint = `${url}`;
        console.log(form);
        let options = {
            method: "PUT",
            body: JSON.stringify(form),
            headers: { "content-type": "application/json" },
        };

        const put = fetch(endpoint, options)
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
                ...form,
                [e.target.name]: e.target.value,
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(form);
    }

    return (
        <>
            <p>Modifique solo los campos del formulario que desea actualizar del odontólogo.</p>
            <form className="row g-3 m-5" onSubmit={handleSubmit}>
                <div className="col-md-4 m-1">
                    <label htmlFor="validationDefault01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationDefault01" name="nombre" placeholder="Juan" onChange={handleChange}
                        value={form.nombre} required />
                </div>
                <div className="col-md-4 m-1">
                    <label htmlFor="validationDefault02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationDefault02" name="apellido" placeholder="Perez" onChange={handleChange}
                        value={form.apellido} required />
                </div>
                <div className="col-md-3 m-1">
                    <label htmlFor="validationDefault03" className="form-label">Matrícula N°</label>
                    <input type="text" className="form-control" id="validationDefault03" name="matrícula" placeholder="AB1584" onChange={handleChange}
                        value={form.matricula} required />
                </div>
                <div className="col-12">
                    <button className="btn btn-outline-primary m-5" type="submit" value="Enviar">Modificar</button>
                </div>
            </form>
        </>
    )
}