import React from "react";
import { useEffect, useState } from "react";

export default function UpdateOdonlogogo(props){


    return(
        <div className="row">
        <div className="col-sm-6" style={{display:"none", backgroundColor:"#e6fffa", padding:"10px", borderRadius:"3px"}} id="div_pelicula_updating">
            <form id="update_odontologo_form">
                <div className="form-group">
                    <label >Id:</label>
                    <input type="text" className="form-control" id="odontologo_id" />
                </div>
                <div className="form-group">
                    <label >Nombre:</label>
                    <input type="text" className="form-control" placeholder="nombre" id="nombre"/>
                </div>
                <div className="form-group">
                    <label >Apellido:</label>
                    <input type="text" className="form-control" placeholder="apellido" id="apellido"/>
                </div>
                <div className="form-group">
                    <label >Matrícula Número:</label>
                    <input type="text" className="form-control" placeholder="matricula" id="matricula"/>
                </div>
                <button type="submit" className="btn btn-primary">Modificar</button>
            </form>
            <div id="response" style={{display:"none", margin:"10px"}}></div>
        </div>
      </div>
    )
}