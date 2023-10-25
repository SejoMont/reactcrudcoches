import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import loading from "../assets/images/Loading.gif";
import { NavLink } from "react-router-dom";

export default class HomeCoches extends Component {
  state = {
    coches: [],
    status: false,
  };

  loadCoches = () => {
    var request = "api/coches";
    var url = Global.apiCoches + request;

    axios.get(url).then((response) => {
      this.setState({
        coches: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadCoches();
  };

  render() {
    return (
      <div>
        <h1>Coches</h1>
        {this.state.status == true && (
          <table
            className="table table-striped text-center"
            style={{ width: "70%", margin: "auto" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Detalles</th>
                <th>Borrar</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {this.state.coches.map((coche, index) => {
                return (
                  <tr key={index}>
                    <td>{coche.idCoche}</td>
                    <td>{coche.marca}</td>
                    <td>{coche.modelo}</td>

                    <td>
                      <NavLink
                        to={"/detalles/" + coche.idCoche}
                        className="nav-link active"
                      >
                        📄
                      </NavLink>
                    </td>
                    <td>
                      <NavLink
                        to={"/borrar/" + coche.idCoche}
                        className="nav-link active"
                      >
                        🗑️
                      </NavLink>
                    </td>
                    <td>
                      <NavLink
                        to={"/editar/" + coche.idCoche}
                        className="nav-link active"
                      >
                        ✏️
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
