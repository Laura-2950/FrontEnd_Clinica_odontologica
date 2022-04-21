import React from "react";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

const initailForm = {
    username: "",
    password: "",
};

function Login() {
    const [form,setForm] = useState(initailForm);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate =useNavigate();

      const handleChange = (e) => {
          setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value );
        fetch('http://localhost:8080/register',{
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Basic ' + btoa(e.target[0].value + ':' + e.target[1].value)
          },
        }).then(res=>{
          if(res.ok){
            console.log(res);
            navigate("/home")
          }      
          
        }).catch(error=>{
          console.log(error);
          setError(error)
        })
        handleReset();
      };
    
      const handleReset = (e) => {
        setForm(initailForm);
      };
    return (
        <div>
            <h1>Login</h1>
            <p>Complete los siguientes campos del formulario para ingresar al sistema.</p>
            <form className="row g-3 m-5" onSubmit={handleSubmit}>
                <div className="col-md-4 m-1">
                    <label htmlFor="validationDefault01" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="validationDefault01" name="username" placeholder="user@mail.com" onChange={handleChange} value={form.username} required />
                </div>
                <div className="col-md-4 m-1">
                    <label htmlFor="validationDefault02" className="form-label">Password</label>
                    <input type="text" className="form-control" id="validationDefault02" name="password" placeholder="password" onChange={handleChange} value={form.password} required />
                </div>
                <div className="col-12">
                    <button className="btn btn-outline-primary m-5" type="submit">Iniciar Sesion</button>
                </div>
            </form>
        </div>
    );
}

export default Login;