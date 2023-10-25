import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

export default class BorrarCoche extends Component {
  state = {
    status: false,
  };

  alertaBorrar = () => {
    Swal.fire({
      title: "Estas seguro de querer borrarlo?",
      text: "No podrás revertir este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCoche();
      }else{
        this.setState({
          status: true
        })
      }
    });
  };

  deleteCoche = () => {
    var request = "api/coches/deletecoche/" + this.props.idcoche;
    var url = Global.apiCoches + request;

    axios.delete(url).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <NavLink to="/">&larr;Back to List</NavLink>
        {this.state.status == true && <Navigate to="/" />}
        <div className="text-center">
          <h1 style={{ color: "red" }}>Eliminar Coche: {this.props.idcoche}</h1>
          <button className="btn btn-outline-danger" onClick={this.alertaBorrar}>
            Borrar
          </button>
        </div>
      </div>
    );
  }
}
