import React from "react";
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/turnos"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Odontológos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/alta_odontologo">
                                        Agregar Odontólogo
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/odontologos">
                                        Listado de Odontologos
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/turnos"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Pacientes
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/alta_paciente">
                                        Agregar Paciente
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/pacientes">
                                        Listado de Pacientes
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/turnos"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Turnos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="index.html">
                                        Agregar Turnos
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/turnos">
                                        Listado de Turnos
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
