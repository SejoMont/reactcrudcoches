import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class CrearCoche extends Component {
  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  state = {
    status: false,
  };

  insertCoche = (e) => {
    e.preventDefault();

    var id = parseInt(this.cajaId.current.value);
    var marca = this.cajaMarca.current.value;
    var modelo = this.cajaModelo.current.value;
    var conductor = this.cajaConductor.current.value;
    var imagen = this.cajaImagen.current.value;

    var coche = {
      idCoche: id,
      marca: marca,
      modelo: modelo,
      conductor: conductor,
      imagen: imagen
    };

    var request = "api/coches/insertcoche";
    var url = Global.apiCoches + request;

    axios.post(url, coche).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Crear Coche</h1>
        {this.state.status == true && <Navigate to="/" />}
        <form style={{ width: "500px", margin: "auto" }}>
          <label>ID: </label>
          <input type="number" className="form-control" ref={this.cajaId} />
          <br />
          <label>Marca: </label>
          <input type="text" className="form-control" ref={this.cajaMarca} />
          <br />
          <label>Modelo: </label>
          <input type="text" className="form-control" ref={this.cajaModelo} />
          <br />
          <label>Conductor: </label>
          <input
            type="text"
            className="form-control"
            ref={this.cajaConductor}
          />
          <br />
          <label>Imagen: </label>
          <input type="text" className="form-control" ref={this.cajaImagen} />
          <br />
          <button
            className="btn btn-outline-success"
            onClick={this.insertCoche}
          >
            Crear
          </button>
        </form>
      </div>
    );
  }
}
