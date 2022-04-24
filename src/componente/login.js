import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";


function Login() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate =useNavigate();

    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/authentication',{
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Basic ' + btoa( e.target[0].value + ':' + e.target[1].value)
          },
        }).then(res=>{
          if(res.ok){
            navigate("/home")
          }      
          
        }).catch(error=>{
          setError(error)
        })
      };

    return (
        <div>
            <h1>Login</h1>
            <p>Complete los siguientes campos del formulario para ingresar al sistema.</p>
            <form className="colum justify-content-center g-5 m-5" onSubmit={handleSubmit}>
                <div className="col-md-6 offset-md-3 ">
                    <label htmlFor="validationDefault01" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="validationDefault01" name="username" placeholder="user@email.com"  required />
                </div>
                <div className="col-md-6 offset-md-3 ">
                    <label htmlFor="validationDefault02" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationDefault02" name="password" placeholder="password"  required />
                </div>
                <div className="col-12">
                    <button className="btn btn-outline-primary m-5" type="submit">Iniciar Sesion</button>
                </div>
            </form>
        </div>
    );
}

export default Login;