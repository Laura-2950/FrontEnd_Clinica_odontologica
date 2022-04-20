import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './componente/home';
import OdontologoList from './componente/consulta-odontologos';
import OdontologoAlta from './componente/alta-odontologo';
import PacientesList from './componente/consulta-pacientes';
import PacienteAlta from './componente/alta-paciente';
import TurnosList from './componente/consulta-turnos';
import TurnoAlta from './componente/alta-turno';
import Navigation from './componente/nav';
import NotFound from './componente/pagina-error';
import Login from './componente/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/odontologos" element={<OdontologoList />}/>
        <Route path="/alta_odontologo" element={<OdontologoAlta />}/>
        <Route path="/pacientes" element={<PacientesList />}/>
        <Route path="/alta_paciente" element={<PacienteAlta />}/>
        <Route path="/turnos" element={<TurnosList />}/>
        <Route path="/alta_turno" element={<TurnoAlta />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
