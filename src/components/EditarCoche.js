import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Global from "../Global";

export default class EditarCoche extends Component {
  state = {
    coche: {},
    statusGet: false,
    statusPut: false,
  };

  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  findCoche = () => {
    var request = "api/coches/findcoche/" + this.props.idcoche;
    var url = Global.apiCoches + request;

    axios.get(url).then((response) => {
      this.setState({
        coche: response.data,
        statusGet: true,
      });
    });
  };

  componentDidMount = () => {
    this.findCoche();
  };

  updateCoche = (e) => {
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
      imagen: imagen,
    };

    var request = "api/coches/updatecoche";
    var url = Global.apiCoches + request;

    axios.put(url, coche).then((response) => {
      this.setState({
        statusPut: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Editar Coche: {this.props.idcoche}</h1>
        {this.state.statusPut == true && (<Navigate to="/"/>)}
        {this.state.statusGet == true && (
          <form style={{ width: "500px", margin: "auto" }}>
            <label>ID: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaId}
              disabled
              defaultValue={this.state.coche.idCoche}
            />
            <br />
            <label>Marca: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaMarca}
              defaultValue={this.state.coche.marca}
            />
            <br />
            <label>Modelo: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaModelo}
              defaultValue={this.state.coche.modelo}
            />
            <br />
            <label>Conductor: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaConductor}
              defaultValue={this.state.coche.conductor}
            />
            <br />
            <label>Imagen: </label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              ref={this.cajaImagen}
              // defaultValue={this.state.coche.imagen}
            />
            <br />
            <button
              className="btn btn-outline-success"
              onClick={this.updateCoche}
            >
              Modificar
            </button>
          </form>
        )}
      </div>
    );
  }
}
